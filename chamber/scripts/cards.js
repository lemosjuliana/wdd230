// Cards

const cards = document.querySelector('.cards');
const getBusinessList = async () => {
  let businessList = [];
  await fetch('./data/data.json')
    .then((res) => res.json())
    .then((data) =>
      data.directory.forEach((business) => {
        displayDirectory(business);
        businessList.push(business);
      })
    );
    
  // Selects 3 random business with gold/silver status
  const randomSpotlight = getMultipleRandom(
    businessList.filter(
      (business) =>
        business.membershipLevel === 'gold' ||
        business.membershipLevel === 'silver'
    ),
    3
  );

  randomSpotlight.forEach((a) => displaySpotlight(a));
};

getBusinessList();

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


function displayCards(dir) {
// Create elements to add to the document
let card = document.createElement('section');
let image = document.createElement('img');
let h2 = document.createElement('h2');
let address = document.createElement('p');
let phoneNumber = document.createElement('p');
let website = document.createElement('a');
let membershipLevel = document.createElement('p');

// Change the textContent property of the h2 element to contain the prophet's full name
if (h2) h2.textContent = dir.name;
if (address) address.textContent = `Address: ${dir.address}`;
if (phoneNumber) phoneNumber.textContent = `Contact: ${dir.phoneNumber}`;
if (membershipLevel) membershipLevel.textContent = `Membership: ${dir.membershipLevel}`
if (website) {
  website.textContent = `${dir.name} Website`;
  website.href = dir.website;
}

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
image.setAttribute('src', dir.imgUrl);
image.setAttribute('alt', `${dir.name} logo`);
image.setAttribute('loading', 'lazy');

// Add/append the section(card) with the h2 element
card.appendChild(h2);
card.appendChild(image);
card.appendChild(address);
card.appendChild(phoneNumber);
card.appendChild(membershipLevel);
card.appendChild(website);


  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('.spotlightContainer');
  if (divGrid) divGrid.appendChild(card);
}

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
