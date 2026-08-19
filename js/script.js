/* ============================================================
   LOVE LANDING PAGE — script.js
   ============================================================
   To customize this page, edit ONLY the loveConfig object below.
   ============================================================ */

'use strict';

const loveConfig = {
    /* ---------- Names ---------- */
    yourName: 'RyRy',
    partnerName: 'Vey Vey',

    /* ---------- Relationship start date (YYYY-MM-DD) ---------- */
    startDate: '2026-05-01',

    /* ---------- Hero text ---------- */
    heroSubtitle: 'Our Little Love Story',
    heroMessage: 'រាល់ពេលវេលាជាមួយអូនគឺជាអនុស្សាវរីយ៍ដ៏ស្រស់ស្អាត។',

    /* ---------- Story ---------- */
    storyMessage: 'មនុស្សខ្លះចូលមកក្នុងជីវិតយើង ហើយស្ងប់ស្ងាត់ក្លាយជាផ្នែកដែលយើងចូលចិត្តបំផុតនៃរាល់ថ្ងៃ។',

    /* ---------- Gallery (image paths, date, title, note) ---------- */
    memories: [
        {
            image: 'assets/images/couple1.png',
            date: '២០២៥ · អនុស្សាវរីយ៍',
            caption: 'អនុស្សាវរីយ៍ដ៏ពិសេស 💝',
            note: 'ពេលវេលាដ៏មានតម្លៃជាមួយអូន។'
        },
        {
            image: 'assets/images/image1.png',
            date: '២០២៥ · រូបភាពទី ១',
            caption: 'រូបភាពដំបូង ❤️',
            note: 'រូបភាពដំបូងរបស់យើង។'
        },
        {
            image: 'assets/images/image2.png',
            date: '២០២៥ · រូបភាពទី ២',
            caption: 'អនុស្សាវរីយ៍ថ្មី 🌸',
            note: 'រឿងរបស់យើងកំពុងចាប់ផ្តើម។'
        },
        {
            image: 'assets/images/image3.png',
            date: '២០២៥ · រូបភាពទី ៣',
            caption: 'ថ្ងៃដ៏ស្រស់ស្អាត 💕',
            note: 'ថ្ងៃនេះពិតជាពិសេស។'
        },
        {
            image: 'assets/images/image5.png',
            date: '២០២៥ · រូបភាពទី ៥',
            caption: 'ពេលវេលាដ៏មានតម្លៃ 💖',
            note: 'យើងបានចំណាយពេលវេលាដ៏ស្រស់ស្អាតជាមួយគ្នា។'
        },
        {
            image: 'assets/images/image6.png',
            date: '២០២៥ · រូបភាពទី ៦',
            caption: 'ដំណើរជាមួយគ្នា 🌿',
            note: 'ដំណើររបស់យើងកំពុងបន្ត។'
        },
        {
            image: 'assets/images/image7.png',
            date: '២០២៥ · រូបភាពទី ៧',
            caption: 'អនុស្សាវរីយ៍ដ៏ស្រស់ស្អាត 💝',
            note: 'អនុស្សាវរីយ៍ដែលខ្ញុំស្រឡាញ់។'
        },
        {
            image: 'assets/images/image8.png',
            date: '២០២៥ · រូបភាពទី ៨',
            caption: 'សុបិនដ៏ស្រស់ស្អាត 🌙',
            note: 'សុបិនរបស់ខ្ញុំពេញដោយអូន។'
        },
        {
            image: 'assets/images/image9.png',
            date: '២០២៥ · រូបភាពទី ៩',
            caption: 'ស្នាមញញឹមរបស់អូន ☀️',
            note: 'ស្នាមញញឹមរបស់អូនធ្វើឱ្យថ្ងៃរបស់ខ្ញុំភ្លឺ។'
        },
        {
            image: 'assets/images/image10.png',
            date: '២០២៥ · រូបភាពទី ១០',
            caption: 'ក្តីស្រឡាញ់គ្មានដែនកំណត់ 🌹',
            note: 'ស្រឡាញ់អូនគ្មានដែនកំណត់។'
        },
        {
            image: 'assets/images/image11.png',
            date: '២០២៥ · រូបភាពទី ១១',
            caption: 'ជាមួយអូនគ្រប់ពេល 💞',
            note: 'រាល់ពេលវេលាជាមួយអូនគឺជាអនុស្សាវរីយ៍ដ៏មានតម្លៃ។'
        },
        {
            image: 'assets/images/image12.png',
            date: '២០២៥ · រូបភាពទី ១២',
            caption: 'ថ្ងៃដ៏មានន័យ 💫',
            note: 'ថ្ងៃនេះពិតជាមានន័យសម្រាប់ខ្ញុំ។'
        },
        {
            image: 'assets/images/image13.png',
            date: '២០២៥ · រូបភាពទី ១៣',
            caption: 'អនុស្សាវរីយ៍ថ្មី 💕',
            note: 'អនុស្សាវរីយ៍ថ្មីជាមួយអូន។'
        },
        {
            image: 'assets/images/image14.png',
            date: '២០២៥ · រូបភាពទី ១៤',
            caption: 'ពេលវេលាដ៏ពិសេស 💝',
            note: 'ពេលវេលាដែលយើងចែករំលែក។'
        },
        {
            image: 'assets/images/image15.png',
            date: '២០២៥ · រូបភាពទី ១៥',
            caption: 'ដំណើរក្រើបរបស់យើង 🌸',
            note: 'ដំណើររបស់យើងពិតជាស្រស់ស្អាត។'
        },
        {
            image: 'assets/images/image16.png',
            date: '២០២៥ · រូបភាពទី ១៦',
            caption: 'ស្នេហ៍ដ៏ស្រស់ស្អាត 💗',
            note: 'ស្នេហ៍របស់យើងដូចផ្កាយ។'
        },
        {
            image: 'assets/images/image17.png',
            date: '២០២៥ · រូបភាពទី ១៧',
            caption: 'ថ្ងៃដ៏ភ្លឺស្វាង ☀️',
            note: 'ថ្ងៃនេះភ្លឺដូចស្នាមញញឹមរបស់អូន។'
        },
        {
            image: 'assets/images/image18.png',
            date: '២០២៥ · រូបភាពទី ១៨',
            caption: 'អនុស្សាវរីយ៍ដ៏មានតម្លៃ 💖',
            note: 'អនុស្សាវរីយ៍ដែលខ្ញុំមិនភ្លេច។'
        },
        {
            image: 'assets/images/image19.png',
            date: '២០២៥ · រូបភាពទី ១៩',
            caption: 'ពេលវេលាដ៏រីករាយ 💞',
            note: 'ពេលវេលាជាមួយអូនគឺរីករាយ។'
        },
        {
            image: 'assets/images/image20.png',
            date: '២០២៥ · រូបភាពទី ២០',
            caption: 'ស្នេហ៍គ្មានដែនកំណត់ 🌹',
            note: 'ស្នេហ៍របស់យើងគ្មានដែនកំណត់។'
        },
        {
            image: 'assets/images/image21.png',
            date: '២០២៥ · រូបភាពទី ២១',
            caption: 'ថ្ងៃដ៏ពិសេស 💝',
            note: 'ថ្ងៃនេះពិតជាពិសេសសម្រាប់យើង។'
        },
        {
            image: 'assets/images/image23.png',
            date: '២០២៥ · រូបភាពទី ២៣',
            caption: 'អនុស្សាវរីយ៍ដ៏ស្រស់ស្អាត 💕',
            note: 'អនុស្សាវរីយ៍ដែលយើងរក្សាទុក។'
        },
        {
            image: 'assets/images/image24.png',
            date: '២០២៥ · រូបភាពទី ២៤',
            caption: 'ដំណើរជាមួយអូន 🌿',
            note: 'ដំណើររបស់យើងមិនឈប់ឡើយ។'
        },
        {
            image: 'assets/images/image25.png',
            date: '២០២៥ · រូបភាពទី ២៥',
            caption: 'ស្នាមញញឹមដ៏ស្រស់ស្អាត 😊',
            note: 'ស្នាមញញឹមរបស់អូនធ្វើឱ្យខ្ញុំសប្បាយចិត្ត។'
        },
        {
            image: 'assets/images/image26.png',
            date: '២០២៥ · រូបភាពទី ២៦',
            caption: 'ពេលវេលាដ៏រីករាយ 💗',
            note: 'ពេលវេលាដែលយើងចូលចិត្តបំផុត។'
        },
        {
            image: 'assets/images/image27.png',
            date: '២០២៥ · រូបភាពទី ២៧',
            caption: 'អនុស្សាវរីយ៍ដ៏មានន័យ 💖',
            note: 'អនុស្សាវរីយ៍ដែលមានន័យសម្រាប់យើង។'
        },
        {
            image: 'assets/images/image28.png',
            date: '២០២៥ · រូបភាពទី ២៨',
            caption: 'ស្នេហ៍ដ៏ពិតប្រាកដ 💝',
            note: 'ស្នេហ៍របស់យើងពិតជាពិសេស។'
        },
        {
            image: 'assets/images/image29.png',
            date: '២០២៥ · រូបភាពទី ២៩',
            caption: 'ថ្ងៃដ៏ស្រស់ស្អាត 🌸',
            note: 'ថ្ងៃនេះស្រស់ស្អាតដូចអូន។'
        },
        {
            image: 'assets/images/image30.png',
            date: '២០២៥ · រូបភាពទី ៣០',
            caption: 'អនុស្សាវរីយ៍ចុងក្រោយ 💕',
            note: 'អនុស្សាវរីយ៍ដែលយើងរក្សាទុកជារៀងរហូត។'
        },
        {
            image: 'assets/images/image31.png',
            date: 'ថ្មី · image31',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image32.png',
            date: 'ថ្មី · image32',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image33.png',
            date: 'ថ្មី · image33',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image34.png',
            date: 'ថ្មី · image34',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image35.png',
            date: 'ថ្មី · image35',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image36.png',
            date: 'ថ្មី · image36',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image37.png',
            date: 'ថ្មី · image37',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image38.png',
            date: 'ថ្មី · image38',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image39.png',
            date: 'ថ្មី · image39',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image40.png',
            date: 'ថ្មី · image40',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image41.png',
            date: 'ថ្មី · image41',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image42.png',
            date: 'ថ្មី · image42',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image43.png',
            date: 'ថ្មី · image43',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image44.png',
            date: 'ថ្មី · image44',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image46.png',
            date: 'ថ្មី · image46',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image47.png',
            date: 'ថ្មី · image47',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image48.png',
            date: 'ថ្មី · image48',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image49.png',
            date: 'ថ្មី · image49',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image50.png',
            date: 'ថ្មី · image50',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image51.png',
            date: 'ថ្មី · image51',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image52.png',
            date: 'ថ្មី · image52',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image53.png',
            date: 'ថ្មី · image53',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image54.png',
            date: 'ថ្មី · image54',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image55.png',
            date: 'ថ្មី · image55',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image56.png',
            date: 'ថ្មី · image56',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
        {
            image: 'assets/images/image57.png',
            date: 'ថ្មី · image57',
            caption: 'រូបភាពថ្មី ❤️',
            note: 'រូបភាពដែលទើបបន្ថែម។'
        },
    ],

    /* ---------- Journey timeline (May → August) ---------- */
    journey: {
        heading: 'ដំណើររបស់យើងរួមគ្នា ❤️',
        subtitle: 'ពីខែ ៥ ដល់ខែ ៨ — រាល់ខែមានអនុស្សាវរីយ៍ពិសេសរបស់យើង',
        items: [
            {
                month: 'ខែ ៥ ឧសភា',
                emoji: '❤️',
                image: 'assets/images/image2.png',
                description: 'ចាប់ផ្តើមស្គាល់ និងទាក់ទងគ្នា ❤️'
            },
            {
                month: 'ខែ ៦ មិថុនា',
                emoji: '💕',
                image: 'assets/images/image3.png',
                description: 'ចាប់ផ្តើមស្គាល់គ្នាកាន់តែច្រើន និងបង្កើតអនុស្សាវរីយ៍ថ្មីៗ 💕'
            },
            {
                month: 'ខែ ៧ កក្កដា',
                emoji: '💗',
                image: 'assets/images/image5.png',
                description: 'ទំនាក់ទំនងកាន់តែជិតស្និទ្ធ និងមានពេលវេលាពិសេសជាមួយគ្នា 💗'
            },
            {
                month: 'ខែ ៨ សីហា',
                emoji: '💖',
                image: 'assets/images/image6.png',
                description: 'បន្តបង្កើតអនុស្សាវរីយ៍ល្អៗ និងរក្សាទុកពេលវេលាពិសេសជាមួយគ្នា 💖'
            }
        ]
    }
};

/* ------------------------------------------------------------ */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

document.addEventListener('DOMContentLoaded', () => {
    initConfig();
    initNav();
    initSmoothScroll();
    initSparkles();
    initHearts();
    initBgHearts();
    initPetals();
    initStory();
    initJourney();
    initLightbox();
    initGallery();
    initGalleryArrows();
    initCounter();
    initReveal();
    initActiveNav();
});

/* ============================================================
   1. CONFIG-DRIVEN CONTENT
   ============================================================ */
function initConfig() {
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText('heroName1', loveConfig.yourName);
    setText('heroName2', loveConfig.partnerName);
    setText('heroMessage', loveConfig.heroMessage);
    setText('heroSubtitle', loveConfig.heroSubtitle);
    setText('footerNames', `${loveConfig.yourName} ❤️ ${loveConfig.partnerName}`);

    const sinceDate = $('#sinceDate');
    if (sinceDate) {
        const d = new Date(`${loveConfig.startDate}T00:00:00`);
        if (!isNaN(d.getTime())) {
            sinceDate.textContent = d.toLocaleDateString('km-KH', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }
    }

}

/* ============================================================
   2. MOBILE NAVIGATION
   ============================================================ */
function initNav() {
    const nav = $('#nav');
    const toggle = $('#navToggle');
    const menu = $('#navMenu');

    const updateAria = () => {
        const isOpen = menu.classList.contains('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'បិទម៉ឺនុយ' : 'បើកម៉ឺនុយ');
    };

    toggle.addEventListener('click', () => {
        menu.classList.toggle('is-open');
        toggle.classList.toggle('is-active', menu.classList.contains('is-open'));
        updateAria();
    });

    // Close menu after choosing a section (and when resizing back to desktop)
    $$('.nav__link', menu).forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-open');
            toggle.classList.remove('is-active');
            updateAria();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('is-open');
            toggle.classList.remove('is-active');
            updateAria();
        }
    });

    // Solid background once scrolled
    const onScroll = () => {
        nav.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ============================================================
   3. SMOOTH SCROLLING
   ============================================================ */
function initSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const id = link.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });
}

