import { PROJECT_LINKS, SOCIAL_LINKS, RESUME_URL } from './data.js'

const mono = "'IBM Plex Mono', monospace"
const sans = "'Inter', -apple-system, sans-serif"

// smooth-scroll to an in-page section without touching the URL hash
// (the app uses hash routing, so we must not overwrite it)
const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const PROJECTS = [
  {
    n: '01',
    title: 'Text-to-SQL Agent',
    live: true,
    desc: 'Natural language to SQL on a LangGraph state machine: inspect, generate, validate, execute, format. Runs on Qwen3-32B via Groq across SQLite, PostgreSQL, and MySQL, with three read-only safety layers and self-correcting retries.',
    links: PROJECT_LINKS.textToSql,
    tech: ['LANGGRAPH · GROQ', 'FASTAPI'],
    last: false,
  },
  {
    n: '02',
    title: 'NBA Analytics Dashboard',
    live: false,
    desc: 'Live NBA data feeds twelve engineered features across form, matchups, and game context into an XGBoost and LightGBM ensemble, served through a Streamlit dashboard with auto-refresh and Plotly charts.',
    links: PROJECT_LINKS.nba,
    tech: ['XGBOOST · LIGHTGBM', 'STREAMLIT'],
    last: false,
  },
  {
    n: '03',
    title: 'Research Agent',
    live: true,
    desc: 'Full-stack agentic RAG on an 11-node LangGraph pipeline: retrieve, evaluate, search, human review, generate. Grounds answers in uploaded PDFs via Pinecone and live web data via Tavily, streaming tokens over SSE.',
    links: PROJECT_LINKS.researchAgent,
    tech: ['RAG · PINECONE', 'LANGSMITH'],
    last: false,
  },
  {
    n: '04',
    title: 'Clip Factory',
    live: false,
    desc: 'Turns long videos into captioned 9:16 clips. Paste a link, upload a file, or search by view-velocity; it transcribes, finds highlights (LLM for talk, audio-energy for sports), and cuts them. Review in a dashboard, then one-click upload to YouTube. Nothing publishes automatically.',
    links: PROJECT_LINKS.clipFactory,
    tech: ['WHISPER · LLM', 'YOUTUBE API'],
    last: true,
  },
]

const EXPERIENCE = [
  {
    when: 'AUG 2025 TO JAN 2026',
    role: 'AI / Machine Learning Intern',
    org: 'DREAMS NETWORK & TECHNOLOGY · KARACHI',
    desc: 'Built AI automation pipelines and integrated ML into a sales-forecasting system; architected reusable OOP modules that cut new-source integration from days to hours.',
    last: false,
  },
  {
    when: 'AUG 2023 TO DEC 2023',
    role: 'Web Development Intern',
    org: 'THE TECH TURBINE · KARACHI',
    desc: 'Shipped React UI components across client projects; refactored the REST API layer with senior devs in Agile sprints.',
    last: false,
  },
  {
    when: 'NOV 2025 TO JAN 2026',
    role: 'Lead Corporate',
    org: 'SSUET MEDIA & EVENTS COUNCIL',
    desc: 'Secured corporate sponsorships for flagship university events, owning outreach, pitching, and negotiation with companies.',
    last: true,
  },
]

const DIRECTIONS = [
  {
    title: 'Citation Tracker',
    desc: 'See when and how LLMs cite your brand versus competitors. Rank tracking, but for answers.',
    pad: '28px 28px 0 0',
  },
  {
    title: 'Answer Auditor',
    desc: 'What an LLM actually knows about you: gaps, hallucinations, and the content to fix them.',
    pad: '28px',
  },
  {
    title: 'Schema Autopilot',
    desc: 'Auto-generate the structured data, FAQs, and llms.txt that make you easy to quote.',
    pad: '28px 0 0 28px',
  },
]

function ProjLink({ href, label }) {
  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noreferrer"
      className="proj-link"
      style={{
        fontFamily: mono,
        fontSize: 11,
        letterSpacing: '0.05em',
        borderBottom: '1px solid currentColor',
        paddingBottom: 2,
      }}
    >
      {label} <span className="arrow">↗</span>
    </a>
  )
}

