import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Heart,
  LockKeyhole,
  Music2,
  Pause,
  Sparkles,
  Star,
} from "lucide-react";

const memories = [
  ["01", "The first light", "18 APR · 2022"],
  ["02", "Blue hour", "02 JUL · 2022"],
  ["03", "The long way home", "14 OCT · 2022"],
  ["04", "Under the same sky", "TODAY"],
];

export function BirthdaySurprisePolished() {
  const [opened, setOpened] = useState(false);
  const [wished, setWished] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <main className="birthday-variant min-h-screen overflow-hidden text-[#f5eddf]">
      <style>{`
        .birthday-variant {
          --ink: #15131d;
          --ink-soft: #211c2b;
          --rose: #e9a7ad;
          --gold: #e7bd80;
          --cream: #f5eddf;
          font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;
          background:
            radial-gradient(circle at 78% 8%, rgba(115, 76, 126, .34), transparent 26rem),
            radial-gradient(circle at 8% 80%, rgba(124, 52, 72, .20), transparent 28rem),
            linear-gradient(135deg, #17131f 0%, #1b1725 58%, #251a2d 100%);
          position: relative;
        }
        .birthday-variant::before {
          content: ""; position: fixed; inset: 0; pointer-events: none; opacity: .42;
          background-image: radial-gradient(rgba(245,237,223,.42) 0 1px, transparent 1.3px);
          background-size: 173px 151px; mix-blend-mode: screen;
        }
        .birthday-serif { font-family: Georgia, "Times New Roman", serif; }
        .birthday-script { font-family: "Brush Script MT", "Segoe Script", cursive; }
        .birthday-envelope { perspective: 900px; }
        .birthday-flap { transform-origin: top; transition: transform 850ms cubic-bezier(.65,0,.35,1); }
        .birthday-envelope.is-open .birthday-flap { transform: rotateX(-180deg); }
        .birthday-envelope.is-open .birthday-paper { transform: translateY(-42px); opacity: 1; }
        .birthday-paper { transition: transform 850ms .2s cubic-bezier(.2,.8,.2,1), opacity 500ms .2s; }
        .birthday-reveal { animation: birthday-rise 700ms .2s both cubic-bezier(.2,.8,.2,1); }
        .birthday-node { transition: transform 220ms ease, background-color 220ms ease; }
        .birthday-node:hover { transform: translateY(-4px); }
        .birthday-node.is-selected { background: rgba(233,167,173,.12); border-color: rgba(233,167,173,.55); }
        @keyframes birthday-rise { from { opacity:0; transform: translateY(20px) } to { opacity:1; transform: translateY(0) } }
        @keyframes birthday-pulse { 0%,100% { transform: scale(.92); opacity:.65 } 50% { transform: scale(1.08); opacity:1 } }
        .birthday-pulse { animation: birthday-pulse 3.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
      `}</style>

      <header className="relative z-10 mx-auto flex max-w-[1180px] items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.3em] text-[#cdbcc9]">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[#e7bd80]/45 text-[#e7bd80]">
            <Star size={13} fill="currentColor" strokeWidth={1.2} />
          </span>
          A cutie little star
        </div>
        <button
          className="flex items-center gap-2 rounded-full border border-[#f5eddf]/15 px-3 py-2 text-[10px] uppercase tracking-[.18em] text-[#cdbcc9] transition hover:border-[#e9a7ad]/60 hover:text-[#f5eddf]"
          onClick={() => setPlaying(!playing)}
          type="button"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause size={13} /> : <Music2 size={13} />}
          <span className="hidden sm:inline">{playing ? "Playing softly" : "Soundtrack"}</span>
        </button>
      </header>

      {!opened ? (
        <section className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-16 text-center">
          <div className="mb-9 flex items-center gap-3 text-[10px] uppercase tracking-[.35em] text-[#e7bd80]">
            <span className="h-px w-8 bg-[#e7bd80]/60" /> for Deeksha <span className="h-px w-8 bg-[#e7bd80]/60" />
          </div>
          <div className={`birthday-envelope relative h-[190px] w-[290px] cursor-pointer sm:h-[230px] sm:w-[350px] ${opened ? "is-open" : ""}`} onClick={() => setOpened(true)} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setOpened(true)}>
            <div className="absolute inset-0 rounded-[18px] border border-[#e7bd80]/50 bg-gradient-to-br from-[#7c4555] to-[#30233d] shadow-[0_30px_90px_rgba(5,3,12,.55)]" />
            <div className="absolute inset-0 overflow-hidden rounded-[18px]">
              <div className="absolute -left-14 -top-10 h-40 w-72 rotate-[25deg] border-b border-[#e9a7ad]/25 bg-[#e9a7ad]/10" />
              <div className="absolute -bottom-10 -right-12 h-44 w-80 rotate-[25deg] border-t border-[#e7bd80]/20 bg-[#17131f]/20" />
            </div>
            <div className="birthday-paper absolute left-[9%] top-[10%] z-[1] h-[75%] w-[82%] rounded-md bg-[#f5eddf] px-6 py-5 text-left opacity-0 shadow-xl">
              <p className="birthday-serif text-xl italic text-[#7c4555]">For the year ahead,</p>
              <div className="mt-5 space-y-2 border-t border-[#7c4555]/15 pt-4"><span className="block h-1 w-4/5 bg-[#7c4555]/15" /><span className="block h-1 w-3/5 bg-[#7c4555]/15" /><span className="block h-1 w-2/3 bg-[#7c4555]/15" /></div>
            </div>
            <div className="birthday-flap absolute left-0 top-0 z-[2] h-1/2 w-full border-t border-[#e7bd80]/70 bg-gradient-to-br from-[#9b5361] to-[#4b3150] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            <div className="absolute left-1/2 top-1/2 z-[3] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#e7bd80]/70 bg-[#201828] text-[#e7bd80] shadow-[0_0_0_8px_rgba(22,18,31,.18)]">
              <Heart size={18} fill="currentColor" strokeWidth={1.2} />
            </div>
          </div>
          <h1 className="birthday-serif mt-12 text-4xl leading-none text-[#f5eddf] sm:text-5xl">Something for your orbit.</h1>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#cdbcc9]">A handful of words, memories, and one wish — saved for the right moment.</p>
          <button type="button" onClick={() => setOpened(true)} className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#e9a7ad]/70 bg-[#e9a7ad]/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#e9a7ad] transition hover:-translate-y-1 hover:bg-[#e9a7ad]/20"><LockKeyhole size={14} strokeWidth={1.5} /> Open the letter</button>
          <p className="mt-5 text-[9px] uppercase tracking-[.25em] text-[#cdbcc9]/60">Tap once · sound begins softly</p>
        </section>
      ) : (
        <div className="birthday-reveal relative z-10">
          <section className="mx-auto flex min-h-[74vh] max-w-[1180px] items-end px-6 pb-20 pt-20 md:px-10">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.3em] text-[#e7bd80]"><span className="h-px w-9 bg-[#e7bd80]/70" /> A birthday note for Deeksha</p>
              <h1 className="birthday-serif mt-7 max-w-4xl text-[clamp(4.2rem,13vw,10.5rem)] leading-[.79] tracking-[-.055em]">You are my <em className="text-[#e9a7ad]">favorite</em><br />kind of magic.</h1>
              <p className="mt-9 max-w-md text-base leading-7 text-[#cdbcc9]">Tonight, the stars are only here to point the way back to you.</p>
              <a href="#letter" className="mt-14 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#cdbcc9] transition hover:text-[#e9a7ad]">Begin here <ArrowDown size={14} /></a>
            </div>
            <div className="birthday-pulse absolute bottom-20 right-[10%] hidden h-44 w-44 rounded-full border border-[#e9a7ad]/20 md:block"><span className="absolute right-0 top-1/2 h-2 w-2 rounded-full bg-[#e7bd80]" /><span className="absolute left-[18%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#e9a7ad]" /></div>
          </section>

          <section id="letter" className="border-y border-[#f5eddf]/10 bg-[#120f18]/25 px-6 py-24 md:px-10 md:py-32">
            <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-[.65fr_1.35fr] md:gap-24">
              <div><p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#e7bd80]">01 · The letter</p><h2 className="birthday-serif mt-5 max-w-sm text-5xl leading-[.9] md:text-7xl">Words I would rather write by hand.</h2></div>
              <div className="rounded-2xl border border-[#e9a7ad]/20 bg-gradient-to-br from-[#442b42]/80 to-[#211d2d]/90 p-7 shadow-[0_25px_80px_rgba(5,3,12,.25)] md:p-12"><p className="birthday-serif text-2xl italic text-[#e9a7ad]">My dearest Deeksha,</p><p className="birthday-serif mt-7 whitespace-pre-line text-[1.18rem] leading-[2.1] text-[#f5eddf]/90">There are a thousand small moments I would choose again: the way you make a room feel warmer, the laugh you try to hide, the quiet hours that become our favorite stories. You are my favorite place to arrive.{`\n\n`}Today I hope the world is gentle with you. I hope it gives you reasons to be surprised, music to dance to in the kitchen, and a year that feels entirely yours.</p><p className="birthday-script mt-8 text-5xl text-[#e7bd80]">Always yours, Shravan</p><div className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[.2em] text-[#cdbcc9]/65"><Check size={13} className="text-[#e7bd80]" /> Written for one person</div></div>
            </div>
          </section>

          <section className="px-6 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[1180px]"><p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#e7bd80]">Our constellation</p><div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="birthday-serif max-w-xl text-5xl leading-[.9] md:text-7xl">Everywhere I find you.</h2><p className="max-w-xs text-sm leading-6 text-[#cdbcc9]">Four coordinates in the story so far. Choose one to keep close.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{memories.map(([id, title, date], index) => <button key={id} type="button" onClick={() => setSelected(index)} className={`birthday-node rounded-xl border p-5 text-left ${selected === index ? "is-selected" : "border-[#f5eddf]/10 bg-[#f5eddf]/[.025]"}`}><div className="flex items-center justify-between text-[#e7bd80]"><span className="text-[10px] tracking-[.2em]">{id}</span><Star size={15} fill={selected === index ? "currentColor" : "none"} strokeWidth={1.2} /></div><h3 className="birthday-serif mt-10 text-2xl">{title}</h3><p className="mt-2 text-[9px] uppercase tracking-[.18em] text-[#cdbcc9]/70">{date}</p></button>)}</div></div></section>

          <section className="border-t border-[#f5eddf]/10 px-6 py-28 text-center md:px-10 md:py-40"><p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#e7bd80]">One for the road</p><h2 className="birthday-serif mt-5 text-7xl leading-[.83] md:text-9xl">Make a wish.</h2><p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#cdbcc9]">Hold one close. I will hold the other end of it with you.</p><button type="button" disabled={wished} onClick={() => setWished(true)} className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#e9a7ad]/70 bg-[#e9a7ad]/10 px-7 py-4 text-[10px] font-semibold uppercase tracking-[.22em] text-[#e9a7ad] transition hover:-translate-y-1 hover:bg-[#e9a7ad]/20 disabled:cursor-default disabled:opacity-100">{wished ? <Sparkles size={15} /> : <Heart size={15} />}{wished ? "The sky heard you" : "Light the sky"}</button>{wished && <p className="birthday-serif mt-9 text-3xl italic text-[#e7bd80]">I hope it finds you. I hope I do, too.</p>}</section>
          <footer className="border-t border-[#f5eddf]/10 px-6 py-10 text-center"><p className="birthday-script text-5xl text-[#e9a7ad]">For all our tomorrows</p><p className="mt-4 text-[9px] uppercase tracking-[.22em] text-[#cdbcc9]/60">Keep this little sky</p></footer>
        </div>
      )}
    </main>
  );
}

export default BirthdaySurprisePolished;