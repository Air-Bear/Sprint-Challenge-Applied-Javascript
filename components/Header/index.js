// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.getElementsByClassName("header-container");

function Header() {
	const div = document.createElement("div");
	const dateSpan = document.createElement("span");
	const header1 = document.createElement("h1");
	const tempSpan = document.createElement("span");

	div.classList.add("header");
	dateSpan.classList.add("date");
	tempSpan.classList.add("temp");

	div.append(dateSpan);
	div.append(header1);
	div.append(tempSpan);

	dateSpan.textContent = "SMARCH 28, 2019";
	header1.textContent = "Lambda Times";
	tempSpan.textContent = "98";

	return div;
}

headerContainer[0].append(Header());
