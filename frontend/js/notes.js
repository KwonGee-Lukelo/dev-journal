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

const titre = document.getElementById("titreNote");
const techno = document.getElementById("techno");
const typeNote = document.getElementById("typeNote");
const statut = document.getElementById("statusNote");
const niveau = document.getElementById("niveauNote");
const com = document.getElementById("com");

const spanElement_1 = document.createElement("span");
const spanElement_2 = document.createElement("span");
const spanElement_3 = document.createElement("span");
const spanElement_4 = document.createElement("span");
const spanElement_5 = document.createElement("span");
const spanElement_6 = document.createElement("span");

function validateTitle() {
  const titreRegex = /^[a-zA-Z][a-zA-Z0-9à-ÿ' -]+$/;
  const divTitre = document.getElementById("groupe_1");
  const messageAlertTitre = spanElement_1;

  if (
    titre.value.trim() === "" ||
    titre.value.trim().length < 3 ||
    !titreRegex.test(titre.value.trim())
  ) {
    titre.style.border = "1px solid red";
    messageAlertTitre.classList.add("message");
    messageAlertTitre.textContent =
      "Remplissez le champ avec 3 caractères minimum";
    divTitre.appendChild(messageAlertTitre);
    return false;
  }

  messageAlertTitre.remove();
  titre.style.border = "1px solid green";
  return true;
}

function validateTechnology() {
  const technoRegex = /^[a-zA-Z][a-zA-Z0-9à-ÿ #+@*/-]+$/;
  const divTechno = document.getElementById("groupe_2");
  const messageAlertTechno = spanElement_2;

  if (techno.value.trim() === "" || !technoRegex.test(techno.value.trim())) {
    techno.style.border = "1px solid red";
    messageAlertTechno.classList.add("message");
    messageAlertTechno.textContent = "Remplissez le champ";
    divTechno.appendChild(messageAlertTechno);
    return false;
  }

  messageAlertTechno.remove();
  techno.style.border = "1px solid green";
  return true;
}

function validateType() {
  const divType = document.getElementById("sous_groupe_1");
  const messageAlertType = spanElement_3;

  if (typeNote.value === "") {
    typeNote.style.border = "1px solid red";
    messageAlertType.textContent = "Veuillez choisir un type";
    messageAlertType.classList.add("message");
    divType.appendChild(messageAlertType);
    return false;
  }
  messageAlertType.remove();
  typeNote.style.border = "1px solid green";
  return true;
}

function validateStatut() {
  const divStatut = document.getElementById("sous_groupe_2");
  const messageAlertStatut = spanElement_4;

  if (statut.value === "") {
    statut.style.border = "1px solid red";
    messageAlertStatut.textContent = "Veuillez choisir un status";
    messageAlertStatut.classList.add("message");
    divStatut.appendChild(messageAlertStatut);
    return false;
  }
  messageAlertStatut.remove();
  statut.style.border = "1px solid green";
  return true;
}

function validateLevel() {
  const divLevel = document.getElementById("sous_groupe_3");
  const messageAlertLevel = spanElement_5;

  if (niveau.value === "") {
    niveau.style.border = "1px solid red";
    messageAlertLevel.textContent = "Veuillez choisir le niveau de complexité";
    messageAlertLevel.classList.add("message");
    divLevel.appendChild(messageAlertLevel);
    return false;
  }
  messageAlertLevel.remove();
  niveau.style.border = "1px solid green";
  return true;
}

function validateComment() {
  const divCom = document.getElementById("groupe_4");
  const messageAlertCom = spanElement_6;

  if (com.value.trim() === "" || com.value.trim().length < 10) {
    com.style.border = "1px solid red";
    messageAlertCom.textContent =
      "Remplissez ce champ avec minimum 10 caractères";
    messageAlertCom.classList.add("message");
    divCom.appendChild(messageAlertCom);
    return false;
  }
  messageAlertCom.remove();
  com.style.border = "1px solid green";
  return true;
}

function validateForm() {
  let isTitleOk = validateTitle();
  let isTechnoOk = validateTechnology();
  let isTypeOk = validateType();
  let isStatutOk = validateStatut();
  let isLevelOk = validateLevel();
  let isCommentOk = validateComment();

  return (
    isTitleOk &&
    isTechnoOk &&
    isTypeOk &&
    isStatutOk &&
    isLevelOk &&
    isCommentOk
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm() === true) {
    alert("Envoi réussi!");

    titre.value = "";
    techno.value = "";
    typeNote.value = "";
    statut.value = "";
    niveau.value = "";
    com.value = "";
  }
});
