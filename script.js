function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  // Store in localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userCourse", course);

  // Show details
  document.getElementById("showName").textContent = name;
  document.getElementById("showEmail").textContent = email;
  document.getElementById("showCourse").textContent = course;

  document.getElementById("modal").style.display = "none";
  document.getElementById("result").style.display = "block";
});

// Optional: load stored values if they exist (on page load)
window.addEventListener("DOMContentLoaded", () => {
  const storedName = localStorage.getItem("userName");
  const storedEmail = localStorage.getItem("userEmail");
  const storedCourse = localStorage.getItem("userCourse");

  if (storedName && storedEmail && storedCourse) {
    document.getElementById("showName").textContent = storedName;
    document.getElementById("showEmail").textContent = storedEmail;
    document.getElementById("showCourse").textContent = storedCourse;
    document.getElementById("result").style.display = "block";
  }
});