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

    function updatePages() {
        pages.forEach((p, i) => {
            p.classList.toggle('page-active', i === currentPage);
        });
    }

    function updateUI() {
        counter.textContent = (currentPage + 1) + ' / ' + totalPages;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }

    function showPage(index) {
        if (index < 0 || index >= totalPages) return;
        currentPage = index;
        updatePages();
        updateUI();
        book.querySelector('.page-active .page-content').scrollTop = 0;
    }

    function flipNext() {
        if (currentPage < totalPages - 1) showPage(currentPage + 1);
    }

    function flipPrev() {
        if (currentPage > 0) showPage(currentPage - 1);
    }

    prevBtn.addEventListener('click', flipPrev);
    nextBtn.addEventListener('click', flipNext);

    book.addEventListener('click', (e) => {
        if (e.target.closest('.book-nav-btn') || e.target.closest('.page-content')) return;
        const rect = book.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        clickX < rect.width / 2 ? flipPrev() : flipNext();
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
        heart.textContent = ['❤️', '💕', '💗', '💖', '💘', '🩷', '🩵'][Math.floor(Math.random() * 7)];
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

    updatePages();
    updateUI();
});
