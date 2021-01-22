// MILESTONE 1 -----------------------------------------------------------------------
// Creo un array di oggetti di icone
const arrayIcons = [
  {
    name:'cat',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'crow',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'dog',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'dove',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'dragon',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'horse',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'hippo',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'fish',
    prefix:'fa-',
    type:'animal',
    family:'fas ',
  },
  {
    name:'carrot',
    prefix:'fa-',
    type:'vegetable',
    family:'fas ',
  },
  {
    name:'apple-alt',
    prefix:'fa-',
    type:'vegetable',
    family:'fas ',
  },
  {
    name:'lemon',
    prefix:'fa-',
    type:'vegetable',
    family:'fas ',
  },
  {
    name:'pepper-hot',
    prefix:'fa-',
    type:'vegetable',
    family:'fas ',
  },
  {
    name:'user-astronaut',
    prefix:'fa-',
    type:'user',
    family:'fas ',
  },
  {
    name:'user-graduate',
    prefix:'fa-',
    type:'user',
    family:'fas ',
  },
  {
    name:'user-ninja',
    prefix:'fa-', type:'user',
    family:'fas ',
  },
  {
    name:'user-secret',
    prefix:'fa-',
    type:'user',
    family:'fas ',
  },
];

// Stampo in Html array di icone
const icons = document.getElementById('icons');

arrayIcons.forEach((element) => {

  const {name, prefix, type, family} = element;  // destructuring

  icons.innerHTML +=
  `<div class="container">
    <div class="img-icon"><i class="${family}${prefix}${name}"></i></div>
    <div class="icon-name">${name}</div>
  </div>`;
});

// MILESTONE 2 -----------------------------------------------------------------------

// stabilisco array di colori e array dei tipi di icone; le icone saranno colorate diversamente in base al loro type.
let colorsArray = ['blue', 'orange', 'purple'];

let typesArray = [];

icons.innerHTML = '';

// attraverso un ciclo foreach, inserisco un nuovo chiave valore, ovvero color, al mio array di oggetti icone
arrayIcons.forEach((element) => {

  const {name, prefix, type, family} = element;  // destructuring

  if (!typesArray.includes(element.type)) {
    typesArray.push(element.type);
  };

  const indextTypesArray = typesArray.indexOf(element.type);
  console.log('Indice nel typesArray del tipo di element: ', indextTypesArray);

  // se indextTypesArray esiste, allora aggiungo ad element il color key presente nel colorsArray
  if (indextTypesArray !== -1) {
    element.color = colorsArray[indextTypesArray];
  }

  icons.innerHTML +=
  `<div class="container">
    <div class="img-icon" style="color:${element.color}"><i class="${family}${prefix}${name}"></i></div>
    <div class="icon-name">${name}</div>
  </div>`;


});

// MILESTONE 3 -----------------------------------------------------------------------

// stabilisco variabili
const optionType = document.getElementById('selector');
const userSelection = $('#selector');
let animalIcons;
let vegetableIcons;
let userIcons;

function showIcon(nameArray) {

  icons.innerHTML = '';

  nameArray.forEach((element) => {

    const {name, prefix, type, family} = element;  //destructuring

    icons.innerHTML +=
    `<div class="container">
      <div class="img-icon" style="color:${element.color}"><i class="${family}${prefix}${name}"></i></div>
      <div class="icon-name">${name}</div>
    </div>`;
  });
};

// option select per icona
typesArray.forEach((element) => {

  optionType.innerHTML +=
  `<option value="${element}">${element}</option>`
});

// ogni volta che l'utente selezionerà qualcosa nel menu della select
// verrà eseguita la funzione "handler", la funzione all'interno del change
userSelection.change(function() {

  // salvo in una variabile la selezione dell'utente.
  // la selezione è il value all'interno dell'option che l'utente ha selezionato.
  // (la prima option in lista è quella di default)
  const value = $(this).val();

  // qui filtriamo.
  let filteredArray = arrayIcons.filter((element) => {
    // restituisce all'array finale (filteredArray) solo gli elementi
    // che verificano questa condizione (come se fosse un IF)
    // quindi solo se il type di element è uguale a quello selezionato dall'utente
    return element.type === value;
  });

  // invoco la funzione con l'array filtrato per far funzionare il tutto
  showIcon(filteredArray);

  // se però il valore dell'option è di default, cioè all, allora mostro tutte le icone
  if (value === 'all') {
    showIcon(arrayIcons);
  };
});
