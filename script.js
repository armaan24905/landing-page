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