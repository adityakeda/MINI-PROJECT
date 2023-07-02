document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;
    if (currentPage.includes("index.html")) {
      const form = document.querySelector(".form.login");
      const emailInput = form.querySelector('input[type="email"]');
      const passwordInput = form.querySelector('input[type="password"]');
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Get the input values
        const email = emailInput.value;
        const password = passwordInput.value;
  
        // Create the request body
        const requestBody = JSON.stringify({ username: email, password });
  
        // Make the API request
        fetch("https://freaky-api.vercel.app/Miniproject/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response
            console.log(data);
            if (data.message === "success") {
              // Change the login button in index.html
              window.location.href = "login.html"; 
            }
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      });
    }
  });