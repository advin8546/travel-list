# Far Away Packing

A responsive React packing list for planning trips. It gives recruiters a quick look at controlled forms, CRUD state updates, derived stats, sorting, and browser persistence.

## Recruiter Quick View

- **What to look for:** controlled form inputs, immutable array updates, item sorting, progress calculation, empty states, and localStorage persistence.
- **Production:** Built for Vercel from the `main` branch.
- **Interaction path:** Add an item, mark it packed, sort by packed status, refresh the page, and confirm the list persists.

## Features

- Add packing items with quantity and description.
- Toggle packed status.
- Delete individual items or clear the full list.
- Sort by input order, description, or packed status.
- See progress summary with packed percentage.
- Persist the list in localStorage.
- Responsive layout for desktop and mobile viewing.

## Tech Stack

- React 19
- Create React App
- Controlled components
- localStorage
- CSS Grid and responsive CSS

## Run Locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

## Notes

This is a compact product-style app rather than a large system. The goal is to make core React state handling easy to inspect during a short recruiter review.
