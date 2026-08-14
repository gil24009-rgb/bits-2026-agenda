import { useState } from 'react'

const ACCENT = '#1C58B1'

const sessions = [
  {
    label: 'Session 1',
    date: 'Aug 25',
    dayShort: 'Tue',
    day: 'Tuesday',
    time: '11:30 - 12:30 pm',
    theme: 'Getting Started and Meetings',
    topics: [
      'Accessing Enterprise ChatGPT',
      'Responsible AI Use',
      'AI Etiquette',
      'Microsoft 365 Integration',
      'Physical Meeting Rooms and AI',
      'Teams & Zoom Transcription',
      'Meeting Summaries',
      'Action Items',
      'Follow-up Automation',
    ],
  },
  {
    label: 'Session 2',
    date: 'Aug 26',
    dayShort: 'Wed',
    day: 'Wednesday',
    time: '11:30 - 12:30 pm',
    theme: 'Documents, Data, and Writing',
    topics: [
      'AI Etiquette',
      'Summarizing Long Documents',
      'Comparing Document Versions',
      'Spreadsheet Analysis',
      'Vendor Research',
      'Brainstorming Solutions',
      'Markdown Context Files',
      'Match Your Writing Style',
      'Reusable Prompt Library',
      'Presentation Outlines',
      'Executive Summaries',
      'IT System Documentation',
    ],
  },
  {
    label: 'Session 3',
    date: 'Aug 27',
    dayShort: 'Thu',
    day: 'Thursday',
    time: '11:30 - 12:30 pm',
    theme: 'Automation and Workflow',
    topics: [
      'AI Etiquette',
      'Human Verification Loop',
      'Memory & Instructions',
      'Projects',
      'Custom GPTs',
      'Codex and ChatGPT App',
      'Agents',
      'Scheduled Workflows',
    ],
  },
]

const infoItems = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    label: 'Virtual option available (Zoom)',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    label: 'Recordings will be made available',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    label: 'Examples & materials will be available in a future IT Employee Canvas course.',
  },
]

export default function App() {
  const [activeSession, setActiveSession] = useState(0)
  const s = sessions[activeSession]

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(135deg, #dae8fb 0%, #f0f6ff 50%, #e8f0fc 100%)',
      }}
      className="min-h-screen flex flex-col items-center justify-center py-8 relative overflow-hidden px-4"
    >
      <div className="w-full max-w-[600px] mx-auto flex flex-col px-8 sm:px-12 py-10 rounded-3xl relative bg-white/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(64,115,190,0.12),0_1.5px_6px_rgba(64,115,190,0.07)]">
        <div className="mb-3">
          <p className="tracking-[0.14em] uppercase text-zinc-500 mb-2 text-[9px] font-semibold">
            BYU-Idaho Information Technology Summit
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div style={{ fontFamily: "'Inria Sans', sans-serif" }} className="leading-none mb-1.5">
                <span className="text-[42px] font-bold text-zinc-900 tracking-tight">B.I.T.S.</span>
                <span className="text-[42px] font-bold ml-2 text-[#1C58B1]">2026</span>
              </div>
              <h1 className="leading-tight text-zinc-800 tracking-wide font-light text-[14px]">
                BYUI IT AI Upskilling
              </h1>
            </div>
            <div className="sm:text-right shrink-0">
              <p className="text-[12px] font-medium text-zinc-700">Aug 25, 26, 27, 2026 &nbsp;·&nbsp; 11:30 am - 12:30 pm</p>
              <div className="flex items-center sm:justify-end gap-1.5 mt-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-[11.5px]"><span className="text-zinc-800 font-medium">MC 387</span><span className="text-zinc-500"> - Special Events Room</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 p-1 rounded-xl mb-8 bg-[#1C58B1]/5 backdrop-blur-md shadow-inner">
          {sessions.map((sess, i) => (
            <button
              key={i}
              onClick={() => setActiveSession(i)}
              className={`flex-1 py-3 px-1 sm:px-2 rounded-lg transition-all duration-200 ${
                activeSession === i
                  ? 'bg-[#1C58B1] shadow-[0_2px_10px_rgba(28,88,177,0.3)]'
                  : 'hover:bg-[#1C58B1]/10'
              }`}
            >
              <span
                style={{ fontFamily: "'Inria Sans', sans-serif" }}
                className={`block text-[14px] sm:text-[15px] font-bold leading-tight whitespace-nowrap ${activeSession === i ? 'text-white' : 'text-zinc-900'}`}
              >
                {sess.date}
              </span>
              <span
                className={`block text-[10px] sm:text-[11px] mt-1 whitespace-nowrap tracking-tight ${activeSession === i ? 'text-white/80' : 'text-zinc-700 font-medium'}`}
              >
                {sess.dayShort} · {sess.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col mb-4">
          <div className="mb-5">
            <h2 style={{ fontFamily: "'Inria Sans', sans-serif" }} className="text-[19px] font-bold leading-tight text-[#1C58B1] uppercase tracking-wide">
              {s.theme}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
            {s.topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px] bg-[#1C58B1]" />
                <span className="text-[13.5px] text-zinc-800 leading-relaxed">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#1C58B1]/15 flex flex-col gap-0 mt-auto">
          <div className="flex flex-col gap-3.5 mb-6">
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5 text-[#1C58B1]">{item.icon}</div>
                <p className="text-[12.5px] text-zinc-700 leading-snug font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            {[
              'Snacks and beverages will be provided during each session.',
              'Lunch served after each session.',
              'Attend all three sessions, or come to the one(s) you can.',
            ].map((note, i) => (
              <p key={i} className="text-[11px] italic text-zinc-500 leading-snug">
                - {note}
              </p>
            ))}
          </div>
        </div>
      </div>

      <p
        style={{ fontFamily: "'Inria Sans', sans-serif" }}
        className="text-[11px] text-zinc-500 mt-4 w-full max-w-[600px] text-center sm:text-right px-4"
      >
        BYU-Idaho IT · B.I.T.S. 2026
      </p>
    </div>
  )
}
