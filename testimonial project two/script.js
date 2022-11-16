const textdivs = document.querySelectorAll(".text-div");

const pics = document.querySelectorAll(".pic");

const textcontainer = document.querySelector(".text-container");

let idx = 0;

pics.forEach((pic, index) => {
  pic.addEventListener("click", () => {
    removeactive();
    pics[index].classList.add("active-pic");
    // console.log(
    //   (textcontainer.children[index].style.transform = `translateX(${
    //     -idx * 600
    //   }px)`)
    // );
    removeshowtext();
    textdivs[index].classList.add("show-text");
    //     imgs.style.transform = `translateX(${-idx * 500}px)`

    // console.log(pic, index);
  });
});

function removeactive() {
  pics.forEach((pic) => {
    pic.classList.remove("active-pic");
  });
}

function removeshowtext() {
  textdivs.forEach((div) => {
    div.classList.remove("show-text");
  });
}
