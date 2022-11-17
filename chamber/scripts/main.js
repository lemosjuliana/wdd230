// Hamburger Menu

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Last Modified

const datefield = document.getElementById("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
now
);
datefield.innerHTML = `<em>${fulldate}</em>`;


const dateTimeLastModified = `Last modification: ${document.lastModified}`;
const year = new Date(document.lastModified).getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#date").innerHTML = dateTimeLastModified;

const monday = now.getDay();

if (monday == 1 || monday ==2)
{
  const banner = document.getElementById("banner");
  if (banner !== null) 
  {
    banner.style.display = "block";
  }
}
  



// Last Visit

const lastVisit = window.localStorage.getItem('lastVisitDate');
const lastVisitDate = lastVisit;
const currentDate = new Date();

const setLastVisit = (currentDate) => 
{
localStorage.setItem('lastVisitDate', currentDate);
}

const calculateLastVisit = (currentDate, lastVisitDate) => 
{
const subtraction = currentDate - lastVisitDate;
return Math.floor(subtraction);
}

const print = (currentDate, lastVisit) => 
{
const visits = document.getElementById("lastVisit");

if (visits == null) {
    return;
}

const lastVisitDate = lastVisit;

if (lastVisitDate) 
{
  visits.textContent = "THIS IS YOUR FIRST VISIT!";
  setLastVisit(currentDate);  
} 
else 
{
  const daysFromLastVisit = calculateLastVisit(currentDate, lastVisitDate);
  setLastVisit(currentDate);

  visits.textContent = `DAYS FROM YOUR LAST VISIT ${daysFromLastVisit}`;
}
}

print(currentDate, lastVisitDate);

// // Directory

// const cards = document.querySelector('.cards');


// fetch("./data/data.json")
// .then((response) => response.json())
// .then(function (jsonObject) {
//   console.table(jsonObject); // temporary checking for valid response and data parsing
//   const directory = jsonObject['business'];
//   directory.forEach((dir) => displayDirectory(dir));
// });

// function displayDirectory(dir) {
// // Create elements to add to the document
// let card = document.createElement('section');
// let image = document.createElement('img');
// let h2 = document.createElement('h2');
// let address = document.createElement('p');
// let phoneNumber = document.createElement('p');
// let website = document.createElement('a');

// // Change the textContent property of the h2 element to contain the prophet's full name
// if (h2) h2.textContent = dir.name;
// if (address) address.textContent = `Address: ${dir.address}`;
// if (phoneNumber) phoneNumber.textContent = `Contact: ${dir.phoneNumber}`;
// if (website) {
//   website.textContent = `${dir.name} Website`;
//   website.href = dir.website;
// }

// // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
// image.setAttribute('src', dir.imgUrl);
// image.setAttribute('alt', `${dir.name} logo`);
// image.setAttribute('loading', 'lazy');

// // Add/append the section(card) with the h2 element
// card.appendChild(h2);
// card.appendChild(image);
// card.appendChild(address);
// card.appendChild(phoneNumber);
// card.appendChild(website);

// // Add/append the existing HTML div with the cards class with the section(card)
// const divGrid = document.querySelector('div.grid');
// if (divGrid) divGrid.appendChild(card);
// }

// const gridbutton = document.querySelector('#grid');
// const listbutton = document.querySelector('#list');
// const display = document.querySelector('#business');

// if (gridbutton) {
// gridbutton.addEventListener('click', () => {
//   // example using arrow function
//   if (display) {
//     display.classList.add('grid');
//     display.classList.remove('list');
//   }
// });
// }

// if (listbutton) listbutton.addEventListener('click', showList);

// function showList() {
// if (display) {
//   display.classList.add('list');
//   display.classList.remove('grid');
// }
// }