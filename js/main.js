// Lesson Bridge — landing page interactions

(function () {
  "use strict";

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Standards demo: populate states and show a friendly preview
  const STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
  ];

  const stateSelect = document.getElementById("state-select");
  const subjectSelect = document.getElementById("subject-select");
  const result = document.getElementById("demo-result");

  STATES.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    stateSelect.appendChild(opt);
  });

  function updateDemo() {
    const state = stateSelect.value;
    if (!state) {
      result.textContent = "Choose a state to see the standards we'll connect to.";
      return;
    }
    result.textContent =
      `Great choice! We'll match your ${subjectSelect.value} lessons to ${state}'s ` +
      "standards, plus English language development standards for your ELL students.";
  }
  stateSelect.addEventListener("change", updateDemo);
  subjectSelect.addEventListener("change", updateDemo);

  // Waitlist form (front-end only for now — no data is sent anywhere)
  const form = document.getElementById("join-form");
  const msg = document.getElementById("form-msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.className = "form-msg err";
      msg.textContent = "Please enter a valid email address.";
      form.email.focus();
      return;
    }
    msg.className = "form-msg ok";
    msg.textContent = "Thank you! You're on the list — we'll be in touch soon. 🌟";
    form.reset();
  });

  // Gentle reveal-on-scroll
  const targets = document.querySelectorAll(".section-head, .card, .big-quote");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((el) => {
      if (!el.closest(".hero")) {
        el.classList.add("reveal");
        io.observe(el);
      }
    });
  }
})();
