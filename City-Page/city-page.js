window.onload = function() {

    const citySelect = localStorage.getItem('citySelect');
    var cityTitle = document.getElementsByClassName('city-title')[0];
    var previewTitle = document.getElementsByClassName('preview-records-title-title')[0];

    cityTitle.textContent = citySelect;
    previewTitle.innerHTML = `Event Places around ${citySelect}`;



    var photoElement = document.getElementsByClassName('photo-subj')[0];
    if (photoElement) {
        photoElement.classList.add('animate-Up');
    }

    var titleElement = document.getElementsByClassName('title')[0];
    if (titleElement) {
        setTimeout(function() {
            titleElement.classList.add('animate-Right');
        }, 1200); 
    }

    var subtitleElement = document.getElementsByClassName('subtitle')[0];
    if (subtitleElement) {
        setTimeout(function() {
            subtitleElement.classList.add('animate-Down');
        }, 1000); 
    }







function Record(id, title, city, capacity, price, packages, features, description) {
    this.id = id;
    this.title = title;
    this.city = city;
    this.capacity = capacity;
    this.price = price;
    this.packages = packages;
    this.features = features;
    this.description = description;
}

let eventRecords = [
    new Record(
        1,
        "Event Place Z",
        "New York",
        200,
        300,
        ["Basic Package", "Premium Package"],
        ["WiFi", "Projector", "Air Conditioning"],
        "A great place for events."
    ),
    new Record(
        2,
        "Event Place B",
        "Los Angeles",
        500,
        500,
        ["Standard Package", "Deluxe Package"],
        ["Parking", "Sound System", "Catering"],
        "Ideal for weddings and large gatherings."
    ),
    new Record(
        3,
        "Event Place C",
        "Chicago",
        150,
        250,
        ["Basic Package", "Standard Package"],
        ["WiFi", "Whiteboard", "Air Conditioning"],
        "Perfect for small meetings."
    ),
    new Record(
        4,
        "Event Place D",
        "San Francisco",
        300,
        400,
        ["Premium Package", "Deluxe Package"],
        ["WiFi", "Sound System", "Catering"],
        "Modern venue with all amenities."
    ),
    new Record(
        5,
        "Event Place A",
        "New York",
        600,
        550,
        ["Basic Package", "Premium Package"],
        ["Parking", "WiFi", "Projector"],
        "Spacious hall suitable for large events."
    ),
    new Record(
        6,
        "Event Place F",
        "Miami",
        100,
        200,
        ["Standard Package", "Deluxe Package"],
        ["Air Conditioning", "Sound System", "WiFi"],
        "Cozy place for intimate gatherings."
    ),
    new Record(
        7,
        "Event Place G",
        "Seattle",
        250,
        350,
        ["Basic Package", "Premium Package"],
        ["Projector", "Parking", "Catering"],
        "Ideal for corporate events."
    ),
    new Record(
        8,
        "Event Place H",
        "Denver",
        400,
        450,
        ["Standard Package", "Deluxe Package"],
        ["WiFi", "Whiteboard", "Sound System"],
        "Great for seminars and workshops."
    ),
    new Record(
        9,
        "Event Place I",
        "Boston",
        350,
        300,
        ["Basic Package", "Standard Package"],
        ["Air Conditioning", "Projector", "WiFi"],
        "Historic venue with modern amenities."
    ),
    new Record(
        10,
        "Event Place J",
        "New York",
        450,
        500,
        ["Premium Package", "Deluxe Package"],
        ["Parking", "Sound System", "Catering"],
        "Beautiful venue with ocean view."
    )
];





var newYorkRecords = eventRecords.filter(record => record.city === "New York");



function shakerSortAsc(array){

    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag == true){

        // Left Pass

        swapFlag = false;

        for (let i = startIndex; i <endIndex - 1; i++){
            if (array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapFlag = true;    //Swapping Occured
            }
        }

        if (swapFlag == false){
            break;
        }

        endIndex = endIndex - 1;


        // Right Pass

        swapFlag = false; //Reset per Pass

        for (let i = endIndex; i>= startIndex; i--){
            if (array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapFlag = true;    //Swapping Occured
            }
        }

        startIndex = startIndex + 1;
        

    }

}