export default function Editorial() {
  return (
    <div className="editorial" style={{ background: '#fff', fontFamily: sans, color: '#0a0a0a' }}>
      {/* nav */}
      <div
        className="ed-nav"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 64px',
          borderBottom: '1px solid #0a0a0a',
          position: 'sticky',
          top: 0,
          background: '#fff',
          zIndex: 50,
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <a href="#/" className="nav-link" style={{ fontFamily: mono, fontSize: 13, letterSpacing: '0.04em' }}>
          SYED SALIK ALVI
        </a>
        <div
          className="ed-nav-links"
          style={{
            display: 'flex',
            gap: 34,
            alignItems: 'center',
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            color: '#0a0a0a',
            flexWrap: 'wrap',
          }}
        >
          <a href="#work" className="nav-link" onClick={scrollTo('work')}>Work</a>
          <a href="#building" className="nav-link" onClick={scrollTo('building')}>Building</a>
          <a href="#experience" className="nav-link" onClick={scrollTo('experience')}>Experience</a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="nav-link">Resume</a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
        </div>
      </div>

      {/* hero */}
      <div className="ed-hero" style={{ padding: '140px 64px 100px', maxWidth: 1240, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div
          className="ed-hero-num"
          style={{
            position: 'absolute',
            top: 20,
            right: 64,
            fontFamily: mono,
            fontSize: 240,
            fontWeight: 700,
            color: '#f2f1eb',
            lineHeight: 1,
            zIndex: 0,
            userSelect: 'none',
          }}
        >
          01
        </div>
        <div style={{ position: 'relative', zIndex: 1, fontFamily: mono, fontSize: 12, letterSpacing: '0.08em', color: '#6a655e', marginBottom: 40, animation: 'fadeUp 0.6s ease both' }}>
          GEN AI &amp; ML ENGINEER · KARACHI, PAKISTAN
        </div>
        <h1
          className="ed-hero-title"
          style={{
            position: 'relative',
            zIndex: 1,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: 100,
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            margin: 0,
            maxWidth: '14ch',
            animation: 'fadeUp 0.6s ease 0.08s both',
          }}
        >
          Agents that work in production, not just in demos.
        </h1>
        <p style={{ position: 'relative', zIndex: 1, fontSize: 18, lineHeight: 1.75, color: '#3a352e', maxWidth: '52ch', margin: '44px 0 0', fontWeight: 400, animation: 'fadeUp 0.6s ease 0.16s both' }}>
          I build LLM agents, retrieval pipelines, and applied ML systems. Text-to-SQL agents, RAG
          assistants, forecasting dashboards, video pipelines, all shipped, not prototyped.
        </p>
      </div>

      {/* selected work */}
      <div id="work" className="ed-section" style={{ padding: '90px 64px 0', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#0a0a0a', paddingBottom: 18, borderBottom: '1px solid #0a0a0a' }}>
          <span>01 · SELECTED WORK</span>
          <span style={{ color: '#6a655e' }}>2023 TO 2026</span>
        </div>

        {PROJECTS.map((p) => (
          <div
            key={p.n}
            className="proj-row"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 44,
              padding: '44px 24px',
              margin: '0 -24px',
              borderBottom: p.last ? '1px solid #0a0a0a' : '1px solid #d8d4cc',
            }}
          >
            <span style={{ fontFamily: mono, fontSize: 13, width: 30, flex: 'none', paddingTop: 12 }}>{p.n}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: sans, fontSize: 32, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.title}</span>
                {p.live && (
                  <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.05em', border: '1px solid currentColor', borderRadius: 20, padding: '3px 10px' }}>
                    LIVE
                  </span>
                )}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.7, maxWidth: '66ch' }}>{p.desc}</div>
              <div style={{ display: 'flex', gap: 22, marginTop: 18, flexWrap: 'wrap' }}>
                <ProjLink href={p.links.code} label="CODEBASE" />
                {p.links.live && <ProjLink href={p.links.live} label="LIVE" />}
              </div>
            </div>
            <div className="ed-tech" style={{ fontFamily: mono, fontSize: 11, textAlign: 'right', paddingTop: 12, whiteSpace: 'nowrap', opacity: 0.65 }}>
              {p.tech.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < p.tech.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* currently building: GEO */}
      <div id="building" className="ed-section" style={{ padding: '100px 64px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#0a0a0a', paddingBottom: 18, borderBottom: '1px solid #0a0a0a' }}>
          02 · CURRENTLY BUILDING
        </div>
        <h2 className="ed-h2" style={{ fontFamily: sans, fontWeight: 500, fontSize: 52, lineHeight: 1.12, letterSpacing: '-0.02em', margin: '44px 0 0', maxWidth: '18ch' }}>
          GEO, optimization for the LLM era.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: '#3a352e', maxWidth: '64ch', margin: '28px 0 0' }}>
          Search is moving from ten blue links to one generated answer. Generative Engine
          Optimization is how brands get cited, surfaced, and trusted inside ChatGPT, Perplexity, and
          Gemini. I'm early here, and going all in.
        </p>

        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="cta-outline" style={{ display: 'inline-block', marginTop: 36, fontFamily: mono, fontSize: 12, letterSpacing: '0.05em', border: '1px solid #0a0a0a', padding: '12px 22px' }}>
          HAVE ANY QUESTIONS? ↗
        </a>

        <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.04em', color: '#6a655e', margin: '56px 0 0' }}>
          DIRECTIONS I'M EXPLORING
        </div>
        <div className="ed-directions" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 6 }}>
          {DIRECTIONS.map((d) => (
            <div key={d.title} className="direction-card" style={{ borderTop: '1px solid #0a0a0a', padding: d.pad }}>
              <div style={{ fontFamily: sans, fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{d.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#3a352e', margin: 0 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* experience */}
      <div id="experience" className="ed-section" style={{ padding: '0 64px 100px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#0a0a0a', paddingBottom: 18, borderBottom: '1px solid #0a0a0a' }}>
          03 · EXPERIENCE
        </div>
        {EXPERIENCE.map((x) => (
          <div key={x.role} className="ed-exp-row" style={{ display: 'flex', gap: 44, padding: '34px 0', borderBottom: x.last ? '1px solid #0a0a0a' : '1px solid #d8d4cc' }}>
            <div style={{ width: 190, flex: 'none', fontFamily: mono, fontSize: 12, color: '#6a655e', paddingTop: 5 }}>{x.when}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: sans, fontSize: 22, fontWeight: 600 }}>{x.role}</div>
              <div style={{ fontFamily: mono, fontSize: 12, color: '#6a655e', marginTop: 6 }}>{x.org}</div>
            </div>
            <div style={{ fontSize: 14, color: '#3a352e', maxWidth: '42ch', lineHeight: 1.7 }}>{x.desc}</div>
          </div>
        ))}
      </div>

      {/* contact */}
      <div className="ed-section" style={{ borderTop: '1px solid #0a0a0a', padding: '100px 64px 60px', maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.06em', color: '#0a0a0a', marginBottom: 30 }}>
          04 · GET IN TOUCH
        </div>
        <h2 className="ed-h2" style={{ fontFamily: sans, fontWeight: 500, fontSize: 68, lineHeight: 1.08, letterSpacing: '-0.025em', margin: 0 }}>
          Let's build something<br />worth shipping.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 56, flexWrap: 'wrap', gap: 32 }}>
          <a href="mailto:saliksyed96@gmail.com" className="nav-link" style={{ fontFamily: sans, fontSize: 24, fontWeight: 500, borderBottom: '1px solid #0a0a0a', paddingBottom: 4 }}>
            saliksyed96@gmail.com
          </a>
          <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.02em', lineHeight: 2.2, color: '#6a655e' }}>
            <div>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" style={{ color: '#6a655e' }}>GITHUB</a>
              {' · '}
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" style={{ color: '#6a655e' }}>LINKEDIN</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 80, paddingTop: 24, borderTop: '1px solid #d8d4cc', display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: 11, color: '#6a655e', letterSpacing: '0.02em', flexWrap: 'wrap', gap: 12 }}>
          <a href="#/" style={{ color: '#6a655e' }}>← BACK TO ENTRANCE</a>
          <span>© 2026 SYED SALIK ALVI</span>
        </div>
      </div>
    </div>
  )
}
