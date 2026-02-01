// DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gif = document.getElementById('gif');
const successPage = document.getElementById('successPage');
const heartsContainer = document.getElementById('heartsContainer');
const confetti = document.getElementById('confetti');

// GIF URLs for different states
const gifs = {
    initial: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXlqZDhndXhqMWtxdGp0cjBtZ3FqcWJrNGV6cGRzZHdqY3lkMXFwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif',
    sad: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNxeG5kbDZ5dDB1Y3YwbGN3dWoyZGhlbWV5ZGo0aGdnbjlzYXE3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif',
    crying: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXl1cXhxMTF0bGN5YzRoM3lwYW1waGp2cWs3MzYxc3o4dGN6bnhqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kdiLf3LHFIubA6vDC1/giphy.gif'
};

// Track button size and no button clicks
let yesBtnSize = 1;
let noBtnClicks = 0;
const noBtnTexts = [
    'No', 
    'Are you sure?', 
    'Really?', 
    'Think again!', 
    'Please? 🥺', 
    'Pretty please? 🥺',
    'You might regret this...',
    'Last chance to reconsider!',
    'Don\'t be so cruel 💔',
    'My heart is breaking...',
    'Still no? 😢',
    'I won\'t give up!',
    'One final time?',
    'One more chance?'
];

// Create floating hearts
function createFloatingHearts() {
    const heartEmojis = ['❤️', '💕', '💖', '💝', '💗', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 500);
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b9d', '#ffc0d3', '#c44569', '#ffffff', '#ffb6c1', '#ff69b4'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = Math.random() * 3 + 's';
            piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confetti.appendChild(piece);
        }, i * 30);
    }
}

// Handle "No" button click
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // If we've reached the last message, show popup and reload
    if (noBtnClicks === noBtnTexts.length - 1) {
        setTimeout(() => {
            alert("Ok, Let's just start over...");
            location.reload();
        }, 100);
        return;
    }
    
    // Increment click counter
    noBtnClicks++;
    
    // Change button text
    noBtn.textContent = noBtnTexts[noBtnClicks];
    
    // Change GIF based on clicks
    if (noBtnClicks >= 3 && noBtnClicks < 8) {
        gif.src = gifs.sad;
    } else if (noBtnClicks >= 8) {
        gif.src = gifs.crying;
    }
    
    // Grow "Yes" button and keep it that size
    yesBtnSize += 0.15;
    
    // Set CSS variable for current scale (used in animation)
    yesBtn.style.setProperty('--current-scale', yesBtnSize);
    
    // Apply the new size
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    
    // Trigger bounce animation
    yesBtn.classList.add('bounce');
    setTimeout(() => {
        yesBtn.classList.remove('bounce');
    }, 500);
});

// Handle "Yes" button click
yesBtn.addEventListener('click', () => {
    successPage.classList.add('show');
    createConfetti();
});

// Initialize
createFloatingHearts();
