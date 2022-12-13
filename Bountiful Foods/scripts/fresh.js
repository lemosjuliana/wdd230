// Get fruits
const fruits = [];
const selectFruits = async (id) => {
  let fruitOptions = document.getElementById(id);
  fruitOptions.length = 0;

  let defaultOption = document.createElement('option');
  defaultOption.text = 'Select fruit';

  fruitOptions.add(defaultOption);
  fruitOptions.selectedIndex = 0;

  const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

  await fetch(url)
    .then(function (response) {
      if (response.status !== 200) {
        console.warn(
          'Error: ' + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        let option;
        data.map((d) => fruits.push(d));

        for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          option.text = data[i].name;
          option.value = data[i].name;
          fruitOptions.add(option);
        }
      });
    })
    .catch(function (err) {
      console.error('Fetch Error -', err);
    });
};

function getFruitDetails() {
  const inputDate = localStorage.getItem('dateTime');
  const inputFirstname = localStorage.getItem('fname');
  const inputEmail = localStorage.getItem('email');
  const inputPhone = localStorage.getItem('phone');
  const selectedFruit1 = localStorage.getItem('fruits1');
  const selectedFruit2 = localStorage.getItem('fruits2');
  const selectedFruit3 = localStorage.getItem('fruits3');
  const inputInstructions = localStorage.getItem('instructions');

  let orderDate = document.getElementById('formDate');
  let firstName = document.getElementById('formName');
  let email = document.getElementById('formEmail');
  let phone = document.getElementById('formPhone');
  let selectFruits = document.getElementById('formFruit');
  let instructions = document.getElementById('formInstructions');

  const inputDateFormatted = new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'full',
  }).format(new Date(inputDate));

  if (orderDate) orderDate.textContent = `Order date: ${inputDateFormatted}`;
  if (firstName) firstName.textContent = `Firstname: ${inputFirstname}`;
  if (email) email.textContent = `Email: ${inputEmail}`;
  if (phone) phone.textContent = `Phone: ${inputPhone}`;
  if (selectFruits)
    selectFruits.textContent = `Fruit: ${selectedFruit1}, ${selectedFruit2}, ${selectedFruit3}`;
  if (instructions)
    instructions.textContent = `Special instructions: ${inputInstructions}`;

  const div = document.querySelector('#freshDrinks');
  div.appendChild(orderDate);
  div.appendChild(firstName);
  div.appendChild(email);
  div.appendChild(phone);
  div.appendChild(selectFruits);
  div.appendChild(instructions);

  console.log(selectedFruit1);

  fruits.forEach((fruit) => {
    fruit.name === selectedFruit1;
  });
  // console.log(fruitDetails);
}

selectFruits('fruits1');
selectFruits('fruits2');
selectFruits('fruits3');

const form = document.querySelector('#fresh');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  for (const pair of formData.entries()) {
    localStorage.setItem(pair[0], pair[1]);
  }

  getFruitDetails();
});

function displayHomeFruits() {
  const inputDate = localStorage.getItem('dateTime');
  const inputFirstname = localStorage.getItem('fname');
  const inputEmail = localStorage.getItem('email');
  const inputPhone = localStorage.getItem('phone');
  const selectedFruit1 = localStorage.getItem('fruits1');
  const selectedFruit2 = localStorage.getItem('fruits2');
  const selectedFruit3 = localStorage.getItem('fruits3');
  const inputInstructions = localStorage.getItem('instructions');

  let orderDate = document.getElementById('formDate');
  let firstName = document.getElementById('formName');
  let email = document.getElementById('formEmail');
  let phone = document.getElementById('formPhone');
  let selectFruits = document.getElementById('formFruit');
  let instructions = document.getElementById('formInstructions');

  // Change the textContent property of the h2 element to contain the prophet's full name
  const inputDateFormatted = new Intl.DateTimeFormat('en-UK', {
    dateStyle: 'full',
  }).format(new Date(inputDate));

  if (orderDate) orderDate.textContent = `Order date: ${inputDateFormatted}`;
  if (firstName) firstName.textContent = `Firstname: ${inputFirstname}`;
  if (email) email.textContent = `Email: ${inputEmail}`;
  if (phone) phone.textContent = `Phone: ${inputPhone}`;
  if (selectFruits)
    selectFruits.textContent = `Fruit: ${selectedFruit1}, ${selectedFruit2}, ${selectedFruit3}`;
  if (instructions)
    instructions.textContent = `Special instructions: ${inputInstructions}`;

  const div2 = document.querySelector('#freshDrinksHome');
  div2.appendChild(orderDate);
  div2.appendChild(firstName);
  div2.appendChild(email);
  div2.appendChild(phone);
  div2.appendChild(selectFruits);
  div2.appendChild(instructions);

  // I'm facing some race condition where fetch data has not yet been save to "fruits" and I can't use find to filter details for carbs, protein, fat, sugar.
  const fruitDetails = fruits.find((fruit) => fruit.name === selectedFruit1);
}