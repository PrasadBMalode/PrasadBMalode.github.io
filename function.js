// // --- 1. Canvas Background Animation (Particles) ---
// const canvas = document.getElementById('bg-canvas');
// const ctx = canvas.getContext('2d');

// let width, height;
// let particles = [];

// function resize() {
//   width = canvas.width = window.innerWidth;
//   height = canvas.height = window.innerHeight;
// }

// class Particle {
//   constructor() {
//     this.x = Math.random() * width;
//     this.y = Math.random() * height;
//     this.vx = (Math.random() - 0.5) * 0.5;
//     this.vy = (Math.random() - 0.5) * 0.5;
//     this.size = Math.random() * 2 + 1;
//     this.color = `rgba(13, 202, 240, ${Math.random() * 0.5})`;
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;

//     if (this.x < 0 || this.x > width) this.vx *= -1;
//     if (this.y < 0 || this.y > height) this.vy *= -1;
//   }

//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// function initParticles() {
//   particles = [];
//   for (let i = 0; i < 50; i++) {
//     particles.push(new Particle());
//   }
// }

// function animateParticles() {
//   ctx.clearRect(0, 0, width, height);

//   particles.forEach((p, index) => {
//     p.update();
//     p.draw();

//     for (let j = index + 1; j < particles.length; j++) {
//       const p2 = particles[j];
//       const dx = p.x - p2.x;
//       const dy = p.y - p2.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < 150) {
//         ctx.strokeStyle = `rgba(13, 202, 240, ${1 - distance / 150})`;
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p2.x, p2.y);
//         ctx.stroke();
//       }
//     }
//   });

//   requestAnimationFrame(animateParticles);
// }

// window.addEventListener('resize', () => {
//   resize();
//   initParticles();
// });

// resize();
// initParticles();
// animateParticles();


// // For Email send 
// function sendMail() {
//   let params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_e9lqf9e", "template_o9onapj", params)
//     .then(() => {
//       alert("Email sent successfully!");
//       document.getElementById("contactForm").reset();
//     })
//     .catch((error) => {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send email!");
//     });
// }




// // --- 3. Toast Helper ---
// function showToast(message, type) {
//   const toastEl = document.getElementById('liveToast');
//   const toastBody = toastEl.querySelector('.toast-body');

//   toastEl.className = `toast align-items-center text-bg-${type} border-0`;
//   toastBody.innerHTML = message;

//   const toast = new bootstrap.Toast(toastEl);
//   toast.show();
// }

// // ---------------------------------------------------------------
//     // NEW JAVASCRIPT ADDED FOR CAPTCHA LOGIC
//     // ---------------------------------------------------------------
    
//     let captchaCode = '';
//     const captchaCanvas = document.getElementById('captchaCanvas');
//     const captchaCtx = captchaCanvas.getContext('2d');
//     const captchaInput = document.getElementById('captchaInput');
//     const btnContainer = document.querySelector('.btn-center');
//     const feedbackMsg = document.getElementById('captchaFeedback');

//     // Initialize
//     window.addEventListener('load', () => {
//       // Hide the submit button initially
//       btnContainer.style.display = 'none';
//       generateCaptcha();
//     });

//     // Generate Captcha Function
//     function generateCaptcha() {
//       // Clear canvas
//       captchaCtx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
      
//       // Background
//       captchaCtx.fillStyle = '#1e293b'; // Match your bg-card
//       captchaCtx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);

//       // Generate Random Characters
//       const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No confusing chars like I, 1, O, 0
//       captchaCode = '';
//       for (let i = 0; i < 6; i++) {
//         captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
//       }

//       // Draw Text
//       captchaCtx.font = 'bold 30px "Poppins", sans-serif';
//       captchaCtx.textBaseline = 'middle';
      
//       let x = 20;
//       for (let i = 0; i < captchaCode.length; i++) {
//         captchaCtx.save();
//         // Random rotation between -0.3 and 0.3 radians
//         const angle = (Math.random() - 0.5) * 0.6;
//         captchaCtx.translate(x + 15, 30);
//         captchaCtx.rotate(angle);
        
