import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChevronRight,
  Phone,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  Heart,
  Award,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingNav from "@/components/FloatingNav";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { SPA, SITE_URL } from "@/lib/spa";
import { IMAGE_BLUR } from "@/lib/imageBlur";

export const metadata: Metadata = {
  title: "About Razan Shahrour & Enhanced Aesthetics Medi Spa",
  description:
    "Meet Razan Shahrour — certified Para-Medical Skin Care Technician and founder of Enhanced Aesthetics, the private home-based medi spa in Mississauga with 4.9★ from 66+ Google reviews.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main id="main" className="relative bg-[#F8F1EC] text-[#1A1A1A]">
      <FloatingNav phone={SPA.phone} />
      <StickyMobileCTA
        phone={SPA.phone}
        phoneDisplay={SPA.phoneDisplay}
        whatsapp={SPA.whatsapp}
      />

      {/* Header band */}
      <section className="relative bg-[#F8F1EC] overflow-hidden">
        <div
          aria-hidden
          className="drift-x pointer-events-none absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-[#0E4F4A] opacity-[0.07] blur-[120px]"
        />
        <SiteHeader />
        <div className="relative px-5 pt-6 pb-14 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
              About the Studio
            </p>
            <h1 className="font-display text-[44px] sm:text-[60px] font-black leading-[1.02] tracking-tight">
              Result-driven beauty.{" "}
              <span className="italic text-[#0E4F4A]">One client at a time.</span>
            </h1>
            <p className="mt-5 text-[#4A4A4A] text-[16px] sm:text-[17px] leading-relaxed max-w-xl mx-auto">
              Enhanced Aesthetics is a private home-based medi spa in
              Mississauga, founded and operated by Razan Shahrour — a
              certified Para-Medical Skin Care Technician with a quiet
              following of {SPA.igFollowers.toLocaleString()}+ on Instagram and{" "}
              {SPA.reviewCount}+ five-star reviews on Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative bg-white border-y border-black/5 px-5 py-10">
        <ul className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 text-center">
          {[
            {
              value: <CountUp to={SPA.reviewCount} duration={1400} suffix="+" />,
              label: "Google reviews",
            },
            {
              value: <CountUp to={SPA.rating} duration={1100} decimals={1} />,
              label: "Star rating",
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
              <div className="font-display text-[30px] sm:text-[36px] font-black text-[#0E4F4A] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[12.5px] text-[#4A4A4A] uppercase tracking-[0.18em] font-bold leading-snug max-w-[160px]">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Meet Razan — one 2×2 grid so story + proof read as a single block */}
      <section id="razan" className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-12 md:gap-y-14 items-start">
          <Reveal>
            <div className="relative w-full max-w-md mx-auto md:mx-0 aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-xl bg-[#F8F1EC]">
              <Image
                src="/images/razan-portrait.png"
                alt={`${SPA.founder.name}, ${SPA.founder.credentials} and owner of ${SPA.name}, Mississauga — Para-Medical Skin Care Technician diploma, Body Pro Beauty & Aesthetics Academy`}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 100vw, 420px"
                placeholder="blur"
                blurDataURL={IMAGE_BLUR}
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Meet Your Aesthetician
              </p>
              <h2 className="font-display text-[36px] sm:text-[48px] font-black leading-tight tracking-tight">
                {SPA.founder.name},{" "}
                <span className="italic text-[#0E4F4A]">
                  {SPA.founder.credentials}
                </span>
              </h2>
              <p className="text-[#4A4A4A] text-sm font-semibold mt-1.5">
                {SPA.founder.title}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <GraduationCap size={12} /> Body Pro Academy · &apos;22
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C9A66A]/15 text-[#9C7A39] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <Award size={12} /> {SPA.rating}★ · {SPA.reviewCount}+
                  reviews
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8C4BD]/40 text-[#1A1A1A] px-3 py-1 text-[10.5px] font-bold tracking-[0.18em] uppercase">
                  <Heart size={12} /> Women-only space
                </span>
              </div>

              <div className="mt-6 space-y-4 text-[#4A4A4A] text-[15.5px] leading-relaxed">
                <p>
                  Razan trained at{" "}
                  <strong className="text-[#1A1A1A]">
                    {SPA.founder.school}
                  </strong>
                  , graduating as a{" "}
                  <strong>Para-Medical Skin Care Technician</strong> in{" "}
                  {SPA.founder.schoolYear}. Since then, she&apos;s built
                  Enhanced Aesthetics into one of Mississauga&apos;s most-loved
                  private studios — quietly, by word of mouth and Instagram.
                </p>
                <p>
                  Her approach is the opposite of a chain spa: a single
                  treatment room, one client at a time, custom-built sessions
                  rather than packaged menus, and zero pressure to upgrade. Most
                  clients describe their first visit as{" "}
                  <em>calmer than expected</em> — which is exactly the point.
                </p>
                <p>
                  Razan continues her education every year — staying current on
                  hydrabrasion, acne protocols, LED therapy, and product
                  formulation — so the science behind every treatment is as
                  modern as the experience around it.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#1A6F68] transition-colors shadow-md shadow-[#0E4F4A]/20"
                >
                  <Calendar size={16} />
                  Book with Razan
                </Link>
                <a
                  href={`tel:${SPA.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] px-6 py-3.5 font-semibold text-sm hover:bg-[#1A1A1A]/5 transition-colors"
                >
                  <Phone size={16} />
                  {SPA.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <figure className="max-w-md mx-auto md:mx-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg bg-[#F8F1EC]">
                <Image
                  src="/images/razan-diploma.png"
                  alt={`${SPA.founder.name} holding her Para-Medical Skin Care Technician diploma from ${SPA.founder.school}, ${SPA.founder.schoolYear}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                  placeholder="blur"
                  blurDataURL={IMAGE_BLUR}
                />
              </div>
              <figcaption className="mt-3 text-[12.5px] text-[#4A4A4A] leading-snug">
                Razan with her Para-Medical Skin Care Technician diploma — Body
                Pro Beauty &amp; Aesthetics Academy, January 2022.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={220}>
            <div id="credentials" className="md:pt-1">
              <p className="text-[#C9A66A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                The credentials
              </p>
              <h3 className="font-display text-[28px] sm:text-[34px] font-black leading-tight tracking-tight">
                A real diploma.{" "}
                <span className="italic text-[#0E4F4A]">A real practice.</span>
              </h3>
              <p className="mt-4 text-[#4A4A4A] text-[15.5px] leading-relaxed">
                Para-Medical Skin Care Technician training covers skin anatomy,
                advanced product chemistry, treatment safety, and the clinical
                protocols that separate a real medi spa from a self-taught
                Instagram setup.
              </p>
              <ul className="mt-6 space-y-3 text-[#1A1A1A] text-[14.5px]">
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] shrink-0">
                    <ShieldCheck size={14} />
                  </span>
                  Clinical-grade hygiene &amp; sanitation protocols
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] shrink-0">
                    <ShieldCheck size={14} />
                  </span>
                  Cosmetic chemistry &amp; ingredient interactions
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] shrink-0">
                    <ShieldCheck size={14} />
                  </span>
                  Skin anatomy, conditions, contraindications
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-[#0E4F4A]/10 text-[#0E4F4A] shrink-0">
                    <ShieldCheck size={14} />
                  </span>
                  Hands-on training in advanced facials &amp; modalities
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission band */}
      <section className="px-5 py-16 bg-[#0E4F4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E8C4BD] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#C9A66A] blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-[#E7D4A9] text-[11px] tracking-[0.25em] uppercase font-bold mb-3 inline-flex items-center gap-2">
            <Sparkles size={12} /> The Studio Philosophy
          </p>
          <h2 className="font-display text-[36px] sm:text-[46px] font-black leading-tight">
            Calm space.{" "}
            <span className="italic text-[#E8C4BD]">Clinical results.</span>
          </h2>
          <p className="mt-5 text-white/90 text-[16px] sm:text-[17px] leading-relaxed">
            Skin care doesn&apos;t have to feel rushed or transactional. At
            Enhanced Aesthetics, every session is built around what your skin
            actually needs that day — not a script. The result is a quieter
            kind of beauty: the kind that compounds over time.
          </p>
        </div>
      </section>

      {/* The space */}
      <section className="px-5 py-20 bg-[#F8F1EC]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-[#0E4F4A] text-[11px] tracking-[0.25em] uppercase font-bold mb-3">
                Inside the Studio
              </p>
              <h2 className="font-display text-[32px] sm:text-[40px] font-black leading-tight tracking-tight">
                A private treatment room — built for{" "}
                <span className="italic text-[#0E4F4A]">focus</span>.
              </h2>
              <p className="mt-4 text-[#4A4A4A] text-[15px] leading-relaxed">
                One treatment bed, professional-grade equipment, LED therapy,
                and the products Razan works with every day — no waiting room,
                no overlap.
              </p>
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

      {/* CTA */}
      <section className="px-5 py-16 bg-white border-t border-black/5">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-display text-[30px] sm:text-[36px] font-black leading-tight">
            Ready to meet Razan?
          </h2>
          <p className="mt-3 text-[#4A4A4A] text-[15px] leading-relaxed">
            Book your first session — most clients are seen within the week.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0E4F4A] text-white px-7 py-4 font-bold text-[15px] hover:bg-[#1A6F68] transition-colors shadow-lg shadow-[#0E4F4A]/20"
            >
              <Calendar size={16} />
              Book on Fresha
            </Link>
            <a
              href={`tel:${SPA.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 text-[#1A1A1A] px-7 py-4 font-semibold text-[15px] hover:bg-[#1A1A1A]/5 transition-colors"
            >
              <Phone size={16} />
              {SPA.phoneDisplay}
            </a>
          </div>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-1.5 text-[#0E4F4A] text-sm font-bold hover:gap-2 transition-all"
          >
            See the treatment menu
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
