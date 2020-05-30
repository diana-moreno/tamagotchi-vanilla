export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const toggleModal = function toggleModal(show) {
  document.querySelector(".modal").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text) {
  document.querySelector(".modal-inner").innerHTML = text;
};

export const toggleIcons = function toggleIcons(show) {
  document.querySelector(".icons").classList.toggle("hidden", !show);
};
