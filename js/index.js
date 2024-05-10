document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
    
        window.location.href = "dashboard.html";
    } else {
      
        document.getElementById("message").textContent = "tudo bem";
    }
});

