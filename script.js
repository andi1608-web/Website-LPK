const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
$$(".nav-links a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const backdrop = $("#modalBackdrop");
const modalTitle = $("#modalTitle");
const modalDescription = $("#modalDescription");
const accountSubmit = $("#accountSubmit");
const modalSwitch = $("#modalSwitch");
const accountMessage = $("#accountMessage");
const fullName = $("#fullName");
let modalMode = "register";

function openModal(mode = "register", language = "") {
  modalMode = mode;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  accountMessage.textContent = "";
  if (mode === "login") {
    modalTitle.textContent = "Senang melihatmu kembali!";
    modalDescription.textContent = "Masuk ke akun LingoAcademy untuk melanjutkan belajarmu.";
    accountSubmit.innerHTML = "Masuk <span>→</span>";
    modalSwitch.innerHTML = 'Belum punya akun? <button type="button" data-modal="register">Daftar sekarang</button>';
    $("#fullName").required = false;
    $("#fullName").parentElement.querySelector("label").style.display = "none";
    $("#fullName").style.display = "none";
  } else {
    modalTitle.textContent = "Mulai perjalanan bahasamu";
    modalDescription.textContent = "Isi data berikut dan tim kami akan menghubungimu.";
    accountSubmit.innerHTML = "Daftar Sekarang <span>→</span>";
    modalSwitch.innerHTML = 'Sudah punya akun? <button type="button" data-modal="login">Masuk</button>';
    $("#fullName").required = true;
    $("#fullName").parentElement.querySelector("label").style.display = "";
    $("#fullName").style.display = "";
  }
  if (language) $("#languageSelect").value = `Bahasa ${language}`;
  setTimeout(() => $("#email").focus(), 60);
}
function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
}
$$("[data-modal]").forEach(button => button.addEventListener("click", event => {
  const mode = button.dataset.modal;
  if (button.closest("#modalSwitch")) {
    event.preventDefault();
    openModal(mode);
    return;
  }
  openModal(mode);
}));
$("#modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", event => { if (event.target === backdrop) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !backdrop.hidden) closeModal(); });

$$(".language-card").forEach(card => card.addEventListener("click", () => openModal("register", card.dataset.language)));
$("#accountForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#fullName").value.trim();
  const email = $("#email").value.trim();
  if (!email || (modalMode === "register" && !name)) return;
  accountMessage.textContent = modalMode === "login"
    ? "Demo berhasil: fitur masuk perlu dihubungkan ke backend."
    : `Terima kasih${name ? ", " + name : ""}! Data demo sudah tervalidasi. Tim kami akan menghubungi kamu setelah backend diaktifkan.`;
});

$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#contactName").value.trim();
  $("#contactMessage").textContent = `Terima kasih, ${name}! Form demo berhasil diisi. Hubungkan ke backend/email untuk menerima pesan sungguhan.`;
  event.target.reset();
});
$$(".read-more").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  showToast(link.dataset.article);
}));
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 5200);
}
$("#year").textContent = new Date().getFullYear();
