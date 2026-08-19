'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const pages = document.querySelectorAll('.page');
    const heartsBg = document.getElementById('heartsBg');
    const prevBtn = document.getElementById('flipPrev');
    const nextBtn = document.getElementById('flipNext');
    const counter = document.getElementById('flipCounter');

    let currentPage = 0;
    const totalPages = pages.length;

    function updateUI() {
        counter.textContent = `${currentPage + 1} / ${totalPages}`;
        prevBtn.disabled = currentPage === 0;
        prevBtn.style.opacity = currentPage === 0 ? '0.35' : '1';
        nextBtn.disabled = currentPage >= totalPages - 1;
        nextBtn.style.opacity = currentPage >= totalPages - 1 ? '0.35' : '1';
    }

    function flipNext() {
        if (currentPage < totalPages - 1) {
            pages[currentPage].classList.add('flipped');
            currentPage++;
            updateUI();
        }
    }

    function flipPrev() {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].classList.remove('flipped');
            updateUI();
        }
    }

    prevBtn.addEventListener('click', flipPrev);
    nextBtn.addEventListener('click', flipNext);

    book.addEventListener('click', (e) => {
        if (e.target.closest('.book-nav-btn')) return;
        const rect = book.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
            flipPrev();
        } else {
            flipNext();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); flipNext(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); flipPrev(); }
    });

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

    updateUI();
});
