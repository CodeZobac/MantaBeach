import Portfolio from "./Portfolio.js";

export default class Gallery {
  #callback;
  #currentSlide = null;
  view;
  images = [];

  constructor(callback) {
    this.#callback = callback;
    this.view = document.querySelector("#image-container");
  }

  showSlide() {
    const arr = this.images;

    const container = this.view;
    container.innerHTML = "";
    let currentIndex = 0;

    const slides = arr.map((images) => {
      const slide = document.createElement("div");
      slide.className = "item";
      slide.appendChild(images.view);
      slides.style.display = "none";
      container.appendChild(slide);
      return slide;
    });

    if (slides.length > 0) {
      slides[currentIndex].style.display = "block";
    }

    const showSlide = (index) => {
      slides[currentIndex].style.display = "none";
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].style.display = "block";
    };

    document.querySelector("#left").onclick = () => showSlide(currentIndex - 1);
    document.querySelector("#right").onclick = () =>
      showSlide(currentIndex + 1);
  }
  addImage(image) {
    let nextImage = null;
    nextImage = new Portfolio(image, () => {
      this.performImage(nextImage);
      console.log("Image clicked");
    });
    if (nextImage !== null) {
      this.images.push(nextImage);
    }
  }

  performImage(images) {
    if (this.#currentSlide) {
      this.#currentSlide.active = false;
    }

    this.#currentSlide = this.images.find((slide) => slide.id === images.id);
    this.#currentSlide.active = true;
  }
}