function shakerSortNameAsc(array) {
    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag) {

        // Left to Right Pass
        swapFlag = false; 

        
        for (let i = startIndex; i < endIndex - 1; i++) {
            if (array[i].title > array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        // If no Swaps, the Array is Sorted
        if (swapFlag == false) {
            break;
        }

        endIndex--;


        // Right to Left Pass
        swapFlag = false; 

        
        for (let i = endIndex - 1; i >= startIndex; i--) {
            if (array[i].title > array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        startIndex++;
    }
}





function shakerSortNameAsc(array) {
    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag) {

        // Left to Right Pass
        swapFlag = false; 

        
        for (let i = startIndex; i < endIndex - 1; i++) {
            if (array[i].title > array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        // If no Swaps, the Array is Sorted
        if (swapFlag == false) {
            break;
        }

        endIndex--;


        // Right to Left Pass
        swapFlag = false; 

        
        for (let i = endIndex - 1; i >= startIndex; i--) {
            if (array[i].title > array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }
        
        startIndex++;
    }
}


function shakerSortNameDesc(array) {
    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag) {

        // Left to Right Pass
        swapFlag = false; 

        
        for (let i = startIndex; i < endIndex - 1; i++) {
            if (array[i].title < array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        // If no Swaps, the Array is Sorted
        if (swapFlag == false) {
            break;
        }

        endIndex--;


        // Right to Left Pass
        swapFlag = false; 

        
        for (let i = endIndex - 1; i >= startIndex; i--) {
            if (array[i].title < array[i + 1].title) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }
        
        startIndex++;
    }
}






function shakerSortPriceAsc(array) {
    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag) {

        // Left to Right Pass
        swapFlag = false; 

        
        for (let i = startIndex; i < endIndex - 1; i++) {
            if (array[i].price > array[i + 1].price) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        // If no Swaps, the Array is Sorted
        if (swapFlag == false) {
            break;
        }

        endIndex--;


        // Right to Left Pass
        swapFlag = false; 

        
        for (let i = endIndex - 1; i >= startIndex; i--) {
            if (array[i].price > array[i + 1].price) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }
        
        startIndex++;
    }
}




function shakerSortPriceDesc(array) {
    let swapFlag = true;
    let startIndex = 0;
    let endIndex = array.length;

    while (swapFlag) {

        // Left to Right Pass
        swapFlag = false; 

        
        for (let i = startIndex; i < endIndex - 1; i++) {
            if (array[i].price < array[i + 1].price) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }

        // If no Swaps, the Array is Sorted
        if (swapFlag == false) {
            break;
        }

        endIndex--;


        // Right to Left Pass
        swapFlag = false; 

        
        for (let i = endIndex - 1; i >= startIndex; i--) {
            if (array[i].price < array[i + 1].price) {
                
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapFlag = true; 
            }
        }
        
        startIndex++;
    }
}





























// Sort Button Logic




    const sortButton = document.getElementById('sortButton');
    const sortContainer = document.getElementById('sortContainer');
    const sortByName = document.getElementById('sortByName');
    const sortByPrice = document.getElementById('sortByPrice');
    const orderByAsc = document.getElementById('orderByAsc');
    const orderByDesc = document.getElementById('orderByDesc');


    const previewRecords = document.getElementsByClassName('preview-records-photos')[0];

    let sortByChoice = "Name";
    let orderByChoice = "Asc";
    triggerShakerSort();


    sortButton.addEventListener('click', function(){

        if(sortButton.classList.contains('active')){
            sortButton.classList.remove('active');
            previewRecords.classList.remove('no-pointer');
        }

        else{
            sortButton.classList.add('active');
            previewRecords.classList.add('no-pointer');
        }



        if (sortContainer.classList.contains('animate-Down')){
            sortContainer.classList.remove('animate-Down');
            sortContainer.classList.remove('active');
            sortContainer.classList.add('animate-Up');
            
        }

        else if (sortContainer.classList.contains('animate-Up')){
            sortContainer.classList.remove('animate-Up');
            sortContainer.classList.add('active');
            sortContainer.classList.add('animate-Down');
        }

        else{
            sortContainer.classList.add('animate-Down');
            sortContainer.classList.add('active');
        }
        
    });



    

    sortByName.addEventListener('click', function(){

        if (sortByPrice.classList.contains('active')){
            sortByPrice.classList.remove('active')
        }
        sortByChoice = "Name";
        sortByName.classList.add('active');

        console.log(sortByChoice);
        triggerShakerSort();

    });

    sortByPrice.addEventListener('click', function(){

        if (sortByName.classList.contains('active')){
            sortByName.classList.remove('active')
        }
        sortByChoice = "Price";
        sortByPrice.classList.add('active');

        console.log(sortByChoice);
        triggerShakerSort();
        
    });


    orderByAsc.addEventListener('click', function(){

        if (orderByDesc.classList.contains('active')){
            orderByDesc.classList.remove('active')
        }
        orderByChoice = "Asc";
        orderByAsc.classList.add('active');

        console.log(orderByChoice);
        triggerShakerSort();

    });

    orderByDesc.addEventListener('click', function(){
        
        if (orderByAsc.classList.contains('active')){
            orderByAsc.classList.remove('active')
        }
        orderByChoice = "Desc";
        orderByDesc.classList.add('active');

        console.log(orderByChoice);
        triggerShakerSort();

    });



        
    function triggerShakerSort() {
        if (sortByChoice === "Name" && orderByChoice === "Asc") {
            shakerSortNameAsc(eventRecords);
            console.log(eventRecords);
            displayrecords();
    
        } else if (sortByChoice === "Price" && orderByChoice === "Asc") {
            shakerSortPriceAsc(eventRecords);
            console.log(eventRecords);
            displayrecords();
    
        } else if (sortByChoice === "Name" && orderByChoice === "Desc") {
            shakerSortNameDesc(eventRecords);
            console.log(eventRecords);
            displayrecords();
    
        } else if (sortByChoice === "Price" && orderByChoice === "Desc") {
            shakerSortPriceDesc(eventRecords);
            console.log(eventRecords);
            displayrecords();
        } 

        
    }




    function displayrecords(){


    const previewRecordPhotos = document.getElementsByClassName('preview-records-photos')[0];

    previewRecordPhotos.innerHTML = '';

for(var i=0; i<eventRecords.length; i++){


    

    var encodedCity = encodeURIComponent(eventRecords[i].city);
    var encodedTitle = encodeURIComponent(eventRecords[i].title);



    var a = document.createElement('a');
    a.href = '../Record-Page/record-page.html';
    a.dataset.recordSelect = `${eventRecords[i].title}`;
    


    var recordCell = document.createElement('div');
    recordCell.className = 'record-cell';

    a.appendChild(recordCell);

    var recordPhoto = document.createElement('div');
    recordPhoto.className = 'record-photo';

    recordCell.appendChild(recordPhoto);

        var recordPhotoContainer = document.createElement('div');
        recordPhotoContainer.className = 'record-photo-container';
        recordPhotoContainer.style.backgroundImage = `url(../images/Cities/cityscape-frankfurt-covered-modern-buildings-sunset-germany.jpg)`;
        //recordPhotoContainer.style.backgroundImage = `url(../images/Cities/${encodedCity}/${encodedTitle}.jpg)`;

    recordPhoto.appendChild(recordPhotoContainer);


        var recordTags = document.createElement('div');
        recordTags.className = 'record-tags';

            var recordCapacity = document.createElement('div');
            recordCapacity.className = 'record-capacity';
    
                var capacityIcon = document.createElement('div');
                capacityIcon.className = 'capacity-icon';

                    var iconC = document.createElement('i');
                    iconC.className = 'ph ph-users';

                capacityIcon.appendChild(iconC);
    
                var capacityData = document.createElement('div');
                capacityData.className = 'capacity-data';



            recordCapacity.appendChild(capacityIcon);
            recordCapacity.appendChild(capacityData);

        recordTags.appendChild(recordCapacity);

    


            var recordLocation = document.createElement('div');
            recordLocation.className = 'record-location';
    
                var locationIcon = document.createElement('div');
                locationIcon.className = 'location-icon';

                    var iconL = document.createElement('i');
                    iconL.className = 'ph ph-map-pin';

                locationIcon.appendChild(iconL);
    
            var locationData = document.createElement('div');
            locationData.className = 'location-data';

            recordLocation.append(locationIcon);
            recordLocation.appendChild(locationData);

        recordTags.appendChild(recordLocation);

    recordPhoto.appendChild(recordTags);








    var recordDetails = document.createElement('div');
    recordDetails.className = 'record-details';



    var recordTitle = document.createElement('div');
    recordTitle.className = 'record-title';

    var recordFeatures = document.createElement('div');
    recordFeatures.className = 'record-features';

    var recordDesc = document.createElement('div');
    recordDesc.className = 'record-desc' ;
        var recordDescData = document.createElement('p');
        recordDescData.className = 'record-desc-data';
        recordDesc.appendChild(recordDescData);

    var divider = document.createElement('div');
    divider.className = 'divider';

    var recordPrice = document.createElement('div');
    recordPrice.className = 'record-price';

        var recordPriceData = document.createElement('div');
        recordPriceData.className = 'record-price-data';
        recordPrice.appendChild(recordPriceData);



    recordDetails.appendChild(recordTitle);
    recordDetails.appendChild(recordFeatures);
    recordDetails.appendChild(recordDesc);
    recordDetails.appendChild(divider);
    recordDetails.appendChild(recordPrice);


    recordCell.appendChild(recordDetails);


    recordTitle.textContent = eventRecords[i].title;
    capacityData.textContent = `${eventRecords[i].capacity} Pax`;
    locationData.textContent = eventRecords[i].city;

    eventRecords[i].packages.forEach(function(package) {
        const div = document.createElement('div');
        div.className = 'feature-tag';
        div.textContent = package;
        recordFeatures.append(div);
    });

    eventRecords[i].features.forEach(function(feature) {
        const div = document.createElement('div');
        div.className = 'feature-tag';
        div.textContent = feature;
        recordFeatures.append(div);
    });

    recordPriceData.textContent = eventRecords[i].price;
    recordDescData.textContent = eventRecords[i].description;


    previewRecords.append(a);

    }
    



}
    

    /*
    var recordPhoto = document.getElementsByClassName('record-photo-container')[0];
    var recordCapacity = document.getElementsByClassName('capacity-data')[0];
    var recordLocation = document.getElementsByClassName('location-data')[0];
    var recordTitle = document.getElementsByClassName('record-title')[0];
    var recordFeatures = document.getElementsByClassName('record-features')[0];
    var recordDesc = document.getElementsByClassName('record-desc-data')[0];
    var recordPrice = document.getElementsByClassName('record-price-data')[0];

    var recordFeatures = document.getElementsByClassName('record-features')[0];




    recordCapacity.textContent = `${eventRecords[0].capacity} Pax`
    recordLocation.textContent = `${eventRecords[0].city}`
    recordTitle.textContent = eventRecords[0].title;
    recordDesc.textContent = "Located in the vibrant Ortigas Central Business District, The Podium is a premier events venue that offers a perfect blend of sophistication and functionality. With its contemporary design and flexible spaces, The Podium is an ideal choice for a variety of events, including corporate functions, conferences, weddings, and more. Whether you're hosting a small gathering or a large-scale event, The Podium provides a stylish and versatile setting that can be tailored to suit your needs. Elevate your event with The Podium's exceptional amenities and unparalleled service."
    recordPrice.innerHTML = `P ${eventRecords[0].price}`

    eventRecords[0].packages.forEach(function(package) {
        const div = document.createElement('div');
        div.className = 'feature-tag';
        div.textContent = package;
        recordFeatures.append(div);
    });

    eventRecords[0].features.forEach(function(feature) {
        const div = document.createElement('div');
        div.className = 'feature-tag';
        div.textContent = feature;
        recordFeatures.append(div);
    });

    recordPhoto.style.backgroundImage = `url(../images/Cities/${encodedCity}/${encodedTitle}.jpg)`;

    */


    


    document.querySelectorAll('a[data-record-link]').forEach(function(aLink){
        aLink.addEventListener('click', function(){
            const recordSelect = this.dataset.recordLink;
            localStorage.setItem('recordLink', recordSelect);
            window.location.href = '../Record-Page/record-page.html';

        });
    });



};



