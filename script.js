// Smooth scroll to ABOUT section
function scrollToAbout() {
const section = document.querySelector("#about");
section.scrollIntoView({
behavior: "smooth"
});
}
// Smooth scroll to PROJECTS section
function scrollToProjects() {
const section = document.querySelector("#projects");
section.scrollIntoView({
behavior: "smooth"
});
section.classList.add("highlight");
setTimeout(() => {
section.classList.remove("highlight");
}, 2000);
}
// Scroll animation
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
document.querySelectorAll("section").forEach(section => {
section.classList.add("hidden");
observer.observe(section);
});
// Form handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", async function(e){
e.preventDefault();
const data = new FormData(form);
fetch("https://formspree.io/f/xaqpyjow",{
method:"POST",
body:data,
headers:{
'Accept':'application/json'
}
}).then(response => {
status.innerHTML = "✅ Message Sent!";
status.classList.add("show");
form.reset();
setTimeout(()=>{
status.classList.remove("show");
},3000);
}).catch(error => {
status.innerHTML = "❌ Error sending message";
});
});
// Skill click info
function showSkill(skill){
const info = {
python:"Python for AI, Data Science and automation projects.",
cpp:"Strong knowledge of C++ and object oriented programming.",
js:"JavaScript for building interactive and dynamic websites.",
fullstack:"Experience in both frontend and backend web development.",
frontend:"Building responsive and modern UI using HTML CSS and JavaScript.",
ai:"Knowledge of Artificial Intelligence and Machine Learning concepts.",
data:"Data analysis and visualization using modern tools.",
dsa:"Strong understanding of Data Structures and Algorithms.",
db:"Database design and management using SQL.",
mern:"Full stack web apps using MongoDB Express React Node."
};
document.getElementById("skill-info").innerText = info[skill];
}