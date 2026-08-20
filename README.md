# Playwright Automation Capstone Project

End-to-end git + Playwright workflow matching the capstone brief.

## Project structure

```
playwright-capstone/
├── .github/workflows/main.yml   # CI pipeline (step 9)
├── helpers/
│   ├── formData.json            # test data (JSON)
│   ├── formData.xlsx            # test data (Excel)
│   └── dataHelper.js            # reads either source
├── tests/
│   ├── login.spec.js            # step 4
│   ├── form.spec.js             # step 6
│   └── demo.spec.js             # step 10 sample
├── playwright.config.js
├── package.json
├── .env.example
└── .gitignore
```

---

## Step 1 — Create your individual git repo

Create an empty repo on GitHub (e.g. `playwright-automation-capstone`), then:

```bash
git init
git remote add origin https://github.com/<your-username>/playwright-automation-capstone.git
```

## Step 2 — Clone to your local

```bash
git clone https://github.com/<your-username>/playwright-automation-capstone.git
cd playwright-automation-capstone
```

## Step 3 — Install Playwright locally

```bash
npm init -y
npm install -D @playwright/test dotenv
npm install xlsx
npx playwright install
```
(Or just run `npm install` once you've copied in the provided `package.json`.)

## Step 4 — Automate login scenario on `main`

Add `playwright.config.js`, `.env.example`, `.gitignore`, and `tests/login.spec.js`, then:

```bash
git checkout main
git add .
git commit -m "Add Playwright config and login automation scenario"
git push origin main
```

## Step 5 — Create feature branch `feature/form`

```bash
git checkout -b feature/form
```

## Step 6 — Automate form submission scenario

Add `tests/form.spec.js`, commit on the feature branch:

```bash
git add tests/form.spec.js
git commit -m "Add form submission automation scenario"
git push origin feature/form
```
Open a PR from `feature/form` → `main`, review, then merge.

## Step 7 — Helpers (Excel / JSON test data)

Add `helpers/formData.json`, `helpers/formData.xlsx`, `helpers/dataHelper.js`:

```bash
git add helpers/
git commit -m "Add form data helpers (json + excel)"
git push
```

## Step 8 — Env variables / secrets for login

Locally: copy `.env.example` → `.env` and fill in real values. `.env` is git-ignored, never committed.

```bash
cp .env.example .env
# edit .env with your real LOGIN_USERNAME / LOGIN_PASSWORD
```

In GitHub: **Settings → Secrets and variables → Actions → New repository secret**, add:
- `BASE_URL`
- `LOGIN_USERNAME`
- `LOGIN_PASSWORD`

## Step 9 — CI pipeline (`.github/workflows/main.yml`)

Already included — triggers `on: push` to `main`, installs dependencies + browsers, runs all specs, and uploads the HTML report and raw test-results (screenshots/traces/videos) as workflow artifacts.

```bash
git add .github/workflows/main.yml
git commit -m "Add GitHub Actions pipeline to run tests on push to main"
git push origin main
```

Check the run under the repo's **Actions** tab.

## Step 10 — Demo day

On demo day, in a **fresh folder**:

```bash
git clone https://github.com/<your-username>/playwright-automation-capstone.git demo-day
cd demo-day
npm install
```

Add one simple new spec (see `tests/demo.spec.js` as a template — checks page title/URL), then:

```bash
git add tests/demo.spec.js
git commit -m "Demo day: add smoke test for title and URL"
git push origin main
```

Pushing to `main` triggers the pipeline automatically — watch it run in the **Actions** tab and check the uploaded report.

---

## Running tests locally

```bash
npm test                # run all specs
npm run test:login      # just login.spec.js
npm run test:form       # just form.spec.js
npm run test:headed     # watch the browser run
npm run report          # open the last HTML report
```
