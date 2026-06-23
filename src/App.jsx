import { useRef } from 'react'

// Your own sound. Drop a file named `fah.mp3` into the `public/` folder and it
// will be served from here. Want a different name/location? Just change this.
const FAH_SOUND_URL = '/fah.mp3'

const HERO_TAGLINE = 'POV: flipping around and find out. Shits Insane'

// ── PROJECT LINKS ──────────────────────────────────────────────────────────
// Paste your real URLs here. Anything left as '' still shows the button but
// links nowhere yet (so you can see it on the page). Fill these in.
const PROJECT_LINKS = {
  textToSql: { live: 'https://text-to-sql-agent-neon.vercel.app/', code: 'https://github.com/Salik-web/text-to-sql-agent' },
  nba: { code: 'https://github.com/Salik-web/nba-analytics-dashboard' },
  researchAgent: { live: 'https://research-agent-tau-henna.vercel.app/', code: 'https://github.com/Salik-web/Research-Agent' },
  clipFactory: { code: 'https://github.com/Salik-web' },
}

// ── SOCIAL + RESUME ────────────────────────────────────────────────────────
// Paste your profile URLs here (the github / linkedin buttons in the contact
// section link to these).
const SOCIAL_LINKS = {
  github: 'https://github.com/Salik-web',
  linkedin: 'https://www.linkedin.com/in/syed-salik-alvi-0bb0a527b/?skipRedirect=true', // <- paste your LinkedIn profile URL here
}

// Resume download: drop your resume file into the public/ folder and name it
// `resume.pdf` (path becomes /resume.pdf). Different name? Change it here.
const RESUME_URL = '/resume.pdf'

const linkPill = {
  fontFamily: "'Comic Neue', cursive",
  fontWeight: 700,
  fontSize: 13,
  textDecoration: 'none',
  color: '#000',
  background: '#ffe600',
  border: '3px solid #000',
  borderRadius: 10,
  padding: '6px 14px',
  cursor: 'pointer',
  boxShadow: '3px 3px 0 #000',
  display: 'inline-block',
}

// Clickable "live ↗" / "codebase ↗" links for a project card. Pass a `live`
// URL only on cards that have one; `code` shows on every card.
function CardLinks({ live, code }) {
  return (
    <div
      style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}
      onClick={(e) => e.stopPropagation()}
    >
      {live !== undefined && (
        <a
          className="press"
          href={live || '#'}
          target="_blank"
          rel="noreferrer"
          style={{ ...linkPill, background: '#22c55e' }}
        >
          live ↗
        </a>
      )}
      <a className="press" href={code || '#'} target="_blank" rel="noreferrer" style={linkPill}>
        codebase ↗
      </a>
    </div>
  )
}

