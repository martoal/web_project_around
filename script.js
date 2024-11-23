const popupProfile = document.querySelector(".popup_profile");
const popupNewPlace = document.querySelector(".popup_new-card");
const popupImage = document.querySelector(".popup_image");
const openProfile = document.getElementById("open-edit");
const openNewPlace = document.getElementById("open-add");
const closePopup = document.querySelectorAll(".popup__btn-close");
const formProfile = document.querySelector(".form-profile");
const formNewPlace = document.querySelector(".form-newplace");
const template = document.querySelector(".main__template");
const cardArea = document.querySelector(".main");
const inputTitle = document.querySelector("#place");
const inputImage = document.querySelector("#image");
const cardImage = document.querySelector(".popup__body-image");
const titleImage = document.querySelector(".popup__title-image");
const inputProfile = formProfile.querySelector(".form__info");
const inputNewPlace = formNewPlace.querySelector(".form__info");
const buttonProfile = formProfile.querySelector(".form__button");
const buttonNewPlace = formNewPlace.querySelector(".form__button");
const overlay = document.querySelectorAll(".popup__overlay");
const initialCards = [
  {
    name: "Cerro castillo",
    link: "https://images.unsplash.com/photo-1713822636006-e87e66b2fa80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Machu Picchu",
    link: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Salar de Uyuni",
    link: "https://images.unsplash.com/photo-1533013404834-c196f079ca57?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Queulat",
    link: "https://images.unsplash.com/photo-1705455596627-7080d015e426?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Parque Conguillio",
    link: "https://media.istockphoto.com/id/1365966492/es/foto/araucarias-en-parque-nacional-conguillio.jpg?s=612x612&w=0&k=20&c=aJKjiF_OJw-R8wstBuk4KjhxzDPK4fYPCXVeYapz810=",
  },
  {
    name: "Capillas de marmol",
    link: "https://media.istockphoto.com/id/1594170446/es/foto/cuevas-de-m%C3%A1rmol-en-el-lago-general-carrera-patagonia-chile.jpg?s=612x612&w=0&k=20&c=YimSTTQf3lS5YxeNTCS9C-c1ZSSxEZ8H3Gk3mX3tKIo=",
  },
];

function openImagePopup(link, title) {
  const imagePopup = document.querySelector(".popup_image");
  const image = imagePopup.querySelector(".popup__body-image");
  image.src = link;
  image.alt = title;
  imagePopup.classList.add("popup_opened");
  titleImage.textContent = title;
}

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".main__card");
  const cardImage = card.querySelector(".main__card-image");
  const cardTitle = card.querySelector(".main__card-title");
  const btnDelete = card.querySelector(".main__card-trash");
  const btnLike = card.querySelector(".like-image");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("like-image_active");
  });
  btnDelete.addEventListener("click", function () {
    card.remove();
  });
  cardImage.addEventListener("click", function () {
    openImagePopup(link, name);
  });

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardArea.append(card);
  return card;
}
function cerrarVentana() {
  const popupsAbiertos = document.querySelectorAll(".popup_opened");
  popupsAbiertos.forEach(function (popup) {
    popup.classList.remove("popup_opened");
  });
}
overlay.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      cerrarVentana();
    }
  });
});

closePopup.forEach((button) => {
  button.addEventListener("click", cerrarVentana);
});

initialCards.forEach(function (item) {
  const newCard = cardGenerator(item.name, item.link);
  cardArea.append(newCard);
});
function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
}
function openPopupNewPlace() {
  popupNewPlace.classList.add("popup_opened");
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const popupAbierto = document.querySelector(".popup_opened");
    if (popupAbierto) {
      cerrarVentana(popupAbierto);
    }
  }
});
openProfile.addEventListener("click", openPopupProfile);
openNewPlace.addEventListener("click", openPopupNewPlace);

formProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const profesion = document.querySelector("#profesion").value;
  const cambioNombre = document.querySelector(".profile__name");
  cambioNombre.textContent = nombre;
  const cambioProfesion = document.querySelector(".profile__description");
  cambioProfesion.textContent = profesion;
  cerrarVentana();
});
formNewPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(inputTitle.value, inputImage.value);
  cardArea.prepend(cardToAdd);
  cerrarVentana();
});

// const user = {
//   nombre: " Martin",
//   edad: 33,
//   nacionalidad: "CHilena",
//   casado: "falso",
//   direccion: {
//     calle: "Los platanos",
//     numero: 3675,
//   },
// };
// user.caca = "1.66 mts";
// user.direccion.calle = "Floripondio";
// console.log(user.direccion["calle"]);
// console.log(user.nacionalidad):
