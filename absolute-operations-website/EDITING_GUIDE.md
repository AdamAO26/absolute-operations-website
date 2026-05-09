# Absolute Operations Website Editing Guide

This project is split into separate page, component, and data files so the website is easier to edit.

## Main page files

Edit these files when you want to change the content/layout of a full page:

- `src/pages/Home.jsx` - homepage
- `src/pages/Services.jsx` - services page
- `src/pages/About.jsx` - about page
- `src/pages/Portfolio.jsx` - portfolio listing page
- `src/pages/ProjectDetail.jsx` - individual project detail page template
- `src/pages/Contact.jsx` - contact page wrapper
- `src/pages/NotFound.jsx` - page shown for broken URLs

## Reusable component files

Edit these when you want to change repeated sections across the website:

- `src/components/Header.jsx` - top navigation
- `src/components/Footer.jsx` - bottom footer
- `src/components/Hero.jsx` - large top page hero section
- `src/components/Reveal.jsx` - scroll animation wrapper
- `src/components/cards/ServiceCard.jsx` - small service cards on homepage
- `src/components/cards/ServiceDetailCard.jsx` - larger service sections on Services page
- `src/components/cards/ProjectCard.jsx` - portfolio cards
- `src/components/forms/ContactForm.jsx` - contact intake form fields and submission logic

## Data files

Edit these first when you only need to change words, services, company information, or portfolio projects:

- `src/data/company.js` - company name, mission, values, placeholder contact info
- `src/data/services.js` - Electrical, Mechanical, and Manufacturing content
- `src/data/projects.js` - portfolio cards and detailed case-study content

## Styling file

- `src/styles.css` - colors, spacing, mobile responsiveness, buttons, cards, and layout

## App routing file

- `src/App.jsx` - website route list. You usually do not need to edit this unless adding a new page.

## Contact form backend

- `api/contact.js` - Vercel serverless email handler
- `.env.example` - example environment variables for the email form

## How to run the website

```bash
npm install
npm run dev
```

Open the forwarded port `5173` in Codespaces.

## How to save changes to GitHub

```bash
git status
git add .
git commit -m "Update website content"
git push
```