export default function App() {
  const rootRef = useRef(null)
  const audioRef = useRef(null)
  const friedRef = useRef(false)

  // Plays YOUR mp3 (the old version synthesized the "fahhh" with the Web Audio
  // API — that synth is gone; the buttons now play public/fah.mp3 instead).
  const playFah = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(FAH_SOUND_URL)
      }
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } catch (e) {
      /* audio not available */
    }
  }

  const applyFry = (on) => {
    friedRef.current = on
    const el = rootRef.current
    if (el) {
      el.style.filter = on
        ? 'contrast(1.5) saturate(2.8) hue-rotate(-8deg) brightness(1.05)'
        : 'none'
      el.style.animation = on ? 'shake 0.4s ease-in-out 2' : 'none'
    }
  }

  const toggleFry = () => applyFry(!friedRef.current)

  return (
    <div
      ref={rootRef}
      data-screen-label="Syed Salik Alvi"
      style={{
        background: '#fef9ec',
        fontFamily: "'Hanken Grotesk', sans-serif",
        color: '#0f0f0f',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* top bar */}
      <div
        className="topbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 28px',
          position: 'sticky',
          top: 0,
          zIndex: 60,
          background: '#ffe600',
          borderBottom: '4px solid #000',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <div style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: 16 }}>
          salik.exe ⚡
        </div>
        <div className="topbar-nav" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span
            className="press"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 13,
              padding: '8px 14px',
              background: '#fff',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            work
          </span>
          <a
            className="press"
            href={RESUME_URL}
            download
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 13,
              padding: '8px 14px',
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            resume
          </a>
          <span
            className="press"
            onClick={toggleFry}
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 13,
              padding: '8px 14px',
              background: '#ff7a1a',
              color: '#fff',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            🍟 DEEP FRY
          </span>
          <span
            className="press"
            onClick={playFah}
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              letterSpacing: '0.04em',
              fontSize: 15,
              padding: '9px 18px',
              background: '#2c6fe8',
              color: '#fff',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            🔊 THE FAHHH
          </span>
        </div>
      </div>

      {/* hero */}
      <div
        className="hero"
        style={{
          padding: '64px 40px 40px',
          display: 'flex',
          gap: 48,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div className="hero-col" style={{ flex: 1, minWidth: 440 }}>
          <div
            style={{
              display: 'inline-block',
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 15,
              background: '#000',
              color: '#ffe600',
              padding: '6px 14px',
              borderRadius: 30,
              transform: 'rotate(-2deg)',
              marginBottom: 22,
            }}
          >
            {HERO_TAGLINE}
          </div>
          <h1
            className="meme-cap"
            style={{
              fontSize: 'clamp(44px, 11vw, 118px)',
              lineHeight: 0.86,
              margin: 0,
              color: '#0f0f0f',
              WebkitTextStroke: 0,
            }}
          >
            HE'S LITERALLY{' '}
            <span
              style={{
                color: '#2c6fe8',
                WebkitTextStroke: '3px #000',
                WebkitTextFillColor: '#2c6fe8',
              }}
            >
              HIM.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 24,
              margin: '18px 0 0',
              color: '#1a1a1a',
            }}
          >
            Syed Salik Alvi · Gen AI Engineer{' '}
            <span style={{ color: '#7a7264' }}>(the agentic systems kind, no cap)</span>
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#3a352e',
              maxWidth: '54ch',
              margin: '18px 0 0',
              fontWeight: 500,
            }}
          >
            I build agentic systems, RAG pipelines, and ML apps that run{' '}
            <strong>live in production</strong>. Demos are easy. I ship.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 24,
              background: '#22c55e',
              color: '#06270f',
              border: '3px solid #000',
              borderRadius: 14,
              padding: '10px 18px',
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 16,
              boxShadow: '4px 4px 0 #000',
              animation: 'wobble 3s ease-in-out infinite',
            }}
          >
            🐐 beginner on paper. clutch in prod.
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 30,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="press"
              style={{
                fontFamily: "'Anton', Impact, sans-serif",
                fontSize: 18,
                letterSpacing: '0.03em',
                background: '#000',
                color: '#fff',
                padding: '14px 26px',
                borderRadius: 12,
                cursor: 'pointer',
                boxShadow: '4px 4px 0 #2c6fe8',
              }}
            >
              SEE THE RECEIPTS ↓
            </span>
            <span
              className="press"
              onClick={playFah}
              style={{
                fontFamily: "'Comic Neue', cursive",
                fontWeight: 700,
                fontSize: 16,
                background: '#ffe600',
                padding: '13px 22px',
                border: '3px solid #000',
                borderRadius: 12,
                cursor: 'pointer',
                boxShadow: '4px 4px 0 #000',
              }}
            >
              or press for 🔊 THE FAHHH
            </span>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div
        style={{
          background: '#000',
          color: '#ffe600',
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          padding: '14px 0',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'memeMarquee 20s linear infinite',
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 26,
            letterSpacing: '0.02em',
          }}
        >
          {[0, 1].map((rep) => (
            <span key={rep}>
              <span style={{ margin: '0 22px' }}>NO CAP 🧢</span>
              <span style={{ margin: '0 22px', color: '#22c55e' }}>RAG GOD</span>
              <span style={{ margin: '0 22px' }}>IT JUST WORKS</span>
              <span style={{ margin: '0 22px', color: '#2c6fe8' }}>AGENT STACK PILLED</span>
              <span style={{ margin: '0 22px' }}>FAST AF ⚡</span>
              <span style={{ margin: '0 22px', color: '#ff7a1a' }}>MCP NATIVE</span>
              <span style={{ margin: '0 22px', color: '#ff7a1a' }}>SHIPS IT</span>
              <span style={{ margin: '0 22px' }}>BASED 🗿</span>
            </span>
          ))}
        </div>
      </div>

      {/* greentext origin story */}
      <div className="sec" style={{ padding: '64px 40px' }}>
        <div
          className="meme-cap"
          style={{ fontSize: 'clamp(26px, 6vw, 40px)', color: '#0f0f0f', WebkitTextStroke: 0, marginBottom: 20 }}
        >
          THE ORIGIN STORY 📜
        </div>
        <div
          style={{
            background: '#0d0d0d',
            border: '4px solid #000',
            borderRadius: 16,
            padding: '30px 34px',
            maxWidth: 760,
            boxShadow: '8px 8px 0 #22c55e',
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 17,
              lineHeight: 1.85,
              color: '#789922',
            }}
          >
            <div>&gt; be me, final-year CS student</div>
            <div>&gt; everyone: "genAI? you're too junior bro"</div>
            <div>&gt; teach myself the whole stack: agents, RAG, ML, the works</div>
            <div>&gt; ship text-to-SQL agents, ML dashboards &amp; live RAG apps back to back</div>
            <div>&gt; all in production, all on free-tier infra, figuring it out as i go</div>
            <div>&gt; turns out i was built for this</div>
            <div style={{ color: '#fff' }}>&gt; mfw i was clutch the whole time 🗿</div>
          </div>
        </div>
      </div>

      {/* GEO / the next W */}
      <div
        className="sec"
        style={{
          background: '#22c55e',
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          padding: '64px 40px',
          position: 'relative',
        }}
      >
        <div
          className="stonks"
          style={{
            position: 'absolute',
            top: 34,
            right: 48,
            transform: 'rotate(8deg)',
            background: '#000',
            color: '#22c55e',
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 22,
            padding: '8px 18px',
            borderRadius: 12,
          }}
        >
          📈 STONKS
        </div>
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Comic Neue', cursive",
            fontWeight: 700,
            fontSize: 14,
            background: '#000',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: 30,
            marginBottom: 18,
          }}
        >
          ⏳ currently cooking, not a past project but a live bet
        </div>
        <h2
          className="meme-cap"
          style={{
            fontSize: 'clamp(36px, 8vw, 74px)',
            color: '#fff',
            WebkitTextStroke: '3px #000',
            margin: 0,
            lineHeight: 0.9,
            maxWidth: '18ch',
          }}
        >
          I'M BUILDING FOR GEO
        </h2>
        <p
          style={{
            fontFamily: "'Comic Neue', cursive",
            fontWeight: 700,
            fontSize: 22,
            margin: '16px 0 0',
            color: '#06270f',
          }}
        >
          aka SEO but for the bots that replaced Google 🤖
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: '#06270f',
            maxWidth: '60ch',
            margin: '14px 0 0',
            fontWeight: 500,
          }}
        >
          Search is becoming one generated answer. Generative Engine Optimization = how brands get{' '}
          <strong>cited, surfaced &amp; trusted</strong> inside ChatGPT, Perplexity &amp; Gemini.
          I'm early. I'm going all in.
        </p>

        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#06270f',
            margin: '42px 0 18px',
          }}
        >
          ↓ ideas i'm cooking (rate them / steal them)
        </div>
        <div className="ideas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          <div
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 16,
              padding: 20,
              boxShadow: '5px 5px 0 #000',
            }}
          >
            <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 20 }}>
              CITATION TRACKER
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a352e', margin: '8px 0 0' }}>
              See when &amp; how LLMs cite your brand vs competitors. Rank tracking, but for answers.
            </p>
          </div>
          <div
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 16,
              padding: 20,
              boxShadow: '5px 5px 0 #000',
            }}
          >
            <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 20 }}>
              ANSWER AUDITOR
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a352e', margin: '8px 0 0' }}>
              What an LLM actually "knows" about you: gaps, hallucinations, and the fix.
            </p>
          </div>
          <div
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 16,
              padding: 20,
              boxShadow: '5px 5px 0 #000',
            }}
          >
            <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 20 }}>
              SCHEMA AUTOPILOT
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.5, color: '#3a352e', margin: '8px 0 0' }}>
              Auto-gen the structured data, FAQs &amp; llms.txt that make you easy to quote.
            </p>
          </div>
          <div
            style={{
              background: '#ffe600',
              border: '4px solid #000',
              borderRadius: 16,
              padding: 20,
              boxShadow: '5px 5px 0 #000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 20, lineHeight: 1.05 }}>
              WHICH IS THE BIGGEST W?
            </div>
            <span
              className="press"
              style={{
                alignSelf: 'flex-start',
                marginTop: 10,
                fontFamily: "'Comic Neue', cursive",
                fontWeight: 700,
                fontSize: 13,
                background: '#000',
                color: '#ffe600',
                padding: '8px 14px',
                borderRadius: 10,
                cursor: 'pointer',
              }}
            >
              tell me ↗
            </span>
          </div>
        </div>
      </div>

      {/* projects */}
      <div id="projects" className="sec" style={{ padding: '64px 40px', scrollMarginTop: 80 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 36,
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <div className="meme-cap" style={{ fontSize: 'clamp(30px, 7vw, 52px)', color: '#0f0f0f', WebkitTextStroke: 0 }}>
            THE LORE (RECEIPTS) 🧾
          </div>
          <span
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 16,
              color: '#7a7264',
            }}
          >
            trust me bro × actually real
          </span>
        </div>

        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* card 01 */}
          <div
            className="card"
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '7px 7px 0 #000',
            }}
          >
            <div
              style={{
                height: 170,
                background: '#2c6fe8',
                borderBottom: '4px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: '#ffe600',
                  border: '3px solid #000',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Anton', Impact, sans-serif",
                  fontSize: 14,
                }}
              >
                01
              </span>
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  background: '#000',
                  color: '#22c55e',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                ● LIVE
              </span>
              <span className="meme-cap" style={{ fontSize: 34 }}>
                SHIP IT
              </span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 28 }}>
                Text to SQL Agent
              </div>
              <p style={{ fontSize: 15, color: '#3a352e', lineHeight: 1.55, margin: '8px 0 14px' }}>
                NL → SQL on a LangGraph state machine, Qwen3-32B via Groq across
                SQLite/Postgres/MySQL, plus 3 read-only safety layers + self-correcting retries.
              </p>
              <div
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#22c55e',
                }}
              >
                ⭐ 11/10, would deploy again
              </div>
              <CardLinks live={PROJECT_LINKS.textToSql.live} code={PROJECT_LINKS.textToSql.code} />
            </div>
          </div>

          {/* card 02 */}
          <div
            className="card"
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '7px 7px 0 #000',
              marginTop: 32,
            }}
          >
            <div
              style={{
                height: 170,
                background: '#ff7a1a',
                borderBottom: '4px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Anton', Impact, sans-serif",
                  fontSize: 14,
                }}
              >
                02
              </span>
              <span className="meme-cap" style={{ fontSize: 34 }}>
                BALL DON'T LIE
              </span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 28 }}>
                NBA Analytics Dashboard
              </div>
              <p style={{ fontSize: 15, color: '#3a352e', lineHeight: 1.55, margin: '8px 0 14px' }}>
                Live NBA data → 12 engineered features → XGBoost + LightGBM ensemble, served on a
                Streamlit dashboard with auto-refresh + Plotly charts.
              </p>
              <div
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#22c55e',
                }}
              >
                📊 the data said so
              </div>
              <CardLinks code={PROJECT_LINKS.nba.code} />
            </div>
          </div>

          {/* card 03 */}
          <div
            className="card"
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '7px 7px 0 #000',
            }}
          >
            <div
              style={{
                height: 170,
                background: '#22c55e',
                borderBottom: '4px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Anton', Impact, sans-serif",
                  fontSize: 14,
                }}
              >
                03
              </span>
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  background: '#000',
                  color: '#22c55e',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                ● LIVE
              </span>
              <span className="meme-cap" style={{ fontSize: 34 }}>
                IT'S ALIVE
              </span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 28 }}>
                Research Agent
              </div>
              <p style={{ fontSize: 15, color: '#3a352e', lineHeight: 1.55, margin: '8px 0 14px' }}>
                Full-stack agentic RAG on an 11-node LangGraph pipeline: Pinecone semantic retrieval
                over PDFs + Tavily web search + human-in-the-loop, streaming over SSE.
              </p>
              <div
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#22c55e',
                }}
              >
                🚀 deployed &amp; breathing
              </div>
              <CardLinks live={PROJECT_LINKS.researchAgent.live} code={PROJECT_LINKS.researchAgent.code} />
            </div>
          </div>

          {/* card 04 */}
          <div
            className="card"
            style={{
              background: '#fff',
              border: '4px solid #000',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '7px 7px 0 #000',
              marginTop: 32,
            }}
          >
            <div
              style={{
                height: 170,
                background: '#9b4dff',
                borderBottom: '4px solid #000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  background: '#ffe600',
                  border: '3px solid #000',
                  borderRadius: 30,
                  padding: '3px 12px',
                  fontFamily: "'Anton', Impact, sans-serif",
                  fontSize: 14,
                }}
              >
                04
              </span>
              <span className="meme-cap" style={{ fontSize: 34 }}>
                GO VIRAL
              </span>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 28 }}>
                Clip Factory
              </div>
              <p style={{ fontSize: 15, color: '#3a352e', lineHeight: 1.55, margin: '8px 0 14px' }}>
                Turns long videos into captioned 9:16 clips. Paste a YouTube link, upload a file, or
                search by view-velocity; it auto-transcribes, finds the highlights (LLM for talk,
                audio-energy for sports), and cuts them. Review each clip in a dashboard, then
                one-click upload the approved ones to YouTube. Nothing ever publishes on its own.
              </p>
              <div
                style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#22c55e',
                }}
              >
                ✂️ long video in, shorts out
              </div>
              <CardLinks code={PROJECT_LINKS.clipFactory.code} />
            </div>
          </div>
        </div>
      </div>

      {/* experience speedrun */}
      <div className="sec" style={{ background: '#000', color: '#fff', borderTop: '4px solid #000', padding: '64px 40px' }}>
        <div
          className="meme-cap"
          style={{ fontSize: 'clamp(30px, 7vw, 52px)', WebkitTextStroke: 0, color: '#ffe600', marginBottom: 8 }}
        >
          CAREER SPEEDRUN
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            color: '#789922',
            marginBottom: 36,
          }}
        >
          // any% · no glitches · zero hard failures
        </div>

        {[
          {
            when: "AUG '25 → JAN '26",
            role: 'AI / Machine Learning Intern',
            org: 'Dreams Network & Technology · Karachi',
            desc:
              'AI automation pipelines + ML in a sales-forecasting system; reusable OOP modules that cut new-source integration from days to hours.',
            border: '2px solid #2a2a2a',
            bottom: false,
          },
          {
            when: "AUG '23 → DEC '23",
            role: 'Web Development Intern',
            org: 'The Tech Turbine · Karachi',
            desc:
              'Shipped React UI components across client projects; refactored the REST API layer with senior devs in Agile sprints.',
            border: '2px solid #2a2a2a',
            bottom: false,
          },
          {
            when: "NOV '25 → JAN '26",
            role: 'Lead Corporate',
            org: 'SSUET Media & Events Council',
            desc: 'Secured corporate sponsorships for flagship university events, owning outreach, pitching, and negotiation with companies.',
            border: '2px solid #2a2a2a',
            bottom: true,
          },
        ].map((row, i) => (
          <div
            key={i}
            className="exp-row"
            style={{
              display: 'flex',
              gap: 30,
              padding: '24px 0',
              borderTop: row.border,
              borderBottom: row.bottom ? '2px solid #2a2a2a' : undefined,
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                width: 150,
                flex: 'none',
                fontFamily: "'Space Mono', monospace",
                fontSize: 14,
                color: '#ffe600',
              }}
            >
              {row.when}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: 26 }}>{row.role}</div>
              <div
                style={{
                  color: '#9a9286',
                  fontSize: 15,
                  fontFamily: "'Comic Neue', cursive",
                  fontWeight: 700,
                }}
              >
                {row.org}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                fontSize: 15,
                color: '#c4bcae',
                lineHeight: 1.6,
                maxWidth: '44ch',
              }}
            >
              {row.desc}
            </div>
          </div>
        ))}
      </div>

      {/* contact */}
      <div
        className="sec"
        style={{
          padding: '80px 40px',
          textAlign: 'center',
          background: '#2c6fe8',
          borderTop: '4px solid #000',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: "'Comic Neue', cursive",
            fontWeight: 700,
            fontSize: 15,
            background: '#ffe600',
            color: '#000',
            border: '3px solid #000',
            padding: '7px 16px',
            borderRadius: 30,
            transform: 'rotate(-3deg)',
          }}
        >
          reply guaranteed (i'm not built different, just bored) ✦
        </div>
        <h2
          className="meme-cap"
          style={{
            fontSize: 'clamp(40px, 10vw, 92px)',
            color: '#fff',
            WebkitTextStroke: '4px #000',
            margin: '24px 0 0',
            lineHeight: 0.9,
          }}
        >
          SLIDE IN
          <br />
          MY INBOX
        </h2>
        <a
          href="mailto:saliksyed96@gmail.com"
          className="press"
          style={{
            display: 'inline-block',
            marginTop: 30,
            background: '#000',
            color: '#ffe600',
            fontFamily: "'Anton', Impact, sans-serif",
            fontSize: 22,
            letterSpacing: '0.03em',
            padding: '18px 40px',
            borderRadius: 14,
            textDecoration: 'none',
            boxShadow: '5px 5px 0 #ffe600',
          }}
        >
          saliksyed96@gmail.com ↗
        </a>
        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            marginTop: 26,
            flexWrap: 'wrap',
          }}
        >
          <a
            className="press"
            href={SOCIAL_LINKS.github || '#'}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 15,
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              padding: '9px 18px',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            github
          </a>
          <a
            className="press"
            href={SOCIAL_LINKS.linkedin || '#'}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Comic Neue', cursive",
              fontWeight: 700,
              fontSize: 15,
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              padding: '9px 18px',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            linkedin
          </a>
          <span
            className="press"
            onClick={playFah}
            style={{
              fontFamily: "'Anton', Impact, sans-serif",
              fontSize: 16,
              background: '#ffe600',
              padding: '10px 18px',
              border: '3px solid #000',
              borderRadius: 10,
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #000',
            }}
          >
            🔊 ONE LAST FAHHH
          </span>
        </div>
      </div>

      {/* floating FAHHH */}
      <div
        className="press floating-fah"
        onClick={playFah}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 80,
          width: 88,
          height: 88,
          borderRadius: '50%',
          background: '#2c6fe8',
          border: '4px solid #000',
          boxShadow: '5px 5px 0 #000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontFamily: "'Anton', Impact, sans-serif",
          color: '#fff',
          lineHeight: 0.95,
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 26 }}>🔊</span>
        <span style={{ fontSize: 13 }}>FAHHH</span>
      </div>

    </div>
  )
}
