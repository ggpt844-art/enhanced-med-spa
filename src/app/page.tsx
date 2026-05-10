import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  Calendar,
  Star,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Check,
  Phone,
  Clock,
  ShieldCheck,
} from "lucide-react";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import Reveal from "@/components/Reveal";
import HomeReviewsSection from "@/components/HomeReviewsSection";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";
import SkinQuiz from "@/components/SkinQuiz";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TreatmentCard from "@/components/TreatmentCard";
import Placeholder from "@/components/Placeholder";
import { InstagramIcon } from "@/components/SocialIcons";
import { IMAGE_BLUR } from "@/lib/imageBlur";
import { SPA } from "@/lib/spa";
import {
  treatments,
  faqItems,
  features,
  promiseCards,
  firstVisitSteps,
  microneedlingHomeResult,
  armPeelHomeResult,
  instagramShots,
} from "@/lib/content";

const featured = treatments.filter((t) => "feature" in t && t.feature === true);
const trio = treatments.filter((t) =>
  ["signature-hydrabrasion", "algae-peel", "acne-reset"].includes(t.slug)
);

export default function Home() {
  return (
    <main id="main" className="relative bg-[#F8F1EC] text-[#1A1A1A]">
      <span id="top" aria-hidden />
      <FloatingNav phone={SPA.phone} />
      <StickyMobileCTA
        phone={SPA.phone}
        phoneDisplay={SPA.phoneDisplay}
        whatsapp={SPA.whatsapp}
      />

      {/* ────────────────────────── HERO ────────────────────────── */}
      <section className="relative h-[100dvh] flex-col overflow-hidden text-white flex">
        {/* Video background — single absolute layer, no wrappers */}
        <HeroBackgroundVideo
          src="/videos/hero.mp4"
          poster="/images/hero-studio.png"
          className="pointer-events-none absolute z-0 object-cover object-center max-lg:inset-0 max-lg:h-full max-lg:w-full lg:inset-auto lg:left-1/2 lg:top-1/2 lg:h-[125%] lg:w-[125%] lg:-translate-x-1/2 lg:-translate-y-1/2"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/45 from-0% to-transparent to-[42%]"
        />

        <SiteHeader overMedia />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-14 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:pb-20 lg:overflow-visible">
          <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center text-center max-lg:py-4">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
                <Sparkles size={12} className="text-[#E7D4A9]" />
                Private home studio · Mississauga
              </div>

              <h1 className="font-display text-[46px] font-black leading-[0.98] tracking-[-0.02em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-[56px] md:text-[64px] lg:text-[72px]">
                Skin that <span className="italic text-[#E8C4BD]">glows.</span>
                <br />
                Confidence you can <span className="italic text-[#E8C4BD]">feel.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-lg text-[16px] leading-relaxed text-white/90 sm:text-[17px] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
                Result-driven facials, hydrabrasion, acne care, and body
                treatments — one client at a time, with{" "}
                <strong className="font-semibold text-white">{SPA.founder.name}</strong>.
              </p>

              <div className="mt-9 grid items-center justify-center gap-3 sm:grid-cols-[auto_auto]">
                <Link
                  href="/book"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] px-7 py-4 text-[15px] font-bold text-white shadow-xl shadow-black/30 transition-all hover:bg-[#1A6F68] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar size={18} />
                  Book Your Glow
                </Link>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/45 bg-white/10 px-6 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/18"
                >
                  See real results
                  <ChevronRight size={16} />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12.5px] text-white/85">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A66A] opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A66A]" />
                  </span>
                  <strong className="text-white">Now booking this week</strong>
                </span>
                <span aria-hidden className="hidden opacity-40 sm:inline">
                  ·
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#E7D4A9]">
                  <Star size={12} fill="currentColor" /> {SPA.rating} ·{" "}
                  {SPA.reviewCount}+ Google reviews
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-10 flex w-full max-w-xl items-center justify-between gap-3 border-t border-white/20 pt-8 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid size-9 place-items-center rounded-full bg-white/15 text-white shadow-md ring-2 ring-white/25 backdrop-blur-sm">
                  <Sparkles size={16} />
                </span>
                <span>
                  {SPA.shortName}
                  <span className="block text-[11px] font-normal text-white/75">
                    {SPA.address.city}, ON
                  </span>
                </span>
              </div>
              <a
                href={SPA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-[12.5px] font-semibold text-white/85 transition-colors hover:text-white"
              >
                <InstagramIcon size={14} />
                {SPA.social.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── BY THE NUMBERS ────────────────────────── */}
      <section
        aria-label="Enhanced Aesthetics by the numbers"
        className="relative bg-white border-y border-black/5 px-5 py-10"
      >
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            {
              value: <CountUp to={SPA.reviewCount} duration={1400} suffix="+" />,
              label: "Google reviews",
            },
            {
              value: <CountUp to={SPA.rating} duration={1100} decimals={1} />,
              label: "Average star rating",
            },
            {
              value: (
                <CountUp to={SPA.treatmentsPerformed} duration={1600} suffix="+" />
              ),
              label: "Treatments performed",
            },
            {
              value: <CountUp to={SPA.yearsInPractice} duration={900} suffix=" yrs" />,
              label: "In practice",
            },
          ].map((stat) => (
            <li key={stat.label} className="flex flex-col items-center px-2">
              <div className="font-display text-[30px] sm:text-[38px] font-black text-[#0E4F4A] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[11.5px] sm:text-[12.5px] text-[#4A4A4A] uppercase tracking-[0.18em] font-bold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ────────────────────────── ABOUT TEASER ────────────────────────── */}
      <section id="about-teaser" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-[auto_1fr] gap-7 items-center">
          <Reveal>
            <div className="relative w-[200px] h-[260px] sm:w-[220px] sm:h-[280px] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-md mx-auto">
              <Image
                src="/images/razan-portrait.png"
                alt={`${SPA.founder.name}, ${SPA.founder.credentials} and owner of ${SPA.name} in Mississauga, ON — holding her Body Pro Beauty & Aesthetics Academy diploma`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 200px, 220px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Razan
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                <span className="italic text-[#0E4F4A]">Medically trained.</span>{" "}
                Personally invested.
              </h2>
              <p className="mt-4 text-[#4A4A4A] text-[15.5px] leading-relaxed">
                <strong className="text-[#1A1A1A]">{SPA.founder.name}</strong> is
                a certified Para-Medical Skin Care Technician (Body Pro Beauty
                &amp; Aesthetics Academy, 2022). She built Enhanced Aesthetics
                as a private home studio so every client gets her undivided
                attention — no waiting room, no rushed handoffs, no upselling.
                Just calm, clinical-grade skin care.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0E4F4A] text-white px-5 py-2.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
                >
                  Read her story <ChevronRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] px-5 py-2.5 font-semibold text-sm hover:bg-[#1A1A1A]/5 transition-colors"
                >
                  See the menu
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────── SIGNATURE TREATMENTS ────────────────────────── */}
      <section
        id="signature"
        className="px-5 py-20 bg-white border-y border-black/5"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Signature Treatments
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] font-black leading-[1.05] tracking-tight">
              The three Razan is <span className="italic text-[#0E4F4A]">known for</span>.
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-[15.5px] leading-relaxed max-w-md mx-auto">
              Every session begins with a one-on-one skin analysis — but most
              clients are here for one of these three.
            </p>
          </Reveal>
        </div>

        <ul className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {trio.map((t, i) => (
            <Reveal key={t.slug} delay={i * 120} as="li">
              <TreatmentCard
                treatment={t}
                featured={featured.some((f) => f.slug === t.slug)}
                showHomeResultPair
              />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={400}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#0E4F4A] text-[#0E4F4A] px-7 py-3.5 font-bold text-sm hover:bg-[#0E4F4A] hover:text-white transition-colors"
            >
              See the full treatment menu
              <ChevronRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BEFORE/AFTER STRIP ────────────────────────── */}
      <section
        id="results"
        className="relative px-5 py-20 bg-[#F8F1EC] bg-noise-light"
      >
        <div className="relative max-w-3xl mx-auto text-center mb-12">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Real Results
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] font-black leading-[1.05] tracking-tight">
              Still deciding?{" "}
              <span className="italic text-[#0E4F4A]">See more paths.</span>
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-[15.5px] leading-relaxed max-w-xl mx-auto">
              The three cards above are the most requested — here are two more
              paths: <strong className="text-[#1A1A1A]">microneedling</strong>{" "}
              for pitted texture and scarring, and{" "}
              <strong className="text-[#1A1A1A]">arm peel</strong> for rough,
              bumpy skin on the body. Drag each slider — more in the full
              gallery.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <Reveal>
            <BeforeAfterSlider
              treatment={microneedlingHomeResult.treatment}
              note={microneedlingHomeResult.note}
              beforeSrc={microneedlingHomeResult.beforeSrc}
              afterSrc={microneedlingHomeResult.afterSrc}
            />
          </Reveal>
          <Reveal delay={120}>
            <BeforeAfterSlider
              treatment={armPeelHomeResult.treatment}
              note={armPeelHomeResult.note}
              beforeSrc={armPeelHomeResult.beforeSrc}
              afterSrc={armPeelHomeResult.afterSrc}
            />
          </Reveal>
        </div>

        <Reveal delay={500}>
          <div className="relative mt-12 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
            >
              See the full results gallery
              <ChevronRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── FIRST VISIT TIMELINE ────────────────────────── */}
      <section id="first-visit" className="px-5 py-20 bg-[#E5EFEC] border-y border-black/5">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              What to Expect
            </p>
            <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
              The Enhanced <span className="italic text-[#0E4F4A]">Experience.</span>
            </h2>
            <p className="mt-4 text-[#4A4A4A] text-[15px] leading-relaxed">
              Calm, private, and exactly as professional as a clinic — without
              the cold clinical feel.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 max-w-md mx-auto relative">
          <div
            aria-hidden
            className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0E4F4A]/40 via-[#C9A66A]/40 to-transparent"
          />
          <ol className="flex flex-col gap-8">
            {firstVisitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} as="li">
                <div className="flex gap-5">
                  <span className="relative shrink-0 grid place-items-center w-14 h-14 rounded-full bg-[#0E4F4A] text-white font-display font-black text-[15px] shadow-lg shadow-[#0E4F4A]/30 ring-4 ring-[#E5EFEC]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-bold text-[18px] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-[14px] mt-1.5 leading-relaxed">
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ────────────────────────── WHY ENHANCED ────────────────────────── */}
      <section id="why" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Why Women Choose Razan
          </p>
          <h2 className="font-display text-[34px] sm:text-[42px] font-black leading-[1.05] tracking-tight">
            Different on purpose.
          </h2>
        </div>
        <div className="mt-10 max-w-md mx-auto flex flex-col gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5 shadow-sm flex gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-[#0E4F4A]/10 text-[#0E4F4A]">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-[17px]">{f.title}</h3>
                  <p className="text-[#4A4A4A] text-[14px] mt-1.5 leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ────────────────────────── INSIDE THE STUDIO ────────────────────────── */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Inside the Studio
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                A calm, private space — built around <span className="italic text-[#0E4F4A]">you</span>.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <Reveal>
              <figure className="h-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl bg-[#0a1628]">
                  <Image
                    src="/images/studio/about-treatment-room.png"
                    alt={`${SPA.name} treatment room in Mississauga — adjustable bed, LED panel, hydrabrasion and aesthetic equipment, and wall sign`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                  />
                </div>
                <figcaption className="mt-3 text-left">
                  <p className="text-[13px] font-bold text-[#1A1A1A]">
                    The treatment suite
                  </p>
                  <p className="text-[12.5px] text-[#4A4A4A] mt-0.5 leading-relaxed">
                    Everything in one calm room — so your full session stays
                    private and unrushed.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="h-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl bg-[#0a1628]">
                  <Image
                    src="/images/studio/about-products-and-sign.png"
                    alt={`${SPA.shortName} acrylic logo sign and professional treatment product display with blue studio lighting`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                  />
                </div>
                <figcaption className="mt-3 text-left">
                  <p className="text-[13px] font-bold text-[#1A1A1A]">
                    Pro products, on display
                  </p>
                  <p className="text-[12.5px] text-[#4A4A4A] mt-0.5 leading-relaxed">
                    Formulations from the treatment room — chosen for results,
                    not shelf appeal.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
              <figure className="h-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl bg-[#0a1628]">
                  <Image
                    src="/images/studio/about-blue-led-therapy.png"
                    alt={`Client under medical-grade blue LED panel at ${SPA.shortName} — protective goggles, private treatment in Mississauga`}
                    fill
                    className="object-cover object-[center_32%] sm:object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL={IMAGE_BLUR}
                  />
                </div>
                <figcaption className="mt-3 text-left">
                  <p className="text-[13px] font-bold text-[#1A1A1A]">
                    LED in action
                  </p>
                  <p className="text-[12.5px] text-[#4A4A4A] mt-0.5 leading-relaxed">
                    Medical-grade blue light — often stacked after a facial to
                    calm inflammation and support clearer skin.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <HomeReviewsSection />

      {/* ────────────────────────── PROMISE ────────────────────────── */}
      <section className="px-5 py-16 bg-white border-y border-black/5">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold text-center mb-3">
              Razan&apos;s Promise
            </p>
            <h2 className="text-center font-display text-[30px] sm:text-[38px] font-black leading-tight tracking-tight">
              No fluff. <span className="italic text-[#0E4F4A]">No upselling.</span>
            </h2>
            <p className="mt-4 text-center text-[#4A4A4A] text-[15px] max-w-md mx-auto leading-relaxed">
              You&apos;ve been to spas where the goal felt like the bill, not
              your skin. Here&apos;s what you&apos;ll never get from us.
            </p>
          </Reveal>
          <ul className="mt-9 grid sm:grid-cols-3 gap-4">
            {promiseCards.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} as="li">
                <div className="rounded-2xl bg-[#F8F1EC] ring-1 ring-black/5 p-6 h-full">
                  <span className="grid place-items-center w-10 h-10 mb-4 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A]">
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-bold text-[16.5px] text-[#1A1A1A]">
                    {p.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[14px] mt-1.5 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────── QUIZ ────────────────────────── */}
      <section id="quiz" className="px-5 py-20 bg-[#F8F1EC]">
        <Reveal>
          <div className="max-w-md mx-auto text-center mb-6">
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Not sure where to start?
            </p>
            <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight tracking-tight">
              Take a 30-second skin check.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SkinQuiz />
        </Reveal>
      </section>

      {/* ────────────────────────── GIFT CARDS ────────────────────────── */}
      <section className="px-5 py-20 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto rounded-[28px] overflow-hidden grid md:grid-cols-2 ring-1 ring-black/5 shadow-xl">
          <div className="relative">
            <Placeholder
              label="Gift card visual"
              caption="The most-requested gift on the IG grid"
              variant="champagne"
              aspect="4/3"
              className="h-full md:aspect-auto md:h-full"
            />
          </div>
          <div className="p-7 md:p-10 bg-[#0a3a36] text-white flex flex-col justify-center">
            <p className="text-[#E7D4A9] text-[10.5px] tracking-[0.28em] uppercase font-bold mb-3">
              Digital Gift Cards
            </p>
            <h2 className="font-display text-[30px] md:text-[38px] font-black leading-tight">
              Give the <span className="italic text-[#E8C4BD]">glow.</span>
            </h2>
            <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
              The most-requested gift Razan gets every Mother&apos;s Day,
              birthday, and bridal-party season. Digital, instant, and any
              amount.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A66A] text-[#1A1A1A] px-6 py-3.5 font-bold text-sm hover:bg-[#E7D4A9] transition-colors w-fit"
            >
              Buy a gift card
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────── INSTAGRAM ────────────────────────── */}
      <section id="instagram" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto text-center">
          <Reveal>
            <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Follow Along
            </p>
            <h2 className="font-display text-[34px] font-black leading-tight tracking-tight">
              On <span className="italic text-[#0E4F4A]">Instagram.</span>
            </h2>
            <a
              href={SPA.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[#4A4A4A] text-[14px] hover:text-[#0E4F4A] transition-colors"
            >
              <InstagramIcon size={16} />
              {SPA.social.instagramHandle}
            </a>
          </Reveal>
        </div>

        <div className="mt-10 max-w-md mx-auto grid grid-cols-3 gap-2">
          {instagramShots.map((shot, i) => (
            <Reveal key={`${shot.label}-${i}`} delay={i * 70}>
              <a
                href={SPA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/5"
              >
                <Placeholder
                  label={shot.label}
                  caption={shot.caption}
                  variant={i % 3 === 0 ? "spa" : i % 3 === 1 ? "blush" : "champagne"}
                  className="h-full"
                />
                <div className="absolute inset-0 bg-[#0E4F4A]/0 group-hover:bg-[#0E4F4A]/40 transition-colors grid place-items-center text-white opacity-0 group-hover:opacity-100">
                  <InstagramIcon size={22} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-8 text-center">
            <a
              href={SPA.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#0E4F4A] text-[#0E4F4A] px-6 py-3 font-bold text-sm hover:bg-[#0E4F4A] hover:text-white transition-colors"
            >
              <InstagramIcon size={16} />
              Follow on Instagram
            </a>
          </div>
        </Reveal>
      </section>

      {/* ────────────────────────── BIG BOOK CTA ────────────────────────── */}
      <section
        id="book"
        className="divider-curve-down px-5 py-20 bg-[#0E4F4A] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E8C4BD] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#C9A66A] blur-3xl" />
        </div>
        <div className="relative max-w-md mx-auto text-center">
          <p className="text-[#E7D4A9] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
            Book Today
          </p>
          <h2 className="font-display text-[40px] sm:text-[46px] font-black leading-tight tracking-tight">
            Ready to <span className="italic text-[#E8C4BD]">glow?</span>
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed">
            Book on Calendly — most clients are seen within the week. The
            studio address is shared after booking.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/book"
              className="rounded-full bg-[#C9A66A] text-[#1A1A1A] px-6 py-4 font-bold text-[16px] inline-flex items-center justify-center gap-2 hover:bg-[#E7D4A9] transition-colors shadow-lg"
            >
              <Calendar size={18} />
              Book on Calendly
            </Link>
            <a
              href={`tel:${SPA.phone}`}
              className="rounded-full bg-white/10 text-white px-6 py-4 font-semibold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors ring-1 ring-white/15"
            >
              <Phone size={18} />
              {SPA.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${SPA.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25d366] text-white px-6 py-4 font-bold text-[15px] inline-flex items-center justify-center gap-2 hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Razan
            </a>
          </div>
          <p className="mt-6 text-white/80 text-[12.5px] flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#E7D4A9]" />
              Certified Para-Medical
            </span>
            <span aria-hidden className="opacity-50">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} className="text-[#E7D4A9]" />
              Open 11–6 every day
            </span>
          </p>
        </div>
      </section>

      {/* ────────────────────────── FAQ ────────────────────────── */}
      <section id="faq" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-[34px] sm:text-[40px] font-black leading-[1.05] tracking-tight">
              Frequently <span className="italic text-[#0E4F4A]">asked</span>.
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      <SiteFooter />

      {/* FAQ rich-result schema */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
