# Seattle MasterFix — TEST redesign

**This is a test redesign repository** (`sahakmbs/masterfix-redesign-test`). It is **not** production.

Production site remains at [seattlemasterfix.com](https://seattlemasterfix.com) / `Bilalsahak/probuild-clone` and must not be modified from this workstream.

Original from-scratch Next.js redesign for **Seattle MasterFix Precision Craftsmanship** — photography-first, App Router, TypeScript, Tailwind. No testimonials/reviews section. No third-party landing-page template code.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- `next/image` for WebP project photography
- LocalBusiness JSON-LD
- Multi-step estimate form → Formspree
- Calendly consultation link

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, process, trades |
| `/services` | Services index |
| `/services/siding` | Premium exterior siding |
| `/services/fencing` | Custom fencing & perimeter |
| `/services/tile` | Custom tile work |
| `/services/laminate` | High-traffic laminate |
| `/services/drywall` | Drywall finishing |
| `/services/paint` | Interior & exterior paint |
| `/projects` | Filterable project gallery |
| `/how-we-work` | 4-step process + cost clarity |
| `/contact` | Multi-step estimate + Calendly |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (must succeed)
npm start       # serve production build
```

## Environment variables

Optional — defaults match the live public Formspree form:

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Full Formspree URL | `https://formspree.io/f/xnjeedlb` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Form id only (alternative) | `xnjeedlb` via endpoint default |

Copy `.env.example` to `.env.local` if you want to override:

```bash
cp .env.example .env.local
```

Calendly (hardcoded, same as production booking config):

`https://calendly.com/bill-seattlemasterfix`

## Assets

Project photos and logos were migrated read-only from the public production archive into `public/images` and `public/logos`. Do not treat this repo as the source of truth for production content.

## Brand

- Navy `#0B2545` · Amber `#E09F3E` · Slate `#1F2937` · Light `#F8F9FA`
- Headings: Montserrat · Body: Inter
- Phone `(206) 550-4576` · WA License `# SEATTMP744NL` · UBI `605904953`

## Collaborators

`Bilalsahak` should be invited as an **admin** collaborator on this test repo for review before any production cutover.
