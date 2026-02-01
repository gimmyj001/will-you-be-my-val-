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
let yesBtnSize = 1.2;
let noBtnClicks = 0;
const noBtnTexts = ['No', 'Are you sure?', 'Really?', 'Think again!', 'Please? 🥺', 'Pretty please? 🥺', 'One more chance?'];

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

// Move "No" button randomly
function moveNoButton() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Handle "No" button hover
noBtn.addEventListener('mouseenter', () => {
    noBtnClicks++;
    
    // Change button text
    if (noBtnClicks < noBtnTexts.length) {
        noBtn.textContent = noBtnTexts[noBtnClicks];
    }
    
    // Change GIF based on clicks
    if (noBtnClicks >= 3 && noBtnClicks < 5) {
        gif.src = gifs.sad;
    } else if (noBtnClicks >= 5) {
        gif.src = gifs.crying;
    }
    
    // Move button
    moveNoButton();
    
    // Grow "Yes" button
    yesBtnSize += 0.1;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
});

// Handle "No" button click (for mobile)
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    noBtnClicks++;
    
    if (noBtnClicks < noBtnTexts.length) {
        noBtn.textContent = noBtnTexts[noBtnClicks];
    }
    
    if (noBtnClicks >= 3 && noBtnClicks < 5) {
        gif.src = gifs.sad;
    } else if (noBtnClicks >= 5) {
        gif.src = gifs.crying;
    }
    
    moveNoButton();
    
    yesBtnSize += 0.1;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
});

// Handle "Yes" button click
yesBtn.addEventListener('click', () => {
    successPage.classList.add('show');
    createConfetti();
});

// Initialize
createFloatingHearts();

// Prevent context menu on buttons (better mobile experience)
noBtn.addEventListener('contextmenu', (e) => e.preventDefault());
yesBtn.addEventListener('contextmenu', (e) => e.preventDefault());
