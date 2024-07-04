window.onload = function() {


    



    const address = document.getElementsByClassName("address-text")[0];
    var title = document.getElementsByClassName("record-title")[0];
    const city = document.getElementsByClassName("record-city")[0];
    const desc = document.getElementsByClassName("record-description")[0];

    const recordSelect = localStorage.getItem('recordSelect');

    title.textContent = recordSelect;









    const record1 = {
        'venue-id': "1",
        


        'venue-title': "Acacia Hotel Manila",
        'venue-address': "5400 East Asia Drive Corner Commerce Avenue, Filinvest Corporate City, Alabang, Muntinlupa City, Metro Manila",
        
        
        'venue-location': {'location-id': '1', 'location-text': 'Muntinlupa'},


        'venue-priceRange': {'priceRange-id': '1', 'priceRange-text': 'P10,000 - P20,000'},
        'venue-capacity': {'capacity-id': '1', 'capacity-text': '100-200'},
        'venue-setting': "Indoor",
        'venue-description': "If you are looking for the best place to stay in Alabang, look no further than Acacia Hotel Manila. This hotel mixes trademark Filipino hospitality with world-class facilities and rooms. You can locate this hotel near airport, shopping centers, business districts, and many other tourist attractions nearby. As a whole, this ensures you a luxurious and pleasant stay in our Alabang hotel during your visit to Manila.",
        
        'venue-eventType': [
            {'eventType-id': '1', 'eventType-text': 'Birthdays'},
            {'eventType-id': '2', 'eventType-text': 'Conference'},
            {'eventType-id': '3', 'eventType-text': 'Corporate Event'},
            {'eventType-id': '4', 'eventType-text': 'Weddings'}
        ],

        // 




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

    city.textContent = record1['venue-location']['location-text'];








// Database -> Python -> Javascript -> Javascript Objects -> HTML 



// Python -> Querying Process (Iseselect lang lahat ng Included. Subset of Records)
// Python -> Subset of Records -> Ipapasa sa Javascript (URGENT)


// Javascript -> Irereceive yung Subsets or Query Results (Unordered Records)
// Javascript -> Kukunin yung Record Subset and Assign to Javascript Objects
//                                          Array of Objects (Index Based Sorting)


// MAIN FUNCTION
// Javascript -> Isosort using Shaker Sort yung Unordered Javascript Objects
                            //record[1][priceID] < record[2][priceID]

// Javascript -> Sorting Parameters [price] [name]
                            // Interactive UI para magset ng Search (Filter Search)



// Javascript -> Sorted Array of Objects
                            // Display Results



/*

BACKEND TEAM 
    - Database
    - Aayusin yung IDs ng Parameters and Text Content
    - Auto Increment ng Records [001]

    - Python
    - Pano magQuery
    - Pano magpasa ng Query Results (Python Flask)

    - Javascript
    - Pano irereceive ng Javascript yung Query Results (Subset)

    - Pano icoconnect yung Forms sa Database. 



FRONTEND TEAM 
    - HomePage (Filter Search, Event Type Carousel)
    - Record Page (Completion)
    - Filter Search (Parameters)


    - To Follow
        - Admin Page (Viewing of all Records)
        - Forms for Admin Side para gumawa ng New Records
        - Insert yung nasa Excel

        - ADD NEW RECORD
        - Wala na yung Update and Delete
        - Placeholder Images


        - Shaker Sort Function
            - Gagawa ng Function para isort yung Objects
                record[1][priceID] < record[2][priceID]

            - Gagawa ng Logic para iset yung Isosort

            If (filter search == name){
                record[1][name] < record[2][name]}
            
            If (filter search == price){
                record[1][priceID] < record[2][priceID]}



                By Price
                By Name

                By Ascending    >
                By Descending   <


        - City/Event Place Name/image1.png




KAPAG MAGPAPASA

    - Nakay Cyrus lahat ng Files, Source Code, and Pictures

    - Since nasa kanya yung Overall File Folder ng Pictures, 
        Doon iaaccess yung File Path


    */




}