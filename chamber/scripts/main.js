// Hamburger Menu

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const setLastVisit = (today) => {
  localStorage.setItem('lastVisitDate', today);
}


const diffDays = (today, lastVisit) => {
  const diffTime = Math.abs(lastVisit - today);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

const print = (today, lastVisit) => {
  
  const visits = document.getElementById("lastVisit");

  if (visits == null) {
    return;
  }

  if (lastVisit == null) {
    visits.textContent = "THIS IS YOUR FIRST VISIT!";
    setLastVisit(today);
  }
  else {
    const daysFromLastVisit = diffDays(today, lastVisit)-1;
    setLastVisit(today);

    visits.textContent = `DAYS FROM YOUR LAST VISIT: ${daysFromLastVisit}`;
  }

}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Last Modified

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = fulldate;

const dateTimeLastModified = `Last modification: ${document.lastModified}`;
const year = new Date(document.lastModified).getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#date").innerHTML = dateTimeLastModified;

const monday = now.getDay();

if (monday == 1 || monday == 2) {
  const banner = document.getElementById("banner");
  if (banner !== null) {
    banner.style.display = "block";
  }
}


let lastVisitDate = window.localStorage.getItem('lastVisitDate');
if (lastVisitDate != null) {
    lastVisitDate = Date.parse(lastVisitDate);
}
const currentDate = new Date();

print(currentDate, lastVisitDate);

