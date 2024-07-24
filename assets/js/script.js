// La directive 'use strict' permet d'activer le mode strict du JavaScript, qui rend le code plus sûr et plus robuste en évitant certaines erreurs et en interdisant certaines syntaxes.
'use strict';

// Cette fonction permet de basculer la classe "active" d'un élément du DOM passé en paramètre. La classe "active" peut être utilisée pour modifier l'apparence ou le comportement de l'élément.
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Ces variables stockent des références à des éléments du DOM liés à la barre latérale (sidebar) de la page. La barre latérale est un élément qui contient des liens ou des options de navigation. Le bouton de la barre latérale (sidebarBtn) est un élément qui permet d'afficher ou de masquer la barre latérale.
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Cette fonctionnalité permet de basculer la barre latérale lorsqu'on clique sur le bouton de la barre latérale. Cela est utile pour les appareils mobiles où l'espace est limité. La fonction utilise la fonction elementToggleFunc définie plus haut pour ajouter ou enlever la classe "active" à la barre latérale.
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Ces variables stockent des références à des éléments du DOM liés aux témoignages de la page. Les témoignages sont des éléments qui affichent des avis ou des commentaires de clients ou d'utilisateurs. Le conteneur modal (modalContainer) est un élément qui affiche un témoignage en grand lorsqu'on clique dessus. Le bouton de fermeture du modal (modalCloseBtn) est un élément qui permet de fermer le modal. Le calque (overlay) est un élément qui recouvre le reste de la page lorsqu'un modal est ouvert.
const TémoignagesItem = document.querySelectorAll("[data-Témoignages-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Ces variables stockent des références à des éléments du DOM liés au contenu du modal. Le modal contient une image, un titre et un texte qui correspondent au témoignage sélectionné.
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Cette fonction permet de basculer le modal et le calque lorsqu'on veut afficher ou fermer un témoignage. La fonction utilise la fonction elementToggleFunc définie plus haut pour ajouter ou enlever la classe "active" au conteneur modal et au calque.
const TémoignagesModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Cette boucle parcourt tous les éléments de témoignage et leur ajoute un événement de clic. Lorsqu'on clique sur un élément de témoignage, la fonction récupère les données de l'élément (source et alt de l'image, titre et texte du témoignage) et les assigne aux éléments du modal. Ensuite, la fonction appelle la fonction TémoignagesModalFunc pour afficher le modal et le calque.
for (let i = 0; i < TémoignagesItem.length; i++) {

  TémoignagesItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-Témoignages-avatar]").src;
    modalImg.alt = this.querySelector("[data-Témoignages-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-Témoignages-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-Témoignages-text]").innerHTML;

    TémoignagesModalFunc();

  });

}

                    //  boutton de fermeture du modalContainer

// Ces deux lignes ajoutent un événement de clic au bouton de fermeture du modal et au calque. Lorsqu'on clique sur l'un de ces éléments, la fonction appelle la fonction TémoignagesModalFunc pour fermer le modal et le calque.
modalCloseBtn.addEventListener("click", TémoignagesModalFunc);
overlay.addEventListener("click", TémoignagesModalFunc);



                          // PORTFOLIO

// Ces variables stockent des références à des éléments du DOM liés à la sélection personnalisée (custom select) de la page. La sélection personnalisée est un élément qui permet de choisir une option parmi une liste. Les éléments de la liste sont des boutons de filtrage (filterBtn) qui permettent de filtrer les témoignages selon une catégorie. La valeur de la sélection (selectValue) est un élément qui affiche l'option choisie.
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Cette ligne ajoute un événement de clic à la sélection personnalisée. Lorsqu'on clique sur la sélection, la fonction utilise la fonction elementToggleFunc pour basculer la classe "active" de la sélection. Cela permet d'afficher ou de masquer la liste des options.
select.addEventListener("click", function () { elementToggleFunc(this); });

// Cette boucle parcourt tous les éléments de la liste de la sélection personnalisée et leur ajoute un événement de clic. Lorsqu'on clique sur un élément de la liste, la fonction récupère la valeur de l'élément (en minuscule) et l'assigne à la valeur de la sélection. Ensuite, la fonction utilise la fonction elementToggleFunc pour fermer la liste des options. Enfin, la fonction appelle la fonction "filterFunc" en passant la valeur de l'élément comme paramètre. 
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

              // afficher la cathegorie des elements choisis porte folio

