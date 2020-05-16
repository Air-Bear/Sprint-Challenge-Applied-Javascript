/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.getElementsByClassName("carousel-container");

var index = 0;

carouselContainer[0].append(carouselCreate());

const leftBtn = document.querySelector(".carousel .left-button");
const rightBtn = document.querySelector(".carousel .right-button");
const imgs = document.querySelectorAll(".carousel img");

window.addEventListener("load", imgDisplay());

leftBtn.addEventListener("click", (event) => {
    if(index != 0){
        imgHide();
        index--;
        imgDisplay();
    }
});

rightBtn.addEventListener("click", (event) => {
    if(index < imgs.length-1){
        imgHide();
        index++;
        imgDisplay();
    }
});

function carouselCreate(){
    const carouselDiv = document.createElement("div");
    const leftBtnDiv = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");
    const rightBtnDiv = document.createElement("div");

    carouselDiv.classList.add("carousel");
    leftBtnDiv.classList.add("left-button");
    rightBtnDiv.classList.add("right-button");

    leftBtnDiv.textContent = "<";
    rightBtnDiv.textContent = ">";

    img1.src = "./assets/carousel/mountains.jpeg";
    img2.src = "./assets/carousel/computer.jpeg";
    img3.src = "./assets/carousel/trees.jpeg";
    img4.src = "./assets/carousel/turntable.jpeg";

    carouselDiv.append(leftBtnDiv);
    carouselDiv.append(img1);
    carouselDiv.append(img2);
    carouselDiv.append(img3);
    carouselDiv.append(img4);
    carouselDiv.append(rightBtnDiv);

    return carouselDiv;
}

function imgDisplay(){
    imgs[index].style.display = "flex";
}
function imgHide(){
    imgs[index].style.display = "none";
}