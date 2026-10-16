# Lesson Bridge

> One lesson plan. Every learner included.

**Lesson Bridge** (working name) is a web app that helps teachers adapt their lesson plans
to support students with special needs, IEP/504 accommodations, and English Language
Learners (ELL) — while keeping every lesson aligned to state standards.

A teacher uploads a lesson plan, selects their state and course, and the app:

1. **Identifies the standards** the lesson meets (the teacher confirms or adjusts them).
2. **Generates differentiated versions** of the lesson for the supports the teacher requests —
   for example chunked instructions, graphic organizers, modified assessments, extended time,
   sentence frames, and vocabulary supports.
3. **Keeps the learning target the same**, so every student works toward the same standard
   through a path that fits them.

## Status

🌱 **Early stage.** This repository currently contains the marketing **landing page** only.
The app itself (upload, standards alignment, differentiation engine) is not built yet.

## Planned features

| Area | Description |
| --- | --- |
| Lesson upload | Word, PDF, Google Docs, or pasted text |
| Standards alignment | State standards for all 50 states + D.C., Common Core, NGSS, C3, national arts/health/PE, CTE |
| ELL standards | WIDA and ELPA21 English language development standards |
| IEP & 504 supports | Turn accommodations into concrete lesson modifications |
| ELL supports | Scaffolds matched to English proficiency levels |
| Support profiles | Reusable, name-free accommodation profiles |
| Teacher control | Every suggestion is editable before export |
| Privacy | No student PII required; designed with FERPA and COPPA in mind |

## Project structure

```
.
├── index.html        # Landing page
├── css/styles.css    # Styles (calm, bright palette; responsive; reduced-motion aware)
├── js/main.js        # Nav toggle, standards demo, waitlist form, scroll reveal
└── assets/
    └── favicon.svg   # Logo / favicon
```

## Running locally

It's a static site with no build step. Open `index.html` in a browser, or serve it:

```bash
# Python
python3 -m http.server 8080

# or Node
npx http-server -p 8080
```

Then visit <http://localhost:8080>.

## Deploying

Any static host works. For **GitHub Pages**: *Settings → Pages → Deploy from a branch*,
choose the main branch and the `/ (root)` folder.

## Notes

- The waitlist form is **front-end only** right now — it validates the email and shows a
  thank-you message, but does not send data anywhere. Hook it up to a form service or
  backend before launch.
- The standards picker on the page is a demo; real standards data is not loaded yet.

## Accessibility

The page uses semantic HTML, a skip link, visible focus styles, sufficient color contrast,
and respects `prefers-reduced-motion`.
