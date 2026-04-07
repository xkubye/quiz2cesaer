function submitQuiz() {
  let answers = [];

  for (let i = 1; i <= 8; i++) {
    let selected = document.querySelector(`input[name="q${i}"]:checked`);

    if (!selected) {
      alert("Isi semua pertanyaan dulu ya 💙");
      return;
    }

    answers.push(selected.value);
  }

  let code = answers.join("-");

  // tampilkan ke popup
  document.getElementById("popupResult").innerHTML =
    "<b>" + code + "</b>";

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}