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
      { title: "Auradent Studio — Cabinet Dentaire Premium" },
      { name: "description", content: "Une expérience dentaire premium — implants, blanchiment, orthodontie et dentisterie esthétique avec précision, confort et bienveillance." },
      { property: "og:title", content: "Auradent Studio — Un sourire en pleine santé commence ici" },
      { property: "og:description", content: "Une dentisterie moderne, précise, douce et attentionnée." },
    ],
  }),
  component: Home,
});

const WHATSAPP_URL = "https://wa.me/15551234567";
const PHONE = "+33 1 23 45 67 89";

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
    ["À propos", "#about"],
    ["Services", "#services"],
    ["Galerie", "#gallery"],
    ["Praticiens", "#doctors"],
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
          Réserver une consultation
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
            <a href="#appointment" onClick={() => setOpen(false)} className="mt-2 bg-gradient-gold text-white text-center text-sm px-6 py-3 rounded-full">Réserver une consultation</a>
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
          Une expérience dentaire premium
        </span>
        <h1 className="mt-8 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
          Un sourire en pleine santé <br className="hidden sm:block" /><em className="text-gold not-italic font-display">commence ici.</em>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-[2]">
          Une dentisterie moderne, précise, douce et attentionnée — dans un environnement calme et élégant inspiré des plus belles cliniques internationales.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#appointment" className="bg-gradient-gold text-white px-9 py-4 rounded-full text-[14px] font-medium shadow-glow hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500">
            Prendre rendez-vous
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
    { value: "10+", label: "Années d'expérience" },
    { value: "5 000+", label: "Patients traités" },
    { value: "4,9★", label: "Note Google" },
    { value: "100%", label: "Praticiens certifiés" },
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
        eyebrow="Notre Univers"
        title="Une nouvelle vision des soins dentaires."
        sub="Une expérience pensée pour le confort, la sérénité et l'excellence — une approche moderne de la dentisterie esthétique."
      />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative animate-fade-up">
          <img src={clinicInterior} alt="Intérieur d'Auradent Studio" loading="lazy" width={1600} height={1100}
            className="w-full h-[420px] sm:h-[560px] lg:h-[680px] object-cover rounded-[2.5rem] shadow-elevated" />
        </div>
        <div className="animate-fade-up">
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">Confort, technologie et élégance.</h3>
          <p className="mt-7 text-muted-foreground leading-[2] text-[15px] sm:text-base">
            Chez Auradent Studio, chaque détail est conçu pour offrir une expérience premium dans une atmosphère apaisante et raffinée. Notre clinique associe expertise médicale, technologies modernes et accompagnement personnalisé.
          </p>
          <p className="mt-5 text-muted-foreground leading-[2] text-[15px] sm:text-base">
            Nous croyons qu'un sourire harmonieux transforme la confiance en soi et améliore le bien-être au quotidien.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[["10+", "Années"], ["5K+", "Patients"], ["4,9★", "Avis"]].map(([v, l]) => (
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
    { img: after1, title: "Implants dentaires", desc: "Des solutions durables et naturelles grâce aux dernières technologies implantaires." },
    { img: after2, title: "Blanchiment dentaire", desc: "Des techniques professionnelles pour un sourire lumineux et élégant en une seule séance." },
    { img: before2, title: "Orthodontie", desc: "Des aligneurs discrets et appareils modernes pour une harmonie parfaite et confortable." },
    { img: heroSmile, title: "Dentisterie générale", desc: "Bilans, soins conservateurs et prévention réalisés avec précision et bienveillance." },
    { img: before1, title: "Dentisterie esthétique", desc: "Facettes et transformations complètes du sourire pensées sur mesure pour vous." },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)" }} />
      <SectionTitle eyebrow="Services Premium" title="Des soins pour révéler votre sourire." />
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
    { before: before1, after: after1, label: "Facettes & restauration" },
    { before: before2, after: after2, label: "Blanchiment professionnel" },
  ];
  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle
        eyebrow="Résultats"
        title="Des transformations qui parlent d'elles-mêmes."
        sub="Quelques exemples illustrant notre approche esthétique et notre souci du détail."
      />
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-7 sm:gap-9">
        {pairs.map((p, i) => (
          <div key={i} className="grid grid-cols-2 gap-4 sm:gap-5">
            <figure className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img src={p.before} alt={`Avant — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
              <figcaption className="absolute top-4 left-4 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80">Avant</figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img src={p.after} alt={`Après — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
              <figcaption className="absolute top-4 left-4 bg-gradient-gold text-white rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em]">Après</figcaption>
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
    { img: doctor1, name: "Dr Elena Marchetti", role: "Esthétique & Restauratrice" },
    { img: doctor2, name: "Dr Lucas Bauer", role: "Implantologie" },
    { img: doctor3, name: "Dr Adrian Novak", role: "Orthodontie" },
  ];
  return (
    <section id="doctors" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Nos Spécialistes" title="Des experts au service de votre sourire." />
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
    { name: "Sophie M.", text: "Une équipe exceptionnelle. Le cabinet est moderne, accueillant et le résultat a dépassé toutes mes attentes." },
    { name: "Julien L.", text: "Professionnel, doux et merveilleusement moderne. Chaque étape m'a été expliquée — le résultat est au-delà de mes espérances." },
    { name: "Aïsha K.", text: "De la prise de rendez-vous au suivi, tout a été parfaitement fluide. Une véritable expérience premium." },
  ];
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <SectionTitle eyebrow="Avis Patients" title="Ils nous ont fait confiance." />
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-7">
        {items.map((t) => (
          <figure key={t.name} className="relative bg-card rounded-[2rem] p-10 shadow-soft hover:-translate-y-3 transition-transform duration-500">
            <div className="absolute top-6 right-7 flex gap-0.5 text-gold text-sm">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <blockquote className="text-foreground/85 leading-[2] text-[15px]">« {t.text} »</blockquote>
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
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Rendez-vous</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Réservez votre visite.</h2>
          <p className="mt-4 text-muted-foreground leading-[2] text-[15px]">Dites-nous ce dont vous avez besoin et notre équipe confirmera votre créneau en quelques heures.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 max-w-2xl mx-auto">
          <input required maxLength={80} className="form-input" placeholder="Nom complet" />
          <input required type="tel" maxLength={30} className="form-input" placeholder="Numéro de téléphone" />
          <select className="form-input" defaultValue="">
            <option value="" disabled>Choisissez un service</option>
            <option>Implants dentaires</option><option>Blanchiment dentaire</option><option>Orthodontie</option>
            <option>Dentisterie générale</option><option>Dentisterie esthétique</option>
          </select>
          <textarea rows={4} maxLength={500} className="form-input resize-none" placeholder="Votre message" />
          <button type="submit" className="bg-gradient-gold text-white rounded-2xl py-5 text-[15px] font-medium shadow-glow hover:-translate-y-1.5 transition-transform duration-500">
            {sent ? "Merci — nous vous recontactons rapidement" : "Demander un rendez-vous"}
          </button>
        </form>
        <div className="mt-10 text-center text-sm text-muted-foreground leading-[2.4]">
          <div className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {PHONE}</div>
          <span className="mx-3 hidden sm:inline">·</span><br className="sm:hidden" />
          <div className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> Lun–Sam · 9h00–19h00</div>
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
      <SectionTitle eyebrow="Nous Rendre Visite" title="Nous sommes là pour vous." />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <ContactRow icon={MapPin} title="Adresse du cabinet" value="24 Rue de la Lumière, 75008 Paris, France" />
          <ContactRow icon={Phone} title="Téléphone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <ContactRow icon={MessageCircle} title="WhatsApp" value="Discutez avec notre équipe" href={WHATSAPP_URL} />
          <ContactRow icon={Clock} title="Horaires d'ouverture" value="Lun–Sam · 9h00 – 19h00 · Dim fermé" />
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
          <iframe
            title="Localisation Auradent Studio"
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
          <p className="mt-4 text-sm text-muted-foreground leading-[2] max-w-xs">Auradent Studio — une expérience dentaire premium pensée pour vous.</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Adresse</div>
          <p className="text-sm text-muted-foreground leading-[2]">24 Rue de la Lumière<br />75008 Paris, France</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Horaires d'ouverture</div>
          <p className="text-sm text-muted-foreground leading-[2]">Lun–Ven · 9h00 – 19h00<br />Samedi · 10h00 – 16h00<br />Dimanche · Fermé</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Nous suivre</div>
          <div className="flex gap-3">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" aria-label="réseau social" className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-white transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <div>© {new Date().getFullYear()} Auradent Studio. Tous droits réservés.</div>
          <div>Conçu avec soin.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elevated hover:scale-110 transition"
      style={{ backgroundColor: "var(--whatsapp)" }}>
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