// Ces variables stockent des références à des éléments du DOM liés aux éléments de filtrage de la page. Les éléments de filtrage sont des éléments qui affichent les témoignages selon la catégorie choisie. La catégorie est stockée dans l'attribut data-category de chaque élément.
const filterItems = document.querySelectorAll("[data-filter-item]");

// Cette fonction permet de filtrer les éléments de filtrage selon la valeur passée en paramètre. La fonction parcourt tous les éléments de filtrage et vérifie si la valeur correspond à la catégorie de l'élément. Si la valeur est "all", la fonction ajoute la classe "active" à tous les éléments. Si la valeur correspond à la catégorie de l'élément, la fonction ajoute la classe "active" à l'élément. Sinon, la fonction enlève la classe "active" à l'élément. La classe "active" permet de rendre l'élément visible ou invisible selon le cas.
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  } 

}

// Cette variable stocke une référence au dernier bouton de filtrage cliqué. Elle est initialisée au premier bouton de filtrage par défaut.
let lastClickedBtn = filterBtn[0];

// Cette boucle parcourt tous les boutons de filtrage et leur ajoute un événement de clic. Lorsqu'on clique sur un bouton de filtrage, la fonction récupère la valeur du bouton (en minuscule) et l'assigne à la valeur de la sélection. Ensuite, la fonction appelle la fonction filterFunc en passant la valeur du bouton comme paramètre. Enfin, la fonction enlève la classe "active" au dernier bouton cliqué et ajoute la classe "active" au bouton actuel. La classe "active" permet de mettre en évidence le bouton sélectionné. La variable lastClickedBtn est mise à jour avec le bouton actuel.
for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables

// Ce bloc de code permet de créer un formulaire de contact avec une validation simple. Le bouton du formulaire est désactivé par défaut, et il ne devient activé que lorsque tous les champs du formulaire sont remplis correctement. La méthode checkValidity() renvoie un booléen qui indique si le formulaire respecte les contraintes de validation spécifiées dans les attributs HTML des éléments du formulaire, tels que required, minlength, maxlength.


// Déclarer une constante nommée form et lui affecter l'élément HTML qui a l'attribut data-form
const form = document.querySelector("[data-form]");
// Déclarer une constante nommée formInputs et lui affecter un tableau contenant tous les éléments HTML qui ont l'attribut data-form-input
const formInputs = document.querySelectorAll("[data-form-input]");
// Déclarer une constante nommée formBtn et lui affecter l'élément HTML qui a l'attribut data-form-btn
const formBtn = document.querySelector("[data-form-btn]");

// Parcourir le tableau formInputs avec une boucle for
for (let i = 0; i < formInputs.length; i++) {
  // Ajouter un écouteur d'événement de type "input" à chaque élément du tableau formInputs
  formInputs[i].addEventListener("input", function () {

    // Vérifier la validité du formulaire
    if (form.checkValidity()) {
      // Si le formulaire est valide, retirer l'attribut "disabled" du bouton du formulaire
      formBtn.removeAttribute("disabled");
    } else {
      // Si le formulaire n'est pas valide, ajouter l'attribut "disabled" au bouton du formulaire
      formBtn.setAttribute("disabled", "");
    }

  });
}




// Sélectionner tous les éléments qui ont l'attribut data-nav-link et les stocker dans un tableau nommé navigationLinks
const navigationLinks = document.querySelectorAll("[data-nav-link]");
// Sélectionner tous les éléments qui ont l'attribut data-page et les stocker dans un tableau nommé pages
const pages = document.querySelectorAll("[data-page]");
// Parcourir le tableau navigationLinks avec une boucle for
for (let i = 0; i < navigationLinks.length; i++) {
  // Ajouter un écouteur d'événement de type "click" à chaque élément du tableau navigationLinks
  navigationLinks[i].addEventListener("click", function () {

    // Parcourir le tableau pages avec une autre boucle for
    for (let i = 0; i < pages.length; i++) {
      // Comparer le contenu HTML de l'élément cliqué en minuscule avec la valeur de l'attribut data-page de chaque élément du tableau pages
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        // Ajouter la classe "active" aux éléments correspondants du tableau pages et du tableau navigationLinks
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        // Faire défiler la fenêtre vers le haut
        window.scrollTo(0, 0);
      } else {
        // Retirer la classe "active" aux éléments non correspondants du tableau pages et du tableau navigationLinks
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

