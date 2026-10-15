const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "فتح القائمة" : "إغلاق القائمة");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
    mainNav.classList.remove("is-open");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const appointmentForm = document.querySelector(".appointment-form");
const formMessage = document.querySelector(".form-message");

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!appointmentForm.reportValidity()) {
    return;
  }

  const formData = new FormData(appointmentForm);
  const name = formData.get("name").trim();
  formMessage.textContent = `شكرًا ${name}، هذا نموذج تجريبي ولم يتم إرسال طلبك.`;
  appointmentForm.reset();
});