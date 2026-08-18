const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'assets', 'images');
const SCRIPT_FILE = path.join(__dirname, 'js', 'script.js');
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];

/* ---------- Khmer helpers ---------- */
const KHMER_DIGITS = ['០','១','២','៣','៥','៦','៧','៨','៩'];
const KHMER_MONTHS = [
    'មករា','កុម្ភៈ','មីនា','មេសា','ឧសភា','មិថុនា',
    'កក្កដា','សីហា','កញ្ញា','តុលា','វិច្ឆិកា','ធ្នូ'
];

function toKhmerNum(n) {
    return String(n).split('').map(d => KHMER_DIGITS[parseInt(d)] || d).join('');
}

function getKhmerDate() {
    const now = new Date();
    const y = toKhmerNum(now.getFullYear());
    const m = KHMER_MONTHS[now.getMonth()];
    return `${y} · ${m}`;
}

/* ---------- Caption/note generators ---------- */
const CAPTIONS = [
    'អនុស្សាវរីយ៍ថ្មី 💕',
    'រូបភាពដ៏ស្រស់ស្អាត ❤️',
    'ពេលវេលាដ៏មានតម្លៃ 💝',
    'ថ្ងៃដ៏ពិសេស 💖',
    'ស្នេហ៍ដ៏ស្រស់ស្អាត 🌸',
    'អនុស្សាវរីយ៍ដ៏មានន័យ 💗',
    'ជាមួយអូនគ្រប់ពេល 💞',
    'ស្នាមញញឹមដ៏ស្រស់ស្អាត 😊',
    'ថ្ងៃដ៏រីករាយ ☀️',
    'សុបិនដ៏ស្រស់ស្អាត 🌙',
    'ដំណើរជាមួយអូន 🌿',
    'ក្តីស្រឡាញ់គ្មានដែនកំណត់ 🌹',
];

const NOTES = [
    'អនុស្សាវរីយ៍ដែលខ្ញុំស្រឡាញ់។',
    'ពេលវេលាដែលយើងចែករំលែក។',
    'រឿងរបស់យើងកំពុងលូតលាស់។',
    'ថ្ងៃនេះពិតជាពិសេសសម្រាប់យើង។',
    'អនុស្សាវរីយ៍ដែលខ្ញុំមិនភ្លេច។',
    'ស្រឡាញ់អូនគ្មានដែនកំណត់។',
    'រាល់ពេលវេលាជាមួយអូនគឺជាអំណោយដ៏ពិសេស។',
    'ថ្ងៃនេះភ្លឺដូចស្នាមញញឹមរបស់អូន។',
    'យើងបានចំណាយពេលវេលាដ៏ស្រស់ស្អាតជាមួយគ្នា។',
    'អនុស្សាវរីយ៍ដែលយើងរក្សាទុក។',
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ---------- Core logic ---------- */
function getImageFiles() {
    return fs.readdirSync(IMAGES_DIR)
        .filter(f => IMAGE_EXTS.includes(path.extname(f).toLowerCase()))
        .map(f => `assets/images/${f}`);
}

function getExistingPaths() {
    const content = fs.readFileSync(SCRIPT_FILE, 'utf8');
    const matches = content.match(/image:\s*'([^']+)'/g) || [];
    return matches.map(m => m.match(/image:\s*'([^']+)'/)[1]);
}

function getNextIndex(content) {
    const match = content.match(/image:\s*'assets\/images\/image(\d+)/g) || [];
    let max = 0;
    match.forEach(m => {
        const n = parseInt(m.match(/(\d+)/)[1]);
        if (n > max) max = n;
    });
    return max + 1;
}

function buildEntry(filePath) {
    const date = getKhmerDate();
    const caption = pick(CAPTIONS);
    const note = pick(NOTES);
    return [
        '        {',
        `            image: '${filePath}',`,
        `            date: '${date}',`,
        `            caption: '${caption}',`,
        `            note: '${note}'`,
        '        }'
    ].join('\n');
}

function ensureTrailingComma(content) {
    // Find the last } before ],  and add comma if missing
    const pattern = /\n        \}\n    \],\n/;
    if (pattern.test(content)) {
        return content.replace(pattern, '\n        },\n    ],\n');
    }
    return content;
}

function addImageToScript(filePath) {
    let content = fs.readFileSync(SCRIPT_FILE, 'utf8');
    const existing = getExistingPaths();

    if (existing.includes(filePath)) {
        console.log(`  [skip] ${filePath} already exists`);
        return false;
    }

    const entry = buildEntry(filePath);

    // Ensure last entry before ], has comma
    content = ensureTrailingComma(content);

    // Insert new entry before closing ],
    const closingPattern = /\n    \],\n/;
    if (closingPattern.test(content)) {
        content = content.replace(closingPattern, `\n${entry},\n    ],\n`);
    } else {
        content = content.replace(
            /(\n    \/\* ---------- Journey)/,
            `\n${entry},\n$1`
        );
    }

    fs.writeFileSync(SCRIPT_FILE, content, 'utf8');
    console.log(`  [added] ${filePath}`);
    return true;
}

function scanAndAdd() {
    const files = getImageFiles();
    const existing = getExistingPaths();
    let added = 0;

    files.forEach(f => {
        if (!existing.includes(f)) {
            if (addImageToScript(f)) added++;
        }
    });

    console.log(`\nScan complete: ${files.length} images found, ${added} new added.`);
}

/* ---------- Start ---------- */
console.log('=== Heart Image Watcher ===');
console.log(`Watching: ${IMAGES_DIR}`);
console.log('');
scanAndAdd();

const watcher = chokidar.watch(IMAGES_DIR, {
    ignored: /(^|[\/\\])\./,
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 200 }
});

watcher
    .on('add', filePath => {
        const ext = path.extname(filePath).toLowerCase();
        if (!IMAGE_EXTS.includes(ext)) return;
        console.log(`\nNew image detected: ${path.basename(filePath)}`);
        setTimeout(() => addImageToScript(`assets/images/${path.basename(filePath)}`), 500);
    })
    .on('unlink', filePath => {
        const ext = path.extname(filePath).toLowerCase();
        if (!IMAGE_EXTS.includes(ext)) return;
        console.log(`\nImage removed: ${path.basename(filePath)}`);
        console.log('  (You can manually remove it from script.js memories array)');
    });

console.log('\nWatching for new images... Drop files into assets/images/ to auto-add.\n');
