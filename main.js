var xhr = new XMLHttpRequest();  // Create XMLHttpRequest object

xhr.onload = function(){
    // console.log(xhr.responseText);  // Test to verify that API has been retrived
    var responseObject = JSON.parse(xhr.responseText);  // Convert JSON data from string to a javascript object 
};

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=HTML5");
xhr.send(null);