const btn = document.querySelector(".btn");
const aside = document.querySelector("aside");
const anchorTags = document.querySelectorAll("aside a");
const main = document.querySelector("main");
const sections = document.querySelectorAll("main section");

const toggleActive = () => {
  console.log("button got clicked");
  aside.classList.toggle("active");
};

const selectSectionHandler = (tag) => {
  document.querySelector(".aside a.active").classList.remove("active");
  tag.classList.add("active");
};

btn.addEventListener("click", toggleActive);

anchorTags.forEach((tag) => {
  tag.addEventListener("click", selectSectionHandler.bind(null, tag));
});

const observerOptions = {
  root: main,
  threshold: 0.6,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute("id");

      document.querySelector("aside a.active")?.classList.remove("active");

      const targetLink = document.querySelector(`aside a[href="#${activeId}"]`);
      if (targetLink) {
        targetLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));