//         captchaCtx.fillStyle = '#0dcaf0'; // Accent color
//         captchaCtx.fillText(captchaCode[i], 0, 0);
//         captchaCtx.restore();
//         x += 30;
//       }

//       // Add Noise (Lines)
//       for (let i = 0; i < 7; i++) {
//         captchaCtx.strokeStyle = `rgba(13, 202, 240, ${Math.random() * 0.5})`; // Blue lines
//         captchaCtx.lineWidth = 1 + Math.random();
//         captchaCtx.beginPath();
//         captchaCtx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
//         captchaCtx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
//         captchaCtx.stroke();
//       }

//       // Add Noise (Dots)
//       for (let i = 0; i < 30; i++) {
//         captchaCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
//         captchaCtx.beginPath();
//         captchaCtx.arc(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height, 1, 0, 2 * Math.PI);
//         captchaCtx.fill();
//       }

//       // Reset Input field when captcha is refreshed
//       captchaInput.value = '';
//       btnContainer.style.display = 'none';
//       feedbackMsg.style.display = 'none';
//     }

//     // Listen for input in the Captcha field
//     captchaInput.addEventListener('input', function() {
//       const userVal = this.value.toUpperCase();
      
//       if (userVal === captchaCode) {
//         // Correct code
//         btnContainer.style.display = 'block';
//         feedbackMsg.style.display = 'none';
//       } else {
//         // Incorrect or incomplete
//         if (userVal.length >= 6) {
//             // If user has typed 6 chars but it's wrong, optionally show error
//             // feedbackMsg.style.display = 'block'; 
//         }
//         btnContainer.style.display = 'none';
//       }
//     });

//     // Allow refreshing captcha by clicking on the canvas itself
//     captchaCanvas.addEventListener('click', generateCaptcha);

//     // ---------------------------------------------------------------
//     // END OF CAPTCHA LOGIC
//     // ---------------------------------------------------------------





// // --- 1. Canvas Background Animation (Particles) ---
// const canvas = document.getElementById('bg-canvas');
// const ctx = canvas.getContext('2d');

// let width, height;
// let particles = [];

// function resize() {
//   width = canvas.width = window.innerWidth;
//   height = canvas.height = window.innerHeight;
// }

// class Particle {
//   constructor() {
//     this.x = Math.random() * width;
//     this.y = Math.random() * height;
//     this.vx = (Math.random() - 0.5) * 0.5;
//     this.vy = (Math.random() - 0.5) * 0.5;
//     this.size = Math.random() * 2 + 1;
//     this.color = `rgba(13, 202, 240, ${Math.random() * 0.5})`;
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;

//     if (this.x < 0 || this.x > width) this.vx *= -1;
//     if (this.y < 0 || this.y > height) this.vy *= -1;
//   }

//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// function initParticles() {
//   particles = [];
//   for (let i = 0; i < 50; i++) {
//     particles.push(new Particle());
//   }
// }

// function animateParticles() {
//   ctx.clearRect(0, 0, width, height);

//   particles.forEach((p, index) => {
//     p.update();
//     p.draw();

//     for (let j = index + 1; j < particles.length; j++) {
//       const p2 = particles[j];
//       const dx = p.x - p2.x;
//       const dy = p.y - p2.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);

//       if (distance < 150) {
//         ctx.strokeStyle = `rgba(13, 202, 240, ${1 - distance / 150})`;
//         ctx.lineWidth = 0.5;
//         ctx.beginPath();
//         ctx.moveTo(p.x, p.y);
//         ctx.lineTo(p2.x, p2.y);
//         ctx.stroke();
//       }
//     }
//   });

//   requestAnimationFrame(animateParticles);
// }

// window.addEventListener('resize', () => {
//   resize();
//   initParticles();
// });

// resize();
// initParticles();
// animateParticles();


