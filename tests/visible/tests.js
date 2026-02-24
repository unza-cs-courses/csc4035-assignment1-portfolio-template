/**
 * Assignment 1: Portfolio Website - Visible Test Suite
 * CSC4035 Web Programming and Technologies
 *
 * Run these tests locally with: npm test
 * Additional hidden tests will be used for final grading after the deadline.
 *
 * DO NOT MODIFY THIS FILE
 * Run with: npm test
 */

const fs = require('fs');
const path = require('path');

// Test counter
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`  PASS: ${name}`);
        passed++;
    } catch (e) {
        console.log(`  FAIL: ${name}`);
        console.log(`        Error: ${e.message}`);
        failed++;
    }
}

function assertTrue(value, message = '') {
    if (value !== true) {
        throw new Error(`Expected true. ${message}`);
    }
}

function assertGreaterOrEqual(actual, expected, message = '') {
    if (actual < expected) {
        throw new Error(`Expected at least ${expected}, got ${actual}. ${message}`);
    }
}

// Read files
const htmlPath = path.join(__dirname, '../../index.html');
const cssPath = path.join(__dirname, '../../css/styles.css');

let htmlContent = '';
let cssContent = '';

try {
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
} catch (e) {
    console.error('ERROR: Cannot read index.html');
    console.log('FINAL SCORE: 0 / 100');
    process.exit(1);
}

try {
    cssContent = fs.readFileSync(cssPath, 'utf8');
} catch (e) {
    console.warn('WARNING: Cannot read css/styles.css');
    cssContent = '';
}

