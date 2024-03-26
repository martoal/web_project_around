const popupProfile = document.querySelector(".popup_profile");
const popupNewPlace = document.querySelector(".popup_new-card");

const openProfile = document.getElementById("open-edit");
const openNewPlace = document.getElementById("open-add");
const formProfile = document.querySelector("form");
const formNewPlace = document.querySelector("form");
const closeProfile = popupProfile.querySelector(".popup__btn-close");
const closeNewPlace = popupNewPlace.querySelector(".popup__btn-close");
openProfile.addEventListener("click", () => {
  popupProfile.classList.add("popup_opened");
});

closeProfile.addEventListener("click", () => {
  popupProfile.classList.remove("popup_opened");
});
openNewPlace.addEventListener("click", () => {
  popupNewPlace.classList.add("popup_opened");
});

closeNewPlace.addEventListener("click", () => {
  popupNewPlace.classList.remove("popup_opened");
});

formProfile.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const profesion = document.querySelector("#profesion").value;
  console.log(nombre, profesion);
  const respuesta = document.getElementById("respuesta1");
  respuesta.textContent = nombre;
  const aboutNode = document.querySelector(".profile__description");
  aboutNode.textContent = profesion;
  popupProfile.classList.remove("popup_opened");
  popupNewPlace.classList.remove("popup_opened");
});
