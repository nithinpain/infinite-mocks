/* =========================
   HOMEPAGE LOGIC
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");

  if (startBtn) {
    startBtn.addEventListener("click", startMock);
  }

  loadExamTitle();
});

/* =========================
   START MOCK FUNCTION
========================= */

function startMock() {
  const examInput = document.getElementById("examInput");
  if (!examInput) return;

  const exam = examInput.value.trim();

  if (!exam) {
    alert("Please enter an exam name");
    return;
  }

  window.location.href = `mock.html?exam=${encodeURIComponent(exam)}`;
}

/* =========================
   LOAD EXAM TITLE ON MOCK PAGE
========================= */

function loadExamTitle() {
  const examTitle = document.getElementById("examTitle");
  if (!examTitle) return;

  const params = new URLSearchParams(window.location.search);
  const exam = params.get("exam");

  if (exam) {
    examTitle.innerText = `${exam} - Mock Test`;
  }
}
