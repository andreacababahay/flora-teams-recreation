'use client';
import { useState } from 'react';
import {
  ArrowUpRight,
  MousePointer2,
  Menu,
  CreditCard,
  Users,
  Shield,
} from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const signup = 'https://app.flora.ai/projects';
const demo = 'https://flora.ai/contact';
const nav = [
  ['Teams', '#teams'],
  ['Affiliates', 'https://flora.ai/partners'],
  ['Blog', 'https://flora.ai/blog'],
  ['Docs', 'https://floraai.gitbook.io/docs'],
  ['Manifesto', 'https://flora.ai/blog/manifesto'],
  ['Updates', 'https://flora.ai/updates'],
  ['Pricing', 'https://flora.ai/pricing'],
  ['Careers', 'https://flora.ai/careers'],
];
const studies = [
  {
    title: 'Typography & Brand Design',
    description:
      'How Pentagram designer Catherine Chung is exploring letterforms in AI',
    image: 'cat.jpg',
    url: 'https://framerusercontent.com/assets/ZKPiIDQKXVJ7WL3CtH6hpl3N75I.pdf',
  },
  {
    title: 'Marketing & Advertising',
    description:
      'Cory Dobbin concepts a campaign for a skincare brand in FLORA',
    image: 'corydobbin.png',
    url: 'https://framerusercontent.com/assets/JUTmpaRDHOimNYw9so4XZxiAus.pdf',
  },
  {
    title: 'Speculative World Building',
    description:
      'Multidisciplinary creatives Marta & Musfira reimagine MUSTQBL for Dubai AI Week',
    image: '3rdunit.svg',
    url: 'https://framerusercontent.com/assets/gvxW3L06YlltCXHNejdngXgL1OA.pdf',
  },
];
const press = [
  {
    title:
      'Flora is building an AI-powered ‘infinite canvas’ for creative professionals',
    by: 'Anthony Ha · TechCrunch',
    image: 'fZmdTIompZY8DbW1v5nbErJMuSQ.png',
    url: 'https://techcrunch.com/2025/03/02/flora-is-building-an-ai-powered-infinite-canvas-for-creative-professionals/',
  },
  {
    title:
      'If You’re Struggling to Bring Your Design Ideas to Life, AI Can Help',
    by: 'Carly Quellman · CNET',
    image: '1VYjO9u5tnV7gm9EJBgebQPdasM.png',
    url: 'https://www.cnet.com/tech/services-and-software/if-youre-struggling-to-bring-your-design-ideas-to-life-ai-can-help/',
  },
  {
    title: 'When An AI Tool Finally Gets You',
    by: 'Lucas Crespo · Every',
    image: 'rPo84Ry2UU2UA6Kx8Glcs3E3Y.png',
    url: 'https://every.to/source-code/when-an-ai-tool-finally-gets-you',
  },
  {
    title: 'Generative media workflows in UI design',
    by: 'Tommy Geoco · UX Tools',
    image: 'GYcsZZl0yO7uUrkSTsF53rrkBKA.avif',
    url: 'https://www.uxtools.co/blog/generative-media-workflows-in-ui-design',
  },
];
function Logo() {
  return (
    <img src="/assets/flora-logo.svg" alt="FLORA" className="brand-logo" />
  );
}
function Actions({ demoOnly = false }: { demoOnly?: boolean }) {
  return (
    <div className="actions">
      {!demoOnly && (
        <a href={signup} className="button">
          Get started for free
        </a>
      )}
      <a href={demo} className={demoOnly ? 'demo-button' : 'text-link'}>
        Book a demo <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
function Card({
  title,
  text,
  image,
  className = '',
  children,
}: {
  title: string;
  text: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={'feature-card ' + className}>
      {image && (
        <img
          src={'/assets/' + image}
          alt=""
          loading="lazy"
          className="card-art"
        />
      )}
      {children}
      <div className="card-caption">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [videoError, setVideoError] = useState(false);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="logo" href="#teams" aria-label="FLORA home">
          <Logo />
        </a>
        <nav aria-label="Main navigation">
          {nav.map(([label, url]) => (
            <a
              className={label === 'Teams' ? 'active' : ''}
              href={url}
              key={label}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button" href={signup}>
            Get started for free
          </a>
          <Sheet open={menu} onOpenChange={setMenu}>
            <SheetTrigger
              className="mobile-trigger"
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent className="mobile-sheet">
              <SheetHeader>
                <SheetTitle>FLORA</SheetTitle>
                <SheetDescription>Explore FLORA</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation">
                {nav.map(([label, url]) => (
                  <a href={url} key={label} onClick={() => setMenu(false)}>
                    {label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </nav>
              <a href={signup} className="button">
                Get started for free
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="teams">
          <h1>
            Intelligent creation for the <em>whole team.</em>
          </h1>
          <p>
            With FLORA’s Workspaces, enjoy seamless collaboration
            <br />
            with shared assets, feedback review, and billing.
          </p>
          <Actions />
          <div className="hero-video">
            <video
              controls
              playsInline
              preload="none"
              poster="/assets/team-video-poster.png"
              aria-label="Introduction to FLORA and collaborative creative workflows"
              onError={() => setVideoError(true)}
            >
              <source
                src="https://ik.imagekit.io/ff5bkg98p/landing-page-assets/LaunchVideo_OfficialVersion.mov/ik-video.mp4?updatedAt=1748396635519"
                type="video/mp4"
              />
              Your browser does not support embedded video.
            </video>
          </div>
          {videoError && (
            <p className="video-fallback">
              The video is currently unavailable.{' '}
              <a href="https://flora.ai/teams">Watch on FLORA ↗</a>
            </p>
          )}
          <div className="trusted">
            <p>Trusted by top creatives at</p>
            <div
              className="customer-logos"
              aria-label="NYU, Pentagram, MSCHF, Riot Games, Studio Dumbar / DEPT, WPP"
            >
              <span className="nyu">▣ NYU</span>
              <span className="pentagram">Pentagram</span>
              <span className="mschf">▥MSCHF</span>
              <span className="riot">
                ▥ RIOT
                <br />
                GAMES
              </span>
              <span className="dumbr">STUDIO DUMBAR/DEPT.</span>
              <span className="wpp">WPP</span>
            </div>
          </div>
        </section>
        <section className="section collaboration" id="collaboration">
          <div className="section-header split">
            <div>
              <h2>A power tool for powerhouse teams.</h2>
              <Actions />
            </div>
            <p>
              Work in real-time across departments and disciplines. Share
              access, create together, and keep everyone in sync.
            </p>
          </div>
          <div className="grid three">
            <Card
              title="Collaborative Multiplayer"
              text="Work side-by-side, even remotely"
              className="multiplayer"
            >
              <div className="cursors" aria-hidden="true">
                <span className="cursor cursor-one">
                  <MousePointer2 fill="currentColor" />
                  <b>Emmanuel</b>
                </span>
                <span className="cursor cursor-two">
                  <MousePointer2 fill="currentColor" />
                  <b>Charlie</b>
                </span>
                <span className="cursor cursor-three">
                  <MousePointer2 fill="currentColor" />
                  <b>Justine</b>
                </span>
                <span className="cursor cursor-four">
                  <MousePointer2 fill="currentColor" />
                  <b>Justine</b>
                </span>
              </div>
            </Card>
            <Card
              title="Team Permissions"
              text="Admin control, editor freedom"
              image="team-permission.webp"
              className="permissions"
            />
            <Card
              title="Shared Folders"
              text="Smart spaces as smart as your team"
              image="shared-folders.webp"
              className="folders"
            />
          </div>
        </section>
        <section className="section" id="support">
          <div className="section-header">
            <h2>Comprehensive white-glove support.</h2>
            <p>From onboarding to technical support, we’re in your corner.</p>
            <Actions demoOnly />
          </div>
          <div className="grid two">
            <Card
              title="Bespoke Workflows"
              text="A custom-made process for your specific workflow."
              image="Bespoke-Workflows-.webp"
              className="wide workflow"
            />
            <Card
              title="White-glove Onboarding"
              text="Empowering your team from day one."
              image="Image(26).png"
              className="wide calendar"
            />
          </div>
          <div className="grid three support-bottom">
            <Card
              title="Private Slack Channel"
              text="Direct access to the FLORA team."
              image="H0ooQelaO92y8dqnoLYeaXdanM.png"
              className="slack"
            />
            <Card
              title="Early Access"
              text="Influence over the product roadmap."
              image="R4S7XPudkFw1RekN41oNuyv1Y0.png"
              className="early"
            />
            <Card
              title="Onboarding"
              text="We’ll help you get set up and running."
              image="onboarding.webp"
              className="chat"
            />
          </div>
        </section>
        <section className="section management" id="management">
          <div className="section-header">
            <h2>Frictionless management.</h2>
            <p>Intuitive admin tools for a stress-free transition.</p>
            <Actions />
          </div>
          <Card
            title="Unified Dashboard"
            text="All-in-one management interface"
            image="dashboard.png"
            className="dashboard"
          />
          <div className="grid three management-bottom">
            <Card
              title="Self-Serve Billing"
              text="Streamline payments across teams"
              image="ckniuEK7vUJiJ3qLuZ3l5tgw.webp"
              className="color-card"
            >
              <CreditCard className="feature-icon" />
            </Card>
            <Card
              title="Dedicated Workspaces"
              text="Private workspaces for every user"
              image="tfENLhrRczE7Kd4ApPquozmt6o.webp"
              className="color-card"
            >
              <Users className="feature-icon" />
            </Card>
            <Card
              title="SSO / SAML Support"
              text="Simplified sign-in, elevated security"
              image="CGYtTRj3g1Z4EjyyRWCG7kd4BNM.webp"
              className="color-card"
            >
              <Shield className="feature-icon" />
              <span className="badge">Coming soon</span>
            </Card>
          </div>
        </section>
        <section className="section" id="case-studies">
          <div className="section-header">
            <h2>Case studies from creative teams</h2>
            <p>
              See how professionals across film, fashion, branding, and design
              are using FLORA.
            </p>
            <Actions demoOnly />
          </div>
          <div className="grid three">
            {studies.map((s) => (
              <a
                className="study"
                href={s.url}
                key={s.title}
                target="_blank"
                rel="noreferrer"
              >
                <img src={'/assets/' + s.image} alt="" loading="lazy" />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
        </section>
        <section className="section press" id="press">
          <div className="section-header">
            <h2>Hear about us.</h2>
            <p>From TechCrunch to CNET, FLORA is making waves.</p>
          </div>
          <Carousel opts={{ align: 'start' }} className="press-carousel">
            <CarouselContent>
              {press.map((p) => (
                <CarouselItem className="press-slide" key={p.title}>
                  <a
                    href={p.url}
                    className="press-card"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={'/assets/' + p.image} alt="" loading="lazy" />
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.by}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="carousel-controls">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </section>
        <section className="closing">
          <h2>A new medium needs a new canvas.</h2>
          <Actions />
        </section>
      </main>
      <footer className="site-footer">
        <img
          className="footer-wordmark"
          src="/assets/inline-1.svg"
          alt=""
          loading="lazy"
        />
        <div className="footer-content">
          <div className="footer-company">
            <div className="copyright">
              <span className="logo-mark">
                <Logo />
              </span>
              <span>
                Copyright © 2025
                <br />
                All rights reserved
              </span>
            </div>
            <div className="socials">
              <a href="https://x.com/floraai" aria-label="FLORA on X">
                𝕏
              </a>
              <a
                href="https://www.instagram.com/florafaunaai/"
                aria-label="FLORA on Instagram"
              >
                <span className="social-label">◎</span>
              </a>
              <a
                href="https://www.youtube.com/@florafaunaai"
                aria-label="FLORA on YouTube"
              >
                <span className="social-label">▶</span>
              </a>
              <a
                href="https://www.linkedin.com/company/floraai"
                aria-label="FLORA on LinkedIn"
              >
                <span className="social-label">in</span>
              </a>
            </div>
          </div>
          <div className="footer-nav">
            {[
              [
                'Company',
                [
                  ['Blog', 'https://flora.ai/blog'],
                  ['Careers', 'https://flora.ai/careers'],
                  ['Community', 'https://app.florafauna.ai/community'],
                  ['Manifesto', 'https://flora.ai/blog/manifesto'],
                ],
              ],
              [
                'Product',
                [
                  ['Updates', 'https://flora.ai/updates'],
                  ['Pricing', 'https://flora.ai/pricing'],
                  ['Teams', '#teams'],
                  ['Affiliates', 'https://flora.ai/partners'],
                ],
              ],
              [
                'Resources',
                [
                  ['Docs', 'https://floraai.gitbook.io/docs'],
                  ['Status', 'https://status.flora.ai'],
                  ['Support', 'mailto:support@florafauna.ai'],
                  ['Legal', 'https://flora.ai/legal/privacy-policy'],
                ],
              ],
            ].map(([title, links]) => (
              <div key={title as string}>
                <h3>{title as string}</h3>
                {(links as string[][]).map(([label, url]) => (
                  <a href={url} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