/* ============================================================
   4. SPARKLES (hero)
   ============================================================ */
function initSparkles() {
    const wrap = $('#sparkles');
    if (!wrap) return;

    const COUNT = 14;
    for (let i = 0; i < COUNT; i++) {
        const s = document.createElement('span');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 90 + '%';
        s.style.width = s.style.height = (2 + Math.random() * 4) + 'px';
        s.style.setProperty('--dur', (3 + Math.random() * 4) + 's');
        s.style.animationDelay = (Math.random() * 4) + 's';
        wrap.appendChild(s);
    }
}

/* ============================================================
   5. FLOATING HEARTS
   ============================================================ */
const HEART_EMOJIS = ['❤️', '💕', '💗', '💖', '💘', '🩷', '🩵'];
const MAX_HEARTS = 14;

function initHearts() {
    const wrap = $('#hearts');
    if (!wrap) return;

    let active = 0;

    const spawn = () => {
        if (active >= MAX_HEARTS) return;

        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];

        const size = 14 + Math.random() * 20;
        heart.style.fontSize = size + 'px';
        heart.style.left = (8 + Math.random() * 84) + '%';
        heart.style.setProperty('--float-x', (Math.random() * 100 - 50) + 'px');
        heart.style.setProperty('--dur', (7 + Math.random() * 8) + 's');
        heart.style.animationDelay = (Math.random() * 1.2) + 's';
        heart.style.opacity = 0.5 + Math.random() * 0.4;

        wrap.appendChild(heart);
        active += 1;

        heart.addEventListener('animationend', () => {
            heart.remove();
            active -= 1;
        });
    };

    for (let i = 0; i < 3; i++) setTimeout(spawn, i * 400);
    setInterval(spawn, 950);
}

