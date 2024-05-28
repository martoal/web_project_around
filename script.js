const popupProfile = document.querySelector(".popup_profile");
const popupNewPlace = document.querySelector(".popup_new-card");
const openProfile = document.getElementById("open-edit");
const openNewPlace = document.getElementById("open-add");
const formProfile = document.querySelector("form");
const formNewPlace = document.querySelector(".form2");
const closeProfile = popupProfile.querySelector(".popup__btn-close");
const closeNewPlace = popupNewPlace.querySelector(".popup__btn-close");
const template = document.querySelector(".main__template");
const cardArea = document.querySelector(".main");
const inputTitle = document.querySelector("#place");
const inputImage = document.querySelector("#image");
const popupImage = document.querySelector(".popup_image");
const closeImage = popupImage.querySelector(".popup__btn-close");
const cardImage = document.querySelector(".popup__body-image");
const titleImage = document.querySelector(".popup__title-image");

const initialCards = [
  {
    name: "Cerro castillo",
    link: "https://images.unsplash.com/photo-1713822636006-e87e66b2fa80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Machu PIcchu",
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
initialCards.forEach(function (item) {
  const newCard = cardGenerator(item.name, item.link);
  cardArea.append(newCard);
});

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
closeImage.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});

formProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const profesion = document.querySelector("#profesion").value;
  console.log(nombre, profesion);
  const respuesta = document.getElementById("respuesta1");
  respuesta.textContent = nombre;
  const aboutNode = document.querySelector(".profile__description");
  aboutNode.textContent = profesion;
  popupProfile.classList.remove("popup_opened");
});
formNewPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(inputTitle.value, inputImage.value);
  cardArea.prepend(cardToAdd);
});
