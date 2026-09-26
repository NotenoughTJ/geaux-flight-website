# Open, personalize, and publish

## 1. Use the project on your computer

1. Unzip the download. Keep `geaux-flight-website` as one folder.
2. Open **that folder** in Google Antigravity using its open-folder command.
3. Inspect `index.html`, `resume.html`, `project.html`, `styles.css`, and `script.js` in the editor. These are the actual website files.
4. Open `index.html` in a browser, or ask Antigravity to start a local preview from this folder.
5. Make a change in Antigravity, refresh the browser, and review it.

This project was prepared with Codex. It does not establish that you created, inspected, tested, or edited the files in Antigravity on your own computer. Your handout specifically calls for that experience, so complete it before submitting.

The site's assets use relative paths, so it can be served from a GitHub Pages project URL such as `/geaux-flight-website/`. No backend services are used. The email buttons open the visitor's email application; there is no form claiming to send messages on its own.

## 2. Personalize the content

- Replace the three credited stock images with your own work before presenting this as a finished photography portfolio. Keep the same file names, or update their `src` values in the HTML. Update descriptions, captions, dimensions, and `CREDITS.md` when you replace a photograph.
- Confirm that `foster-tahj@outlook.com` is the contact address you want to publish. It is the address in the supplied résumé. It appears in all three pages and in the copy-email button's data attribute.
- Confirm the job dates and credential status. Certifications in progress are labeled as in progress.
- Add your correct expected graduation month and year to `resume.html`. The source résumé and later notes disagree, so this version does not guess a date.
- The source résumé included valet and retail roles. This website presents selected experience in Geaux Flight and IT support, consistent with the requested professional direction.
- The project page describes Geaux Flight as an ongoing business and media practice. It does not invent a client project, paid campaign, metrics, testimonials, or a measured sales result.
- The website contains a business-and-technology profile as well as the Geaux Flight brand, so it retains the assignment's recruiter audience.

## 3. Create the public GitHub repository

Connect your own GitHub account, then create a public repository named `geaux-flight-website`. When pushing this existing folder, create the remote repository without adding another README, license, or .gitignore.

If using the terminal, configure your own Git identity first. A GitHub-provided private commit email can keep your personal email out of commit metadata. From **inside this folder**, run:

```bash
git init -b main
git add .
git commit -m "Create Geaux Flight portfolio website"
git remote add origin https://github.com/YOURUSERNAME/geaux-flight-website.git
git push -u origin main
```

`YOURUSERNAME` is an example placeholder: replace it with your real GitHub username before running the remote command. GitHub authentication may be prompted by your IDE or credential manager. Do not paste access tokens into the source files or README.

## 4. Publish on GitHub Pages

In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main**, select **/(root)**, and save. Wait for the publishing workflow to finish, then use the live URL GitHub reports.

Official reference: [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Add the real live URL to `README.md`. Test all three pages at that URL, including page anchors and the email link. Later pushes to the publishing branch update the site.

## 5. Meet the process requirements

The handout requires **at least five commits across at least three different days**. This download does not contain a fabricated commit history. Make real improvements over separate work sessions and commit them on the days you do the work.

A useful sequence, if the deadline allows:

| Day | Genuine work to commit |
| --- | --- |
| Day 1 | Inspect and personalize the initial site; create the first commit. |
| Day 2 | Replace stock photographs with your own work; commit that change. Verify and improve résumé/project copy; commit the content change. |
| Day 3 | Test on desktop and a phone and fix a specific issue; commit the fix. Publish, add the verified live URL and your own reflection to the README; commit those changes. |

Do not backdate commits or record an Antigravity workflow that did not happen. Check Moodle for the deadline; none was supplied with this request.

## 6. Final check and submission

The local source check passed for all page links, section anchors, image and font references, headings, image descriptions, CSS block structure, and JavaScript syntax. A browser was not available for visual or interaction testing in the preparation environment. Complete the following checks in Antigravity and on the published site; a passed source check alone does not verify the rendered layout.

- Open home, résumé, and project pages on desktop and mobile. Check for clipped text and unwanted sideways scrolling.
- Open and close the mobile menu, select its links, and test the Escape key.
- Follow every navigation link and verify the email destination.
- Use **Print / save as PDF** on the résumé page and inspect the print preview.
- If clipboard access is unavailable, the copy-email button explains how to copy the visible address manually.
- Keep the repository public and confirm the live website opens in a signed-out browser.
- Complete the learning reflection with an actual question-and-answer experience from your own Antigravity session.
- Submit the **repository URL** and **live website URL**. The handout asks you to DM your Graduate Assistant in Discord and follow up if there is no confirmation within 24 hours. No message has been sent on your behalf.

## File map

| File | Purpose |
| --- | --- |
| `index.html` | Home: profile, competencies, experience, project introduction, contact |
| `resume.html` | Separate résumé with print styling |
| `project.html` | Separate Geaux Flight project narrative |
| `styles.css` | Shared design, phone/tablet layouts, focus states, and print layout |
| `script.js` | Mobile navigation, email copy feedback, print action, current year |
| `assets/` | Local sample photographs and any bundled fonts |
| `.nojekyll` | Keeps this plain static site outside Jekyll processing |
| `.gitignore` | Excludes local environment and temporary files |

Why does each HTML page link to the same stylesheet? A browser loads each page as a separate document, so each one needs its own reference to `styles.css`. One shared stylesheet gives the pages a consistent appearance and lets you change that appearance in one place. Use this explanation as a learning aid, not as a claim that you asked this question earlier.
