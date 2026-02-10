# Assignment 1: Responsive Portfolio Website

**Course:** CSC4035 Web Programming and Technologies
**Weight:** 5% of final grade
**Due:** Week 6, Friday 11:59 PM

---

## Overview

Create a professional, responsive portfolio website showcasing your skills, projects, and contact information. This assignment assesses your HTML5 and CSS3 skills, including semantic markup, modern layout techniques (Flexbox/Grid), and responsive design principles.

**Important:** No CSS frameworks (Bootstrap, Tailwind, etc.) are allowed. All CSS must be hand-written.

---

## Requirements

### Functional Requirements

Your portfolio must include **4 or more sections**:

| Section | Required Content |
|---------|------------------|
| **Home/Hero** | Your name, tagline, and call-to-action button |
| **About** | Professional bio (150+ words), profile image, skills list |
| **Projects** | Minimum 3 project cards with title, description, image, and links |
| **Contact** | Contact form with validation attributes (name, email, message) |

### Technical Requirements

| Requirement | Description |
|-------------|-------------|
| **HTML5** | Valid semantic HTML (header, nav, main, section, article, footer) |
| **CSS3** | External stylesheet only (no inline styles) |
| **CSS Variables** | Use custom properties for colors and spacing |
| **Flexbox** | Use for at least one layout component |
| **CSS Grid** | Use for at least one layout component |
| **Responsive** | Mobile-first with minimum 3 breakpoints |
| **Accessibility** | Alt text, form labels, color contrast, heading hierarchy |

### Breakpoints Required

```css
/* Mobile-first base styles */

/* Tablet (768px and up) */
@media (min-width: 768px) { }

/* Desktop (1024px and up) */
@media (min-width: 1024px) { }

/* Large Desktop (1200px and up) - optional */
@media (min-width: 1200px) { }
```

---

## Project Structure

```
csc4035-assignment1-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── images/             # Your images (profile, projects, etc.)
├── screenshots/        # Screenshots at different breakpoints
│   ├── mobile.png
│   ├── tablet.png
│   └── desktop.png
└── README.md           # This file (update with your info)
```

---

## Getting Started

1. **Clone this repository** to your local machine
2. **Open `index.html`** in your code editor
3. **Complete the TODO comments** in each file
4. **Test responsiveness** using browser developer tools
5. **Take screenshots** at mobile, tablet, and desktop sizes
6. **Commit and push** your changes regularly

---

## Grading Rubric (100 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| **HTML Structure & Semantics** | 20 | Valid HTML5, semantic elements, proper document structure |
| **CSS Styling & Design** | 20 | Professional design, cohesive color scheme, typography |
| **Flexbox & Grid Usage** | 20 | Both techniques used appropriately and effectively |
| **Responsive Design** | 20 | Mobile-first, 3+ breakpoints, no horizontal scrolling |
| **Content & Completeness** | 10 | All sections complete with quality content |
| **Code Quality** | 10 | Clean, organized, well-commented code |

### Automated Tests (40% of grade)

The following are checked automatically on each push:
- HTML validation (no errors)
- Required HTML elements present
- CSS file linked correctly
- Required sections exist
- Responsive meta tag present

---

## Submission Checklist

Before submitting, verify:

- [ ] All 4 sections are complete (Home, About, Projects, Contact)
- [ ] HTML validates with no errors
- [ ] CSS uses custom properties (variables)
- [ ] Flexbox is used for at least one component
- [ ] CSS Grid is used for at least one component
- [ ] Site is responsive at all breakpoints
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Screenshots added to `/screenshots` folder
- [ ] README updated with your information

---

## Your Information

**Name:** [Your Name]
**Student ID:** [Your Student ID]
**Design Theme:** [Describe your portfolio theme/style]

### CSS Techniques Used
- [ ] CSS Custom Properties
- [ ] Flexbox
- [ ] CSS Grid
- [ ] Media Queries
- [ ] Other: _______________

### Challenges & Solutions
[Describe any challenges you faced and how you solved them]

### Credits
[List any images, fonts, or resources used with attribution]

---

## Academic Integrity

- All code must be your own work
- No CSS frameworks or libraries allowed
- Images must be royalty-free or your own (credit sources)
- Plagiarism detection tools will be used

**Violations result in zero marks and academic misconduct reporting.**

---

## Extension Opportunities (Bonus: up to +10%)

- Dark/light mode toggle with CSS (+3%)
- CSS animations/transitions (+3%)
- CSS-only hamburger menu (+2%)
- Print stylesheet (+2%)
