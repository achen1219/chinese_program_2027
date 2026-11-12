# AP中文備考室

A self-study program and practice app for the redesigned AP Chinese Language and Culture exam
(Traditional characters, May 2027). One HTML file, no backend: it installs to a phone's home
screen, works offline, and keeps progress on the device.

## What's here

| Path | What it is |
|---|---|
| `index.html`, `sw.js`, `manifest.webmanifest`, `icons/` | The phone site (built output — this is what gets hosted) |
| `dist/artifact.html` | The same app for claude.ai, where it also gets AI grading of writing |
| `src/` | Source: `data_*.js` (plan and practice sets), `app.js`, `styles.css`, `shell.html` |
| `build.py` | Assembles `src/` into the files above |
| `make_icons.ps1` | Redraws `icons/` |

## Sync between devices

Each device keeps its own copy of the progress and works offline. Turning on sync (紀錄 tab)
creates a 12-character sync code; entering that code on another device merges the two copies
through Firestore, record by record. Config is in `src/data_sync.js`; the logic is the `Sync`
object in `src/app.js`. The Firestore rules must allow it:

```
match /apzh/{code} {
  allow get, write: if request.auth != null && code.matches('^[A-Z2-9]{12}$');
  match /months/{month} {
    allow read, write: if request.auth != null && code.matches('^[A-Z2-9]{12}$');
  }
}
```

## Build

```bash
py -I build.py
```

To also copy the phone site into another folder (for example a GitHub Pages checkout):

```bash
py -I build.py --deploy ../some-pages-repo/ap
```

## Adding practice sets

Append to the arrays in `src/data_listening.js`, `data_reading.js`, `data_writing.js` or
`data_speaking.js`, then rebuild. The weekly plan in `src/data_plan.js` links to sets by id
(`[[L01]]`, `[[R03]]`, `[[S02]]`, `[[E05]]`, `[[P01]]`, `[[QA]]`, `[[HOMO]]`).

The practice sets are original material written to the task types in College Board's 2026
Course and Exam Description. They are not official exam questions.
