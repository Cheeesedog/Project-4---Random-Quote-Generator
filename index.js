const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random"

const result = fetch(apiURL)

const initial = fetch(apiURL);


async function getQuote(){

	try {

		btnEl.innerText = "Loading...";
		btnEl.disabled = true;
		quoteEl.innerText = "Updating..."
		authorEl.innerText = "Updating.."
		const response = await fetch(apiURL)
		const data = await response.json();
		const quoteContent = data.content;
		const quoteAuthor = data.author;

		quoteEl.innerText = quoteContent;
		authorEl.innerText = `~  ${quoteAuthor}`;

		btnEl.innerText = "Get a Quote";
		btnEl.disabled = false;

	} catch(error){

		console.log(error);
		quoteEl.innerText = "An error happened, try again later";
		authorEl.innerText = "An error happened";
		btnEl.disabled = false
	}

}

getQuote();

btnEl.addEventListener("click", getQuote);

