function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;


const dateTimeLastModified = `Last modification: ${document.lastModified}`;
const year = new Date(document.lastModified).getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#date").innerHTML = dateTimeLastModified;

const monday = now.getDay()

if (monday == 1 || monday ==2)
{
    const banner = document.getElementById("banner");
    banner.style.display = "block";
}

// Last Visit


// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

