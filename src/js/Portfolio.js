/**
 * Represents a Image Gallery for a house.
 * @class
 *
 */

export default class Portfolio {
  view;
  #data;
  #callback;
  #image;

  /**
   * Create an instance of this house gallery.
   * @param {Object} data - The data for this house gallery.
   * @param {Function} callback - The callback function to call when the house gallery is clicked.
   */
  constructor(data, callback) {
    this.#data = data;
    this.#callback = callback;
    this.view = document.createElement("div");
    this.view.className = "item";
    this.#image = document.createElement("img");
    this.#image.src = this.#data.src;
    this.#image.onclick = () => this.#callback();
    this.view.appendChild(this.#image);
  }
}
