import Link from "next/link";
import { ArrowUpRight, ArrowDown, Mail, MapPin } from "lucide-react";
import { DATA } from "@/data/resume";
import { Reveal } from "@/components/reveal";

const featured = DATA.projects.slice(0, 4);
const archive = DATA.Milestones.slice(0, 10);

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent">
      {children} <ArrowUpRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function ProjectRow({ project, index }: { project: (typeof featured)[number]; index: number }) {
  const primaryLink = project.links?.[0]?.href;
  return (
    <Reveal className="project-row">
      <div className="project-copy">
        <div className="project-meta"><span>0{index + 1}</span><time>{project.dates}</time></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.technologies?.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {primaryLink && <ExternalLink href={primaryLink}>View project</ExternalLink>}
      </div>
      <Link href={primaryLink || "#"} target={primaryLink ? "_blank" : undefined} rel="noreferrer" className="project-media" aria-label={`Open ${project.title}`}>
        {project.video ? <video src={project.video.trim()} autoPlay loop muted playsInline preload="metadata" aria-label={`${project.title} preview`} /> : <div className="media-fallback">Project preview</div>}
        <span className="media-arrow" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
      </Link>
    </Reveal>
  );
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <Link href="#top" className="wordmark" aria-label="Back to top">AS<span>.</span></Link>
        <nav aria-label="Primary navigation"><Link href="#work">Work</Link><Link href="#about">About</Link><Link href="#timeline">Timeline</Link></nav>
        <div className="header-status"><span className="status-dot" /> Open to work</div>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <Reveal><p className="eyebrow">Software engineer / builder / India</p></Reveal>
        <Reveal delay={0.08}><h1 id="hero-title">{DATA.voice.hero}</h1></Reveal>
        <Reveal delay={0.16} className="hero-bottom"><p className="hero-intro">I&apos;m {DATA.name}. I design and engineer calm, capable products — from first idea to the last pixel.</p><div className="hero-aside"><span>Currently shipping from</span><strong><MapPin className="size-4" /> {DATA.location}</strong></div></Reveal>
        <Reveal delay={0.24} className="scroll-cue"><ArrowDown className="size-4" /> Scroll to explore</Reveal>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <SectionLabel number="01">Selected work</SectionLabel>
        <Reveal><div className="section-heading"><h2 id="work-title">A few things<br /><em>I&apos;ve made.</em></h2><p>Products, experiments, and systems built with curiosity and an unreasonable attention to detail.</p></div></Reveal>
        <div className="project-list">{featured.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}</div>
      </section>

      <section id="archive" className="section archive-section" aria-labelledby="archive-title">
        <SectionLabel number="02">More work</SectionLabel>
        <Reveal><div className="archive-heading"><h2 id="archive-title">The archive.</h2><p>A running record of side quests, hackathons, and small ideas that made it out into the world.</p></div></Reveal>
        <div className="archive-list">{archive.map((item, index) => <Reveal key={`${item.title}-${index}`} delay={index * 0.025}><div className="archive-item"><span className="archive-index">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><time>{item.dates.split(",")[0]}</time>{item.links?.[0] && <ExternalLink href={(item.links as readonly { href: string }[])[0].href}>Visit</ExternalLink>}</div></Reveal>)}</div>
      </section>

      <section id="about" className="section about-section" aria-labelledby="about-title">
        <SectionLabel number="03">About</SectionLabel>
        <Reveal><div className="about-grid"><h2 id="about-title">Good software<br /><em>feels inevitable.</em></h2><div><p className="about-lede">{DATA.voice.hero}</p><p>{DATA.summary}</p><p className="about-body">I like taking an idea that exists only in my head and turning it into something real. I care about the entire thing: the idea, the product, the interface, the engineering, and eventually getting it in front of actual people.</p><div className="skill-line"><span>Working with</span><strong>{DATA.skills.slice(0, 9).join(" / ")}</strong></div></div></div></Reveal>
        <Reveal className="personality-strip" delay={0.08}><div className="personality-intro"><span className="eyebrow">The person behind the pixels</span><h3>Still becoming<br /><em>a better builder.</em></h3></div><div className="personality-list">{DATA.voice.personality.map((detail, index) => <p key={detail}><span>{String(index + 1).padStart(2, "0")}</span>{detail}</p>)}</div></Reveal>
      </section>

      <section className="section beliefs-section" aria-labelledby="beliefs-title">
        <SectionLabel number="04">What I believe</SectionLabel>
        <Reveal><div className="beliefs-heading"><h2 id="beliefs-title">Make it real.<br /><em>Make it clear.</em></h2><p>Not software for software&apos;s sake. Products that are simple, useful, and genuinely worth existing.</p></div></Reveal>
        <div className="beliefs-list">{DATA.voice.beliefs.map((belief, index) => <Reveal key={belief.title} delay={index * 0.06}><article className="belief-item"><span>{String(index + 1).padStart(2, "0")}</span><h3>{belief.title}</h3><p>{belief.copy}</p></article></Reveal>)}</div>
      </section>

      <section id="timeline" className="section" aria-labelledby="timeline-title">
        <SectionLabel number="05">Timeline</SectionLabel>
        <Reveal><h2 id="timeline-title" className="timeline-title">Where I&apos;ve been<br /><em>so far.</em></h2></Reveal>
        <div className="timeline-list">{[...DATA.work.map((item) => ({ ...item, kind: "Work", name: item.company, detail: item.title })), ...DATA.education.map((item) => ({ ...item, kind: "Study", name: item.school, detail: item.degree }))].map((item, index) => <Reveal key={`${item.name}-${index}`} delay={index * 0.08}><div className="timeline-item"><time>{item.start} — {item.end}</time><div><span>{item.kind}</span><h3>{item.name}</h3><p>{item.detail}</p></div></div></Reveal>)}</div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><Reveal><SectionLabel number="06">Contact</SectionLabel><h2 id="contact-title">Have a good<br /><em>idea?</em></h2><Link href={`mailto:${DATA.contact.email}`} className="contact-link"><Mail className="size-5" /> {DATA.contact.email} <ArrowUpRight className="size-5" /></Link></Reveal></section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {DATA.name}</span><span>{DATA.location}</span><div>{Object.values(DATA.contact.social).filter((social) => social.navbar).map((social) => <Link key={social.name} href={social.url} target="_blank" rel="noreferrer">{social.name}</Link>)}</div></footer>
    </main>
  );
}
