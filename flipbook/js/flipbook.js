/* ============================================================
   FLIPBOOK — Love Story Book
   Click the book to flip pages
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const pages = document.querySelectorAll('.page');
    const heartsBg = document.getElementById('heartsBg');

    let currentPage = 0;
    const totalPages = pages.length;

    function flipNext() {
        if (currentPage < totalPages) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
        }
    }

    function flipPrev() {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
        }
    }

    /* Click on book: left half = prev, right half = next */
    book.addEventListener('click', (e) => {
        const rect = book.getBoundingClientRect();
        const clickX = e.clientX - rect.left;

        if (clickX < rect.width / 2) {
            flipPrev();
        } else {
            flipNext();
        }
    });

    /* Keyboard */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            flipNext();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            flipPrev();
        }
    });

    /* Touch swipe */
    let touchStartX = 0;

    book.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    book.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? flipNext() : flipPrev();
        }
    }, { passive: true });

    /* Floating hearts */
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

    for (let i = 0; i < 12; i++) {
        setTimeout(createHeart, i * 300);
    }
    setInterval(createHeart, 1200);
});
