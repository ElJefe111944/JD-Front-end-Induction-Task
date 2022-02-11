var xhr = new XMLHttpRequest();  // Create XMLHttpRequest object

xhr.onload = function(){
    console.log(xhr.responseText);
};

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=HTML5");
xhr.send(null);