// // --- 2. Email Send Function ---
// function sendMail() {
//   // Optional: CAPTCHA check before sending
//   if (captchaInput.value.toUpperCase() !== captchaCode) {
//     alert("Please enter the correct CAPTCHA!");
//     return;
//   }

//   let params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send("service_e9lqf9e", "template_o9onapj", params)
//     .then(() => {
//       alert("Email sent successfully!");
//       document.getElementById("contactForm").reset();
//       generateCaptcha(); // Refresh CAPTCHA after sending
//     })
//     .catch((error) => {
//       console.error("EmailJS Error:", error);
//       alert("Failed to send email!");
//     });
// }


// // --- 3. Toast Helper ---
// function showToast(message, type) {
//   const toastEl = document.getElementById('liveToast');
//   const toastBody = toastEl.querySelector('.toast-body');

//   toastEl.className = `toast align-items-center text-bg-${type} border-0`;
//   toastBody.innerHTML = message;

//   const toast = new bootstrap.Toast(toastEl);
//   toast.show();
// }


// // --- 4. CAPTCHA Logic ---
// let captchaCode = '';
// const captchaCanvas = document.getElementById('captchaCanvas');
// const captchaCtx = captchaCanvas.getContext('2d'); // ✅ FIXED
// const captchaInput = document.getElementById('captchaInput');
// const btnContainer = document.querySelector('.btn-center');
// const feedbackMsg = document.getElementById('captchaFeedback');

// // Initialize
// window.addEventListener('load', () => {
//   btnContainer.style.display = 'none';
//   feedbackMsg.style.display = 'none';
//   generateCaptcha();
// });

// // Generate CAPTCHA
// function generateCaptcha() {
//   // Clear canvas
//   captchaCtx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);

//   // Background
//   captchaCtx.fillStyle = '#1e293b';
//   captchaCtx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);

//   // Random characters
//   const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
//   captchaCode = '';
//   for (let i = 0; i < 6; i++) {
//     captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
//   }

//   // Draw text
//   captchaCtx.font = 'bold 30px "Poppins", sans-serif';
//   captchaCtx.textBaseline = 'middle';

//   let x = 20;
//   for (let i = 0; i < captchaCode.length; i++) {
//     captchaCtx.save();
//     const angle = (Math.random() - 0.5) * 0.6;
//     captchaCtx.translate(x + 15, 30);
//     captchaCtx.rotate(angle);

//     captchaCtx.fillStyle = '#0dcaf0';
//     captchaCtx.fillText(captchaCode[i], 0, 0);
//     captchaCtx.restore();
//     x += 30;
//   }

//   // Noise - lines
//   for (let i = 0; i < 7; i++) {
//     captchaCtx.strokeStyle = `rgba(13, 202, 240, ${Math.random() * 0.5})`;
//     captchaCtx.lineWidth = 1 + Math.random();
//     captchaCtx.beginPath();
//     captchaCtx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
//     captchaCtx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
//     captchaCtx.stroke();
//   }

//   // Noise - dots
//   for (let i = 0; i < 30; i++) {
//     captchaCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
//     captchaCtx.beginPath();
//     captchaCtx.arc(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height, 1, 0, 2 * Math.PI);
//     captchaCtx.fill();
//   }

//   // Reset input & hide button
//   captchaInput.value = '';
//   btnContainer.style.display = 'none';
//   feedbackMsg.style.display = 'none';
// }

// // Check CAPTCHA input
// captchaInput.addEventListener('input', function() {
//   const userVal = this.value.toUpperCase();

//   if (userVal === captchaCode) {
//     btnContainer.style.display = 'block';
//     feedbackMsg.style.display = 'none';
//   } else {
//     btnContainer.style.display = 'none';
//   }
// });

// // Refresh CAPTCHA on canvas click
// captchaCanvas.addEventListener('click', generateCaptcha);






