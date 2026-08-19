import { type CSSProperties, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Heart,
  LockKeyhole,
  Maximize2,
  Music2,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { birthdayConfig, type Memory } from './content/config';

type EnvelopeGateProps = {
  opening: boolean;
  onOpen: () => void;
};

function EnvelopeGate({ opening, onOpen }: EnvelopeGateProps) {
  return (
    <section
      className={`fixed inset-0 z-40 flex min-h-[100dvh] items-center justify-center overflow-hidden night-sky px-5 transition-opacity duration-700 ${opening ? 'pointer-events-none opacity-0 delay-700' : 'opacity-100'}`}
      aria-label="Sealed birthday letter"
    >
      <div className="relative z-10 flex w-full max-w-[28rem] flex-col items-center text-center">
        <div className="mb-10 flex items-center gap-3 text-[.68rem] font-semibold uppercase tracking-[.34em] text-[hsl(var(--muted-foreground))]">
          <span className="h-px w-8 bg-[hsl(var(--primary)/.55)]" />
          <span>A cutie little star</span>
          <span className="h-px w-8 bg-[hsl(var(--primary)/.55)]" />
        </div>
        <div
          className={`envelope relative h-[13.5rem] w-[20rem] cursor-pointer sm:h-[16rem] sm:w-[24rem] ${opening ? 'envelope-open' : ''}`}
          role="button"
          tabIndex={opening ? -1 : 0}
          aria-label="Open the birthday letter"
          onClick={onOpen}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onOpen();
            }
          }}
        >
          <div className="envelope-body absolute inset-0 rounded-[.8rem] border border-[hsl(var(--accent)/.7)] bg-[linear-gradient(145deg,hsl(342_31%_25%),hsl(279_31%_17%))] shadow-[0_28px_80px_hsl(253_45%_3%/.6)]">
            <div className="absolute inset-0 overflow-hidden rounded-[.8rem]">
              <div className="absolute -left-5 -top-10 h-36 w-48 rotate-[25deg] border-b border-[hsl(var(--primary)/.2)] bg-[hsl(342_40%_32%/.35)]" />
              <div className="absolute -bottom-10 -right-8 h-36 w-56 rotate-[25deg] border-t border-[hsl(var(--primary)/.2)] bg-[hsl(279_35%_21%/.45)]" />
            </div>
            <div className="absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--accent)/.7)] bg-[hsl(253_33%_12%)] text-[hsl(var(--accent))] shadow-[0_0_0_7px_hsl(253_33%_8%/.14)]">
              <Heart size={17} strokeWidth={1.4} fill="currentColor" />
            </div>
          </div>
          <div className="envelope-flap absolute left-0 top-0 z-10 h-1/2 w-full origin-top [clip-path:polygon(0_0,100%_0,50%_100%)] border-t border-[hsl(var(--accent)/.75)] bg-[linear-gradient(155deg,hsl(343_42%_37%),hsl(281_32%_23%))]" />
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              className="spark absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[hsl(var(--accent))] opacity-0"
              key={index}
              style={
                {
                  '--dx': `${Math.cos(index * 1.4) * (90 + index * 14)}px`,
                  '--dy': `${Math.sin(index * 1.4) * (75 + index * 11)}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <p className="mt-12 font-display text-3xl italic leading-none text-[hsl(var(--foreground))] sm:text-4xl">
          For {birthdayConfig.birthdayName}
        </p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-[hsl(var(--muted-foreground))]">
          There is something here I have been saving for the right moment.
        </p>
        <button
          type="button"
          onClick={onOpen}
          disabled={opening}
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[hsl(var(--primary)/.65)] bg-[hsl(var(--primary)/.08)] px-6 py-3 text-xs font-semibold uppercase tracking-[.18em] text-[hsl(var(--primary))] transition duration-300 hover:-translate-y-1 hover:bg-[hsl(var(--primary)/.16)] disabled:cursor-default"
          data-testid="button-open-envelope"
        >
          <LockKeyhole size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-[-12deg]" />
          Open the letter
        </button>
        <p className="mt-5 text-[.66rem] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground)/.72)]">
          Tap the button or the heart to see the magic and more
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[.64rem] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground)/.65)]">
        <span className="h-px w-5 bg-[hsl(var(--muted-foreground)/.3)]" />
        Made for you with love
        <Heart size={10} strokeWidth={1.5} fill="currentColor" aria-hidden="true" />
        <span className="h-px w-5 bg-[hsl(var(--muted-foreground)/.3)]" />
      </div>
    </section>
  );
}

function MusicControl({ playing, available, onToggle }: { playing: boolean; available: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full border border-[hsl(var(--primary)/.3)] bg-[hsl(253_33%_9%/.86)] px-3 py-2 text-[hsl(var(--primary))] shadow-[0_12px_32px_hsl(253_45%_3%/.35)] backdrop-blur-md transition hover:border-[hsl(var(--primary)/.75)] hover:bg-[hsl(253_33%_14%/.92)]"
      aria-label={playing ? 'Pause birthday music' : 'Play birthday music'}
      data-testid="button-toggle-music"
    >
      {playing && available ? <Volume2 size={15} strokeWidth={1.5} /> : available ? <VolumeX size={15} strokeWidth={1.5} /> : <Music2 size={15} strokeWidth={1.5} />}
      <span className="hidden text-[.62rem] font-semibold uppercase tracking-[.14em] sm:inline">
        {available ? (playing ? 'Playing softly' : 'Music paused') : 'Music unavailable'}
      </span>
    </button>
  );
}

function LetterSection({ message }: { message: string }) {
  const [typedMessage, setTypedMessage] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const initialMessage = useRef(message);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTypedMessage(initialMessage.current);
      setIsTyping(false);
      return;
    }
    setTypedMessage('');
    setIsTyping(true);
    let cursor = 0;
    const timer = window.setInterval(() => {
      cursor += 1;
      setTypedMessage(initialMessage.current.slice(0, cursor));
      if (cursor >= initialMessage.current.length) {
        window.clearInterval(timer);
        setIsTyping(false);
      }
    }, 24);
    return () => window.clearInterval(timer);
  }, []);

  const displayedMessage = isTyping ? typedMessage : message;

  return (
    <section id="letter" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
      <div>
        <div className="relative overflow-hidden rounded-[1.2rem] border border-[hsl(var(--primary)/.25)] bg-[linear-gradient(125deg,hsl(345_30%_17%/.94),hsl(259_28%_16%/.97))] p-6 shadow-[0_26px_80px_hsl(253_45%_3%/.28)] sm:p-12">
          <div className="absolute right-7 top-7 font-script text-5xl text-[hsl(var(--accent)/.8)] sm:right-12 sm:top-10">x</div>
          <div className="letter-rule min-h-[28rem] rounded-sm px-1 py-1 sm:min-h-[32rem] sm:px-2">
            <p className="font-display text-2xl italic text-[hsl(var(--primary))]">My dearest {birthdayConfig.birthdayName},</p>
            <p className="mt-6 block min-h-[20rem] w-full whitespace-pre-line font-display text-[1.24rem] leading-[2.15rem] text-[hsl(var(--foreground)/.88)] sm:text-[1.38rem]">
              {displayedMessage}
            </p>
            <p className="mt-6 w-fit min-w-[11rem] border-b border-[hsl(var(--accent)/.45)] pb-1 font-script text-5xl leading-none text-[hsl(var(--accent))]">
              {birthdayConfig.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemoryGallery({ memories, onSelect }: { memories: Memory[]; onSelect: (memory: Memory) => void }) {
  const pathD = memories.length > 0
    ? `M ${memories.map((m) => `${m.x} ${m.y}`).join(' L ')}`
    : '';

  return (
    <section id="memories" className="relative border-y border-[hsl(var(--border)/.65)] bg-[hsl(253_30%_7%/.36)] px-4 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl w-full">
        <div className="max-w-xl">
          <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">The Path of Life from 2023 — Forever</p>
          <h2 className="mt-4 font-display text-5xl leading-[.92] text-[hsl(var(--foreground))] sm:text-7xl">Our Constellation.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            {memories.length} coordinates in our story so far, linked together like a path of life. Tap any star to reveal the memory it holds.
          </p>
        </div>
        <div className="memory-map relative mt-12 min-h-[48rem] sm:min-h-[58rem] w-full overflow-hidden rounded-[1.4rem] border border-[hsl(var(--primary)/.25)] bg-[radial-gradient(circle_at_50%_40%,hsl(280_36%_21%/.48),transparent_70%),hsl(255_31%_10%/.82)] sm:mt-16">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-85" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(345, 85%, 72%)" stopOpacity="0.85" />
                <stop offset="50%" stopColor="hsl(29, 90%, 70%)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="hsl(280, 75%, 75%)" stopOpacity="0.85" />
              </linearGradient>
              <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d={pathD}
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="0.8"
              strokeDasharray="1.5 1"
              filter="url(#pathGlow)"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={pathD}
              fill="none"
              stroke="hsl(345 72% 71% / .35)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {memories.map((m) => (
              <circle
                key={`svg-node-${m.id}`}
                cx={m.x}
                cy={m.y}
                r="0.5"
                fill="hsl(29 62% 70%)"
                className="animate-pulse"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none sm:block opacity-60">
            <div className="mx-auto h-2.5 w-2.5 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_0_8px_hsl(var(--accent)/.1),0_0_30px_hsl(var(--accent)/.9)] animate-pulse" />
            <p className="mt-3 font-display text-xl italic text-[hsl(var(--foreground)/.8)]">The path continues to forever</p>
            <p className="text-[.55rem] uppercase tracking-[.25em] text-[hsl(var(--muted-foreground)/.6)] mt-0.5">beautiful memories put together</p>
          </div>

          {memories.map((memory, index) => (
            <button
              key={memory.id}
              type="button"
              onClick={() => onSelect(memory)}
              className="memory-node group absolute cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300 hover:z-30 focus-visible:z-30"
              style={{ left: `${memory.x}%`, top: `${memory.y}%`, animationDelay: `${index * 30}ms` }}
              data-testid={`button-memory-${memory.id}`}
            >
              {/* Mobile view: Compact glowing dot with number */}
              <span className="flex sm:hidden h-6 w-6 items-center justify-center rounded-full bg-[hsl(253_33%_10%/.92)] border border-[hsl(var(--accent)/.7)] text-[.55rem] font-bold text-[hsl(var(--accent))] shadow-[0_0_10px_hsl(var(--accent)/.45)] group-hover:bg-[hsl(var(--accent))] group-hover:text-[hsl(253_33%_8%)] transition">
                {index + 1}
              </span>

              {/* Desktop view: Single line, fits content width, subtle glowing lift on hover */}
              <span className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap w-max rounded-full bg-[hsl(253_33%_6%/.88)] px-3 py-1.5 text-[.64rem] font-semibold uppercase tracking-[.1em] text-[hsl(var(--foreground)/.9)] border border-[hsl(var(--accent)/.3)] shadow-md backdrop-blur-md transition-all duration-300 group-hover:border-[hsl(var(--accent))] group-hover:bg-[hsl(253_33%_12%)] group-hover:text-[hsl(var(--accent))] group-hover:shadow-[0_0_20px_hsl(29_62%_70%/.35)] group-hover:-translate-y-0.5">
                <span className="text-[hsl(var(--accent))] font-normal transition-transform duration-300 group-hover:scale-125">✦</span>
                <span>{memory.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoryLightbox({ memory, onClose, onNext, onPrevious }: { memory: Memory; onClose: () => void; onNext: () => void; onPrevious: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(253_45%_3%/.92)] p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label={memory.title}>
      <button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 rounded-full border border-[hsl(var(--foreground)/.2)] p-2.5 text-[hsl(var(--foreground)/.78)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] cursor-pointer bg-[hsl(253_33%_12%/.8)]" aria-label="Close memory" data-testid="button-close-memory">
        <X size={20} strokeWidth={1.4} />
      </button>
      <button type="button" onClick={onPrevious} className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[hsl(var(--foreground)/.16)] p-2.5 text-[hsl(var(--foreground)/.7)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] cursor-pointer bg-[hsl(253_33%_12%/.8)] sm:left-7" aria-label="Previous memory" data-testid="button-previous-memory">
        <ArrowLeft size={19} strokeWidth={1.3} />
      </button>
      <div className="max-h-[92dvh] w-full max-w-4xl flex flex-col justify-center">
        <div className="overflow-hidden rounded-[1.2rem] border border-[hsl(var(--primary)/.3)] bg-[hsl(253_33%_12%)] shadow-[0_32px_100px_hsl(253_45%_3%/.8)] flex flex-col items-center">
          <div className="w-full flex items-center justify-center bg-[hsl(253_33%_8%/.9)] p-2 sm:p-4 min-h-[35dvh] max-h-[68dvh]">
            <img
              src={memory.image}
              alt={memory.caption}
              className="max-h-[65dvh] max-w-full w-auto h-auto object-contain rounded-lg shadow-md"
            />
          </div>
          <div className="w-full p-5 sm:p-6 bg-[hsl(253_33%_12%)]">
            <div className="w-full">
              <h3 className="font-display text-2xl sm:text-3xl text-[hsl(var(--foreground))]">{memory.title}</h3>
              <p className="mt-2 w-full text-xs sm:text-sm leading-6 text-[hsl(var(--muted-foreground))]">{memory.caption}</p>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={onNext} className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[hsl(var(--foreground)/.16)] p-2.5 text-[hsl(var(--foreground)/.7)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] cursor-pointer bg-[hsl(253_33%_12%/.8)] sm:right-7" aria-label="Next memory" data-testid="button-next-memory">
        <ArrowRight size={19} strokeWidth={1.3} />
      </button>
    </div>
  );
}

function BirthdayWishBanner({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="banner"
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in slide-in-from-top duration-700 pointer-events-auto"
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[hsl(var(--accent))] bg-[linear-gradient(135deg,hsl(342_45%_22%/.96),hsl(279_40%_18%/.96))] px-6 py-5 shadow-[0_20px_60px_hsl(253_45%_3%/.8)] backdrop-blur-lg text-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-[hsl(var(--accent)/.4)] p-1.5 text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/.2)] transition cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X size={16} />
        </button>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.24em] text-[hsl(var(--accent))]">
            <Sparkles size={14} />
            <span>Celebration Sky</span>
            <Sparkles size={14} />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[hsl(var(--foreground))]">
            Happy 25th birthday! 🎉🎂✨
          </h2>
          <p className="font-display italic text-lg sm:text-xl text-[hsl(var(--primary))]">
            Hope your wish comes true soon ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

function WishSection({ wished, wishCountdown, onWish }: { wished: boolean; wishCountdown: number; onWish: () => void }) {
  return (
    <section id="wish" className="relative overflow-hidden px-5 py-28 text-center sm:px-8 sm:py-40">
      <div className="mx-auto max-w-2xl">
        <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">One for the dream that has to come true</p>
        <h2 className="mt-5 font-display text-6xl leading-[.88] text-[hsl(var(--foreground))] sm:text-8xl">Make a wish that you want it to be true.</h2>
        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
          Hold one close. I will hold the other end of it with you.
        </p>
        <button
          type="button"
          onClick={onWish}
          disabled={wished}
          className="relative mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full border border-[hsl(var(--accent)/.72)] bg-[hsl(var(--accent)/.1)] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[hsl(var(--accent))] transition hover:-translate-y-1 hover:bg-[hsl(var(--accent)/.18)] disabled:cursor-not-allowed disabled:opacity-75"
          data-testid="button-make-wish"
        >
          {wished ? <Sparkles size={15} strokeWidth={1.5} className="animate-spin" /> : <Heart size={15} strokeWidth={1.5} />}
          {wished ? `The sky heard you (${wishCountdown}s)` : 'Light the sky'}
        </button>
        {wished && (
          <p className="reveal-up mt-10 font-display text-3xl italic text-[hsl(var(--primary))]">
            I hope it finds you. I hope I do, too.
          </p>
        )}
      </div>
    </section>
  );
}

function WishConfetti() {
  return (
    <div className="wish-confetti fixed inset-0 z-30 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 100 }).map((_, index) => {
        const angle = index * (Math.PI * 2 / 100) + (index % 5) * 0.1;
        const radius = 15 + (index % 8) * 11;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const colors = ['#f5d061', '#f58bb6', '#c495f5', '#61e0f5', '#f5a461', '#ff5964'];
        const color = colors[index % colors.length];
        return (
          <span
            key={index}
            className="wish-star"
            style={
              {
                '--x': `${x}vw`,
                '--y': `${y}vh`,
                '--delay': `${(index % 16) * 0.02}s`,
                '--size': `${10 + (index % 5) * 3}px`,
                '--rotation': `${(index % 2 ? 1 : -1) * (140 + index * 10)}deg`,
                color,
              } as CSSProperties
            }
          >
            {index % 3 === 0 ? '✦' : index % 3 === 1 ? '✨' : '💖'}
          </span>
        );
      })}
    </div>
  );
}

function CollageVideoSection({ src }: { src: string }) {
  const [videoError, setVideoError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section id="video" className="relative border-b border-[hsl(var(--border)/.65)] px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">Our golden memories put together</p>
          <h2 className="mt-5 max-w-sm font-display text-5xl leading-[.92] text-[hsl(var(--foreground))] sm:text-7xl">
            A little more of us, in motion.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            Here is a collage video of some of our best moments together. I hope you like it.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.2rem] border border-[hsl(var(--primary)/.25)] bg-[hsl(253_33%_12%/.82)] shadow-[0_26px_80px_hsl(253_45%_3%/.28)]">
          {!videoError ? (
            <>
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="aspect-video w-full object-cover"
                aria-label="Collage video"
              />
            </>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center px-7 text-center">
              <p className="font-display text-3xl italic text-[hsl(var(--primary))]">Your collage video goes here.</p>
              <p className="mt-3 max-w-sm text-xs leading-6 text-[hsl(var(--muted-foreground))]">
                Add <code className="rounded bg-[hsl(var(--foreground)/.08)] px-1.5 py-0.5 text-[hsl(var(--accent))]">collage-video.mp4</code> inside <code className="rounded bg-[hsl(var(--foreground)/.08)] px-1.5 py-0.5 text-[hsl(var(--accent))]">public/media</code>.
              </p>
            </div>
          )}
        </div>
      </div>
      {fullscreen && !videoError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(253_45%_3%/.94)] p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label="Full-screen collage video">
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute right-5 top-5 rounded-full border border-[hsl(var(--foreground)/.2)] p-2 text-[hsl(var(--foreground)/.78)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
            aria-label="Close full-screen collage video"
          >
            <X size={20} strokeWidth={1.4} />
          </button>
          <video src={src} controls autoPlay playsInline className="max-h-[90dvh] w-full max-w-6xl rounded-[.8rem] border border-[hsl(var(--primary)/.3)] shadow-[0_32px_100px_hsl(253_45%_3%/.7)]" aria-label="Full-screen collage video" />
        </div>
      )}
    </section>
  );
}

function App() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const [message, setMessage] = useState(birthdayConfig.birthdayMessage);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [wished, setWished] = useState(false);
  const [wishCountdown, setWishCountdown] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  useEffect(() => {
    if (!wished) {
      setWishCountdown(30);
      return;
    }
    const interval = window.setInterval(() => {
      setWishCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setWished(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [wished]);

  const beginMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.32;
    audio.play().then(() => setPlaying(true)).catch(() => setAudioAvailable(false));
  };

  const openEnvelope = () => {
    if (opening) return;
    setOpening(true);
    beginMusic();
    window.setTimeout(() => setOpened(true), 1100);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio.play().then(() => setPlaying(true)).catch(() => setAudioAvailable(false));
  };

  const selectedIndex = selectedMemory ? birthdayConfig.memories.findIndex((memory) => memory.id === selectedMemory.id) : -1;
  const selectNext = () => {
    const next = birthdayConfig.memories[(selectedIndex + 1) % birthdayConfig.memories.length];
    setSelectedMemory(next);
  };
  const selectPrevious = () => {
    const previous = birthdayConfig.memories[(selectedIndex - 1 + birthdayConfig.memories.length) % birthdayConfig.memories.length];
    setSelectedMemory(previous);
  };

  return (
    <main className="noise night-sky min-h-[100dvh] overflow-hidden">
      <audio
        ref={audioRef}
        src={birthdayConfig.audioPath}
        loop
        preload="auto"
        onError={() => setAudioAvailable(false)}
        aria-label="Birthday soundtrack"
      />
      {!opened && <EnvelopeGate opening={opening} onOpen={openEnvelope} />}
      {opened && (
        <>
          <MusicControl playing={playing} available={audioAvailable} onToggle={toggleMusic} />
          <section className="relative flex min-h-[100dvh] items-center px-5 pb-16 pt-28 sm:px-8">
            <div className="mx-auto w-full max-w-6xl">
              <div className="max-w-4xl reveal-up">
                <p className="flex items-center gap-3 text-[.67rem] font-semibold uppercase tracking-[.32em] text-[hsl(var(--accent))]">
                  <span className="h-px w-9 bg-[hsl(var(--accent)/.75)]" />
                  A birthday note for {birthdayConfig.birthdayName}
                </p>
                <h1 className="mt-7 max-w-4xl font-display text-[clamp(4.8rem,15vw,11rem)] font-medium leading-[.76] tracking-[-.05em] text-[hsl(var(--foreground))]">
                  You are my <em className="text-[hsl(var(--primary))]">favorite</em> kind of magic.
                </h1>
                <p className="mt-10 max-w-md text-base leading-7 text-[hsl(var(--muted-foreground))] sm:text-lg">
                  Tonight, the stars are only here to wish you a very happy birthday.
                </p>
              </div>
              <a href="#letter" className="mt-20 inline-flex items-center gap-3 text-[.66rem] font-semibold uppercase tracking-[.2em] text-[hsl(var(--muted-foreground))] transition hover:text-[hsl(var(--primary))]" data-testid="link-scroll-to-letter">
                Begin here
                <ArrowDown size={14} strokeWidth={1.4} className="animate-bounce" />
              </a>
            </div>
            <div className="pointer-events-none absolute bottom-16 right-[8%] hidden h-52 w-52 rounded-full border border-[hsl(var(--primary)/.17)] sm:block">
              <div className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_24px_hsl(var(--accent))]" />
              <div className="absolute left-[20%] top-[22%] h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
              <div className="absolute bottom-[18%] left-[38%] h-1 w-1 rounded-full bg-[hsl(var(--accent))]" />
            </div>
          </section>
          <LetterSection message={message} />
          <MemoryGallery memories={birthdayConfig.memories} onSelect={setSelectedMemory} />
          <CollageVideoSection src={birthdayConfig.collageVideoPath} />
          <WishSection wished={wished} wishCountdown={wishCountdown} onWish={() => setWished(true)} />
          <footer className="border-t border-[hsl(var(--border)/.6)] px-5 py-10 text-center sm:px-8">
            <p className="font-script text-5xl text-[hsl(var(--primary))]">Happy Birthday to my Hunny Bunny </p>
            <div className="mt-5 flex items-center justify-center gap-3 text-[.62rem] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground)/.65)]">
              <ChevronDown size={13} strokeWidth={1.2} />
              This is a small surprise birthday gift from a software developer to his wifey who is the most beautiful and cutest girl in this universe
              <ChevronDown size={13} strokeWidth={1.2} />
            </div>
          </footer>
        </>
      )}
      {selectedMemory && (
        <MemoryLightbox memory={selectedMemory} onClose={() => setSelectedMemory(null)} onNext={selectNext} onPrevious={selectPrevious} />
      )}
      {wished && <BirthdayWishBanner onClose={() => setWished(false)} />}
      {wished && <WishConfetti />}
    </main>
  );
}

export default App;