

const address = document.getElementsByClassName("address-text")[0];
const title = document.getElementsByClassName("record-title")[0];
const city = document.getElementsByClassName("record-city")[0];
const desc = document.getElementsByClassName("record-description")[0];













const record1 = {
    'venue-id': "101",
    'venue-title': "Acacia Hotel Manila",
    'venue-address': "5400 East Asia Drive Corner Commerce Avenue, Filinvest Corporate City, Alabang, Muntinlupa City, Metro Manila",
    'venue-location': {'location-id': '1', 'location-text': 'Muntinlupa'},
    'venue-priceRange': {'priceRange-id': '1', 'priceRange-text': 'P100,000 - P200,000'},
    'venue-capacity': {'capacity-id': '1', 'capacity-text': '100-200'},
    'venue-setting': "Indoor",
    'venue-description': "If you are looking for the best place to stay in Alabang, look no further than Acacia Hotel Manila. This hotel mixes trademark Filipino hospitality with world-class facilities and rooms. You can locate this hotel near airport, shopping centers, business districts, and many other tourist attractions nearby. As a whole, this ensures you a luxurious and pleasant stay in our Alabang hotel during your visit to Manila.",
    
    'venue-eventType': [
        {'eventType-id': '1', 'eventType-text': 'Conference'},
        {'eventType-id': '2', 'eventType-text': 'Birthdays'},
        {'eventType-id': '3', 'eventType-text': 'Weddings'}
    ],

    'venue-package': [
        {'package-id': '1', 'package-text': 'Catering Package'},
        {'package-id': '2', 'package-text': 'Decoration Package'},
        {'package-id': '3', 'package-text': 'Event-Planning Package'}
    ],

    'venue-feature': [
        {'feature-id': '1', 'feature-text': 'Airconditioning'},
        {'feature-id': '6', 'feature-text': 'Swimming Pool'},
        {'feature-id': '7', 'feature-text': 'Garden'}
    ],
};



desc.textContent = record1['venue-description'];

address.textContent = record1['venue-address'];
title.textContent = record1['venue-title'];
city.textContent = record1['venue-location']['location-text'];