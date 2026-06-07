import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Instagram, Facebook, MessageCircle,
  Menu, X, Star,
} from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auradent Studio — Premium Dental Clinic" },
      { name: "description", content: "A premium dental experience — implants, whitening, orthodontics & cosmetic dentistry with precision, comfort and care." },
      { property: "og:title", content: "Auradent Studio — A healthy smile starts here" },
      { property: "og:description", content: "Modern dentistry with precision, comfort, and care." },
    ],
  }),
  component: Home,
});

const WHATSAPP_URL = "https://wa.me/15551234567";
const PHONE = "+1 (555) 123-4567";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Gallery />
      <Doctors />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- Eyebrow + section title ---------- */
function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-up">
      <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-medium">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground leading-[2] text-[15px] sm:text-base">{sub}</p>}
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Doctors", "#doctors"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-wider font-semibold">AS</a>
        <nav className="hidden md:flex items-center gap-10 text-[14px] text-foreground/80">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="relative hover:text-gold transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#appointment" className="hidden md:inline-flex bg-gradient-gold text-white text-[13px] px-6 py-3 rounded-full shadow-glow hover:-translate-y-1 transition-transform">
          Book a Consultation
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-sm">{l}</a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} className="mt-2 bg-gradient-gold text-white text-center text-sm px-6 py-3 rounded-full">Book a Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-hero pt-28 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{ backgroundImage: `url(${heroSmile})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div aria-hidden className="absolute top-1/4 -left-32 h-[700px] w-[700px] rounded-full blur-[120px] opacity-30 animate-float-blur"
        style={{ background: "radial-gradient(circle, var(--primary), transparent)" }} />
      <div aria-hidden className="absolute bottom-0 -right-32 h-[600px] w-[600px] rounded-full blur-[120px] opacity-25 animate-float-blur"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)", animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 animate-fade-up">
        <span className="inline-block glass rounded-full px-5 py-2.5 text-xs sm:text-[13px] tracking-wide text-foreground/80">
          A Premium Dental Experience
        </span>
        <h1 className="mt-8 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
          A healthy smile <br className="hidden sm:block" /><em className="text-gold not-italic font-display">starts here.</em>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-[2]">
          Modern dentistry with precision, comfort, and care — in a calm, elegant environment inspired by the world's finest medical clinics.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#appointment" className="bg-gradient-gold text-white px-9 py-4 rounded-full text-[14px] font-medium shadow-glow hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500">
            Book Appointment
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="glass text-foreground px-9 py-4 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:-translate-y-1.5 transition-all duration-500">
            <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  const items = [
    { value: "10+", label: "Years experience" },
    { value: "5,000+", label: "Patients treated" },
    { value: "4.9★", label: "Google rating" },
    { value: "100%", label: "Certified doctors" },
  ];
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
        {items.map((s) => (
          <div key={s.label} className="glass rounded-3xl p-8 sm:p-10 text-center hover:-translate-y-3 hover:shadow-elevated transition-all duration-500">
            <div className="font-display text-4xl sm:text-5xl text-gold">{s.value}</div>
            <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      <div aria-hidden className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--primary), transparent)" }} />
      <SectionTitle
        eyebrow="Our Universe"
        title="A new vision of dental care."
        sub="An experience designed around comfort, serenity and excellence — a modern approach to aesthetic dentistry."
      />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative animate-fade-up">
          <img src={clinicInterior} alt="Auradent Studio interior" loading="lazy" width={1600} height={1100}
            className="w-full h-[420px] sm:h-[560px] lg:h-[680px] object-cover rounded-[2.5rem] shadow-elevated" />
        </div>
        <div className="animate-fade-up">
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">Comfort, technology and elegance.</h3>
          <p className="mt-7 text-muted-foreground leading-[2] text-[15px] sm:text-base">
            At Auradent Studio, every detail is designed to deliver a premium experience in a calm, sophisticated atmosphere. Our clinic blends medical expertise, modern technology and personal care.
          </p>
          <p className="mt-5 text-muted-foreground leading-[2] text-[15px] sm:text-base">
            We believe a harmonious smile transforms confidence and elevates everyday well-being.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[["10+", "Years"], ["5K+", "Patients"], ["4.9★", "Rating"]].map(([v, l]) => (
              <div key={l} className="glass rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform duration-500">
                <div className="font-display text-2xl sm:text-3xl text-gold">{v}</div>
                <div className="mt-2 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { img: after1, title: "Dental Implants", desc: "Permanent, natural-looking replacements crafted with the latest implant technology." },
    { img: after2, title: "Teeth Whitening", desc: "Safe, professional brightening for a luminous, elegant smile in a single visit." },
    { img: before2, title: "Orthodontics", desc: "Discreet aligners and modern braces designed for perfect, comfortable harmony." },
    { img: heroSmile, title: "General Dentistry", desc: "Check-ups, fillings and preventive care delivered with precision and warmth." },
    { img: before1, title: "Cosmetic Dentistry", desc: "Veneers and full smile makeovers tailored to your features and personality." },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)" }} />
      <SectionTitle eyebrow="Premium Services" title="Care that reveals your smile." />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
        {services.map((s) => (
          <article key={s.title} className="bg-card rounded-[2rem] overflow-hidden shadow-soft hover:-translate-y-4 hover:shadow-elevated transition-all duration-500 group">
            <div className="overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={800} height={800}
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
            </div>
            <div className="p-8 sm:p-9">
              <h3 className="font-display text-2xl sm:text-[28px]">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-[2] text-[15px]">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Gallery (before/after) ---------- */
function Gallery() {
  const pairs = [
    { before: before1, after: after1, label: "Veneers & restoration" },
    { before: before2, after: after2, label: "Professional whitening" },
  ];
  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle
        eyebrow="Results"
        title="Transformations that speak for themselves."
        sub="A few examples reflecting our aesthetic approach and obsession with detail."
      />
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-7 sm:gap-9">
        {pairs.map((p, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 sm:gap-5">
            <figure className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img src={p.before} alt={`Before — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
              <figcaption className="absolute top-4 left-4 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80">Before</figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img src={p.after} alt={`After — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
              <figcaption className="absolute top-4 left-4 bg-gradient-gold text-white rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em]">After</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Doctors ---------- */
function Doctors() {
  const docs = [
    { img: doctor1, name: "Dr. Elena Marchetti", role: "Cosmetic & Restorative" },
    { img: doctor2, name: "Dr. Lucas Bauer", role: "Implantology" },
    { img: doctor3, name: "Dr. Adrian Novak", role: "Orthodontics" },
  ];
  return (
    <section id="doctors" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Our Specialists" title="Experts at the service of your smile." />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {docs.map((d) => (
          <article key={d.name} className="group">
            <div className="overflow-hidden rounded-[2rem] bg-secondary shadow-soft">
              <img src={d.img} alt={d.name} loading="lazy" width={900} height={1100}
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-display text-2xl">{d.name}</h3>
              <p className="mt-1 text-sm text-gold tracking-wide">{d.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { name: "Sophia M.", text: "An exceptional team. The clinic is modern, welcoming and the result exceeded all my expectations." },
    { name: "James L.", text: "Professional, gentle and beautifully modern. Every step was explained — the outcome is beyond what I imagined." },
    { name: "Aisha K.", text: "From booking to follow-up, everything was seamless. Truly a premium dental experience." },
  ];
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <SectionTitle eyebrow="Patient Reviews" title="Trusted by thousands." />
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-7">
        {items.map((t) => (
          <figure key={t.name} className="relative bg-card rounded-[2rem] p-10 shadow-soft hover:-translate-y-3 transition-transform duration-500">
            <div className="absolute top-6 right-7 flex gap-0.5 text-gold text-sm">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <blockquote className="text-foreground/85 leading-[2] text-[15px]">"{t.text}"</blockquote>
            <figcaption className="mt-7 font-display text-gold text-lg">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- Appointment ---------- */
function Appointment() {
  const [sent, setSent] = useState(false);
  return (
    <section id="appointment" className="py-24 sm:py-32 px-6 sm:px-10">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] p-8 sm:p-16 lg:p-24 relative overflow-hidden"
        style={{ background: "linear-gradient(to right, oklch(0.94 0.025 235), oklch(0.985 0.004 90))" }}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Appointment</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Book your visit.</h2>
          <p className="mt-4 text-muted-foreground leading-[2] text-[15px]">Tell us what you need and our team will confirm your slot within a few hours.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 max-w-2xl mx-auto">
          <input required maxLength={80} className="form-input" placeholder="Your full name" />
          <input required type="tel" maxLength={30} className="form-input" placeholder="Phone number" />
          <select className="form-input" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Dental Implants</option><option>Teeth Whitening</option><option>Orthodontics</option>
            <option>General Dentistry</option><option>Cosmetic Dentistry</option>
          </select>
          <textarea rows={4} maxLength={500} className="form-input resize-none" placeholder="Your message" />
          <button type="submit" className="bg-gradient-gold text-white rounded-2xl py-5 text-[15px] font-medium shadow-glow hover:-translate-y-1.5 transition-transform duration-500">
            {sent ? "Thank you — we'll be in touch" : "Request Appointment"}
          </button>
        </form>
        <div className="mt-10 text-center text-sm text-muted-foreground leading-[2.4]">
          <div className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {PHONE}</div>
          <span className="mx-3 hidden sm:inline">·</span><br className="sm:hidden" />
          <div className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Mon–Sat · 9:00–19:00</div>
        </div>
      </div>
      <style>{`.form-input{width:100%;border:none;background:#fff;border-radius:18px;padding:20px;font-size:15px;font-family:inherit;outline:none;box-shadow:0 10px 25px rgba(0,0,0,.05);transition:box-shadow .3s, transform .3s}.form-input:focus{box-shadow:0 14px 35px rgba(158,184,202,.25);transform:translateY(-2px)}`}</style>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Visit Us" title="We're here for you." />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <ContactRow icon={MapPin} title="Clinic address" value="24 Rue de la Lumière, 75008 Paris, France" />
          <ContactRow icon={Phone} title="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <ContactRow icon={MessageCircle} title="WhatsApp" value="Chat with our team" href={WHATSAPP_URL} />
          <ContactRow icon={Clock} title="Opening hours" value="Mon–Sat · 9:00 – 19:00 · Sun closed" />
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
          <iframe
            title="Auradent Studio location"
            src="https://www.google.com/maps?q=Paris&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const Body = (
    <div className="glass rounded-3xl p-7 flex items-start gap-5 hover:-translate-y-1.5 transition-transform duration-500">
      <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-gold">{title}</div>
        <div className="mt-1.5 text-foreground/90">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{Body}</a> : Body;
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl tracking-wider">AS</div>
          <p className="mt-4 text-sm text-muted-foreground leading-[2] max-w-xs">Auradent Studio — a premium dental experience designed around you.</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Address</div>
          <p className="text-sm text-muted-foreground leading-[2]">24 Rue de la Lumière<br />75008 Paris, France</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Opening hours</div>
          <p className="text-sm text-muted-foreground leading-[2]">Mon–Fri · 9:00 – 19:00<br />Saturday · 10:00 – 16:00<br />Sunday · Closed</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Follow</div>
          <div className="flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-white transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} Auradent Studio. All rights reserved.</div>
          <div>Crafted with care.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated hover:scale-110 transition"
      style={{ backgroundColor: "var(--whatsapp)" }}>
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
