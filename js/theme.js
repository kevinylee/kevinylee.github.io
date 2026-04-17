const hour = new Date().getHours();
const isNight = hour < 6 || hour >= 20; // night = before 6am or after 8pm

if (isNight) {
  document.documentElement.classList.add('night');
}
