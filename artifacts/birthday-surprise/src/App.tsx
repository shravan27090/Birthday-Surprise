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
  PenLine,
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
          <span>A private little sky</span>
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
          Tap once · sound begins softly
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[.64rem] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground)/.65)]">
        <span className="h-px w-5 bg-[hsl(var(--muted-foreground)/.3)]" />
        Made for one person
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

function LetterSection({ message, onMessageChange }: { message: string; onMessageChange: (value: string) => void }) {
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
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
        <div className="lg:pt-8">
          <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">01 · The letter</p>
          <h2 className="mt-5 max-w-sm font-display text-5xl leading-[.92] text-[hsl(var(--foreground))] sm:text-7xl">
            Words I would rather write by hand.
          </h2>
          <div className="mt-7 flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
            <PenLine size={15} strokeWidth={1.4} />
            <span className="text-xs leading-5">You can make this letter yours, too.</span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[1.2rem] border border-[hsl(var(--primary)/.25)] bg-[linear-gradient(125deg,hsl(345_30%_17%/.94),hsl(259_28%_16%/.97))] p-6 shadow-[0_26px_80px_hsl(253_45%_3%/.28)] sm:p-12">
          <div className="absolute right-7 top-7 font-script text-5xl text-[hsl(var(--accent)/.8)] sm:right-12 sm:top-10">x</div>
          <div className="letter-rule min-h-[28rem] rounded-sm px-1 py-1 sm:min-h-[32rem] sm:px-2">
            <p className="font-display text-2xl italic text-[hsl(var(--primary))]">My dearest {birthdayConfig.birthdayName},</p>
            <textarea
              value={displayedMessage}
              onChange={(event) => onMessageChange(event.target.value)}
              readOnly={isTyping}
              aria-label="Editable birthday letter"
              data-testid="textarea-birthday-letter"
              className="mt-6 block min-h-[20rem] w-full resize-none border-0 bg-transparent px-0 font-display text-[1.24rem] leading-[2.15rem] text-[hsl(var(--foreground)/.88)] outline-none placeholder:text-[hsl(var(--muted-foreground))] sm:text-[1.38rem]"
            />
            <div
              contentEditable
              suppressContentEditableWarning
              role="textbox"
              aria-label="Editable signature"
              data-testid="text-editable-signature"
              className="mt-6 w-fit min-w-[11rem] border-b border-[hsl(var(--accent)/.45)] pb-1 font-script text-5xl leading-none text-[hsl(var(--accent))] outline-none"
            >
              {birthdayConfig.signature}
            </div>
          </div>
          <p className="mt-7 flex items-center gap-2 text-[.65rem] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground)/.7)]">
            <span className={`h-1.5 w-1.5 rounded-full ${isTyping ? 'bg-[hsl(var(--accent))] animate-pulse' : 'bg-[hsl(var(--primary))]'}`} />
            {isTyping ? 'Writing this for you…' : 'Edit any line, if you like'}
          </p>
        </div>
      </div>
    </section>
  );
}

