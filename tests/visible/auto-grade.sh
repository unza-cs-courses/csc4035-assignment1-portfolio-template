#!/bin/bash
# Assignment 1: Portfolio - Visible Test Suite
# CSC4035 Web Programming and Technologies
#
# This script runs on every push via GitHub Actions.
# Additional hidden tests will run after the deadline.
#
# DO NOT MODIFY THIS FILE

echo "========================================"
echo "Assignment 1: Portfolio - Visible Tests"
echo "========================================"
echo ""

SCORE=0
MAX_SCORE=100

# Function to add points
add_points() {
    local points=$1
    local message=$2
    SCORE=$((SCORE + points))
    echo "[+$points] $message"
}

# Function to report failure
fail_test() {
    local message=$1
    echo "[FAIL] $message"
}

# Check if index.html exists
echo "--- Checking Required Files ---"
if [ -f "index.html" ]; then
    add_points 5 "index.html exists"
else
    fail_test "index.html not found"
fi

# Check if CSS file exists
if [ -f "css/styles.css" ]; then
    add_points 5 "css/styles.css exists"
else
    fail_test "css/styles.css not found"
fi

echo ""
echo "--- Checking HTML Structure ---"

# Check for DOCTYPE
if grep -q "<!DOCTYPE html>" index.html 2>/dev/null; then
    add_points 2 "DOCTYPE declaration present"
else
    fail_test "DOCTYPE declaration missing"
fi

# Check for viewport meta tag
if grep -q "viewport" index.html 2>/dev/null; then
    add_points 3 "Viewport meta tag present"
else
    fail_test "Viewport meta tag missing (required for responsive design)"
fi

# Check for stylesheet link
if grep -q "styles.css" index.html 2>/dev/null; then
    add_points 2 "CSS stylesheet linked"
else
    fail_test "CSS stylesheet not linked"
fi

# Check for semantic HTML elements
echo ""
echo "--- Checking Semantic HTML Elements ---"

if grep -q "<header" index.html 2>/dev/null; then
    add_points 3 "<header> element present"
else
    fail_test "<header> element missing"
fi

if grep -q "<nav" index.html 2>/dev/null; then
    add_points 3 "<nav> element present"
else
    fail_test "<nav> element missing"
fi

if grep -q "<main" index.html 2>/dev/null; then
    add_points 3 "<main> element present"
else
    fail_test "<main> element missing"
fi

if grep -q "<section" index.html 2>/dev/null; then
    add_points 3 "<section> element present"
else
    fail_test "<section> element missing"
fi

if grep -q "<footer" index.html 2>/dev/null; then
    add_points 3 "<footer> element present"
else
    fail_test "<footer> element missing"
fi

# Check for required sections
echo ""
echo "--- Checking Required Sections ---"

if grep -q 'id="home"\|id="hero"' index.html 2>/dev/null; then
    add_points 5 "Home/Hero section present"
else
    fail_test "Home/Hero section missing (needs id='home' or id='hero')"
fi

if grep -q 'id="about"' index.html 2>/dev/null; then
    add_points 5 "About section present"
else
    fail_test "About section missing (needs id='about')"
fi

if grep -q 'id="projects"' index.html 2>/dev/null; then
    add_points 5 "Projects section present"
else
    fail_test "Projects section missing (needs id='projects')"
fi

if grep -q 'id="contact"' index.html 2>/dev/null; then
    add_points 5 "Contact section present"
else
    fail_test "Contact section missing (needs id='contact')"
fi

# Check for form elements
echo ""
echo "--- Checking Form Elements ---"

if grep -q "<form" index.html 2>/dev/null; then
    add_points 3 "Contact form present"
else
    fail_test "Contact form missing"
fi

if grep -q "<label" index.html 2>/dev/null; then
    add_points 3 "Form labels present"
else
    fail_test "Form labels missing (required for accessibility)"
fi

if grep -q 'type="email"' index.html 2>/dev/null; then
    add_points 2 "Email input with type='email' present"
else
    fail_test "Email input with type='email' missing"
fi

if grep -q "required" index.html 2>/dev/null; then
    add_points 2 "Required attribute used for validation"
else
    fail_test "Required attribute not used"
fi

# Check for accessibility
echo ""
echo "--- Checking Accessibility ---"

if grep -q "<h1" index.html 2>/dev/null; then
    add_points 3 "<h1> heading present"
else
    fail_test "<h1> heading missing"
fi

if grep -q 'alt="' index.html 2>/dev/null; then
    add_points 3 "Alt attributes present on images"
else
    fail_test "Alt attributes missing on images"
fi

# Check CSS requirements
echo ""
echo "--- Checking CSS Requirements ---"

if [ -f "css/styles.css" ]; then
    if grep -q "\-\-" css/styles.css 2>/dev/null; then
        add_points 5 "CSS custom properties (variables) used"
    else
        fail_test "CSS custom properties not found"
    fi

    if grep -q "display:\s*flex\|display:flex" css/styles.css 2>/dev/null; then
        add_points 5 "Flexbox used in CSS"
    else
        fail_test "Flexbox not used"
    fi

    if grep -q "display:\s*grid\|display:grid" css/styles.css 2>/dev/null; then
        add_points 5 "CSS Grid used"
    else
        fail_test "CSS Grid not used"
    fi

    if grep -q "@media" css/styles.css 2>/dev/null; then
        add_points 5 "Media queries present"
    else
        fail_test "Media queries not found"
    fi

    # Count breakpoints
    BREAKPOINTS=$(grep -c "@media" css/styles.css 2>/dev/null || echo 0)
    if [ "$BREAKPOINTS" -ge 3 ]; then
        add_points 5 "3+ breakpoints defined ($BREAKPOINTS found)"
    elif [ "$BREAKPOINTS" -ge 2 ]; then
        add_points 3 "2 breakpoints defined (3+ required)"
    elif [ "$BREAKPOINTS" -ge 1 ]; then
        add_points 1 "1 breakpoint defined (3+ required)"
    else
        fail_test "No breakpoints defined"
    fi
fi

# Check for project cards (minimum 3)
echo ""
echo "--- Checking Content Requirements ---"

ARTICLE_COUNT=$(grep -c "<article" index.html 2>/dev/null || echo 0)
if [ "$ARTICLE_COUNT" -ge 3 ]; then
    add_points 5 "3+ project cards present ($ARTICLE_COUNT found)"
elif [ "$ARTICLE_COUNT" -ge 1 ]; then
    add_points 2 "$ARTICLE_COUNT project card(s) present (3+ required)"
else
    fail_test "No project cards found (3+ required)"
fi

# HTML Validation (if html-validate is available)
echo ""
echo "--- HTML Validation ---"

if command -v html-validate &> /dev/null; then
    if html-validate index.html 2>/dev/null; then
        add_points 5 "HTML validation passed"
    else
        fail_test "HTML validation failed"
    fi
else
    echo "[SKIP] html-validate not installed"
fi

# Summary
echo ""
echo "========================================"
echo "FINAL SCORE: $SCORE / $MAX_SCORE"
echo "========================================"
echo ""
echo "Note: This is your visible test score."
echo "Hidden tests (checking design quality, responsiveness,"
echo "and code organization) will run after the deadline."
echo ""

# Exit with error if score is 0
if [ "$SCORE" -eq 0 ]; then
    exit 1
fi
