// SWITCH FORMS
function showSignup() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("signupBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

// SIGNUP FUNCTION
function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name === "" || email === "" || password === "") {
    alert("⚠️ Please fill all fields");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("✅ Signup Successful!");
  showLogin();
}

// LOGIN FUNCTION
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("❌ No user found. Please signup first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("🎉 Login Successful!");
    window.location.href = "index.html"; // redirect
  } else {
    alert("❌ Invalid credentials");
  }
}