# Absolute Operations, LLC Website

Modern React/Vite website for Absolute Operations, LLC.

## Pages

- Home
- Services
- About
- Portfolio
- Contact
- Individual project detail pages

## Editing Guide

Read `EDITING_GUIDE.md` first. The project is split into individual page files, reusable components, and editable data files.

## Run locally or in Codespaces

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact form email setup

The form is prepared for Vercel + Resend.

Create these environment variables in Vercel:

```text
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=braden@absoluteoperations.com
CONTACT_FROM_EMAIL=Absolute Operations Website <website@absoluteoperations.com>
```

Do not commit real API keys to GitHub.
