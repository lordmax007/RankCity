function login() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      alert("Digite um nome de usuário válido.");
      return;
    }
  
    // Simulando banco com localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Verifica se usuário existe
    let user = users.find(u => u.name === username);
    if (!user) {
      user = { name: username, score: 0 };
      users.push(user);
    }
  
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "dashboard.html";
  }
  