document.getElementById("startBtn").addEventListener("click", function () {
  const exam = document.getElementById("examInput").value;

  if (!exam) {
    alert("Please enter an exam name");
    return;
  }

  function startMock() {
  const exam = document.getElementById("examInput").value.trim();

  if (!exam) {
    alert("Please enter an exam name");
    return;
  }

  window.location.href = `mock.html?exam=${encodeURIComponent(exam)}`;
}


  console.log("Starting mock for:", exam);

  document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const exam = params.get("exam");

  if (exam && document.getElementById("examTitle")) {
    document.getElementById("examTitle").innerText = `${exam} - Mock Test`;
  }
});


  // Later:
  // 1. Call backend API
  // 2. Load mock test page
});
