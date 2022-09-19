const pizzaName = document.querySelector(".pizzaName");
const pizzaPrice = document.querySelector(".pizzaPrice");
const pizzaIngredientes = document.querySelector(".pizzaIngredientes");
const pizzaInput = document.getElementById("pizzaInput");
const buscarBtn = document.querySelector(".buscarPizza");

const variedadesDePizza = [
  {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["Queso muzzarella", "Salsa de tomate"],
    precio: 500,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "Queso muzzarella",
      "Salsa de tomate",
      "Rodajas de tomate",
      "Ajo",
      "Perejil",
    ],
    precio: 700,
  },
  {
    id: 3,
    nombre: "Jamón y Morrones",
    ingredientes: [
      "Queso muzzarella",
      "Salsa de tomate",
      "Jamón cocido",
      "Morrones",
      "Oliva",
    ],
    precio: 900,
  },
  {
    id: 4,
    nombre: "Fugazzeta",
    ingredientes: ["Queso muzzarella", "Cebolla", "Ajo"],
    precio: 1000,
  },
  {
    id: 5,
    nombre: "Calabresa",
    ingredientes: ["Queso muzzarella", "Salsa de tomate", "Pepperoni"],
    precio: 1100,
  },
  {
    id: 6,
    nombre: "Hawaiana",
    ingredientes: ["Queso muzzarella", "Salsa de tomate", "Piña", "Jamón"],
    precio: 800,
  },
];

localStorage.setItem("menuDePizzas", JSON.stringify(variedadesDePizza))

const avatarSelect = () => {
  let numeroAvatar = pizzaInput.value;
  let container = document.querySelector(".img-container");
  if (numeroAvatar > variedadesDePizza.length || numeroAvatar < 1) {
    container.style.backgroundImage = `url("/img/logo.png")`;
  } else {
    container.style.backgroundImage = `url("/img/${numeroAvatar}.jpg")`;
  }
};

const renderPizza = () => {
  const nroPizza = +pizzaInput.value;

  const getPizza = variedadesDePizza.filter((pizza) => pizza.id === nroPizza);
  if (nroPizza <= variedadesDePizza.length && nroPizza > 0) {
    pizzaName.innerHTML = `${getPizza[0].nombre}`;
    pizzaPrice.innerHTML = `AR$ ${getPizza[0].precio}`;
    pizzaIngredientes.innerHTML = `<span>Ingredientes:</span>`+getPizza[0].ingredientes.map(ingredientes => `<li>${ingredientes}</li>`).join('');
  } else {
    pizzaName.innerHTML = `El número de pizza seleccionado no es válido`;
    pizzaPrice.innerHTML = ``;
    pizzaIngredientes.innerHTML = ``;
  }
};

const init = () => {
  buscarBtn.addEventListener("click", renderPizza);
  document
    .querySelector(".buscarPizza")
    .addEventListener("click", avatarSelect);
};

init();
