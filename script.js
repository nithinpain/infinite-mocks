document.getElementById("startBtn").addEventListener("click", function () {
  const exam = document.getElementById("examInput").value;

  if (!exam) {
    alert("Please enter an exam name");
    return;
  }

  console.log("Starting mock for:", exam);

  // Later:
  // 1. Call backend API
  // 2. Load mock test page
});
