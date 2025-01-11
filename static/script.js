const flights = [
  // Flights from Pakistan to various countries
  
  // Flights to Europe
  {
    flight_no: "FL12001",
    departure: "Pakistan",
    destination: "Germany",
    time: "05:30 AM",
    price: 650,
    },
    {
    flight_no: "FL12002",
    departure: "PK",
    destination: "DE",
    time: "01:00 PM",
    price: 700,
    },
    {
    flight_no: "FL12003",
    departure: "Pakistan",
    destination: "Germany",
    time: "08:45 PM",
    price: 750,
    },
    
    {
    flight_no: "FL13001",
    departure: "Pakistan",
    destination: "France",
    time: "06:45 AM",
    price: 690,
    },
    {
    flight_no: "FL13002",
    departure: "PK",
    destination: "FR",
    time: "02:15 PM",
    price: 740,
    },
    {
    flight_no: "FL13003",
    departure: "Pakistan",
    destination: "France",
    time: "09:30 PM",
    price: 800,
    },
    
    {
    flight_no: "FL14001",
    departure: "Pakistan",
    destination: "Italy",
    time: "07:00 AM",
    price: 620,
    },
    {
    flight_no: "FL14002",
    departure: "PK",
    destination: "IT",
    time: "12:30 PM",
    price: 670,
    },
    {
    flight_no: "FL14003",
    departure: "Pakistan",
    destination: "Italy",
    time: "06:45 PM",
    price: 720,
    },
    
    // Flights to Africa
    {
    flight_no: "FL15001",
    departure: "Pakistan",
    destination: "South Africa",
    time: "03:30 AM",
    price: 900,
    },
    {
    flight_no: "FL15002",
    departure: "PK",
    destination: "ZA",
    time: "12:00 PM",
    price: 950,
    },
    {
    flight_no: "FL15003",
    departure: "Pakistan",
    destination: "South Africa",
    time: "09:00 PM",
    price: 1000,
    },
    
    {
    flight_no: "FL16001",
    departure: "Pakistan",
    destination: "Egypt",
    time: "06:30 AM",
    price: 520,
    },
    {
    flight_no: "FL16002",
    departure: "PK",
    destination: "EG",
    time: "01:30 PM",
    price: 550,
    },
    {
    flight_no: "FL16003",
    departure: "Pakistan",
    destination: "Egypt",
    time: "07:00 PM",
    price: 580,
    },
    
    // Flights to Southeast Asia
    {
    flight_no: "FL17001",
    departure: "Pakistan",
    destination: "Thailand",
    time: "04:00 AM",
    price: 330,
    },
    {
    flight_no: "FL17002",
    departure: "PK",
    destination: "TH",
    time: "12:45 PM",
    price: 350,
    },
    {
    flight_no: "FL17003",
    departure: "Pakistan",
    destination: "Thailand",
    time: "08:00 PM",
    price: 380,
    },
    
    {
    flight_no: "FL18001",
    departure: "Pakistan",
    destination: "Singapore",
    time: "07:30 AM",
    price: 390,
    },
    {
    flight_no: "FL18002",
    departure: "PK",
    destination: "SG",
    time: "03:30 PM",
    price: 410,
    },
    {
    flight_no: "FL18003",
    departure: "Pakistan",
    destination: "Singapore",
    time: "10:30 PM",
    price: 430,
    },
    
    // Flights to Oceania
    {
    flight_no: "FL19001",
    departure: "Pakistan",
    destination: "Australia",
    time: "05:30 AM",
    price: 850,
    },
    {
    flight_no: "FL19002",
    departure: "PK",
    destination: "AU",
    time: "02:00 PM",
    price: 900,
    },
    {
    flight_no: "FL19003",
    departure: "Pakistan",
    destination: "Australia",
    time: "10:00 PM",
    price: 950,
    },
    
    {
    flight_no: "FL20001",
    departure: "Pakistan",
    destination: "New Zealand",
    time: "06:15 AM",
    price: 1100,
    },
    {
    flight_no: "FL20002",
    departure: "PK",
    destination: "NZ",
    time: "01:45 PM",
    price: 1150,
    },
    {
    flight_no: "FL20003",
    departure: "Pakistan",
    destination: "New Zealand",
    time: "08:45 PM",
    price: 1200,
    },
    
    // Flights to the Americas
    {
    flight_no: "FL21001",
    departure: "Pakistan",
    destination: "Brazil",
    time: "04:30 AM",
    price: 1200,
    },
    {
    flight_no: "FL21002",
    departure: "PK",
    destination: "BR",
    time: "02:30 PM",
    price: 1250,
    },
    {
    flight_no: "FL21003",
    departure: "Pakistan",
    destination: "Brazil",
    time: "10:00 PM",
    price: 1300,
    },
    
    {
    flight_no: "FL22001",
    departure: "Pakistan",
    destination: "Mexico",
    time: "05:00 AM",
    price: 950,
    },
    {
    flight_no: "FL22002",
    departure: "PK",
    destination: "MX",
    time: "01:00 PM",
    price: 1000,
    },
    {
    flight_no: "FL22003",
    departure: "Pakistan",
    destination: "Mexico",
    time: "08:30 PM",
    price: 1050,
    },
    
    {
    flight_no: "FL23001",
    departure: "Pakistan",
    destination: "Argentina",
    time: "03:30 AM",
    price: 1400,
    },
    {
    flight_no: "FL23002",
    departure: "PK",
    destination: "AR",
    time: "01:15 PM",
    price: 1450,
    },
    {
    flight_no: "FL23003",
    departure: "Pakistan",
    destination: "Argentina",
    time: "08:45 PM",
    price: 1500,
    },
    
    // Flights to Central Asia and Russia
    {
    flight_no: "FL24001",
    departure: "Pakistan",
    destination: "Russia",
    time: "06:00 AM",
    price: 450,
    },
    {
    flight_no: "FL24002",
    departure: "PK",
    destination: "RU",
    time: "02:00 PM",
    price: 480,
    },
    {
    flight_no: "FL24003",
    departure: "Pakistan",
    destination: "Russia",
    time: "10:30 PM",
    price: 500,
    },
    
    {
    flight_no: "FL25001",
    departure: "Pakistan",
    destination: "Kazakhstan",
    time: "07:30 AM",
    price: 380,
    },
    {
    flight_no: "FL25002",
    departure: "PK",
    destination: "KZ",
    time: "03:15 PM",
    price: 400,
    },
    {
    flight_no: "FL25003",
    departure: "Pakistan",
    destination: "Kazakhstan",
    time: "11:00 PM",
    price: 420,
    },
    
    {
    flight_no: "FL1001",
    departure: "Pakistan",
    destination: "United States",
    time: "06:00 AM",
    price: 800,
    },
    {
    flight_no: "FL1002",
    departure: "PK",
    destination: "US",
    time: "03:00 PM",
    price: 850,
    },
    {
    flight_no: "FL1003",
    departure: "Pakistan",
    destination: "United States",
    time: "10:00 PM",
    price: 900,
    },
    
    {
    flight_no: "FL2001",
    departure: "Pakistan",
    destination: "United Kingdom",
    time: "07:00 AM",
    price: 650,
    },
    {
    flight_no: "FL2002",
    departure: "PK",
    destination: "GB",
    time: "02:30 PM",
    price: 700,
    },
    {
    flight_no: "FL2003",
    departure: "Pakistan",
    destination: "United Kingdom",
    time: "09:15 PM",
    price: 750,
    },
    
    {
    flight_no: "FL3001",
    departure: "Pakistan",
    destination: "Saudi Arabia",
    time: "04:00 AM",
    price: 150,
    },
    {
    flight_no: "FL3002",
    departure: "PK",
    destination: "SA",
    time: "12:00 PM",
    price: 170,
    },
    {
    flight_no: "FL3003",
    departure: "Pakistan",
    destination: "Saudi Arabia",
    time: "07:30 PM",
    price: 180,
    },
    
    {
    flight_no: "FL4001",
    departure: "Pakistan",
    destination: "United Arab Emirates",
    time: "08:30 AM",
    price: 220,
    },
    {
    flight_no: "FL4002",
    departure: "PK",
    destination: "AE",
    time: "03:30 PM",
    price: 230,
    },
    {
    flight_no: "FL4003",
    departure: "Pakistan",
    destination: "United Arab Emirates",
    time: "11:00 PM",
    price: 240,
    },
    
    {
    flight_no: "FL5001",
    departure: "Pakistan",
    destination: "Qatar",
    time: "06:30 AM",
    price: 210,
    },
    {
    flight_no: "FL5002",
    departure: "PK",
    destination: "QA",
    time: "02:00 PM",
    price: 220,
    },
    {
    flight_no: "FL5003",
    departure: "Pakistan",
    destination: "Qatar",
    time: "09:30 PM",
    price: 230,
    },
    
    {
    flight_no: "FL6001",
    departure: "Pakistan",
    destination: "China",
    time: "07:00 AM",
    price: 350,
    },
    {
    flight_no: "FL6002",
    departure: "PK",
    destination: "CN",
    time: "01:30 PM",
    price: 360,
    },
    {
    flight_no: "FL6003",
    departure: "Pakistan",
    destination: "China",
    time: "08:00 PM",
    price: 370,
    },
    
    {
    flight_no: "FL7001",
    departure: "Pakistan",
    destination: "Turkey",
    time: "05:00 AM",
    price: 400,
    },
    {
    flight_no: "FL7002",
    departure: "PK",
    destination: "TR",
    time: "12:15 PM",
    price: 420,
    },
    {
    flight_no: "FL7003",
    departure: "Pakistan",
    destination: "Turkey",
    time: "08:45 PM",
    price: 430,
    },
    
    {
    flight_no: "FL8001",
    departure: "Pakistan",
    destination: "Sri Lanka",
    time: "09:00 AM",
    price: 180,
    },
    {
    flight_no: "FL8002",
    departure: "PK",
    destination: "LK",
    time: "02:30 PM",
    price: 190,
    },
    {
    flight_no: "FL8003",
    departure: "Pakistan",
    destination: "Sri Lanka",
    time: "07:30 PM",
    price: 200,
    },
    
    {
    flight_no: "FL9001",
    departure: "Pakistan",
    destination: "Malaysia",
    time: "04:30 AM",
    price: 250,
    },
    {
    flight_no: "FL9002",
    departure: "PK",
    destination: "MY",
    time: "01:15 PM",
    price: 260,
    },
    {
    flight_no: "FL9003",
    departure: "Pakistan",
    destination: "Malaysia",
    time: "10:00 PM",
    price: 270,
    },
    
    {
    flight_no: "FL10001",
    departure: "Pakistan",
    destination: "Bangladesh",
    time: "07:15 AM",
    price: 160,
    },
    {
    flight_no: "FL10002",
    departure: "PK",
    destination: "BD",
    time: "12:00 PM",
    price: 170,
    },
    {
    flight_no: "FL10003",
    departure: "Pakistan",
    destination: "Bangladesh",
    time: "09:30 PM",
    price: 180,
    },
    
    {
    flight_no: "FL11001",
    departure: "Pakistan",
    destination: "Nepal",
    time: "06:00 AM",
    price: 140,
    },
    {
    flight_no: "FL11002",
    departure: "PK",
    destination: "NP",
    time: "02:45 PM",
    price: 150,
    },
    {
    flight_no: "FL11003",
    departure: "Pakistan",
    destination: "Nepal",
    time: "07:15 PM",
    price: 160,
    },
    
      // Flights from the UK to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "United Kingdom",
        destination: "Germany",
        time: "06:00 AM",
        price: 150,
      },
      {
        flight_no: "FL12002",
        departure: "UK",
        destination: "DE",
        time: "02:30 PM",
        price: 180,
      },
      {
        flight_no: "FL12003",
        departure: "United Kingdom",
        destination: "Germany",
        time: "08:45 PM",
        price: 200,
      },
    
      {
        flight_no: "FL13001",
        departure: "United Kingdom",
        destination: "France",
        time: "07:00 AM",
        price: 160,
      },
      {
        flight_no: "FL13002",
        departure: "UK",
        destination: "FR",
        time: "12:30 PM",
        price: 170,
      },
      {
        flight_no: "FL13003",
        departure: "United Kingdom",
        destination: "France",
        time: "09:00 PM",
        price: 190,
      },
    
      {
        flight_no: "FL14001",
        departure: "United Kingdom",
        destination: "Italy",
        time: "07:30 AM",
        price: 180,
      },
      {
        flight_no: "FL14002",
        departure: "UK",
        destination: "IT",
        time: "01:00 PM",
        price: 210,
      },
      {
        flight_no: "FL14003",
        departure: "United Kingdom",
        destination: "Italy",
        time: "06:30 PM",
        price: 220,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "United Kingdom",
        destination: "United States",
        time: "04:00 AM",
        price: 550,
      },
      {
        flight_no: "FL15002",
        departure: "UK",
        destination: "US",
        time: "12:30 PM",
        price: 600,
      },
      {
        flight_no: "FL15003",
        departure: "United Kingdom",
        destination: "United States",
        time: "09:00 PM",
        price: 650,
      },
    
      {
        flight_no: "FL16001",
        departure: "United Kingdom",
        destination: "Canada",
        time: "06:30 AM",
        price: 400,
      },
      {
        flight_no: "FL16002",
        departure: "UK",
        destination: "CA",
        time: "03:00 PM",
        price: 450,
      },
      {
        flight_no: "FL16003",
        departure: "United Kingdom",
        destination: "Canada",
        time: "10:30 PM",
        price: 480,
      },
    
      // Flights to Middle East
      {
        flight_no: "FL17001",
        departure: "United Kingdom",
        destination: "United Arab Emirates",
        time: "05:30 AM",
        price: 350,
      },
      {
        flight_no: "FL17002",
        departure: "UK",
        destination: "AE",
        time: "02:00 PM",
        price: 380,
      },
      {
        flight_no: "FL17003",
        departure: "United Kingdom",
        destination: "UAE",
        time: "09:30 PM",
        price: 400,
      },
    
      {
        flight_no: "FL18001",
        departure: "United Kingdom",
        destination: "Qatar",
        time: "07:15 AM",
        price: 320,
      },
      {
        flight_no: "FL18002",
        departure: "UK",
        destination: "QA",
        time: "01:45 PM",
        price: 340,
      },
      {
        flight_no: "FL18003",
        departure: "United Kingdom",
        destination: "Qatar",
        time: "08:00 PM",
        price: 360,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "United Kingdom",
        destination: "India",
        time: "08:00 AM",
        price: 400,
      },
      {
        flight_no: "FL19002",
        departure: "UK",
        destination: "IN",
        time: "02:30 PM",
        price: 430,
      },
      {
        flight_no: "FL19003",
        departure: "United Kingdom",
        destination: "India",
        time: "09:30 PM",
        price: 460,
      },
    
      {
        flight_no: "FL20001",
        departure: "United Kingdom",
        destination: "China",
        time: "05:45 AM",
        price: 600,
      },
      {
        flight_no: "FL20002",
        departure: "UK",
        destination: "CN",
        time: "03:15 PM",
        price: 630,
      },
      {
        flight_no: "FL20003",
        departure: "United Kingdom",
        destination: "China",
        time: "10:00 PM",
        price: 650,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "United Kingdom",
        destination: "South Africa",
        time: "04:30 AM",
        price: 500,
      },
      {
        flight_no: "FL21002",
        departure: "UK",
        destination: "ZA",
        time: "12:30 PM",
        price: 530,
      },
      {
        flight_no: "FL21003",
        departure: "United Kingdom",
        destination: "South Africa",
        time: "09:15 PM",
        price: 550,
      },
    
      {
        flight_no: "FL22001",
        departure: "United Kingdom",
        destination: "Egypt",
        time: "06:30 AM",
        price: 420,
      },
      {
        flight_no: "FL22002",
        departure: "UK",
        destination: "EG",
        time: "02:00 PM",
        price: 450,
      },
      {
        flight_no: "FL22003",
        departure: "United Kingdom",
        destination: "Egypt",
        time: "08:30 PM",
        price: 470,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "United Kingdom",
        destination: "Australia",
        time: "07:30 AM",
        price: 750,
      },
      {
        flight_no: "FL23002",
        departure: "UK",
        destination: "AU",
        time: "03:00 PM",
        price: 780,
      },
      {
        flight_no: "FL23003",
        departure: "United Kingdom",
        destination: "Australia",
        time: "10:30 PM",
        price: 800,
      },
    
      {
        flight_no: "FL24001",
        departure: "United Kingdom",
        destination: "New Zealand",
        time: "06:15 AM",
        price: 1000,
      },
      {
        flight_no: "FL24002",
        departure: "UK",
        destination: "NZ",
        time: "01:45 PM",
        price: 1050,
      },
      {
        flight_no: "FL24003",
        departure: "United Kingdom",
        destination: "New Zealand",
        time: "09:30 PM",
        price: 1100,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "United Kingdom",
        destination: "Brazil",
        time: "04:00 AM",
        price: 900,
      },
      {
        flight_no: "FL25002",
        departure: "UK",
        destination: "BR",
        time: "02:00 PM",
        price: 950,
      },
      {
        flight_no: "FL25003",
        departure: "United Kingdom",
        destination: "Brazil",
        time: "09:00 PM",
        price: 1000,
      },
    
      {
        flight_no: "FL26001",
        departure: "United Kingdom",
        destination: "Mexico",
        time: "06:00 AM",
        price: 750,
      },
      {
        flight_no: "FL26002",
        departure: "UK",
        destination: "MX",
        time: "03:15 PM",
        price: 780,
      },
      {
        flight_no: "FL26003",
        departure: "United Kingdom",
        destination: "Mexico",
        time: "10:30 PM",
        price: 800,
      },
    
      {
        flight_no: "FL27001",
        departure: "United Kingdom",
        destination: "Argentina",
        time: "04:30 AM",
        price: 1100,
      },
      {
        flight_no: "FL27002",
        departure: "UK",
        destination: "AR",
        time: "01:30 PM",
        price: 1150,
      },
      {
        flight_no: "FL27003",
        departure: "United Kingdom",
        destination: "Argentina",
        time: "08:30 PM",
        price: 1200,
      },
    
       // Flights from the US to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "United States",
        destination: "Germany",
        time: "06:00 AM",
        price: 600,
      },
      {
        flight_no: "FL12002",
        departure: "US",
        destination: "DE",
        time: "02:00 PM",
        price: 650,
      },
      {
        flight_no: "FL12003",
        departure: "United States",
        destination: "Germany",
        time: "09:30 PM",
        price: 700,
      },
    
      {
        flight_no: "FL13001",
        departure: "United States",
        destination: "France",
        time: "07:00 AM",
        price: 650,
      },
      {
        flight_no: "FL13002",
        departure: "US",
        destination: "FR",
        time: "12:30 PM",
        price: 700,
      },
      {
        flight_no: "FL13003",
        departure: "United States",
        destination: "France",
        time: "09:15 PM",
        price: 750,
      },
    
      {
        flight_no: "FL14001",
        departure: "United States",
        destination: "Italy",
        time: "08:00 AM",
        price: 700,
      },
      {
        flight_no: "FL14002",
        departure: "US",
        destination: "IT",
        time: "02:15 PM",
        price: 750,
      },
      {
        flight_no: "FL14003",
        departure: "United States",
        destination: "Italy",
        time: "09:00 PM",
        price: 800,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "United States",
        destination: "Canada",
        time: "05:30 AM",
        price: 400,
      },
      {
        flight_no: "FL15002",
        departure: "US",
        destination: "CA",
        time: "12:30 PM",
        price: 450,
      },
      {
        flight_no: "FL15003",
        departure: "United States",
        destination: "Canada",
        time: "08:00 PM",
        price: 500,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL16001",
        departure: "United States",
        destination: "United Arab Emirates",
        time: "06:15 AM",
        price: 800,
      },
      {
        flight_no: "FL16002",
        departure: "US",
        destination: "AE",
        time: "02:00 PM",
        price: 850,
      },
      {
        flight_no: "FL16003",
        departure: "United States",
        destination: "UAE",
        time: "10:00 PM",
        price: 900,
      },
    
      {
        flight_no: "FL17001",
        departure: "United States",
        destination: "Qatar",
        time: "07:45 AM",
        price: 750,
      },
      {
        flight_no: "FL17002",
        departure: "US",
        destination: "QA",
        time: "02:30 PM",
        price: 800,
      },
      {
        flight_no: "FL17003",
        departure: "United States",
        destination: "Qatar",
        time: "09:45 PM",
        price: 850,
      },
    
      // Flights to Asia
      {
        flight_no: "FL18001",
        departure: "United States",
        destination: "India",
        time: "08:30 AM",
        price: 750,
      },
      {
        flight_no: "FL18002",
        departure: "US",
        destination: "IN",
        time: "03:15 PM",
        price: 800,
      },
      {
        flight_no: "FL18003",
        departure: "United States",
        destination: "India",
        time: "11:00 PM",
        price: 850,
      },
    
      {
        flight_no: "FL19001",
        departure: "United States",
        destination: "China",
        time: "06:30 AM",
        price: 850,
      },
      {
        flight_no: "FL19002",
        departure: "US",
        destination: "CN",
        time: "02:30 PM",
        price: 900,
      },
      {
        flight_no: "FL19003",
        departure: "United States",
        destination: "China",
        time: "09:30 PM",
        price: 950,
      },
    
      // Flights to Africa
      {
        flight_no: "FL20001",
        departure: "United States",
        destination: "South Africa",
        time: "05:00 AM",
        price: 950,
      },
      {
        flight_no: "FL20002",
        departure: "US",
        destination: "ZA",
        time: "12:00 PM",
        price: 1000,
      },
      {
        flight_no: "FL20003",
        departure: "United States",
        destination: "South Africa",
        time: "08:00 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL21001",
        departure: "United States",
        destination: "Egypt",
        time: "07:00 AM",
        price: 700,
      },
      {
        flight_no: "FL21002",
        departure: "US",
        destination: "EG",
        time: "03:15 PM",
        price: 750,
      },
      {
        flight_no: "FL21003",
        departure: "United States",
        destination: "Egypt",
        time: "10:30 PM",
        price: 800,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL22001",
        departure: "United States",
        destination: "Australia",
        time: "06:00 AM",
        price: 950,
      },
      {
        flight_no: "FL22002",
        departure: "US",
        destination: "AU",
        time: "02:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL22003",
        departure: "United States",
        destination: "Australia",
        time: "09:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL23001",
        departure: "United States",
        destination: "New Zealand",
        time: "07:00 AM",
        price: 1200,
      },
      {
        flight_no: "FL23002",
        departure: "US",
        destination: "NZ",
        time: "03:00 PM",
        price: 1250,
      },
      {
        flight_no: "FL23003",
        departure: "United States",
        destination: "New Zealand",
        time: "10:00 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL24001",
        departure: "United States",
        destination: "Brazil",
        time: "08:30 AM",
        price: 1100,
      },
      {
        flight_no: "FL24002",
        departure: "US",
        destination: "BR",
        time: "02:30 PM",
        price: 1150,
      },
      {
        flight_no: "FL24003",
        departure: "United States",
        destination: "Brazil",
        time: "09:00 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL25001",
        departure: "United States",
        destination: "Mexico",
        time: "06:30 AM",
        price: 650,
      },
      {
        flight_no: "FL25002",
        departure: "US",
        destination: "MX",
        time: "02:15 PM",
        price: 700,
      },
      {
        flight_no: "FL25003",
        departure: "United States",
        destination: "Mexico",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL26001",
        departure: "United States",
        destination: "Argentina",
        time: "04:30 AM",
        price: 1400,
      },
      {
        flight_no: "FL26002",
        departure: "US",
        destination: "AR",
        time: "01:00 PM",
        price: 1450,
      },
      {
        flight_no: "FL26003",
        departure: "United States",
        destination: "Argentina",
        time: "09:30 PM",
        price: 1500,
      },
    
        // Flights from India to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "India",
        destination: "Germany",
        time: "05:30 AM",
        price: 550,
      },
      {
        flight_no: "FL12002",
        departure: "IN",
        destination: "DE",
        time: "02:00 PM",
        price: 600,
      },
      {
        flight_no: "FL12003",
        departure: "India",
        destination: "Germany",
        time: "08:45 PM",
        price: 650,
      },
    
      {
        flight_no: "FL13001",
        departure: "India",
        destination: "France",
        time: "06:00 AM",
        price: 600,
      },
      {
        flight_no: "FL13002",
        departure: "IN",
        destination: "FR",
        time: "12:30 PM",
        price: 650,
      },
      {
        flight_no: "FL13003",
        departure: "India",
        destination: "France",
        time: "09:30 PM",
        price: 700,
      },
    
      {
        flight_no: "FL14001",
        departure: "India",
        destination: "Italy",
        time: "08:00 AM",
        price: 650,
      },
      {
        flight_no: "FL14002",
        departure: "IN",
        destination: "IT",
        time: "02:15 PM",
        price: 700,
      },
      {
        flight_no: "FL14003",
        departure: "India",
        destination: "Italy",
        time: "07:30 PM",
        price: 750,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "India",
        destination: "United States",
        time: "10:00 AM",
        price: 850,
      },
      {
        flight_no: "FL15002",
        departure: "IN",
        destination: "US",
        time: "04:30 PM",
        price: 900,
      },
      {
        flight_no: "FL15003",
        departure: "India",
        destination: "United States",
        time: "10:00 PM",
        price: 950,
      },
    
      {
        flight_no: "FL16001",
        departure: "India",
        destination: "Canada",
        time: "05:30 AM",
        price: 750,
      },
      {
        flight_no: "FL16002",
        departure: "IN",
        destination: "CA",
        time: "01:00 PM",
        price: 800,
      },
      {
        flight_no: "FL16003",
        departure: "India",
        destination: "Canada",
        time: "09:30 PM",
        price: 850,
      },
    
      // Flights to Middle East
      {
        flight_no: "FL17001",
        departure: "India",
        destination: "United Arab Emirates",
        time: "06:00 AM",
        price: 350,
      },
      {
        flight_no: "FL17002",
        departure: "IN",
        destination: "AE",
        time: "12:45 PM",
        price: 380,
      },
      {
        flight_no: "FL17003",
        departure: "India",
        destination: "UAE",
        time: "08:00 PM",
        price: 400,
      },
    
      {
        flight_no: "FL18001",
        departure: "India",
        destination: "Qatar",
        time: "06:30 AM",
        price: 330,
      },
      {
        flight_no: "FL18002",
        departure: "IN",
        destination: "QA",
        time: "02:30 PM",
        price: 360,
      },
      {
        flight_no: "FL18003",
        departure: "India",
        destination: "Qatar",
        time: "09:30 PM",
        price: 380,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "India",
        destination: "China",
        time: "07:00 AM",
        price: 700,
      },
      {
        flight_no: "FL19002",
        departure: "IN",
        destination: "CN",
        time: "02:00 PM",
        price: 750,
      },
      {
        flight_no: "FL19003",
        departure: "India",
        destination: "China",
        time: "09:15 PM",
        price: 800,
      },
    
      {
        flight_no: "FL20001",
        departure: "India",
        destination: "Japan",
        time: "08:30 AM",
        price: 800,
      },
      {
        flight_no: "FL20002",
        departure: "IN",
        destination: "JP",
        time: "03:15 PM",
        price: 850,
      },
      {
        flight_no: "FL20003",
        departure: "India",
        destination: "Japan",
        time: "10:30 PM",
        price: 900,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "India",
        destination: "South Africa",
        time: "05:00 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "IN",
        destination: "ZA",
        time: "12:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "India",
        destination: "South Africa",
        time: "08:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "India",
        destination: "Egypt",
        time: "06:30 AM",
        price: 700,
      },
      {
        flight_no: "FL22002",
        departure: "IN",
        destination: "EG",
        time: "01:30 PM",
        price: 750,
      },
      {
        flight_no: "FL22003",
        departure: "India",
        destination: "Egypt",
        time: "09:00 PM",
        price: 800,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "India",
        destination: "Australia",
        time: "08:00 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "IN",
        destination: "AU",
        time: "03:15 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "India",
        destination: "Australia",
        time: "10:30 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "India",
        destination: "New Zealand",
        time: "07:30 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "IN",
        destination: "NZ",
        time: "02:45 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "India",
        destination: "New Zealand",
        time: "09:45 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "India",
        destination: "Brazil",
        time: "06:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL25002",
        departure: "IN",
        destination: "BR",
        time: "02:30 PM",
        price: 1050,
      },
      {
        flight_no: "FL25003",
        departure: "India",
        destination: "Brazil",
        time: "09:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL26001",
        departure: "India",
        destination: "Mexico",
        time: "05:30 AM",
        price: 800,
      },
      {
        flight_no: "FL26002",
        departure: "IN",
        destination: "MX",
        time: "12:45 PM",
        price: 850,
      },
      {
        flight_no: "FL26003",
        departure: "India",
        destination: "Mexico",
        time: "09:15 PM",
        price: 900,
      },
    
      {
        flight_no: "FL27001",
        departure: "India",
        destination: "Argentina",
        time: "04:00 AM",
        price: 1400,
      },
      {
        flight_no: "FL27002",
        departure: "IN",
        destination: "AR",
        time: "01:00 PM",
        price: 1450,
      },
      {
        flight_no: "FL27003",
        departure: "India",
        destination: "Argentina",
        time: "09:00 PM",
        price: 1500,
      },
    
      // Flights from Russia to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "Russia",
        destination: "Germany",
        time: "06:30 AM",
        price: 600,
      },
      {
        flight_no: "FL12002",
        departure: "RU",
        destination: "DE",
        time: "02:00 PM",
        price: 650,
      },
      {
        flight_no: "FL12003",
        departure: "Russia",
        destination: "Germany",
        time: "09:00 PM",
        price: 700,
      },
    
      {
        flight_no: "FL13001",
        departure: "Russia",
        destination: "France",
        time: "07:00 AM",
        price: 650,
      },
      {
        flight_no: "FL13002",
        departure: "RU",
        destination: "FR",
        time: "01:15 PM",
        price: 700,
      },
      {
        flight_no: "FL13003",
        departure: "Russia",
        destination: "France",
        time: "09:30 PM",
        price: 750,
      },
    
      {
        flight_no: "FL14001",
        departure: "Russia",
        destination: "Italy",
        time: "08:00 AM",
        price: 700,
      },
      {
        flight_no: "FL14002",
        departure: "RU",
        destination: "IT",
        time: "03:30 PM",
        price: 750,
      },
      {
        flight_no: "FL14003",
        departure: "Russia",
        destination: "Italy",
        time: "09:30 PM",
        price: 800,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "Russia",
        destination: "United States",
        time: "10:00 AM",
        price: 950,
      },
      {
        flight_no: "FL15002",
        departure: "RU",
        destination: "US",
        time: "04:00 PM",
        price: 1000,
      },
      {
        flight_no: "FL15003",
        departure: "Russia",
        destination: "United States",
        time: "09:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL16001",
        departure: "Russia",
        destination: "Canada",
        time: "07:30 AM",
        price: 800,
      },
      {
        flight_no: "FL16002",
        departure: "RU",
        destination: "CA",
        time: "02:30 PM",
        price: 850,
      },
      {
        flight_no: "FL16003",
        departure: "Russia",
        destination: "Canada",
        time: "09:00 PM",
        price: 900,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "Russia",
        destination: "United Arab Emirates",
        time: "06:00 AM",
        price: 400,
      },
      {
        flight_no: "FL17002",
        departure: "RU",
        destination: "AE",
        time: "02:00 PM",
        price: 450,
      },
      {
        flight_no: "FL17003",
        departure: "Russia",
        destination: "UAE",
        time: "09:00 PM",
        price: 500,
      },
    
      {
        flight_no: "FL18001",
        departure: "Russia",
        destination: "Qatar",
        time: "07:30 AM",
        price: 380,
      },
      {
        flight_no: "FL18002",
        departure: "RU",
        destination: "QA",
        time: "02:45 PM",
        price: 400,
      },
      {
        flight_no: "FL18003",
        departure: "Russia",
        destination: "Qatar",
        time: "10:30 PM",
        price: 450,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "Russia",
        destination: "China",
        time: "06:00 AM",
        price: 600,
      },
      {
        flight_no: "FL19002",
        departure: "RU",
        destination: "CN",
        time: "01:15 PM",
        price: 650,
      },
      {
        flight_no: "FL19003",
        departure: "Russia",
        destination: "China",
        time: "09:30 PM",
        price: 700,
      },
    
      {
        flight_no: "FL20001",
        departure: "Russia",
        destination: "Japan",
        time: "07:30 AM",
        price: 800,
      },
      {
        flight_no: "FL20002",
        departure: "RU",
        destination: "JP",
        time: "02:00 PM",
        price: 850,
      },
      {
        flight_no: "FL20003",
        departure: "Russia",
        destination: "Japan",
        time: "09:00 PM",
        price: 900,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "Russia",
        destination: "South Africa",
        time: "05:30 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "RU",
        destination: "ZA",
        time: "12:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "Russia",
        destination: "South Africa",
        time: "08:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "Russia",
        destination: "Egypt",
        time: "06:30 AM",
        price: 700,
      },
      {
        flight_no: "FL22002",
        departure: "RU",
        destination: "EG",
        time: "01:30 PM",
        price: 750,
      },
      {
        flight_no: "FL22003",
        departure: "Russia",
        destination: "Egypt",
        time: "09:15 PM",
        price: 800,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "Russia",
        destination: "Australia",
        time: "07:00 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "RU",
        destination: "AU",
        time: "02:30 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "Russia",
        destination: "Australia",
        time: "09:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "Russia",
        destination: "New Zealand",
        time: "06:30 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "RU",
        destination: "NZ",
        time: "02:00 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "Russia",
        destination: "New Zealand",
        time: "09:30 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "Russia",
        destination: "Brazil",
        time: "06:30 AM",
        price: 1100,
      },
      {
        flight_no: "FL25002",
        departure: "RU",
        destination: "BR",
        time: "01:00 PM",
        price: 1150,
      },
      {
        flight_no: "FL25003",
        departure: "Russia",
        destination: "Brazil",
        time: "08:00 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL26001",
        departure: "Russia",
        destination: "Mexico",
        time: "07:00 AM",
        price: 800,
      },
      {
        flight_no: "FL26002",
        departure: "RU",
        destination: "MX",
        time: "02:00 PM",
        price: 850,
      },
      {
        flight_no: "FL26003",
        departure: "Russia",
        destination: "Mexico",
        time: "09:15 PM",
        price: 900,
      },
    
      {
        flight_no: "FL27001",
        departure: "Russia",
        destination: "Argentina",
        time: "04:00 AM",
        price: 1400,
      },
      {
        flight_no: "FL27002",
        departure: "RU",
        destination: "AR",
        time: "01:15 PM",
        price: 1450,
      },
    
       // Flights from Saudi Arabia to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "Saudi Arabia",
        destination: "Germany",
        time: "06:00 AM",
        price: 650,
      },
      {
        flight_no: "FL12002",
        departure: "SA",
        destination: "DE",
        time: "02:30 PM",
        price: 700,
      },
      {
        flight_no: "FL12003",
        departure: "Saudi Arabia",
        destination: "Germany",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL13001",
        departure: "Saudi Arabia",
        destination: "France",
        time: "07:00 AM",
        price: 700,
      },
      {
        flight_no: "FL13002",
        departure: "SA",
        destination: "FR",
        time: "03:00 PM",
        price: 750,
      },
      {
        flight_no: "FL13003",
        departure: "Saudi Arabia",
        destination: "France",
        time: "10:00 PM",
        price: 800,
      },
    
      {
        flight_no: "FL14001",
        departure: "Saudi Arabia",
        destination: "Italy",
        time: "08:00 AM",
        price: 750,
      },
      {
        flight_no: "FL14002",
        departure: "SA",
        destination: "IT",
        time: "02:45 PM",
        price: 800,
      },
      {
        flight_no: "FL14003",
        departure: "Saudi Arabia",
        destination: "Italy",
        time: "09:30 PM",
        price: 850,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "Saudi Arabia",
        destination: "United States",
        time: "09:00 AM",
        price: 1000,
      },
      {
        flight_no: "FL15002",
        departure: "SA",
        destination: "US",
        time: "05:00 PM",
        price: 1050,
      },
      {
        flight_no: "FL15003",
        departure: "Saudi Arabia",
        destination: "United States",
        time: "11:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL16001",
        departure: "Saudi Arabia",
        destination: "Canada",
        time: "07:30 AM",
        price: 850,
      },
      {
        flight_no: "FL16002",
        departure: "SA",
        destination: "CA",
        time: "02:00 PM",
        price: 900,
      },
      {
        flight_no: "FL16003",
        departure: "Saudi Arabia",
        destination: "Canada",
        time: "09:30 PM",
        price: 950,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "Saudi Arabia",
        destination: "United Arab Emirates",
        time: "07:00 AM",
        price: 450,
      },
      {
        flight_no: "FL17002",
        departure: "SA",
        destination: "AE",
        time: "02:30 PM",
        price: 500,
      },
      {
        flight_no: "FL17003",
        departure: "Saudi Arabia",
        destination: "UAE",
        time: "09:15 PM",
        price: 550,
      },
    
      {
        flight_no: "FL18001",
        departure: "Saudi Arabia",
        destination: "Qatar",
        time: "06:00 AM",
        price: 400,
      },
      {
        flight_no: "FL18002",
        departure: "SA",
        destination: "QA",
        time: "02:15 PM",
        price: 450,
      },
      {
        flight_no: "FL18003",
        departure: "Saudi Arabia",
        destination: "Qatar",
        time: "10:00 PM",
        price: 500,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "Saudi Arabia",
        destination: "China",
        time: "07:30 AM",
        price: 650,
      },
      {
        flight_no: "FL19002",
        departure: "SA",
        destination: "CN",
        time: "02:45 PM",
        price: 700,
      },
      {
        flight_no: "FL19003",
        departure: "Saudi Arabia",
        destination: "China",
        time: "09:30 PM",
        price: 750,
      },
    
      {
        flight_no: "FL20001",
        departure: "Saudi Arabia",
        destination: "Japan",
        time: "06:30 AM",
        price: 800,
      },
      {
        flight_no: "FL20002",
        departure: "SA",
        destination: "JP",
        time: "01:30 PM",
        price: 850,
      },
      {
        flight_no: "FL20003",
        departure: "Saudi Arabia",
        destination: "Japan",
        time: "10:00 PM",
        price: 900,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "Saudi Arabia",
        destination: "South Africa",
        time: "05:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL21002",
        departure: "SA",
        destination: "ZA",
        time: "12:30 PM",
        price: 1050,
      },
      {
        flight_no: "FL21003",
        departure: "Saudi Arabia",
        destination: "South Africa",
        time: "08:15 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL22001",
        departure: "Saudi Arabia",
        destination: "Egypt",
        time: "06:30 AM",
        price: 750,
      },
      {
        flight_no: "FL22002",
        departure: "SA",
        destination: "EG",
        time: "02:00 PM",
        price: 800,
      },
      {
        flight_no: "FL22003",
        departure: "Saudi Arabia",
        destination: "Egypt",
        time: "09:00 PM",
        price: 850,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "Saudi Arabia",
        destination: "Australia",
        time: "07:30 AM",
        price: 1100,
      },
      {
        flight_no: "FL23002",
        departure: "SA",
        destination: "AU",
        time: "03:00 PM",
        price: 1150,
      },
      {
        flight_no: "FL23003",
        departure: "Saudi Arabia",
        destination: "Australia",
        time: "09:00 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL24001",
        departure: "Saudi Arabia",
        destination: "New Zealand",
        time: "06:30 AM",
        price: 1300,
      },
      {
        flight_no: "FL24002",
        departure: "SA",
        destination: "NZ",
        time: "02:15 PM",
        price: 1350,
      },
      {
        flight_no: "FL24003",
        departure: "Saudi Arabia",
        destination: "New Zealand",
        time: "10:00 PM",
        price: 1400,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "Saudi Arabia",
        destination: "Brazil",
        time: "07:00 AM",
        price: 1200,
      },
      {
        flight_no: "FL25002",
        departure: "SA",
        destination: "BR",
        time: "02:30 PM",
        price: 1250,
      },
      {
        flight_no: "FL25003",
        departure: "Saudi Arabia",
        destination: "Brazil",
        time: "09:30 PM",
        price: 1300,
      },
    
      {
        flight_no: "FL26001",
        departure: "Saudi Arabia",
        destination: "Mexico",
        time: "06:30 AM",
        price: 900,
      },
      {
        flight_no: "FL26002",
        departure: "SA",
        destination: "MX",
        time: "01:45 PM",
        price: 950,
      },
      {
        flight_no: "FL26003",
        departure: "Saudi Arabia",
        destination: "Mexico",
        time: "09:00 PM",
        price: 1000,
      },
    
      {
        flight_no: "FL27001",
        departure: "Saudi Arabia",
        destination: "Argentina",
        time: "04:00 AM",
        price: 1450,
      },
    
      // Flights from China to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "China",
        destination: "Germany",
        time: "06:00 AM",
        price: 650,
      },
      {
        flight_no: "FL12002",
        departure: "CN",
        destination: "DE",
        time: "01:30 PM",
        price: 700,
      },
      {
        flight_no: "FL12003",
        departure: "China",
        destination: "Germany",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL13001",
        departure: "China",
        destination: "France",
        time: "07:30 AM",
        price: 700,
      },
      {
        flight_no: "FL13002",
        departure: "CN",
        destination: "FR",
        time: "02:00 PM",
        price: 750,
      },
      {
        flight_no: "FL13003",
        departure: "China",
        destination: "France",
        time: "10:30 PM",
        price: 800,
      },
    
      {
        flight_no: "FL14001",
        departure: "China",
        destination: "Italy",
        time: "08:30 AM",
        price: 750,
      },
      {
        flight_no: "FL14002",
        departure: "CN",
        destination: "IT",
        time: "03:00 PM",
        price: 800,
      },
      {
        flight_no: "FL14003",
        departure: "China",
        destination: "Italy",
        time: "09:15 PM",
        price: 850,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "China",
        destination: "United States",
        time: "09:15 AM",
        price: 1000,
      },
      {
        flight_no: "FL15002",
        departure: "CN",
        destination: "US",
        time: "04:30 PM",
        price: 1050,
      },
      {
        flight_no: "FL15003",
        departure: "China",
        destination: "United States",
        time: "10:30 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL16001",
        departure: "China",
        destination: "Canada",
        time: "07:30 AM",
        price: 850,
      },
      {
        flight_no: "FL16002",
        departure: "CN",
        destination: "CA",
        time: "02:45 PM",
        price: 900,
      },
      {
        flight_no: "FL16003",
        departure: "China",
        destination: "Canada",
        time: "09:30 PM",
        price: 950,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "China",
        destination: "United Arab Emirates",
        time: "06:30 AM",
        price: 450,
      },
      {
        flight_no: "FL17002",
        departure: "CN",
        destination: "AE",
        time: "02:30 PM",
        price: 500,
      },
      {
        flight_no: "FL17003",
        departure: "China",
        destination: "UAE",
        time: "09:00 PM",
        price: 550,
      },
    
      {
        flight_no: "FL18001",
        departure: "China",
        destination: "Qatar",
        time: "06:00 AM",
        price: 400,
      },
      {
        flight_no: "FL18002",
        departure: "CN",
        destination: "QA",
        time: "02:15 PM",
        price: 450,
      },
      {
        flight_no: "FL18003",
        departure: "China",
        destination: "Qatar",
        time: "10:30 PM",
        price: 500,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "China",
        destination: "Japan",
        time: "07:30 AM",
        price: 650,
      },
      {
        flight_no: "FL19002",
        departure: "CN",
        destination: "JP",
        time: "02:45 PM",
        price: 700,
      },
      {
        flight_no: "FL19003",
        departure: "China",
        destination: "Japan",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL20001",
        departure: "China",
        destination: "South Korea",
        time: "06:00 AM",
        price: 550,
      },
      {
        flight_no: "FL20002",
        departure: "CN",
        destination: "KR",
        time: "01:30 PM",
        price: 600,
      },
      {
        flight_no: "FL20003",
        departure: "China",
        destination: "South Korea",
        time: "09:15 PM",
        price: 650,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "China",
        destination: "South Africa",
        time: "05:00 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "CN",
        destination: "ZA",
        time: "12:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "China",
        destination: "South Africa",
        time: "09:00 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "China",
        destination: "Egypt",
        time: "07:00 AM",
        price: 750,
      },
      {
        flight_no: "FL22002",
        departure: "CN",
        destination: "EG",
        time: "02:30 PM",
        price: 800,
      },
      {
        flight_no: "FL22003",
        departure: "China",
        destination: "Egypt",
        time: "09:15 PM",
        price: 850,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "China",
        destination: "Australia",
        time: "06:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "CN",
        destination: "AU",
        time: "02:00 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "China",
        destination: "Australia",
        time: "09:30 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "China",
        destination: "New Zealand",
        time: "07:15 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "CN",
        destination: "NZ",
        time: "02:45 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "China",
        destination: "New Zealand",
        time: "10:00 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "China",
        destination: "Brazil",
        time: "06:45 AM",
        price: 1100,
      },
      {
        flight_no: "FL25002",
        departure: "CN",
        destination: "BR",
        time: "01:00 PM",
        price: 1150,
      },
      {
        flight_no: "FL25003",
        departure: "China",
        destination: "Brazil",
        time: "09:15 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL26001",
        departure: "China",
        destination: "Mexico",
        time: "07:30 AM",
        price: 900,
      },
      {
        flight_no: "FL26002",
        departure: "CN",
        destination: "MX",
        time: "01:30 PM",
        price: 950,
      },
      {
        flight_no: "FL26003",
        departure: "China",
        destination: "Mexico",
        time: "09:00 PM",
        price: 1000,
      },
    
      {
        flight_no: "FL27001",
        departure: "China",
        destination: "Argentina",
        time: "03:30 AM",
        price: 1400,
      },
      {
        flight_no: "FL27002",
        departure: "CN",
        destination: "AR",
        time: "01:30 PM",
        price: 1450,
      },
    
      // Flights from Qatar to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "Qatar",
        destination: "Germany",
        time: "06:00 AM",
        price: 650,
      },
      {
        flight_no: "FL12002",
        departure: "QA",
        destination: "DE",
        time: "02:00 PM",
        price: 700,
      },
      {
        flight_no: "FL12003",
        departure: "Qatar",
        destination: "Germany",
        time: "09:30 PM",
        price: 750,
      },
    
      {
        flight_no: "FL13001",
        departure: "Qatar",
        destination: "France",
        time: "07:15 AM",
        price: 700,
      },
      {
        flight_no: "FL13002",
        departure: "QA",
        destination: "FR",
        time: "03:00 PM",
        price: 750,
      },
      {
        flight_no: "FL13003",
        departure: "Qatar",
        destination: "France",
        time: "10:00 PM",
        price: 800,
      },
    
      {
        flight_no: "FL14001",
        departure: "Qatar",
        destination: "Italy",
        time: "08:00 AM",
        price: 750,
      },
      {
        flight_no: "FL14002",
        departure: "QA",
        destination: "IT",
        time: "03:30 PM",
        price: 800,
      },
      {
        flight_no: "FL14003",
        departure: "Qatar",
        destination: "Italy",
        time: "09:45 PM",
        price: 850,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "Qatar",
        destination: "United States",
        time: "09:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL15002",
        departure: "QA",
        destination: "US",
        time: "04:30 PM",
        price: 1050,
      },
      {
        flight_no: "FL15003",
        departure: "Qatar",
        destination: "United States",
        time: "11:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL16001",
        departure: "Qatar",
        destination: "Canada",
        time: "07:30 AM",
        price: 850,
      },
      {
        flight_no: "FL16002",
        departure: "QA",
        destination: "CA",
        time: "02:45 PM",
        price: 900,
      },
      {
        flight_no: "FL16003",
        departure: "Qatar",
        destination: "Canada",
        time: "09:15 PM",
        price: 950,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "Qatar",
        destination: "United Arab Emirates",
        time: "06:30 AM",
        price: 450,
      },
      {
        flight_no: "FL17002",
        departure: "QA",
        destination: "AE",
        time: "01:00 PM",
        price: 500,
      },
      {
        flight_no: "FL17003",
        departure: "Qatar",
        destination: "UAE",
        time: "09:15 PM",
        price: 550,
      },
    
      {
        flight_no: "FL18001",
        departure: "Qatar",
        destination: "Oman",
        time: "06:00 AM",
        price: 400,
      },
      {
        flight_no: "FL18002",
        departure: "QA",
        destination: "OM",
        time: "02:15 PM",
        price: 450,
      },
      {
        flight_no: "FL18003",
        departure: "Qatar",
        destination: "Oman",
        time: "10:30 PM",
        price: 500,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "Qatar",
        destination: "China",
        time: "08:00 AM",
        price: 650,
      },
      {
        flight_no: "FL19002",
        departure: "QA",
        destination: "CN",
        time: "02:30 PM",
        price: 700,
      },
      {
        flight_no: "FL19003",
        departure: "Qatar",
        destination: "China",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL20001",
        departure: "Qatar",
        destination: "India",
        time: "07:30 AM",
        price: 600,
      },
      {
        flight_no: "FL20002",
        departure: "QA",
        destination: "IN",
        time: "02:00 PM",
        price: 650,
      },
      {
        flight_no: "FL20003",
        departure: "Qatar",
        destination: "India",
        time: "10:00 PM",
        price: 700,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "Qatar",
        destination: "South Africa",
        time: "05:30 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "QA",
        destination: "ZA",
        time: "12:45 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "Qatar",
        destination: "South Africa",
        time: "09:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "Qatar",
        destination: "Egypt",
        time: "06:30 AM",
        price: 750,
      },
      {
        flight_no: "FL22002",
        departure: "QA",
        destination: "EG",
        time: "02:30 PM",
        price: 800,
      },
      {
        flight_no: "FL22003",
        departure: "Qatar",
        destination: "Egypt",
        time: "09:00 PM",
        price: 850,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "Qatar",
        destination: "Australia",
        time: "06:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "QA",
        destination: "AU",
        time: "03:00 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "Qatar",
        destination: "Australia",
        time: "10:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "Qatar",
        destination: "New Zealand",
        time: "07:00 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "QA",
        destination: "NZ",
        time: "02:45 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "Qatar",
        destination: "New Zealand",
        time: "10:30 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "Qatar",
        destination: "Brazil",
        time: "08:00 AM",
        price: 1100,
      },
      {
        flight_no: "FL25002",
        departure: "QA",
        destination: "BR",
        time: "02:15 PM",
        price: 1150,
      },
      {
        flight_no: "FL25003",
        departure: "Qatar",
        destination: "Brazil",
        time: "09:00 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL26001",
        departure: "Qatar",
        destination: "Mexico",
        time: "07:30 AM",
        price: 900,
      },
      {
        flight_no: "FL26002",
        departure: "QA",
        destination: "MX",
        time: "01:45 PM",
        price: 950,
      },
      {
        flight_no: "FL26003",
        departure: "Qatar",
        destination: "Mexico",
        time: "09:15 PM",
        price: 1000,
      },
      {
        flight_no: "FL27001",
        departure: "Qatar",
        destination: "Argentina",
        time: "04:30 AM",
        price: 1400,
      },
    
       // Flights from Dubai to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "Dubai",
        destination: "Germany",
        time: "06:15 AM",
        price: 650,
      },
      {
        flight_no: "FL12002",
        departure: "DXB",
        destination: "DE",
        time: "01:30 PM",
        price: 700,
      },
      {
        flight_no: "FL12003",
        departure: "Dubai",
        destination: "Germany",
        time: "09:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL13001",
        departure: "Dubai",
        destination: "France",
        time: "07:30 AM",
        price: 700,
      },
      {
        flight_no: "FL13002",
        departure: "DXB",
        destination: "FR",
        time: "02:30 PM",
        price: 750,
      },
      {
        flight_no: "FL13003",
        departure: "Dubai",
        destination: "France",
        time: "10:00 PM",
        price: 800,
      },
    
      {
        flight_no: "FL14001",
        departure: "Dubai",
        destination: "Italy",
        time: "08:00 AM",
        price: 750,
      },
      {
        flight_no: "FL14002",
        departure: "DXB",
        destination: "IT",
        time: "03:00 PM",
        price: 800,
      },
      {
        flight_no: "FL14003",
        departure: "Dubai",
        destination: "Italy",
        time: "09:15 PM",
        price: 850,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "Dubai",
        destination: "United States",
        time: "09:00 AM",
        price: 1000,
      },
      {
        flight_no: "FL15002",
        departure: "DXB",
        destination: "US",
        time: "04:00 PM",
        price: 1050,
      },
      {
        flight_no: "FL15003",
        departure: "Dubai",
        destination: "United States",
        time: "10:30 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL16001",
        departure: "Dubai",
        destination: "Canada",
        time: "07:45 AM",
        price: 850,
      },
      {
        flight_no: "FL16002",
        departure: "DXB",
        destination: "CA",
        time: "02:30 PM",
        price: 900,
      },
      {
        flight_no: "FL16003",
        departure: "Dubai",
        destination: "Canada",
        time: "09:30 PM",
        price: 950,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "Dubai",
        destination: "United Arab Emirates",
        time: "06:15 AM",
        price: 450,
      },
      {
        flight_no: "FL17002",
        departure: "DXB",
        destination: "AE",
        time: "01:30 PM",
        price: 500,
      },
      {
        flight_no: "FL17003",
        departure: "Dubai",
        destination: "UAE",
        time: "09:30 PM",
        price: 550,
      },
    
      {
        flight_no: "FL18001",
        departure: "Dubai",
        destination: "Saudi Arabia",
        time: "06:00 AM",
        price: 400,
      },
      {
        flight_no: "FL18002",
        departure: "DXB",
        destination: "SA",
        time: "02:00 PM",
        price: 450,
      },
      {
        flight_no: "FL18003",
        departure: "Dubai",
        destination: "Saudi Arabia",
        time: "10:15 PM",
        price: 500,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "Dubai",
        destination: "China",
        time: "08:00 AM",
        price: 650,
      },
      {
        flight_no: "FL19002",
        departure: "DXB",
        destination: "CN",
        time: "02:30 PM",
        price: 700,
      },
      {
        flight_no: "FL19003",
        departure: "Dubai",
        destination: "China",
        time: "09:30 PM",
        price: 750,
      },
    
      {
        flight_no: "FL20001",
        departure: "Dubai",
        destination: "India",
        time: "07:45 AM",
        price: 600,
      },
      {
        flight_no: "FL20002",
        departure: "DXB",
        destination: "IN",
        time: "02:30 PM",
        price: 650,
      },
      {
        flight_no: "FL20003",
        departure: "Dubai",
        destination: "India",
        time: "10:30 PM",
        price: 700,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "Dubai",
        destination: "South Africa",
        time: "05:45 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "DXB",
        destination: "ZA",
        time: "12:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "Dubai",
        destination: "South Africa",
        time: "09:45 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "Dubai",
        destination: "Egypt",
        time: "06:30 AM",
        price: 750,
      },
      {
        flight_no: "FL22002",
        departure: "DXB",
        destination: "EG",
        time: "02:00 PM",
        price: 800,
      },
      {
        flight_no: "FL22003",
        departure: "Dubai",
        destination: "Egypt",
        time: "09:00 PM",
        price: 850,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "Dubai",
        destination: "Australia",
        time: "07:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "DXB",
        destination: "AU",
        time: "03:00 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "Dubai",
        destination: "Australia",
        time: "10:30 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "Dubai",
        destination: "New Zealand",
        time: "08:00 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "DXB",
        destination: "NZ",
        time: "02:45 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "Dubai",
        destination: "New Zealand",
        time: "10:15 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "Dubai",
        destination: "Brazil",
        time: "09:00 AM",
        price: 1100,
      },
      {
        flight_no: "FL25002",
        departure: "DXB",
        destination: "BR",
        time: "02:30 PM",
        price: 1150,
      },
      {
        flight_no: "FL25003",
        departure: "Dubai",
        destination: "Brazil",
        time: "09:30 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL26001",
        departure: "Dubai",
        destination: "Mexico",
        time: "07:15 AM",
        price: 900,
      },
      {
        flight_no: "FL26002",
        departure: "DXB",
        destination: "MX",
        time: "02:15 PM",
        price: 950,
      },
      {
        flight_no: "FL26003",
        departure: "Dubai",
        destination: "Mexico",
        time: "09:15 PM",
        price: 1000,
      },
    
      {
        flight_no: "FL27001",
        departure: "Dubai",
        destination: "Argentina",
        time: "04:30 AM",
        price: 1400,
      },
      {
        flight_no: "FL27002",
        departure: "DXB",
        destination: "AR",
        time: "01:30 PM",
        price: 1450,
      },
    
       // Flights from Turkey to various countries
    
      // Flights to Europe
      {
        flight_no: "FL12001",
        departure: "Istanbul",
        destination: "Germany",
        time: "06:30 AM",
        price: 650,
      },
      {
        flight_no: "FL12002",
        departure: "IST",
        destination: "DE",
        time: "02:00 PM",
        price: 700,
      },
      {
        flight_no: "FL12003",
        departure: "Istanbul",
        destination: "Germany",
        time: "10:00 PM",
        price: 750,
      },
    
      {
        flight_no: "FL13001",
        departure: "Istanbul",
        destination: "France",
        time: "07:45 AM",
        price: 700,
      },
      {
        flight_no: "FL13002",
        departure: "IST",
        destination: "FR",
        time: "03:30 PM",
        price: 750,
      },
      {
        flight_no: "FL13003",
        departure: "Istanbul",
        destination: "France",
        time: "10:30 PM",
        price: 800,
      },
    
      {
        flight_no: "FL14001",
        departure: "Istanbul",
        destination: "Italy",
        time: "08:15 AM",
        price: 750,
      },
      {
        flight_no: "FL14002",
        departure: "IST",
        destination: "IT",
        time: "04:00 PM",
        price: 800,
      },
      {
        flight_no: "FL14003",
        departure: "Istanbul",
        destination: "Italy",
        time: "09:45 PM",
        price: 850,
      },
    
      // Flights to North America
      {
        flight_no: "FL15001",
        departure: "Istanbul",
        destination: "United States",
        time: "09:30 AM",
        price: 1000,
      },
      {
        flight_no: "FL15002",
        departure: "IST",
        destination: "US",
        time: "04:15 PM",
        price: 1050,
      },
      {
        flight_no: "FL15003",
        departure: "Istanbul",
        destination: "United States",
        time: "11:00 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL16001",
        departure: "Istanbul",
        destination: "Canada",
        time: "07:30 AM",
        price: 850,
      },
      {
        flight_no: "FL16002",
        departure: "IST",
        destination: "CA",
        time: "02:15 PM",
        price: 900,
      },
      {
        flight_no: "FL16003",
        departure: "Istanbul",
        destination: "Canada",
        time: "09:30 PM",
        price: 950,
      },
    
      // Flights to the Middle East
      {
        flight_no: "FL17001",
        departure: "Istanbul",
        destination: "United Arab Emirates",
        time: "06:30 AM",
        price: 450,
      },
      {
        flight_no: "FL17002",
        departure: "IST",
        destination: "AE",
        time: "01:00 PM",
        price: 500,
      },
      {
        flight_no: "FL17003",
        departure: "Istanbul",
        destination: "UAE",
        time: "10:00 PM",
        price: 550,
      },
    
      {
        flight_no: "FL18001",
        departure: "Istanbul",
        destination: "Saudi Arabia",
        time: "06:15 AM",
        price: 400,
      },
      {
        flight_no: "FL18002",
        departure: "IST",
        destination: "SA",
        time: "02:45 PM",
        price: 450,
      },
      {
        flight_no: "FL18003",
        departure: "Istanbul",
        destination: "Saudi Arabia",
        time: "10:30 PM",
        price: 500,
      },
    
      // Flights to Asia
      {
        flight_no: "FL19001",
        departure: "Istanbul",
        destination: "China",
        time: "08:15 AM",
        price: 650,
      },
      {
        flight_no: "FL19002",
        departure: "IST",
        destination: "CN",
        time: "03:00 PM",
        price: 700,
      },
      {
        flight_no: "FL19003",
        departure: "Istanbul",
        destination: "China",
        time: "10:30 PM",
        price: 750,
      },
    
      {
        flight_no: "FL20001",
        departure: "Istanbul",
        destination: "India",
        time: "07:30 AM",
        price: 600,
      },
      {
        flight_no: "FL20002",
        departure: "IST",
        destination: "IN",
        time: "02:00 PM",
        price: 650,
      },
      {
        flight_no: "FL20003",
        departure: "Istanbul",
        destination: "India",
        time: "09:30 PM",
        price: 700,
      },
    
      // Flights to Africa
      {
        flight_no: "FL21001",
        departure: "Istanbul",
        destination: "South Africa",
        time: "05:45 AM",
        price: 950,
      },
      {
        flight_no: "FL21002",
        departure: "IST",
        destination: "ZA",
        time: "12:30 PM",
        price: 1000,
      },
      {
        flight_no: "FL21003",
        departure: "Istanbul",
        destination: "South Africa",
        time: "09:30 PM",
        price: 1050,
      },
    
      {
        flight_no: "FL22001",
        departure: "Istanbul",
        destination: "Egypt",
        time: "06:00 AM",
        price: 750,
      },
      {
        flight_no: "FL22002",
        departure: "IST",
        destination: "EG",
        time: "02:30 PM",
        price: 800,
      },
      {
        flight_no: "FL22003",
        departure: "Istanbul",
        destination: "Egypt",
        time: "09:00 PM",
        price: 850,
      },
    
      // Flights to Oceania
      {
        flight_no: "FL23001",
        departure: "Istanbul",
        destination: "Australia",
        time: "08:00 AM",
        price: 1000,
      },
      {
        flight_no: "FL23002",
        departure: "IST",
        destination: "AU",
        time: "03:15 PM",
        price: 1050,
      },
      {
        flight_no: "FL23003",
        departure: "Istanbul",
        destination: "Australia",
        time: "10:45 PM",
        price: 1100,
      },
    
      {
        flight_no: "FL24001",
        departure: "Istanbul",
        destination: "New Zealand",
        time: "07:45 AM",
        price: 1200,
      },
      {
        flight_no: "FL24002",
        departure: "IST",
        destination: "NZ",
        time: "02:45 PM",
        price: 1250,
      },
      {
        flight_no: "FL24003",
        departure: "Istanbul",
        destination: "New Zealand",
        time: "10:15 PM",
        price: 1300,
      },
    
      // Flights to the Americas
      {
        flight_no: "FL25001",
        departure: "Istanbul",
        destination: "Brazil",
        time: "09:30 AM",
        price: 1100,
      },
      {
        flight_no: "FL25002",
        departure: "IST",
        destination: "BR",
        time: "03:15 PM",
        price: 1150,
      },
      {
        flight_no: "FL25003",
        departure: "Istanbul",
        destination: "Brazil",
        time: "09:45 PM",
        price: 1200,
      },
    
      {
        flight_no: "FL26001",
        departure: "Istanbul",
        destination: "Mexico",
        time: "07:15 AM",
        price: 900,
      },
      {
        flight_no: "FL26002",
        departure: "IST",
        destination: "MX",
        time: "02:00 PM",
        price: 950,
      },
      {
        flight_no: "FL26003",
        departure: "Istanbul",
        destination: "Mexico",
        time: "09:00 PM",
        price: 1000,
      },
    
      {
        flight_no: "FL27001",
        departure: "Istanbul",
        destination: "Argentina",
        time: "04:30 AM",
        price: 1400,
      },
      
    ];
    
  
  // Search functionality
  const searchForm = document.getElementById("flightSearchForm");
  const resultsContainer = document.getElementById("results-container");
  const ticketFormContainer = document.getElementById("ticket-form-container");
  const ticketForm = document.getElementById("ticketForm");
  const generatedTicket = document.getElementById("generated-ticket");
  
  // Ticket details elements
  const ticketFlightNo = document.getElementById("ticket-flight-no");
  const ticketDeparture = document.getElementById("ticket-departure");
  const ticketDestination = document.getElementById("ticket-destination");
  const ticketTime = document.getElementById("ticket-time");
  const ticketPrice = document.getElementById("ticket-price");
  
  // Final ticket display
  const finalTicketFlightNo = document.getElementById("final-ticket-flight-no");
  const finalTicketDeparture = document.getElementById("final-ticket-departure");
  const finalTicketDestination = document.getElementById("final-ticket-destination");
  const finalTicketTime = document.getElementById("final-ticket-time");
  const finalTicketPrice = document.getElementById("final-ticket-price");
  const ticketPassengerName = document.getElementById("ticket-passenger-name");
  
  // Search event
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get input values
    const departure = document.getElementById("departure").value.trim().toLowerCase();
    const destination = document.getElementById("destination").value.trim().toLowerCase();
  
    // Filter flights
    const results = flights.filter(
      (flight) =>
        flight.departure.toLowerCase().includes(departure) &&
        flight.destination.toLowerCase().includes(destination)
    );
  
    // Display results
    resultsContainer.innerHTML = "";
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p>No flights found matching your search criteria.</p>";
    } else {
      results.forEach((flight) => {
        const flightCard = `
        <div class="flight-card">
          <p><strong>Flight No:</strong> ${flight.flight_no}</p>
          <p><strong>Departure:</strong> ${flight.departure}</p>
          <p><strong>Destination:</strong> ${flight.destination}</p>
          <p><strong>Time:</strong> ${flight.time}</p>
          <p><strong>Price:</strong> $${flight.price}</p>
          <button class="book-btn" data-flight='${JSON.stringify(flight)}'>Book Now</button>
        </div>
      `;
        resultsContainer.innerHTML += flightCard;
      });
  
      // Add event listeners to "Book Now" buttons
      document.querySelectorAll(".book-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const flight = JSON.parse(e.target.getAttribute("data-flight"));
  
          // Fill ticket form
          ticketFlightNo.textContent = flight.flight_no;
          ticketDeparture.textContent = flight.departure;
          ticketDestination.textContent = flight.destination;
          ticketTime.textContent = flight.time;
          ticketPrice.textContent = flight.price;
  
          ticketFormContainer.classList.remove("hidden");
        });
      });
    }
  });
  
  // Ticket form submission
  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const passengerName = document.getElementById("passenger-name").value.trim();
  
    // Fill generated ticket details
    ticketPassengerName.textContent = passengerName;
    finalTicketFlightNo.textContent = ticketFlightNo.textContent;
    finalTicketDeparture.textContent = ticketDeparture.textContent;
    finalTicketDestination.textContent = ticketDestination.textContent;
    finalTicketTime.textContent = ticketTime.textContent;
    finalTicketPrice.textContent = ticketPrice.textContent;
  
    generatedTicket.classList.remove("hidden");
    ticketFormContainer.classList.add("hidden");
  });
  