/* ============================================================
   5b. BACKGROUND FLOATING HEARTS (continuous background effect)
   ============================================================ */
const BG_HEART_EMOJIS = ['❤️', '💕', '💗', '💖', '💘', '🤍', '🩷'];
const MAX_BG_HEARTS = 20;

function initBgHearts() {
    const wrap = $('#bgHearts');
    if (!wrap) return;

    let active = 0;

    const spawn = () => {
        if (active >= MAX_BG_HEARTS) return;

        const heart = document.createElement('span');
        heart.className = 'bg-heart';
        heart.textContent = BG_HEART_EMOJIS[Math.floor(Math.random() * BG_HEART_EMOJIS.length)];

        const size = 12 + Math.random() * 24;
        heart.style.fontSize = size + 'px';
        heart.style.left = (5 + Math.random() * 90) + '%';
        heart.style.setProperty('--float-x', (Math.random() * 120 - 60) + 'px');
        heart.style.setProperty('--dur', (8 + Math.random() * 12) + 's');
        heart.style.animationDelay = (Math.random() * 2) + 's';
        heart.style.opacity = 0.3 + Math.random() * 0.4;

        wrap.appendChild(heart);
        active += 1;

        heart.addEventListener('animationend', () => {
            heart.remove();
            active -= 1;
        });
    };

    // Spawn initial hearts
    for (let i = 0; i < 5; i++) setTimeout(spawn, i * 600);
    
    // Continuous spawning
    setInterval(spawn, 800);
}

