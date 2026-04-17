const words = ['instant ramen', 'Pad Thai', 'tennis', 'basketball', 'Avengers: End Game', 'Pho'];
let index = 0;
const el = document.getElementById('cycling-word');

function cycleWord() {
  // Exit upward
  el.classList.remove('visible');
  el.classList.add('exit');

  setTimeout(() => {
    // Disable transition so the reset to bottom is instant
    el.style.transition = 'none';
    el.classList.remove('exit');
    el.textContent = words[index];
    index = (index + 1) % words.length;

    // Force reflow so the browser registers the bottom position
    void el.offsetWidth;

    // Re-enable transition and enter from bottom
    el.style.transition = '';
    el.classList.add('visible');
  }, 400);
}

// Show first word immediately, then cycle
el.textContent = words[index];
index = 1;
el.classList.add('visible');

setInterval(cycleWord, 1800);
