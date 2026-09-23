const TITLES = {
  intro: "Opening Introduction",
  notes: "Speaking Notes",
  "aws-services": "AWS Services Reference",
  breakout: "Cloud Internet Breakout"
};

const PATHS = {
  intro: "content/intro.html",
  notes: "content/notes.html",
  "aws-services": "content/aws-services.html",
  breakout: "content/breakout.html"
};

const overlay = document.getElementById("overlay");
const frame = document.getElementById("contentFrame");
const panelTitle = document.getElementById("panel-title");
const closeBtn = document.getElementById("closeBtn");
const grid = document.getElementById("grid");

function openBox(key) {
  const path = PATHS[key];
  if (!path) return;
  panelTitle.textContent = TITLES[key] || "";
  frame.src = path;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  overlay.hidden = true;
  frame.src = "about:blank";
  document.body.style.overflow = "";
}

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".box");
  if (btn) openBox(btn.dataset.key);
});

closeBtn.addEventListener("click", closeOverlay);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closeOverlay();
});
