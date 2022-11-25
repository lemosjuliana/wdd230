// Fetch the data and display the directory
fetch("./data/data.json")
  .then((response) => response.json())
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const directory = jsonObject['business'];
    // Filter the directory array, allowing only "gold" and "silver" members.
    let filtered = directory.filter((d) => d.membershipLevel === "gold" || d.membershipLevel === "silver");
    //Also, the array is suffled and sliced in order to keep only the first 3, random elements.
    filtered = filtered.sort(() => Math.random() - 0.5).slice(0,3);
    // For each element, display its card.  
    filtered.forEach(dir => displayDirectory(dir));
  });

// Display the directory
function displayDirectory(dir) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  if (h2) h2.textContent = dir.name;
  if (address) address.textContent = `Address: ${dir.address}`;
  if (phoneNumber) phoneNumber.textContent = `Contact: ${dir.phoneNumber}`;
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
  card.appendChild(website);

  // Add/append the existing HTML div with the cards class with the section(card)
  const divGrid = document.querySelector('.spotlight');
  if (divGrid) divGrid.appendChild(card);
}