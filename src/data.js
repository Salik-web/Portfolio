// ── SHARED LINKS ────────────────────────────────────────────────────────────
// One place for every URL used across all three pages (entrance, editorial,
// meme). Edit here and every page updates.

// Project links. `live` only on projects that have a live demo; `code` on all.
export const PROJECT_LINKS = {
  textToSql: {
    live: 'https://text-to-sql-agent-neon.vercel.app/',
    code: 'https://github.com/Salik-web/text-to-sql-agent',
  },
  nba: { code: 'https://github.com/Salik-web/nba-analytics-dashboard' },
  researchAgent: {
    live: 'https://research-agent-tau-henna.vercel.app/',
    code: 'https://github.com/Salik-web/Research-Agent',
  },
  clipFactory: { code: 'https://github.com/Salik-web/Long-to-short-videos-youtube' },
}

// Profile links (github / linkedin buttons everywhere).
export const SOCIAL_LINKS = {
  github: 'https://github.com/Salik-web',
  linkedin: 'https://www.linkedin.com/in/syed-salik-alvi-0bb0a527b/?skipRedirect=true',
}

// Resume download. Drop your file at public/resume.pdf (served from /resume.pdf).
export const RESUME_URL = '/resume.pdf'
