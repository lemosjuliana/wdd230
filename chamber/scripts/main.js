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


