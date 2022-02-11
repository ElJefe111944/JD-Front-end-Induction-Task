var xhr = new XMLHttpRequest();  // Create XMLHttpRequest object

xhr.onload = function(){
    // console.log(xhr.responseText);  // Test to verify that API has been retrived
    var responseObject = JSON.parse(xhr.responseText);  // Convert JSON data from string to a javascript object 

    // Features

    // All books
    var newContent = ''; // Empty string for innerHTML to be pased through
    // newContent += '<p>' + responseObject.items[0].volumeInfo.title + '</p>';  // Test to ensure the first array object is being picked up

    // for loop to loop through each book 
    for (let i = 0; i < responseObject.items.length -2; i++){
        newContent += '<div class="card mb-3" id="card">';
		newContent += '<div class="row g-0">';
		newContent += '<div class="col-4">';
		// image
		newContent += '<img src="' + responseObject.items[i].volumeInfo.imageLinks.smallThumbnail + '" class="img-fluid rounded-start" alt="...">';
		newContent += '</div>';
		newContent += '<div class="col-8">';
		newContent += '<div class="card-body">';
		// title
		newContent += '<h6 class="card-title">' + responseObject.items[i].volumeInfo.title + '</h6>';
		// Subtitle 
		var subtitle = responseObject.items[i].volumeInfo.subtitle;
		if (subtitle != undefined) {
			newContent += '<h7 class="card-title">' + responseObject.items[i].volumeInfo.subtitle + '</h7>';
		}
		// for loop for authors
		newContent += '<span class="card-text"><small class="text-muted">Author(s): </small></span> ';
		for (let ii = 0; ii < responseObject.items[i].volumeInfo.authors.length; ii++) {
			newContent += '<span class="card-text"><small class="text-muted">' + responseObject.items[i].volumeInfo.authors[ii] + '</small></span> ';
		}
		// page count
		newContent += '<p class="card-text"><small>Number of pages: ' + responseObject.items[0].volumeInfo.pageCount + '</small></p>';
		// description     
		newContent += '<p class="card-text">' + responseObject.items[i].volumeInfo.description.substring(0, 140) + "...." + '</p>';

		newContent += '</div>';
		newContent += '</div>';
		newContent += '</div>';
		newContent += '</div>';
    };

    document.getElementById("books").innerHTML = newContent;  // Update index page with new content



};

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=HTML5");  // Prepare request
xhr.send(null);  // Send request