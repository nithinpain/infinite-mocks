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

  // Later:
  // 1. Call backend API
  // 2. Load mock test page
});