/* ============================================================
   5c. FALLING PETALS (background decoration)
   ============================================================ */
const PETAL_EMOJIS = ['🌸', '🩷', '💗', '✿', '❀', '♡', '🕊'];

function initPetals() {
    const wrap = $('#petals');
    if (!wrap) return;

    const COUNT = 18;
    for (let i = 0; i < COUNT; i++) {
        const petal = document.createElement('span');
        petal.className = 'petal';
        petal.textContent = PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)];

        const size = 14 + Math.random() * 14;
        petal.style.left = Math.random() * 100 + '%';
        petal.style.setProperty('--petal-size', size + 'px');
        petal.style.setProperty('--petal-dur', (10 + Math.random() * 16) + 's');
        petal.style.setProperty('--petal-delay', (Math.random() * 14) + 's');
        petal.style.setProperty('--petal-drift', (Math.random() * 160 - 80) + 'px');
        petal.style.setProperty('--petal-spin', (Math.random() * 540 + 180) + 'deg');
        wrap.appendChild(petal);
    }
}

/* ============================================================
   6. STORY TYPING ANIMATION
   ============================================================ */
function initStory() {
    const out = $('#storyText');
    if (!out) return;

    const text = loveConfig.storyMessage;
    const signature = $('#storySignature');

    if (prefersReducedMotion) {
        out.textContent = text;
        if (signature) signature.classList.add('is-visible');
        return;
    }

    let i = 0;

    const typeStep = () => {
        i += 1;
        out.textContent = text.slice(0, i);
        if (i < text.length) {
            setTimeout(typeStep, 24 + Math.random() * 42);
        } else if (signature) {
            setTimeout(() => signature.classList.add('is-visible'), 500);
        }
    };

    // Start after a short beat
    setTimeout(typeStep, 600);
}

