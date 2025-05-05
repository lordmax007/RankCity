function loadUser() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      window.location.href = "index.html";
      return;
    }
    document.getElementById("welcome").innerText = `Olá, ${user.name}`;
    renderRanking();
  }
  
  function updateScore(points) {
    let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    const index = users.findIndex(u => u.name === currentUser.name);
    users[index].score += points;
    currentUser.score += points;
  
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  
    renderRanking();
  }
  
  // 🧠 Quiz
  function answerQuiz(answer) {
    if (answer === 'Brasília') {
      alert("✅ Correto! +10 pontos");
      updateScore(10);
    } else {
      alert("❌ Errado! Tente novamente.");
    }
  }
  
  // 🧠 Palavra secreta
  function checkWord() {
    const word = document.getElementById("secretWord").value.trim().toLowerCase();
    if (word === "javascript") {
      alert("🟢 Palavra correta! +5 pontos");
      updateScore(5);
    } else {
      alert("🚫 Palavra incorreta.");
    }
  }
  
  // 🧠 Matemática
  function checkMath() {
    const result = Number(document.getElementById("mathAnswer").value);
    if (result === 36) {
      alert("🎉 Correto! +7 pontos");
      updateScore(7);
    } else {
      alert("❌ Resposta errada.");
    }
  }
  
  // Ranking
  function renderRanking() {
    const rankingList = document.getElementById("rankingList");
    rankingList.innerHTML = "";
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.sort((a, b) => b.score - a.score);
  
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.score} pontos`;
      rankingList.appendChild(li);
    });
  }
  
  window.onload = loadUser;
  