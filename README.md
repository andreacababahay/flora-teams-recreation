# FLORA Teams recreation

A responsive recreation of the supplied FLORA Teams screenshot, built with **TypeScript, Next.js 16 App Router, React 19, Tailwind CSS, and shadcn/ui**.

## Run locally

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```

Run `pnpm build` to generate the static site in `out/`.

## Included

- Original FLORA wordmark, video poster, and native video player
- Collaboration feature grid with animated multiplayer cursors
- White-glove support, custom workflows, onboarding, Slack, and early access cards
- Unified dashboard and three management feature panels
- Linked case-study PDFs and keyboard/touch-accessible press carousel
- Final CTA and floral footer
- Mobile navigation, responsive layouts, focus states, and reduced-motion support

The user screenshot is the visual source of truth; the Mobbin capture footer is excluded. Original imagery was recovered from the previous FLORA Teams page at https://aware-travel-048584-952008c27.framer.app/teams. Sources are recorded in `ASSET_SOURCES.json`. GTE, Slash, and other earlier projects are independent repositories.

This is an independent frontend recreation for design review, not an official FLORA service. Signup, demo, navigation, case-study, and article links open their corresponding original destinations. No accounts are created and no user data is collected by this project. The hero video streams from its original host; playback depends on that host's availability. Product screenshots are illustrative and are not working admin interfaces. The brand strip uses styled text; the color panels and floral footer use original static artwork rather than the original live visual effects.

Third-party imagery, fonts, and trademarks belong to their respective owners. This project does not grant rights to those assets.

The full shadcn catalog is retained from the Sites scaffold. The application runs and builds with actual Next.js; the retained Vite file is unused scaffold configuration.