/* ============================================================
   8. GALLERY (built from loveConfig.memories)
   ============================================================ */
function initGallery() {
    const gallery = $('#gallery');
    if (!gallery) return;

    const items = loveConfig.memories;

    items.forEach((memory, index) => {
        // <figure class="gallery__card reveal" role="button" tabindex="0">
        const card = document.createElement('figure');
        card.className = 'gallery__card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `បើករូបភាព៖ ${memory.caption}`);

        // media wrapper
        const media = document.createElement('div');
        media.className = 'gallery__media';

        const img = document.createElement('img');
        img.src = memory.image;
        img.alt = memory.caption;
        img.loading = 'lazy';
        img.decoding = 'async';

        const zoom = document.createElement('span');
        zoom.className = 'gallery__zoom';
        zoom.setAttribute('aria-hidden', 'true');
        const zoomIcon = document.createElement('i');
        zoomIcon.className = 'fa-solid fa-magnifying-glass-plus';
        zoom.appendChild(zoomIcon);

        media.append(img, zoom);

        card.appendChild(media);

        const open = () => openLightbox(memory);
        card.addEventListener('click', open);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                open();
            }
        });

        gallery.appendChild(card);
    });
}

/* ============================================================
   8b. GALLERY ARROW BUTTONS
   ============================================================ */
