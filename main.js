// File validated using Beautify tools (Javascript validator)

var xhr = new XMLHttpRequest();  // Create XMLHttpRequest object
var features = document.getElementsByClassName("features");  // all feature cards 
var books = document.getElementsByClassName("all-books")  // all books cars 


xhr.onload = function(){
    // console.log(xhr.responseText);  // Test to verify that API has been retrived
    var responseObject = JSON.parse(xhr.responseText);  // Convert JSON data from string to a javascript object 
	renderItems(responseObject);  // All books rendered to html template
	renderFeatures(responseObject);  // Last two items of array rendered in features section

};

// Features
function renderFeatures(responseObject){
	var newFeatures = "";  // Empty string for innerHTML to be pased through

	for(let i = 0; i < responseObject.items.length; i++){
		if(i >= 8){
			newFeatures += '<div class="card features" onclick=activateFeatures()>';
			// newFeatures += '<img src="' + responseObject.items[i].volumeInfo.imageLinks.smallThumbnail + '" class="card-img-top" alt="...">';
			newFeatures += '<div class="card-body">';
			newFeatures += '<h6 class="card-title feature-title text-center">' + responseObject.items[i].volumeInfo.title + '</h6>';
			// Subtitle
			var subtitle = responseObject.items[i].volumeInfo.subtitle;
			// if statement to check if a subtitle exists for current item
			if (subtitle != undefined) {
				newFeatures += '<p class="text-center feature-subtitle">' + responseObject.items[i].volumeInfo.subtitle + '</p>';
			}
			// for loop for authors
			// newFeatures += '<span class="card-text"><small class="text-muted text-center">Author(s): </small></span> ';
			// for loop for authors
			newFeatures += '<p class="card-text authors-features text-center"><small class="text-muted">Author(s): ';
			for (let ii = 0; ii < responseObject.items[i].volumeInfo.authors.length; ii++) {
				newFeatures += ' ' + responseObject.items[i].volumeInfo.authors[ii] + ' ';
			}
			newFeatures += '</small></p>';
			// page count                
			newFeatures += '<p class="card-text text-center"><small>Number of pages: ' + responseObject.items[i].volumeInfo.pageCount + '</small></p>';
			// decription
			// Substring used to restrict the description to 140 characters
			newFeatures += '<p class="card-text feature-description text-center">' + responseObject.items[i].volumeInfo.description.substring(0, 140) + "...." + '</p>';
			newFeatures += '<img src="' + responseObject.items[i].volumeInfo.imageLinks.smallThumbnail + '" class="card-img-top" alt="...">';
			newFeatures += '</div>';
			newFeatures += '</div>';
			newFeatures += '</div>';



		}
		document.getElementById("features").innerHTML = newFeatures;

}
}

	
// when user clicks on features card
function activateFeatures(){
	for (let i = 0; i < features.length; i++){
		features[i].addEventListener("click", isSelected);
	}
}



// All books
function renderItems(responseObject){

    var newContent = ''; // Empty string for innerHTML to be pased through
    // newContent += '<p>' + responseObject.items[0].volumeInfo.title + '</p>';  // Test to ensure the first array object is being picked up

    // for loop to loop through each book 
    for (let i = 0; i < responseObject.items.length -2; i++){
        // Start of card 
        newContent += '<div class="card all-books mb-3" id="card" onclick=activateItem()>';
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
		// if statement to check if a subtitle exists for current item
		if (subtitle != undefined) {
			newContent += '<h7 class="card-title">' + responseObject.items[i].volumeInfo.subtitle + '</h7>';
		}
		// for loop for authors
		newContent += '<span class="card-text d-block"><small class="text-muted">Author(s): </small></span> ';
		for (let ii = 0; ii < responseObject.items[i].volumeInfo.authors.length; ii++) {
			newContent += '<span class="card-text"><small class="text-muted">' + responseObject.items[i].volumeInfo.authors[ii] + '</small></span> ';
		}
		// page count
		newContent += '<p class="card-text"><small>Number of pages: ' + responseObject.items[i].volumeInfo.pageCount + '</small></p>';
		// description

		newContent += '<p class="card-text">' + responseObject.items[i].volumeInfo.description.substring(0, 140) + "...." + '</p>';
		newContent += '</div>';
		newContent += '</div>';
		newContent += '</div>';
		newContent += '</div>';
	}

    document.getElementById("books").innerHTML = newContent;  // Update index page with new content

}

// when user clicks on book card
function activateItem(){
	for (let i = 0; i < books.length; i++){
		books[i].addEventListener("click", isSelected);
	}
}


// When a card element is clicked on
// Function adds/removes is-selected class
// function adds to session storage
function isSelected(){
    if(this.classList.contains("is-selected")){
        this.classList.remove("is-selected");
        sessionStorage.setItem('Is selected', 'False');
    } else {
        this.classList.add("is-selected");
        sessionStorage.setItem('Is selected', 'True');
    }
} 
    

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=HTML5");  // Prepare request
xhr.send(null);  // Send request