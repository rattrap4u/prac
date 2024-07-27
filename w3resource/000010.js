
// Write a JavaScript program to get the website URL (loading page). 

// console.log(document.URL);

function url() {
    try {
        console.log(document.URL);
    } catch (error) {
        console.log(error.message +`+" Can't find"`)
    }
}
url();