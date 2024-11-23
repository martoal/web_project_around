const formError = document.querySelectorAll(`.${inputProfile.id}-error`);
const profileInputs = Array.from(formProfile.querySelectorAll(".form__info"));
const newPlaceInputs = Array.from(formNewPlace.querySelectorAll(".form__info"));
const profileButton = formProfile.querySelector(".form__button");
const newPlaceButton = formNewPlace.querySelector(".form__button");
const inputs = document.querySelectorAll(".form__info");
const toggleButtonState = (inputList, submitButtons) => {
  const hasInvalidInput = inputList.some((input) => !input.validity.valid);
  if (hasInvalidInput) {
    submitButtons.classList.add("form__button_disabled");
    submitButtons.disabled = true;
  } else {
    submitButtons.classList.remove("form__button_disabled");
    submitButtons.disabled = false;
  }
};

toggleButtonState(profileInputs, profileButton);
profileInputs.forEach((input) => {
  input.addEventListener("input", () => {
    checkInputValidity(input);
    toggleButtonState(profileInputs, profileButton);
  });
});
toggleButtonState(newPlaceInputs, newPlaceButton);
newPlaceInputs.forEach((input) => {
  input.addEventListener("input", () => {
    checkInputValidity(input);
    toggleButtonState(newPlaceInputs, newPlaceButton);
  });
});

const showError = (input, errorMessage) => {
  const formError = document.querySelector(`.${input.id}-error`); // Selecciona el span correcto
  formError.textContent = errorMessage;
  input.classList.add("form__info_type_error");
  formError.classList.add("form__input-error_active");
};

const hideError = (input) => {
  const formError = document.querySelector(`.${input.id}-error`); // Selecciona el span correcto
  input.classList.remove("form__info_type_error");
  formError.textContent = "";
  formError.classList.remove("form__input-error_active");
};

const checkInputValidity = (input) => {
  if (!input.validity.valid) {
    showError(input, input.validationMessage);
  } else {
    hideError(input);
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    checkInputValidity(input);
  });
});
