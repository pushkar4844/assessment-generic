# assessment-generic

Assessment Call Toolkit &mdash; a small static site for prepping an AWS Cloud Internet Breakout assessment call. Four collapsible sections &mdash; opening introduction, speaking notes, AWS services reference and the Cloud Internet Breakout interview playbook &mdash; plus downloadable Excel assessment workbooks.

Live site: https://pushkar4844.github.io/assessment-generic/

## Structure

```
.
├── index.html          # single page: 4 collapsible sections + download buttons
├── css/
│   └── style.css       # page styling (light/dark aware)
├── downloads/
│   ├── FAB_AWS_Cloud_Internet_Breakout_SOW_Assessment.xlsx   # SOW-aligned assessment workbook
│   └── AWS_Cloud_Internet_Breakout_Assessment.xlsx           # generic assessment workbook
└── content/            # standalone tabbed copies of each section (not used by index.html)
    ├── intro.html          # Opening Introduction
    ├── notes.html          # Speaking Notes
    ├── aws-services.html   # AWS Services Reference
    └── breakout.html       # Cloud Internet Breakout playbook
```

## Running locally

Just open `index.html` in a browser, or serve the folder with any static file server.