function initGalleryArrows() {
    const gallery = $('#gallery');
    const leftBtn = $('#galleryLeft');
    const rightBtn = $('#galleryRight');
    if (!gallery || !leftBtn || !rightBtn) return;

    const scrollAmount = 330;

    const updateArrows = () => {
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        leftBtn.disabled = gallery.scrollLeft <= 4;
        rightBtn.disabled = gallery.scrollLeft >= maxScroll - 4;
    };

    leftBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    gallery.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);

    updateArrows();
}

/* ============================================================
   7. JOURNEY TIMELINE
   ============================================================ */
function initJourney() {
    const wrap = $('#timeline');
    if (!wrap) return;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    setText('journeyHeading', loveConfig.journey.heading);
    setText('journeySubtitle', loveConfig.journey.subtitle);

    loveConfig.journey.items.forEach((item, index) => {
        const fromLeft = index % 2 === 0;

        const itemEl = document.createElement('article');
        itemEl.className = `timeline__item reveal reveal--${fromLeft ? 'left' : 'right'}`;
        itemEl.style.transitionDelay = Math.min(index * 120, 360) + 'ms';

        // Glowing heart on the timeline line
        const dot = document.createElement('span');
        dot.className = 'timeline__dot';
        dot.setAttribute('aria-hidden', 'true');
        dot.textContent = item.emoji;

        // Card
        const card = document.createElement('div');
        card.className = 'timeline__card';

        const head = document.createElement('div');
        head.className = 'timeline__head';
        const badge = document.createElement('span');
        badge.className = 'timeline__badge';
        badge.textContent = `${item.emoji} ${item.month}`;
        head.appendChild(badge);

        const media = document.createElement('div');
        media.className = 'timeline__media';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.month;
        img.loading = 'lazy';
        img.decoding = 'async';
        media.appendChild(img);

        const body = document.createElement('div');
        body.className = 'timeline__body';
        const desc = document.createElement('p');
        desc.className = 'timeline__description';
        desc.textContent = item.description;
        body.appendChild(desc);

        card.append(head, media, body);
        itemEl.append(dot, card);
        wrap.appendChild(itemEl);
    });
}

/* ============================================================
   9. LIGHTBOX
   ============================================================ */
function initLightbox() {
    const lightbox = $('#lightbox');
    if (!lightbox) return;

    const image = $('#lightboxImage');
    const title = $('#lightboxTitle');
    const note = $('#lightboxNote');
    let lastFocused = null;

    const close = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        image.removeAttribute('src');
        if (lastFocused) lastFocused.focus();
    };

    const open = (memory) => {
        lastFocused = document.activeElement;
        image.src = memory.image;
        image.alt = memory.caption;
        title.textContent = memory.caption;
        note.textContent = memory.note;
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');
        $('.lightbox__close', lightbox).focus();
    };

    // Wire close controls
    $$('[data-lightbox-close]', lightbox).forEach((el) => {
        el.addEventListener('click', close);
    });

    window.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (event.key === 'Escape') close();
    });

    // Expose to gallery builder
    window.openLightbox = open;
}

/* ============================================================
   10. LOVE / DATE COUNTER
   ============================================================ */
function initCounter() {
    const daysEl = $('#days');
    const hoursEl = $('#hours');
    const minutesEl = $('#minutes');
    const secondsEl = $('#seconds');
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const start = new Date(`${loveConfig.startDate}T00:00:00`);
    if (isNaN(start.getTime())) return;

    const pad = (n) => String(n).padStart(2, '0');

    const tick = () => {
        const diff = Math.max(0, Date.now() - start.getTime());

        const days = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);

        daysEl.textContent = days;
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
    };

    tick();
    setInterval(tick, 1000);
}

/* ============================================================
   11. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initReveal() {
    const targets = $$('.reveal');
    if (targets.length === 0) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        targets.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((el) => observer.observe(el));
}

/* ============================================================
   12. ACTIVE NAV STATE
   ============================================================ */
function initActiveNav() {
    const links = $$('.nav__link');
    const sections = links
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);
    if (sections.length === 0) return;

    if (!('IntersectionObserver' in window)) return;

    const setActive = (id) => {
        links.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('is-active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}
