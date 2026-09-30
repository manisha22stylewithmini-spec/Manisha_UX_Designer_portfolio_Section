# Manisha Baroliya — Portfolio Footer

A single-page footer section for Manisha Baroliya's UX/UI design portfolio, built with Next.js (App Router), React and TypeScript.

- **Desktop:** a lavender character video fills the background, and its eyes follow the cursor. Moving the pointer seeks the video to the frame where the recorded pupils look toward it (see `app/footer-background.tsx` and the calibrated `app/gaze-frames.json`).
- **Mobile (≤700px):** content stacks, and the video loops muted below it. Playback pauses when the visitor prefers reduced motion.
- **Type:** Satoshi Medium and Black, served locally from `public/fonts`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Video asset

`public/footer-scrub.mp4` is an all-intra re-encode of `public/footer-background.mp4`, so that seeking is instant:

```bash
ffmpeg -i public/footer-background.mp4 -an -c:v libx264 -preset fast -crf 20 -g 1 -pix_fmt yuv420p -movflags +faststart public/footer-scrub.mp4
```
