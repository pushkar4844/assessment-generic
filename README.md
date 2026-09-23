# assessment-generic

Assessment Call Toolkit &mdash; a small static site for prepping an AWS Cloud Internet Breakout assessment call. Click a box to open its content in a panel: opening introduction, speaking notes, AWS services reference, and the interview playbook.

Live site: https://pushkar4844.github.io/assessment-generic/

## Structure

```
.
├── index.html          # landing page with the 4 clickable boxes
├── css/
│   └── style.css       # page styling (light/dark aware)
├── js/
│   └── main.js         # opens the clicked box's content in an overlay iframe
└── content/
    ├── intro.html          # Opening Introduction
    ├── notes.html          # Speaking Notes
    ├── aws-services.html   # AWS Services Reference
    └── breakout.html       # Cloud Internet Breakout playbook
```

## Running locally

Just open `index.html` in a browser, or serve the folder with any static file server.
