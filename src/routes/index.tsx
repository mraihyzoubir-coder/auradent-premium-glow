import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ShieldCheck, Star, Award, Phone, MapPin, Clock,
  Instagram, Facebook, MessageCircle, ArrowRight, Check,
  Smile, Stethoscope, Wand2, Crown, Activity, Menu, X,
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
      { title: "Auradent Studio — Modern Premium Dental Clinic" },
      { name: "description", content: "Modern dentistry with precision, comfort, and care. Implants, whitening, orthodontics & cosmetic dentistry at Auradent Studio." },
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Doctors />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["About", "#about"],
    ["Doctors", "#doctors"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg tracking-tight">auradent <span className="text-muted-foreground">studio</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#appointment" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-soft">
          Book Appointment <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-sm">{l}</a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">Book Appointment</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Premium dental care
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            A healthy smile <span className="italic text-primary">starts here</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Modern dentistry with precision, comfort, and care. We blend advanced technology with a calm, welcoming environment.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#appointment" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-elevated">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium hover:bg-muted transition">
              <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" /> WhatsApp
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              <span className="ml-1.5 text-foreground font-medium">4.9</span> Google
            </div>
            <div className="h-4 w-px bg-border" />
            <div>5,000+ happy patients</div>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elevated bg-card">
            <img src={heroSmile} alt="Patient with healthy smile" className="h-full w-full object-cover" width={1280} height={1600} />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card border border-border px-5 py-4 shadow-soft">
            <div className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Certified specialists</div>
              <div className="text-xs text-muted-foreground">Board-approved care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
function Trust() {
  const items = [
    { icon: Award, value: "10+", label: "Years experience" },
    { icon: Smile, value: "5,000+", label: "Patients treated" },
    { icon: Star, value: "4.9", label: "Google rating" },
    { icon: ShieldCheck, value: "100%", label: "Certified doctors" },
  ];
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-display text-foreground">{value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: Crown, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements." },
    { icon: Wand2, title: "Teeth Whitening", desc: "Safe, professional brightening in a single visit." },
    { icon: Activity, title: "Orthodontics", desc: "Discreet aligners and modern braces for every age." },
    { icon: Stethoscope, title: "General Dentistry", desc: "Check-ups, fillings and preventive care." },
    { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers and smile makeovers tailored to you." },
  ];
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Services</span>
        <h2 className="mt-3 text-4xl sm:text-5xl">Care that meets every need</h2>
        <p className="mt-4 text-muted-foreground">From routine check-ups to full smile transformations, our team delivers world-class treatment in a calm setting.</p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group p-7 rounded-2xl border border-border bg-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center mb-6">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-elevated">
            <img src={clinicInterior} alt="Auradent Studio interior" className="h-full w-full object-cover" loading="lazy" width={1600} height={1100} />
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">About the clinic</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">Calm care, exceptional outcomes</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Auradent Studio, dentistry is an experience designed around you. Our specialists combine digital precision, modern equipment, and a gentle bedside manner so every visit feels effortless. From your first consultation to your final result, comfort and clarity guide every decision we make.
          </p>
          <ul className="mt-8 space-y-3">
            {["Digital scanning & 3D treatment planning", "Sedation options for nervous patients", "Transparent pricing — no hidden fees"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const pairs = [
    { before: before1, after: after1, label: "Veneers & restoration" },
    { before: before2, after: after2, label: "Professional whitening" },
  ];
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Before & After</span>
        <h2 className="mt-3 text-4xl sm:text-5xl">Real smiles, real results</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-8">
        {pairs.map((p, i) => (
          <div key={i} className="rounded-2xl border border-border overflow-hidden bg-card shadow-soft">
            <div className="grid grid-cols-2">
              <figure className="relative">
                <img src={p.before} alt="Before" className="aspect-square w-full object-cover" loading="lazy" width={800} height={800} />
                <figcaption className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-medium">Before</figcaption>
              </figure>
              <figure className="relative">
                <img src={p.after} alt="After" className="aspect-square w-full object-cover" loading="lazy" width={800} height={800} />
                <figcaption className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">After</figcaption>
              </figure>
            </div>
            <div className="px-5 py-4 text-sm text-muted-foreground">{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { name: "Sophia M.", text: "Truly the most calming dental experience I've ever had. My new veneers look completely natural.", role: "Veneers patient" },
    { name: "James L.", text: "Professional, gentle and very modern. The team explained every step and the result is beyond what I imagined.", role: "Implant patient" },
    { name: "Aisha K.", text: "From the booking process to the follow-up, everything was seamless. Highly recommend Auradent.", role: "Whitening patient" },
  ];
  return (
    <section className="bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Patient stories</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">Trusted by thousands</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <blockquote className="text-foreground leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
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
    <section id="doctors" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Our specialists</span>
        <h2 className="mt-3 text-4xl sm:text-5xl">Meet the doctors</h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((d) => (
          <div key={d.name} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
              <img src={d.img} alt={d.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={900} height={1100} />
            </div>
            <div className="mt-5">
              <div className="text-lg font-display">{d.name}</div>
              <div className="text-sm text-muted-foreground">{d.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Appointment ---------- */
function Appointment() {
  const [sent, setSent] = useState(false);
  return (
    <section id="appointment" className="bg-gradient-soft">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 lg:py-32">
        <div className="rounded-[2rem] bg-card border border-border shadow-elevated overflow-hidden grid md:grid-cols-2">
          <div className="p-8 sm:p-12 bg-gradient-primary text-primary-foreground">
            <span className="text-xs uppercase tracking-[0.2em] opacity-80 font-medium">Appointment</span>
            <h2 className="mt-3 text-4xl text-primary-foreground">Book your visit</h2>
            <p className="mt-4 opacity-90 leading-relaxed">Tell us what you need and our team will confirm your slot within a few hours.</p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 opacity-80" /> {PHONE}</div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 opacity-80" /> Mon–Sat · 9:00 – 19:00</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 opacity-80" /> 24 Rue de la Lumière, Paris</div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="p-8 sm:p-12 space-y-5"
          >
            <Field label="Name"><input required maxLength={80} className="form-input" placeholder="Your full name" /></Field>
            <Field label="Phone"><input required type="tel" maxLength={30} className="form-input" placeholder="+1 555 123 4567" /></Field>
            <Field label="Service">
              <select className="form-input" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Dental Implants</option><option>Teeth Whitening</option><option>Orthodontics</option>
                <option>General Dentistry</option><option>Cosmetic Dentistry</option>
              </select>
            </Field>
            <Field label="Message"><textarea rows={3} maxLength={500} className="form-input resize-none" placeholder="Anything we should know?" /></Field>
            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium hover:opacity-90 transition shadow-soft">
              {sent ? "Thank you — we'll be in touch" : "Request Appointment"}
            </button>
          </form>
        </div>
      </div>
      <style>{`.form-input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:0.75rem;padding:0.75rem 1rem;font-size:0.875rem;outline:none;transition:border-color .2s, box-shadow .2s}.form-input:focus{border-color:var(--ring);box-shadow:0 0 0 4px oklch(0.58 0.13 245 / 0.12)}`}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Visit us</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">We're here for you</h2>
          <p className="mt-4 text-muted-foreground max-w-md">Reach out by phone, WhatsApp, or stop by the clinic. We're easy to find and always happy to help.</p>
          <div className="mt-10 space-y-5">
            <ContactRow icon={MapPin} title="Clinic address" value="24 Rue de la Lumière, 75008 Paris, France" />
            <ContactRow icon={Phone} title="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
            <ContactRow icon={MessageCircle} title="WhatsApp" value="Chat with our team" href={WHATSAPP_URL} />
            <ContactRow icon={Clock} title="Opening hours" value="Mon–Sat · 9:00 – 19:00 · Sun closed" />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
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
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-80 transition">{Body}</a> : Body;
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg">auradent <span className="text-muted-foreground">studio</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">Modern dentistry with precision, comfort, and care.</p>
        </div>
        <div>
          <div className="text-sm font-medium">Address</div>
          <p className="mt-3 text-sm text-muted-foreground">24 Rue de la Lumière<br />75008 Paris, France</p>
        </div>
        <div>
          <div className="text-sm font-medium">Opening hours</div>
          <p className="mt-3 text-sm text-muted-foreground">Mon–Fri · 9:00 – 19:00<br />Saturday · 10:00 – 16:00<br />Sunday · Closed</p>
        </div>
        <div>
          <div className="text-sm font-medium">Follow</div>
          <div className="mt-3 flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} Auradent Studio. All rights reserved.</div>
          <div>Crafted with care in Paris.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated hover:scale-105 transition"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
