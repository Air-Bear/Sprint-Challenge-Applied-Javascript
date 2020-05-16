// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.getElementsByClassName("cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {
	var responseArr = Object.values(response.data.articles);

	responseArr.forEach(topics => {
		topics.forEach(obj => {
			cardsContainer[0].append(articleCreate(obj));
		});
	});

	
});

function articleCreate(obj){
	const cardDiv = document.createElement("div");
	const headlineDiv = document.createElement("div");
	const authorDiv = document.createElement("div");
	const imgDiv = document.createElement("div");
	const img = document.createElement("img");
	const span = document.createElement("span");

	cardDiv.classList.add("card");
	headlineDiv.classList.add("headline");
	authorDiv.classList.add("author");
	imgDiv.classList.add("img-container");

	cardDiv.append(headlineDiv);
	cardDiv.append(authorDiv);
	authorDiv.append(imgDiv);
	imgDiv.append(img);
	authorDiv.append(span);

	// arr.forEach(topics => {
	// 	topics.forEach(obj => {
	// 		headlineDiv.textContent = obj.headline;
	// 		img.src = obj.authorPhoto;
	// 		span.textContent = obj.authorName;
	// 	});
	// });

	// for(var i = 0; i < arr.length; i++){
	// 	for(var j = 0; j < arr[i].length; j++){
	// 		headlineDiv.textContent = arr[i][j].headline;
	// 		img.src = arr[i][j].authorPhoto;
	// 		span.textContent = arr[i][j].authorName;
	// 	}
	// }

	headlineDiv.textContent = obj.headline;
	img.src = obj.authorPhoto;
	span.textContent = obj.authorName;

	

	return cardDiv;
}
