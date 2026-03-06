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