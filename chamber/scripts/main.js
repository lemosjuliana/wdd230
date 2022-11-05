// Hamburger Menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Last Modified

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
  const visits = document.querySelector('#lastVisit');
  const lastVisitDate = lastVisit;

  if (lastVisitDate) 
  {
    visits.textContent = `THIS IS YOUR FIRST VISIT!`;
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