function MemoryGallery({ memories, onSelect }: { memories: Memory[]; onSelect: (memory: Memory) => void }) {
  return (
    <section id="memories" className="relative border-y border-[hsl(var(--border)/.65)] bg-[hsl(253_30%_7%/.36)] px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">02 · Our constellation</p>
          <h2 className="mt-5 font-display text-5xl leading-[.92] text-[hsl(var(--foreground))] sm:text-7xl">Everywhere I find you.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            Eight little coordinates in the story so far. Tap a star to open the memory it keeps.
          </p>
        </div>
        <div className="memory-map relative mt-16 min-h-[46rem] overflow-hidden rounded-[1.4rem] border border-[hsl(var(--primary)/.2)] bg-[radial-gradient(circle_at_50%_50%,hsl(280_36%_21%/.42),transparent_52%),hsl(255_31%_10%/.74)] sm:mt-20">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M16 21 L41 10 L67 23 L84 43 L60 57 L32 51 L12 72 L43 82" fill="none" stroke="hsl(345 72% 71% / .45)" strokeDasharray="1 2" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-center sm:block">
            <div className="mx-auto h-2 w-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_0_8px_hsl(var(--primary)/.08),0_0_32px_hsl(var(--primary)/.8)]" />
            <p className="mt-5 font-display text-xl italic text-[hsl(var(--foreground)/.75)]">still becoming</p>
          </div>
          {memories.map((memory, index) => (
            <button
              key={memory.id}
              type="button"
              onClick={() => onSelect(memory)}
              className="memory-node group absolute flex min-h-24 min-w-24 flex-col items-center justify-center rounded-full px-2 py-2 text-center transition duration-300 hover:z-10 hover:scale-110 focus-visible:z-10 sm:min-h-32 sm:min-w-32"
              style={{ left: `${memory.x}%`, top: `${memory.y}%`, animationDelay: `${index * 80}ms` }}
              data-testid={`button-memory-${memory.id}`}
            >
              <span className="relative z-10 mt-5 max-w-[6.5rem] text-[.58rem] font-semibold uppercase tracking-[.1em] text-[hsl(var(--foreground)/.72)] transition group-hover:text-[hsl(var(--primary))]">
                {memory.title}
              </span>
              <span className="relative z-10 mt-1 text-[.5rem] tracking-[.16em] text-[hsl(var(--muted-foreground)/.75)]">{memory.date}</span>
            </button>
          ))}
          <div className="absolute bottom-5 left-6 flex items-center gap-2 text-[.6rem] uppercase tracking-[.18em] text-[hsl(var(--muted-foreground)/.65)] sm:left-8 sm:bottom-8">
            <span className="h-px w-8 bg-[hsl(var(--accent)/.65)]" />
            2022 — now
          </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(253_45%_3%/.9)] p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label={memory.title}>
      <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-[hsl(var(--foreground)/.2)] p-2 text-[hsl(var(--foreground)/.78)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" aria-label="Close memory" data-testid="button-close-memory">
        <X size={20} strokeWidth={1.4} />
      </button>
      <button type="button" onClick={onPrevious} className="absolute left-3 top-1/2 rounded-full border border-[hsl(var(--foreground)/.16)] p-2 text-[hsl(var(--foreground)/.7)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] sm:left-7" aria-label="Previous memory" data-testid="button-previous-memory">
        <ArrowLeft size={19} strokeWidth={1.3} />
      </button>
      <div className="max-h-[90dvh] w-full max-w-4xl">
        <div className="overflow-hidden rounded-[.8rem] border border-[hsl(var(--primary)/.3)] bg-[hsl(253_33%_12%)] shadow-[0_32px_100px_hsl(253_45%_3%/.7)]">
          <img src={memory.image} alt={memory.caption} className="max-h-[65dvh] w-full object-cover" />
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
            <div>
              <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-[hsl(var(--accent))]">{memory.date}</p>
              <h3 className="mt-2 font-display text-3xl text-[hsl(var(--foreground))]">{memory.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{memory.caption}</p>
            </div>
            <div className="flex items-center gap-2 text-[.62rem] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground)/.7)]">
              <span className="h-px w-6 bg-[hsl(var(--accent)/.6)]" />
              click through
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={onNext} className="absolute right-3 top-1/2 rounded-full border border-[hsl(var(--foreground)/.16)] p-2 text-[hsl(var(--foreground)/.7)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] sm:right-7" aria-label="Next memory" data-testid="button-next-memory">
        <ArrowRight size={19} strokeWidth={1.3} />
      </button>
    </div>
  );
}

function WishSection({ wished, onWish }: { wished: boolean; onWish: () => void }) {
  return (
    <section id="wish" className="relative overflow-hidden px-5 py-28 text-center sm:px-8 sm:py-40">
      <div className="mx-auto max-w-2xl">
        <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">03 · One for the road</p>
        <h2 className="mt-5 font-display text-6xl leading-[.88] text-[hsl(var(--foreground))] sm:text-8xl">Make a wish.</h2>
        <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
          Hold one close. I will hold the other end of it with you.
        </p>
        <button
          type="button"
          onClick={onWish}
          disabled={wished}
          className="relative mt-10 inline-flex items-center gap-3 rounded-full border border-[hsl(var(--accent)/.72)] bg-[hsl(var(--accent)/.1)] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[hsl(var(--accent))] transition hover:-translate-y-1 hover:bg-[hsl(var(--accent)/.18)] disabled:cursor-default disabled:opacity-100"
          data-testid="button-make-wish"
        >
          {wished ? <Sparkles size={15} strokeWidth={1.5} /> : <Heart size={15} strokeWidth={1.5} />}
          {wished ? 'The sky heard you' : 'Light the sky'}
        </button>
        {wished && (
          <div className="wish-burst pointer-events-none absolute left-1/2 top-[47%] h-1 w-1" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                className="spark absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-[hsl(var(--accent))]"
                key={index}
                style={
                  {
                    '--dx': `${Math.cos(index * .9) * (100 + (index % 3) * 35)}px`,
                    '--dy': `${Math.sin(index * .9) * (80 + (index % 4) * 24)}px`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        )}
        {wished && (
          <p className="reveal-up mt-10 font-display text-3xl italic text-[hsl(var(--primary))]">
            I hope it finds you. I hope I do, too.
          </p>
        )}
      </div>
    </section>
  );
}

function CollageVideoSection({ src }: { src: string }) {
  const [videoError, setVideoError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <section id="video" className="relative border-b border-[hsl(var(--border)/.65)] px-5 py-24 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-[.67rem] font-semibold uppercase tracking-[.3em] text-[hsl(var(--accent))]">03 · Our moving memories</p>
          <h2 className="mt-5 max-w-sm font-display text-5xl leading-[.92] text-[hsl(var(--foreground))] sm:text-7xl">
            A little more of us, in motion.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
            Add a collage video here whenever you are ready. It can stay small in the page or open into its own full-screen moment.
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
              <button
                type="button"
                onClick={() => setFullscreen(true)}
                className="absolute bottom-14 right-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--foreground)/.3)] bg-[hsl(253_33%_8%/.8)] px-3 py-2 text-[.62rem] font-semibold uppercase tracking-[.14em] text-[hsl(var(--foreground)/.86)] backdrop-blur-md transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
                aria-label="Open collage video full screen"
              >
                <Maximize2 size={13} strokeWidth={1.5} />
                Full screen
              </button>
            </>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center px-7 text-center">
              <p className="font-display text-3xl italic text-[hsl(var(--primary))]">Your moving memories go here.</p>
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
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

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
        preload="none"
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
                  Tonight, the stars are only here to point the way back to you.
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
          <LetterSection message={message} onMessageChange={setMessage} />
          <MemoryGallery memories={birthdayConfig.memories} onSelect={setSelectedMemory} />
          <CollageVideoSection src={birthdayConfig.collageVideoPath} />
          <WishSection wished={wished} onWish={() => setWished(true)} />
          <footer className="border-t border-[hsl(var(--border)/.6)] px-5 py-10 text-center sm:px-8">
            <p className="font-script text-5xl text-[hsl(var(--primary))]">For all our tomorrows</p>
            <div className="mt-5 flex items-center justify-center gap-3 text-[.62rem] uppercase tracking-[.22em] text-[hsl(var(--muted-foreground)/.65)]">
              <ChevronDown size={13} strokeWidth={1.2} />
              Keep this little sky
              <ChevronDown size={13} strokeWidth={1.2} />
            </div>
          </footer>
        </>
      )}
      {selectedMemory && (
        <MemoryLightbox memory={selectedMemory} onClose={() => setSelectedMemory(null)} onNext={selectNext} onPrevious={selectPrevious} />
      )}
    </main>
  );
}

export default App;