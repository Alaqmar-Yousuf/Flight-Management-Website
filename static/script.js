document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('flightSearchForm');
    const resultsContainer = document.getElementById('results-container');
    const ticketFormContainer = document.getElementById('ticket-form-container');
    const ticketForm = document.getElementById('ticketForm');
    const generatedTicket = document.getElementById('generated-ticket');

    // Add filter controls
    const filterHTML = `
        <div class="filters-container">
            <div class="filter-group">
                <label>Price Range:</label>
                <input type="number" id="minPrice" placeholder="Min Price" min="0">
                <input type="number" id="maxPrice" placeholder="Max Price" min="0">
            </div>
            <div class="filter-group">
                <label>Departure Time:</label>
                <select id="departureTime">
                    <option value="">Any Time</option>
                    <option value="morning">Morning (6 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                    <option value="evening">Evening (6 PM - 12 AM)</option>
                    <option value="night">Night (12 AM - 6 AM)</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Sort By:</label>
                <select id="sortBy">
                    <option value="price">Price</option>
                    <option value="duration">Duration</option>
                    <option value="departure">Departure Time</option>
                </select>
                <select id="sortOrder">
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <button id="applyFilters" class="filter-btn">Apply Filters</button>
        </div>
    `;

    // Store all flights globally
    let allFlights = [];

    if (searchForm) {
        searchForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const departure = document.getElementById('departure').value.trim();
            const destination = document.getElementById('destination').value.trim();
            
            if (!departure || !destination) {
                resultsContainer.innerHTML = '<p class="error">Please enter both departure and destination airports.</p>';
                return;
            }
            
            try {
                resultsContainer.innerHTML = `
                    <div class="loading">
                        <div class="spinner"></div>
                        <p>Searching for flights...</p>
                    </div>`;
                
                const response = await fetch(`/api/flights?departure=${encodeURIComponent(departure)}&destination=${encodeURIComponent(destination)}`);
                const responseData = await response.json();
                
                if (!response.ok) {
                    throw new Error(responseData.error || 'Failed to fetch flights');
                }
                
                if (responseData.error) {
                    throw new Error(responseData.error);
                }

                allFlights = responseData.api_response.data || [];
                
                if (allFlights.length === 0) {
                    resultsContainer.innerHTML = '<p class="no-results">No flights found for this route.</p>';
                    return;
                }

                // Add filters to the page
                resultsContainer.innerHTML = filterHTML + '<div id="filtered-results"></div>';
                const filteredResultsContainer = document.getElementById('filtered-results');
                
                // Add event listener for filter button
                document.getElementById('applyFilters').addEventListener('click', function() {
                    const filteredFlights = filterFlights(allFlights);
                    displayFlights(filteredFlights, filteredResultsContainer);
                });

                // Initial display of all flights
                displayFlights(allFlights, filteredResultsContainer);
                
            } catch (error) {
                resultsContainer.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-circle"></i>
                        <p>${error.message}</p>
                        <button onclick="location.reload()" class="retry-btn">Try Again</button>
                    </div>`;
            }
        });
    }

    function filterFlights(flights) {
        const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
        const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
        const departureTime = document.getElementById('departureTime').value;
        const sortBy = document.getElementById('sortBy').value;
        const sortOrder = document.getElementById('sortOrder').value;

        let filtered = flights.filter(flight => {
            const price = calculatePrice(flight);
            if (price < minPrice || price > maxPrice) return false;

            if (departureTime) {
                const hour = new Date(flight.departure.scheduled).getHours();
                switch (departureTime) {
                    case 'morning': return hour >= 6 && hour < 12;
                    case 'afternoon': return hour >= 12 && hour < 18;
                    case 'evening': return hour >= 18 && hour < 24;
                    case 'night': return hour >= 0 && hour < 6;
                }
            }

            return true;
        });

        // Sort flights
        filtered.sort((a, b) => {
            let comparison = 0;
            switch (sortBy) {
                case 'price':
                    comparison = calculatePrice(a) - calculatePrice(b);
                    break;
                case 'duration':
                    const durationA = getDuration(a);
                    const durationB = getDuration(b);
                    comparison = durationA - durationB;
                    break;
                case 'departure':
                    comparison = new Date(a.departure.scheduled) - new Date(b.departure.scheduled);
                    break;
            }
            return sortOrder === 'desc' ? -comparison : comparison;
        });

        return filtered;
    }

    function getDuration(flight) {
        const departure = new Date(flight.departure.scheduled);
        const arrival = new Date(flight.arrival.scheduled);
        return arrival - departure;
    }

    function displayFlights(flights, container) {
        let html = '<div class="flight-results">';
        flights.forEach(flight => {
            const departureInfo = flight.departure || {};
            const arrivalInfo = flight.arrival || {};
            const airlineInfo = flight.airline || {};
            const flightInfo = flight.flight || {};
            
            const departureDelay = departureInfo.delay ? `<span class="delay">Delayed by ${departureInfo.delay} minutes</span>` : '';
            const arrivalDelay = arrivalInfo.delay ? `<span class="delay">Delayed by ${arrivalInfo.delay} minutes</span>` : '';
            
            const duration = getDuration(flight);
            const hours = Math.floor(duration / (1000 * 60 * 60));
            const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            
            html += `
                <div class="flight-card ${flight.flight_status ? flight.flight_status.toLowerCase() : 'unknown'}">
                    <div class="flight-header">
                        <h3>Flight ${flightInfo.iata || 'N/A'}</h3>
                        <span class="airline">${airlineInfo.name || 'Unknown Airline'}</span>
                        <span class="status ${flight.flight_status ? flight.flight_status.toLowerCase() : 'unknown'}">${flight.flight_status || 'Unknown'}</span>
                    </div>
                    
                    <div class="flight-details">
                        <div class="departure-info">
                            <h4>Departure</h4>
                            <p class="airport">${departureInfo.airport || 'N/A'}</p>
                            <p class="time">
                                <strong>Scheduled:</strong> ${formatDateTime(departureInfo.scheduled)}
                                ${departureInfo.estimated ? `<br><strong>Estimated:</strong> ${formatDateTime(departureInfo.estimated)}` : ''}
                            </p>
                            ${departureDelay}
                            ${departureInfo.terminal ? `<p><strong>Terminal:</strong> ${departureInfo.terminal}</p>` : ''}
                            ${departureInfo.gate ? `<p><strong>Gate:</strong> ${departureInfo.gate}</p>` : ''}
                        </div>
                        
                        <div class="arrival-info">
                            <h4>Arrival</h4>
                            <p class="airport">${arrivalInfo.airport || 'N/A'}</p>
                            <p class="time">
                                <strong>Scheduled:</strong> ${formatDateTime(arrivalInfo.scheduled)}
                                ${arrivalInfo.estimated ? `<br><strong>Estimated:</strong> ${formatDateTime(arrivalInfo.estimated)}` : ''}
                            </p>
                            ${arrivalDelay}
                            ${arrivalInfo.terminal ? `<p><strong>Terminal:</strong> ${arrivalInfo.terminal}</p>` : ''}
                            ${arrivalInfo.gate ? `<p><strong>Gate:</strong> ${arrivalInfo.gate}</p>` : ''}
                        </div>
                    </div>
                    
                    <div class="flight-footer">
                        <p class="duration"><strong>Duration:</strong> ${hours}h ${minutes}m</p>
                        <p class="price"><strong>Price:</strong> $${calculatePrice(flight)}</p>
                        <button onclick="selectFlight(
                            '${flightInfo.iata || 'N/A'}',
                            '${departureInfo.airport || 'N/A'}',
                            '${arrivalInfo.airport || 'N/A'}',
                            '${departureInfo.scheduled || 'N/A'}',
                            ${calculatePrice(flight)}
                        )" class="select-flight-btn">
                            Select Flight
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }

    // Helper function to format date and time
    function formatDateTime(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    // Helper function to calculate price based on flight data
    function calculatePrice(flight) {
        // Basic price calculation
        const basePrice = 200;
        const distance = flight.distance || 1000;
        const multiplier = flight.flight_status === 'active' ? 1.2 : 1;
        return Math.round((basePrice + (distance * 0.1)) * multiplier);
    }

    // Update the selectFlight function to remove weather
    window.selectFlight = function(flightNo, departure, destination, time, price) {
        document.getElementById('ticket-flight-no').textContent = flightNo;
        document.getElementById('ticket-departure').textContent = departure;
        document.getElementById('ticket-destination').textContent = destination;
        document.getElementById('ticket-time').textContent = formatDateTime(time);
        document.getElementById('ticket-price').textContent = price;
        
        ticketFormContainer.classList.remove('hidden');
        ticketFormContainer.scrollIntoView({ behavior: 'smooth' });
    };

    if (ticketForm) {
        ticketForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const passengerName = document.getElementById('passenger-name').value;
            document.getElementById('ticket-passenger-name').textContent = passengerName;
            document.getElementById('final-ticket-flight-no').textContent = document.getElementById('ticket-flight-no').textContent;
            document.getElementById('final-ticket-departure').textContent = document.getElementById('ticket-departure').textContent;
            document.getElementById('final-ticket-destination').textContent = document.getElementById('ticket-destination').textContent;
            document.getElementById('final-ticket-time').textContent = document.getElementById('ticket-time').textContent;
            document.getElementById('final-ticket-price').textContent = document.getElementById('ticket-price').textContent;
            
            generatedTicket.classList.remove('hidden');
            generatedTicket.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
  