// --- 1. Canvas Background Animation (Particles) ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.color = `rgba(13, 202, 240, ${Math.random() * 0.5})`;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, index) => {
    p.update();
    p.draw();

    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.strokeStyle = `rgba(13, 202, 240, ${1 - distance / 150})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resize();
  initParticles();
});

resize();
initParticles();
animateParticles();



// --- 2. Email Send Function ---
function sendMail() {
  // Check CAPTCHA before sending
  if (captchaInput.value.toUpperCase() !== captchaCode) {
    alert("Please enter the correct CAPTCHA!");
    return;
  }

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_e9lqf9e", "template_o9onapj", params)
    .then(() => {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset();
      generateCaptcha(); // Refresh CAPTCHA after sending
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send email!");
    });
}



// --- 3. Toast Helper ---
function showToast(message, type) {
  const toastEl = document.getElementById('liveToast');
  const toastBody = toastEl.querySelector('.toast-body');

  toastEl.className = `toast align-items-center text-bg-${type} border-0`;
  toastBody.innerHTML = message;

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}



// --- 4. CAPTCHA Logic ---
let captchaCode = '';
const captchaCanvas = document.getElementById('captchaCanvas');
captchaCanvas.width = 200;  
captchaCanvas.height = 60; 
const captchaCtx = captchaCanvas.getContext('2d'); 
const captchaInput = document.getElementById('captchaInput');
const btnContainer = document.querySelector('.btn-center');
const feedbackMsg = document.getElementById('captchaFeedback');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  btnContainer.style.display = 'none';
  feedbackMsg.style.display = 'none';
  generateCaptcha();
});

// Generate CAPTCHA
function generateCaptcha() {
  // Clear canvas
  captchaCtx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);

  // Background
  captchaCtx.fillStyle = '#1e293b';
  captchaCtx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);

  // Random characters
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  // const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";

  captchaCode = '';
  for (let i = 0; i < 6; i++) {
    captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Draw text
  captchaCtx.font = 'bold 30px "Poppins", sans-serif';
  captchaCtx.textBaseline = 'middle';

  let x = 20;
  for (let i = 0; i < captchaCode.length; i++) {
    captchaCtx.save();
    const angle = (Math.random() - 0.5) * 0.6;
    captchaCtx.translate(x + 15, 30);
    captchaCtx.rotate(angle);

    captchaCtx.fillStyle = '#0dcaf0';
    captchaCtx.fillText(captchaCode[i], 0, 0);
    captchaCtx.restore();
    x += 30;
  }

  // Noise - lines
  for (let i = 0; i < 7; i++) {
    captchaCtx.strokeStyle = `rgba(13, 202, 240, ${Math.random() * 0.5})`;
    captchaCtx.lineWidth = 1 + Math.random();
    captchaCtx.beginPath();
    captchaCtx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
    captchaCtx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
    captchaCtx.stroke();
  }

  // Noise - dots
  for (let i = 0; i < 30; i++) {
    captchaCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    captchaCtx.beginPath();
    captchaCtx.arc(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height, 1, 0, 2 * Math.PI);
    captchaCtx.fill();
  }

  // Reset input & hide button
  captchaInput.value = '';
  btnContainer.style.display = 'none';
  feedbackMsg.style.display = 'none';
}

// Check CAPTCHA input
captchaInput.addEventListener('input', function() {
  const userVal = this.value.toUpperCase();

  if (userVal === captchaCode) {
    btnContainer.style.display = 'block';
    feedbackMsg.style.display = 'none';
  } else {
    btnContainer.style.display = 'none';

    // Optional feedback for wrong CAPTCHA if 6 characters entered
    if (userVal.length === 6 && userVal !== captchaCode) {
      feedbackMsg.style.display = 'block';
      feedbackMsg.textContent = "Incorrect CAPTCHA!";
    } else {
      feedbackMsg.style.display = 'none';
    }
  }
});

// Refresh CAPTCHA on canvas click
captchaCanvas.addEventListener('click', generateCaptcha);