const htmlLower = htmlContent.toLowerCase();
const cssNoComments = cssContent.replace(/\/\*[\s\S]*?\*\//g, '');

console.log('\n==========================================');
console.log('Assignment 1: Responsive Portfolio Website');
console.log('Visible Test Suite');
console.log('==========================================\n');

// ============================================
// File Structure (10 points)
// ============================================
console.log('--- File Structure (10 points) ---');

test('index.html should exist', () => {
    assertTrue(fs.existsSync(htmlPath), 'index.html not found');
});

test('css/styles.css should exist', () => {
    assertTrue(fs.existsSync(cssPath), 'css/styles.css not found');
});

// ============================================
// HTML Document Structure (15 points)
// ============================================
console.log('\n--- HTML Document Structure (15 points) ---');

test('Should have DOCTYPE declaration', () => {
    assertTrue(htmlLower.includes('<!doctype html>'), 'Missing DOCTYPE');
});

test('Should have lang attribute on html', () => {
    assertTrue(htmlContent.includes('lang="en"') || htmlContent.includes("lang='en'"), 'Missing lang attribute');
});

test('Should have meta charset', () => {
    assertTrue(htmlLower.includes('charset'), 'Missing charset meta');
});

test('Should have viewport meta tag', () => {
    assertTrue(htmlLower.includes('viewport'), 'Missing viewport meta tag');
});

test('Should link to stylesheet', () => {
    assertTrue(htmlContent.includes('styles.css'), 'CSS not linked');
});

// ============================================
// Semantic HTML (15 points)
// ============================================
console.log('\n--- Semantic HTML (15 points) ---');

test('Should have header element', () => {
    assertTrue(htmlLower.includes('<header'), 'Missing <header>');
});

test('Should have nav element', () => {
    assertTrue(htmlLower.includes('<nav'), 'Missing <nav>');
});

test('Should have main element', () => {
    assertTrue(htmlLower.includes('<main'), 'Missing <main>');
});

test('Should have section elements', () => {
    const sectionCount = (htmlLower.match(/<section/g) || []).length;
    assertGreaterOrEqual(sectionCount, 4, 'Should have at least 4 sections');
});

test('Should have footer element', () => {
    assertTrue(htmlLower.includes('<footer'), 'Missing <footer>');
});

// ============================================
// Required Sections (20 points)
// ============================================
console.log('\n--- Required Sections (20 points) ---');

test('Should have Home/Hero section', () => {
    const hasHome = htmlContent.includes('id="home"') || htmlContent.includes('id="hero"') ||
                   htmlContent.includes("id='home'") || htmlContent.includes("id='hero'");
    assertTrue(hasHome, 'Missing Home or Hero section');
});

test('Should have About section', () => {
    assertTrue(htmlContent.includes('id="about"') || htmlContent.includes("id='about'"), 'Missing About section');
});

test('Should have Projects section', () => {
    assertTrue(htmlContent.includes('id="projects"') || htmlContent.includes("id='projects'"), 'Missing Projects section');
});

test('Should have Contact section', () => {
    assertTrue(htmlContent.includes('id="contact"') || htmlContent.includes("id='contact'"), 'Missing Contact section');
});

// ============================================
// Contact Form (10 points)
// ============================================
console.log('\n--- Contact Form (10 points) ---');

test('Should have a form element', () => {
    assertTrue(htmlLower.includes('<form'), 'Missing form element');
});

test('Should have form labels', () => {
    const labelCount = (htmlLower.match(/<label/g) || []).length;
    assertGreaterOrEqual(labelCount, 3, 'Should have at least 3 labels');
});

test('Should have email input type', () => {
    assertTrue(htmlContent.includes('type="email"'), 'Missing email input type');
});

test('Should use required attribute', () => {
    assertTrue(htmlLower.includes('required'), 'Missing required attribute');
});

// ============================================
// Accessibility (10 points)
// ============================================
console.log('\n--- Accessibility (10 points) ---');

test('Should have exactly one h1', () => {
    const h1Count = (htmlLower.match(/<h1/g) || []).length;
    assertTrue(h1Count === 1, 'Should have exactly one h1');
});

test('Should have proper heading hierarchy', () => {
    const h2Count = (htmlLower.match(/<h2/g) || []).length;
    assertGreaterOrEqual(h2Count, 3, 'Should have at least 3 h2 elements');
});

test('Should have alt attributes on images', () => {
    const imgTags = htmlContent.match(/<img[^>]*>/gi) || [];
    if (imgTags.length > 0) {
        const allHaveAlt = imgTags.every(tag => tag.includes('alt='));
        assertTrue(allHaveAlt, 'All images should have alt attributes');
    }
});

// ============================================
// CSS Requirements (20 points)
// ============================================
console.log('\n--- CSS Requirements (20 points) ---');

if (cssContent) {
    test('Should use CSS custom properties', () => {
        assertTrue(cssContent.includes('--'), 'Missing CSS custom properties');
    });

    test('Should use var() to apply custom properties', () => {
        assertTrue(cssContent.includes('var(--'), 'CSS variables not being used with var()');
    });

    test('Should use Flexbox', () => {
        assertTrue(cssContent.includes('display: flex') || cssContent.includes('display:flex'), 'Missing Flexbox');
    });

    test('Should use CSS Grid', () => {
        assertTrue(cssContent.includes('display: grid') || cssContent.includes('display:grid'), 'Missing CSS Grid');
    });

    test('Should have media queries', () => {
        assertTrue(cssContent.includes('@media'), 'Missing media queries');
    });

    test('Should have at least 3 breakpoints', () => {
        const breakpoints = (cssContent.match(/@media/g) || []).length;
        assertGreaterOrEqual(breakpoints, 3, 'Should have at least 3 breakpoints');
    });
} else {
    console.log('  SKIP: CSS file not found - CSS tests skipped');
}

// ============================================
// Project Cards (5 points)
// ============================================
console.log('\n--- Project Cards (5 points) ---');

test('Should have at least 3 project cards', () => {
    const articleCount = (htmlLower.match(/<article/g) || []).length;
    assertGreaterOrEqual(articleCount, 3, 'Should have at least 3 article elements for projects');
});

// Summary
console.log('\n==========================================');
console.log(`Results: ${passed} passed, ${failed} failed`);
const score = Math.round((passed / (passed + failed)) * 100);
console.log(`Score: ${score}%`);
console.log('==========================================\n');

console.log('Note: This is your visible test score (40% of final grade).');
console.log('Make sure all tests pass before pushing to GitHub.\n');
console.log('Remember to:');
console.log('- Take responsive screenshots (mobile, tablet, desktop)');
console.log('- Validate your HTML at https://validator.w3.org/');
console.log('- Test on multiple browsers\n');

if (failed > 0) {
    process.exit(1);
}
