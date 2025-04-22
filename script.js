function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  
  // Set captcha on page load
  let currentCaptcha = generateCaptcha();
  document.getElementById("captchaText").textContent = currentCaptcha;
  

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting normally
  
    const appNumber = document.getElementById("appNumber").value;
    const password = document.getElementById("password").value;
    const captcha = document.getElementById("captcha").value;
  
    // Your desired fake credentials (you can change them later)
    if (appNumber === "250310351477" && password === "Shravan@20" && captcha === currentCaptcha) {
        document.querySelector(".refresh-icon").addEventListener("click", function () {
            currentCaptcha = generateCaptcha();
            document.getElementById("captchaText").textContent = currentCaptcha;
          });
          
      window.location.href = "result.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  