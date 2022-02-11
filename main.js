var xhr = new XMLHttpRequest();  // Create XMLHttpRequest object

xhr.onload = function(){
    // console.log(xhr.responseText);  // Test to verify that API has been retrived
    var responseObject = JSON.parse(xhr.responseText);  // Convert JSON data from string to a javascript object 

    // Features

    // All books
    var newContent = ''; // Empty string for innerHTML to be pased through
    // newContent += '<p>' + responseObject.items[0].volumeInfo.title + '</p>';  // Test to ensure the first array object is being picked up

    document.getElementById("books").innerHTML = newContent;  // Update index page with new content



};

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=HTML5");  // Prepare request
xhr.send(null);  // Send request