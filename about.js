console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
		alert("The form has been submitted");
	}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


document.getElementById("img").addEventListener("mouseover", (event) => {
    alert("You are so smart for knowing dogs are better!")
})