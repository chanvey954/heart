/* ============================================================
   FLIPBOOK — Love Story Book
   Page flip animation with keyboard support
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    const heartsBg = document.getElementById('heartsBg');

    let currentPage = 0;
    const totalPages = pages.length;

    // Update display
    function updateDisplay() {
        currentPageEl.textContent = currentPage + 1;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages;
    }

    // Flip to next page
    function flipNext() {
        if (currentPage < totalPages) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
            updateDisplay();
        }
    }

    // Flip to previous page
    function flipPrev() {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
            updateDisplay();
        }
    }

    // Button click handlers
    nextBtn.addEventListener('click', flipNext);
    prevBtn.addEventListener('click', flipPrev);

    // Click on page to flip
    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index === currentPage) {
                flipNext();
            } else if (index === currentPage - 1) {
                flipPrev();
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            flipNext();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            flipPrev();
        }
    });

    // Initialize
    totalPagesEl.textContent = totalPages;
    updateDisplay();

    // Floating hearts background
    function createHeart() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = ['❤️', '💕', '💗', '💖', '💘', '🩷', '🤍'][Math.floor(Math.random() * 7)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (12 + Math.random() * 16) + 'px';
        heart.style.setProperty('--dur', (8 + Math.random() * 10) + 's');
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsBg.appendChild(heart);

        heart.addEventListener('animationend', () => heart.remove());
    }

    // Spawn initial hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 300);
    }

    // Continuous hearts
    setInterval(createHeart, 1200);

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    book.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    book.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                flipNext();
            } else {
                flipPrev();
            }
        }
    }, { passive: true });
});
