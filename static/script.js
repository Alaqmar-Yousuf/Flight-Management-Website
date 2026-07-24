document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("flightSearchForm");
  const resultsContainer = document.getElementById("results-container");
  const ticketFormContainer = document.getElementById("ticket-form-container");
  const ticketForm = document.getElementById("ticketForm");
  const generatedTicket = document.getElementById("generated-ticket");

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
    searchForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const departure = document.getElementById("departure").value.trim();
      const destination = document.getElementById("destination").value.trim();

      if (!departure || !destination) {
        resultsContainer.innerHTML =
          '<p class="error">Please enter both departure and destination airports.</p>';
        return;
      }

      try {
        resultsContainer.innerHTML = `
                    <div class="loading">
                        <div class="spinner"></div>
                        <p>Searching for flights...</p>
                    </div>`;

        const response = await fetch(
          `/api/flights?departure=${encodeURIComponent(departure)}&destination=${encodeURIComponent(destination)}`,
        );
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.error || "Failed to fetch flights");
        }

        if (responseData.error) {
          throw new Error(responseData.error);
        }

        allFlights = responseData.api_response.data || [];

        if (allFlights.length === 0) {
          resultsContainer.innerHTML =
            '<p class="no-results">No flights found for this route.</p>';
          return;
        }

        // Add filters to the page
        resultsContainer.innerHTML =
          filterHTML + '<div id="filtered-results"></div>';
        const filteredResultsContainer =
          document.getElementById("filtered-results");

        // Add event listener for filter button
        document
          .getElementById("applyFilters")
          .addEventListener("click", function () {
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
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice =
      parseFloat(document.getElementById("maxPrice").value) || Infinity;
    const departureTime = document.getElementById("departureTime").value;
    const sortBy = document.getElementById("sortBy").value;
    const sortOrder = document.getElementById("sortOrder").value;

    let filtered = flights.filter((flight) => {
      const price = calculatePrice(flight);
      if (price < minPrice || price > maxPrice) return false;

      if (departureTime) {
        const hour = new Date(flight.departure.scheduled).getHours();
        switch (departureTime) {
          case "morning":
            return hour >= 6 && hour < 12;
          case "afternoon":
            return hour >= 12 && hour < 18;
          case "evening":
            return hour >= 18 && hour < 24;
          case "night":
            return hour >= 0 && hour < 6;
        }
      }

      return true;
    });

    // Sort flights
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "price":
          comparison = calculatePrice(a) - calculatePrice(b);
          break;
        case "duration":
          const durationA = getDuration(a);
          const durationB = getDuration(b);
          comparison = durationA - durationB;
          break;
        case "departure":
          comparison =
            new Date(a.departure.scheduled) - new Date(b.departure.scheduled);
          break;
      }
      return sortOrder === "desc" ? -comparison : comparison;
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
    flights.forEach((flight) => {
      const departureInfo = flight.departure || {};
      const arrivalInfo = flight.arrival || {};
      const airlineInfo = flight.airline || {};
      const flightInfo = flight.flight || {};

      const departureDelay = departureInfo.delay
        ? `<span class="delay">Delayed by ${departureInfo.delay} minutes</span>`
        : "";
      const arrivalDelay = arrivalInfo.delay
        ? `<span class="delay">Delayed by ${arrivalInfo.delay} minutes</span>`
        : "";

      const duration = getDuration(flight);
      const hours = Math.floor(duration / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

      html += `
                <div class="flight-card ${flight.flight_status ? flight.flight_status.toLowerCase() : "unknown"}">
                    <div class="flight-header">
                        <h3>Flight ${flightInfo.iata || "N/A"}</h3>
                        <span class="airline">${airlineInfo.name || "Unknown Airline"}</span>
                        <span class="status ${flight.flight_status ? flight.flight_status.toLowerCase() : "unknown"}">${flight.flight_status || "Unknown"}</span>
                    </div>
                    
                    <div class="flight-details">
                        <div class="departure-info">
                            <h4>Departure</h4>
                            <p class="airport">${departureInfo.airport || "N/A"}</p>
                            <p class="time">
                                <strong>Scheduled:</strong> ${formatDateTime(departureInfo.scheduled)}
                                ${departureInfo.estimated ? `<br><strong>Estimated:</strong> ${formatDateTime(departureInfo.estimated)}` : ""}
                            </p>
                            ${departureDelay}
                            ${departureInfo.terminal ? `<p><strong>Terminal:</strong> ${departureInfo.terminal}</p>` : ""}
                            ${departureInfo.gate ? `<p><strong>Gate:</strong> ${departureInfo.gate}</p>` : ""}
                        </div>
                        
                        <div class="arrival-info">
                            <h4>Arrival</h4>
                            <p class="airport">${arrivalInfo.airport || "N/A"}</p>
                            <p class="time">
                                <strong>Scheduled:</strong> ${formatDateTime(arrivalInfo.scheduled)}
                                ${arrivalInfo.estimated ? `<br><strong>Estimated:</strong> ${formatDateTime(arrivalInfo.estimated)}` : ""}
                            </p>
                            ${arrivalDelay}
                            ${arrivalInfo.terminal ? `<p><strong>Terminal:</strong> ${arrivalInfo.terminal}</p>` : ""}
                            ${arrivalInfo.gate ? `<p><strong>Gate:</strong> ${arrivalInfo.gate}</p>` : ""}
                        </div>
                    </div>
                    
                    <div class="flight-footer">
                        <p class="duration"><strong>Duration:</strong> ${hours}h ${minutes}m</p>
                        <p class="price"><strong>Price:</strong> $${calculatePrice(flight)}</p>
                        <button onclick="selectFlight(
                            '${flightInfo.iata || "N/A"}',
                            '${departureInfo.airport || "N/A"}',
                            '${arrivalInfo.airport || "N/A"}',
                            '${departureInfo.scheduled || "N/A"}',
                            ${calculatePrice(flight)},
                            '${flight.flight_status || "scheduled"}'
                        )" class="select-flight-btn">
                            Select Flight
                        </button>
                    </div>
                </div>
            `;
    });
    html += "</div>";
    container.innerHTML = html;
  }

  // Helper function to format date and time
  function formatDateTime(dateString) {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  // Helper function to calculate price based on flight data
  function calculatePrice(flight) {
    // Basic price calculation
    const basePrice = 200;
    const distance = flight.distance || 1000;
    const multiplier = flight.flight_status === "active" ? 1.2 : 1;
    return Math.round((basePrice + distance * 0.1) * multiplier);
  }

  let selectedSeat = null;
  let selectedSeatClass = "";
  let seatPriceAdjustment = 0;
  let basePrice = 0;
  let selectedFlightStatus = "";

  // Update the selectFlight function to support seat mapping, payment reset, map update, and timeline tracker
  window.selectFlight = function (
    flightNo,
    departure,
    destination,
    time,
    price,
    status
  ) {
    if (generatedTicket) {
      generatedTicket.classList.add("hidden");
    }

    selectedSeat = null;
    selectedSeatClass = "";
    seatPriceAdjustment = 0;
    basePrice = price;
    selectedFlightStatus = status || "scheduled";

    document.getElementById("ticket-flight-no").textContent = flightNo;
    document.getElementById("ticket-departure").textContent = departure;
    document.getElementById("ticket-destination").textContent = destination;
    document.getElementById("ticket-time").textContent = formatDateTime(time);
    document.getElementById("ticket-price").textContent = price;
    document.getElementById("ticket-seat-adj").textContent = "0";
    document.getElementById("ticket-total-price").textContent = price;
    document.getElementById("selected-seat-label").textContent = "None";

    // Update flight map route details
    document.getElementById("map-dep-code").textContent = departure;
    document.getElementById("map-arr-code").textContent = destination;
    document.getElementById("map-dep-name").textContent = departure + " Airport";
    document.getElementById("map-arr-name").textContent = destination + " Airport";

    // Restart SVG Plane flight animation
    const plane = document.getElementById("mapPlane");
    if (plane) {
      plane.style.animation = 'none';
      plane.offsetHeight; /* trigger reflow */
      plane.style.animation = null;
    }

    // Update flight status timeline on the details page
    updateTimeline("detailsTimeline", selectedFlightStatus);

    // Generate plane seat grid
    generateSeats();

    // Reset card UI & fields
    resetPaymentForm();

    ticketFormContainer.classList.remove("hidden");
    ticketFormContainer.scrollIntoView({ behavior: "smooth" });
  };

  // Generate seats grid inside the aircraft cabin layout
  function generateSeats() {
    const grid = document.getElementById("cabinSeatsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const rows = 12;
    const colLabels = ["A", "B", "C", "Aisle", "D", "E", "F"];

    for (let r = 1; r <= rows; r++) {
      let seatClass = "seat-economy";
      let priceAdj = 0;
      let className = "Economy Class";

      if (r <= 2) {
        seatClass = "seat-first";
        priceAdj = 150;
        className = "First Class";
      } else if (r <= 5) {
        seatClass = "seat-business";
        priceAdj = 50;
        className = "Business Class";
      }

      colLabels.forEach((col, idx) => {
        if (col === "Aisle") {
          const aisle = document.createElement("div");
          aisle.className = "aisle-space";
          grid.appendChild(aisle);
        } else {
          const seatId = `${r}${col}`;
          const seat = document.createElement("div");
          seat.className = `seat ${seatClass}`;
          seat.textContent = col;
          seat.setAttribute("data-seat-id", seatId);
          seat.setAttribute("title", `${seatId} - ${className} (+$${priceAdj})`);

          // 25% occupancy rate randomly
          const isOccupied = Math.random() < 0.25;
          if (isOccupied) {
            seat.classList.add("seat-occupied");
            seat.setAttribute("title", `${seatId} - Occupied`);
          } else {
            seat.addEventListener("click", function () {
              document.querySelectorAll(".cabin-seats .seat").forEach((s) => {
                s.classList.remove("selected");
              });
              seat.classList.add("selected");

              selectedSeat = seatId;
              selectedSeatClass = className;
              seatPriceAdjustment = priceAdj;

              document.getElementById("selected-seat-label").textContent = `${seatId} (${className})`;
              document.getElementById("ticket-seat-adj").textContent = priceAdj;
              document.getElementById("ticket-total-price").textContent = basePrice + priceAdj;
            });
          }
          grid.appendChild(seat);
        }
      });
    }
  }

  // Clear payment form fields and card visuals
  function resetPaymentForm() {
    const cardNum = document.getElementById("card-number");
    const cardHolder = document.getElementById("card-holder-name");
    const cardExpiry = document.getElementById("card-expiry");
    const cardCvv = document.getElementById("card-cvv");

    if (cardNum) cardNum.value = "";
    if (cardHolder) cardHolder.value = "";
    if (cardExpiry) cardExpiry.value = "";
    if (cardCvv) cardCvv.value = "";

    const cardNumDisp = document.getElementById("card-num-display");
    const cardNameDisp = document.getElementById("card-name-display");
    const cardExpDisp = document.getElementById("card-expiry-display");
    const cardCvvDisp = document.getElementById("card-cvv-display");
    const creditCard = document.getElementById("creditCard");

    if (cardNumDisp) cardNumDisp.textContent = "•••• •••• •••• ••••";
    if (cardNameDisp) cardNameDisp.textContent = "FULL NAME";
    if (cardExpDisp) cardExpDisp.textContent = "MM/YY";
    if (cardCvvDisp) cardCvvDisp.textContent = "•••";
    if (creditCard) creditCard.classList.remove("flipped");
  }

  // Bind credit card inputs to visual digital card elements
  const cardNumInput = document.getElementById("card-number");
  const cardHolderInput = document.getElementById("card-holder-name");
  const cardExpiryInput = document.getElementById("card-expiry");
  const cardCvvInput = document.getElementById("card-cvv");
  const creditCardEl = document.getElementById("creditCard");

  if (cardNumInput) {
    cardNumInput.addEventListener("input", function (e) {
      let val = e.target.value.replace(/\D/g, "");
      let formatted = val.match(/.{1,4}/g)?.join(" ") || "";
      e.target.value = formatted;
      document.getElementById("card-num-display").textContent = formatted || "•••• •••• •••• ••••";
    });
  }

  if (cardHolderInput) {
    cardHolderInput.addEventListener("input", function (e) {
      document.getElementById("card-name-display").textContent = e.target.value.toUpperCase() || "FULL NAME";
    });
  }

  if (cardExpiryInput) {
    cardExpiryInput.addEventListener("input", function (e) {
      let val = e.target.value.replace(/\D/g, "");
      if (val.length > 2) {
        val = val.substring(0, 2) + "/" + val.substring(2, 4);
      }
      e.target.value = val;
      document.getElementById("card-expiry-display").textContent = val || "MM/YY";
    });
  }

  if (cardCvvInput) {
    cardCvvInput.addEventListener("input", function (e) {
      let val = e.target.value.replace(/\D/g, "");
      e.target.value = val;
      document.getElementById("card-cvv-display").textContent = "•".repeat(val.length) || "•••";
    });

    cardCvvInput.addEventListener("focus", function () {
      if (creditCardEl) creditCardEl.classList.add("flipped");
    });

    cardCvvInput.addEventListener("blur", function () {
      if (creditCardEl) creditCardEl.classList.remove("flipped");
    });
  }

  // Handle pay & book form submission with visual loader simulator
  if (ticketForm) {
    ticketForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!selectedSeat) {
        alert("Please select an aircraft seat before completing your booking.");
        return;
      }

      const loader = document.getElementById("payment-loading");
      if (loader) {
        loader.classList.remove("hidden");
      }

      setTimeout(() => {
        if (loader) {
          loader.classList.add("hidden");
        }

        const passengerName = document.getElementById("passenger-name").value;
        document.getElementById("ticket-passenger-name").textContent = passengerName;
        document.getElementById("final-ticket-flight-no").textContent =
          document.getElementById("ticket-flight-no").textContent;
        document.getElementById("final-ticket-seat").textContent = `${selectedSeat} (${selectedSeatClass})`;
        document.getElementById("final-ticket-departure").textContent =
          document.getElementById("ticket-departure").textContent;
        document.getElementById("final-ticket-destination").textContent =
          document.getElementById("ticket-destination").textContent;
        document.getElementById("final-ticket-time").textContent =
          document.getElementById("ticket-time").textContent;
        document.getElementById("final-ticket-price").textContent =
          document.getElementById("ticket-total-price").textContent;

        // Render final ticket timeline progress
        updateTimeline("ticketTimeline", selectedFlightStatus);

        if (ticketFormContainer) {
          ticketFormContainer.classList.add("hidden");
        }
        if (generatedTicket) {
          generatedTicket.classList.remove("hidden");
          generatedTicket.scrollIntoView({ behavior: "smooth" });
        }
      }, 1800);
    });
  }

  // Helper function to update flight status timeline progress & steps
  function updateTimeline(timelinePrefix, status) {
    const container = document.getElementById(timelinePrefix);
    const progress = document.getElementById(timelinePrefix + "Progress");
    if (!container || !progress) return;

    const steps = container.querySelectorAll(".timeline-step");
    steps.forEach((s) => s.classList.remove("active", "completed"));

    let activeStep = 1;
    let progressWidth = "0%";

    const statusLower = (status || "").toLowerCase();
    if (statusLower === "active" || statusLower === "in-flight") {
      activeStep = 4;
      progressWidth = "75%";
    } else if (statusLower === "landed" || statusLower === "arrived") {
      activeStep = 5;
      progressWidth = "100%";
    } else if (statusLower === "boarding") {
      activeStep = 3;
      progressWidth = "50%";
    } else if (statusLower === "check-in" || statusLower === "check-in open") {
      activeStep = 2;
      progressWidth = "25%";
    } else {
      activeStep = 1;
      progressWidth = "0%";
    }

    steps.forEach((step) => {
      const stepNum = parseInt(step.getAttribute("data-step"));
      if (stepNum < activeStep) {
        step.classList.add("completed");
      } else if (stepNum === activeStep) {
        step.classList.add("active");
      }
    });

    if (window.innerWidth <= 600) {
      progress.style.height = progressWidth;
      progress.style.width = "100%";
    } else {
      progress.style.width = progressWidth;
      progress.style.height = "100%";
    }
  }

  // Bind 3D Card Hover Parallax Effect on the final Boarding Pass
  const ticketCard = document.querySelector(".ticket-card");
  if (ticketCard) {
    ticketCard.addEventListener("mousemove", function (e) {
      const rect = ticketCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const rotateX = -(yc - y) / 18;
      const rotateY = (xc - x) / 28;
      ticketCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    ticketCard.addEventListener("mouseleave", function () {
      ticketCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      ticketCard.style.transition = "all 0.5s ease";
    });

    ticketCard.addEventListener("mouseenter", function () {
      ticketCard.style.transition = "none";
    });
  }
});
