const menuNav = document.getElementById("menu");
const iconHamburger = document.getElementById("menu__icon");
const iconClose = document.getElementById("close__icon");

iconHamburger.addEventListener("click", () => {
  menuNav.classList.add("show");
  iconClose.classList.add("show");
  iconHamburger.classList.add("hide");
});

iconClose.addEventListener("click", () => {
  menuNav.classList.remove("show");
  iconClose.classList.remove("show");
  iconHamburger.classList.remove("hide");
});

/*******************************************
 ***************************************
 * FORM VALIDATION****************/
const form = document.getElementById("theForm");

const fields = [
  {
    input: document.getElementById("titreNote"),
    isValid: (value) => value.length >= 3,
    errorMessage: "Le titre doit contenir au moins 3 caractères.",
  },
  {
    input: document.getElementById("techno"),
    isValid: (value) => value.length >= 2,
    errorMessage: "La technologie doit contenir au moins 2 caractères.",
  },
  {
    input: document.getElementById("typeNote"),
    isValid: (value) => ["concept", "solution", "bug"].includes(value),
    errorMessage: "Veuillez choisir un type.",
  },
  {
    input: document.getElementById("statusNote"),
    isValid: (value) => ["arevoir", "maitriser"].includes(value),
    errorMessage: "Veuillez choisir un statut.",
  },
  {
    input: document.getElementById("niveauNote"),
    isValid: (value) =>
      !value || ["debutant", "intermediaire", "avance"].includes(value),
    errorMessage: "Veuillez choisir un niveau de complexité valide.",
  },
  {
    input: document.getElementById("code"),
    isValid: (value) => Boolean(value),
    errorMessage: "L'extrait de code est obligatoire.",
  },
];

function validateForm() {
  let firstInvalidField;

  fields.forEach(({ input, isValid, errorMessage }) => {
    const error = input.parentElement.querySelector(".message");
    const valid = isValid(input.value.trim());

    input.setAttribute("aria-invalid", String(!valid));
    if (!valid) {
      if (!firstInvalidField) firstInvalidField = input;
      const message = error || document.createElement("span");
      message.className = "message";
      message.textContent = errorMessage;
      if (!error) input.parentElement.appendChild(message);
    } else {
      error?.remove();
    }
  });

  if (firstInvalidField) {
    firstInvalidField.focus();
    return false;
  }

  return true;
}

form.addEventListener("submit", (event) => {
  if (!validateForm()) event.preventDefault();
});

form.addEventListener("reset", () => {
  fields.forEach(({ input }) => {
    input.parentElement.querySelector(".message")?.remove();
    input.setAttribute("aria-invalid", "false");
  });
});
