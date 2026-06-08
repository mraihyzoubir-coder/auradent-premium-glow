import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Mail,
  Menu, X, Star, Sparkles, ShieldCheck, HeartHandshake, Microscope,
  Smile, Stethoscope, Award, GraduationCap, Quote,
} from "lucide-react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
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
      { title: "Auradent Studio — Cabinet Dentaire Premium à Casablanca" },
      { name: "description", content: "Cabinet dentaire de luxe au Maroc : implants, blanchiment, orthodontie, facettes et dentisterie esthétique. Expertise, technologie de pointe et expérience patient haut de gamme." },
      { property: "og:title", content: "Auradent Studio — Cabinet Dentaire Premium" },
      { property: "og:description", content: "L'excellence dentaire au Maroc. Une expérience patient pensée comme dans les plus grandes cliniques internationales." },
    ],
  }),
  component: Home,
});

const WHATSAPP_URL = "https://wa.me/212600000000";
const PHONE = "+212 6 00 00 00 00";
const EMAIL = "contact@auradent.ma";
const ADDRESS = "Boulevard Mohammed V, Casablanca, Maroc";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <Doctor />
      <Testimonials />
      <ClinicGallery />
      <FAQ />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- Section Title ---------- */
function SectionTitle({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={`max-w-3xl mb-16 sm:mb-20 animate-fade-up ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-gold font-medium">{eyebrow}</span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground leading-[2] text-[15px] sm:text-base">{sub}</p>}
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "#services"],
    ["Résultats", "#resultats"],
    ["Pourquoi nous", "#why"],
    ["Praticien", "#doctor"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-[0.18em] font-semibold">AURADENT</a>
        <nav className="hidden lg:flex items-center gap-9 text-[13px] text-foreground/80">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-gold transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#appointment" className="hidden lg:inline-flex bg-gradient-gold text-white text-[13px] px-6 py-3 rounded-full shadow-glow hover:-translate-y-1 transition-transform">
          Prendre rendez-vous
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/30 bg-white/80 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-sm">{l}</a>
            ))}
            <a href="#appointment" onClick={() => setOpen(false)} className="mt-2 bg-gradient-gold text-white text-center text-sm px-6 py-3 rounded-full">Prendre rendez-vous</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden bg-gradient-hero pt-32 pb-24">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{ backgroundImage: `url(${heroSmile})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div aria-hidden className="absolute top-1/4 -left-32 h-[700px] w-[700px] rounded-full blur-[120px] opacity-30 animate-float-blur"
        style={{ background: "radial-gradient(circle, var(--primary), transparent)" }} />
      <div aria-hidden className="absolute bottom-0 -right-32 h-[600px] w-[600px] rounded-full blur-[120px] opacity-25 animate-float-blur"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)", animationDelay: "-4s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 animate-fade-up">
        <span className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-xs sm:text-[13px] tracking-wide text-foreground/80">
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Cabinet dentaire premium · Casablanca
        </span>
        <h1 className="mt-8 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
          L'excellence dentaire,<br className="hidden sm:block" />
          <em className="text-gold not-italic font-display">au service de votre sourire.</em>
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-[2]">
          Une dentisterie de précision dans un cadre raffiné — implants, esthétique et orthodontie réalisés avec les technologies les plus avancées et une attention sincère portée à chaque patient.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#appointment" className="bg-gradient-gold text-white px-9 py-4 rounded-full text-[14px] font-medium shadow-glow hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-500">
            Prendre rendez-vous
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="glass text-foreground px-9 py-4 rounded-full text-[14px] font-medium inline-flex items-center gap-2 hover:-translate-y-1.5 transition-all duration-500">
            <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" /> Consultation WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust Bar ---------- */
function TrustBar() {
  const items = [
    { value: "15+", label: "Années d'expérience" },
    { value: "5 000+", label: "Patients satisfaits" },
    { value: "4,9/5", label: "Note moyenne patients" },
    { value: "100%", label: "Praticiens certifiés" },
  ];
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
        {items.map((s) => (
          <div key={s.label} className="glass rounded-3xl p-8 sm:p-10 text-center hover:-translate-y-3 hover:shadow-elevated transition-all duration-500">
            <div className="font-display text-4xl sm:text-5xl text-gold">{s.value}</div>
            <div className="mt-3 text-sm text-muted-foreground tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: Stethoscope, title: "Implants dentaires", desc: "Restaurez votre sourire avec des implants durables, posés avec précision pour un résultat naturel et confortable." },
    { icon: Sparkles, title: "Blanchiment dentaire", desc: "Un éclat lumineux et naturel grâce à un protocole professionnel sécurisé, en une seule séance." },
    { icon: Smile, title: "Orthodontie", desc: "Aligneurs invisibles et solutions modernes pour une harmonie parfaite, sans compromettre votre quotidien." },
    { icon: Award, title: "Dentisterie esthétique", desc: "Facettes et transformations sur mesure pour révéler un sourire unique, équilibré et raffiné." },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 px-6 sm:px-10 overflow-hidden">
      <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-[140px] opacity-15"
        style={{ background: "radial-gradient(circle, var(--gold), transparent)" }} />
      <SectionTitle eyebrow="Nos Services" title="Des soins haut de gamme, pensés pour vous." sub="Chaque traitement est conçu autour d'une exigence : la précision médicale, alliée à un confort absolu." />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {services.map((s) => (
          <article key={s.title} className="bg-card rounded-[2rem] p-8 sm:p-10 shadow-soft hover:-translate-y-4 hover:shadow-elevated transition-all duration-500 group">
            <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-white shadow-glow group-hover:scale-110 transition-transform duration-500">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-7 font-display text-2xl">{s.title}</h3>
            <p className="mt-4 text-muted-foreground leading-[2] text-[14.5px]">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Before & After ---------- */
function BeforeAfter() {
  const pairs = [
    { before: before1, after: after1, label: "Facettes céramiques" },
    { before: before2, after: after2, label: "Blanchiment professionnel" },
  ];
  return (
    <section id="resultats" className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <SectionTitle
        eyebrow="Avant / Après"
        title="Des transformations qui parlent d'elles-mêmes."
        sub="Quelques résultats réels obtenus dans notre cabinet — toujours dans le respect de votre visage et de votre personnalité."
      />
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-7 sm:gap-10">
        {pairs.map((p, i) => (
          <div key={i} className="bg-card rounded-[2.5rem] p-5 sm:p-6 shadow-soft hover:shadow-elevated transition-shadow duration-500">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <figure className="relative overflow-hidden rounded-[1.75rem]">
                <img src={p.before} alt={`Avant — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
                <figcaption className="absolute top-4 left-4 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80">Avant</figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-[1.75rem]">
                <img src={p.after} alt={`Après — ${p.label}`} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover" />
                <figcaption className="absolute top-4 left-4 bg-gradient-gold text-white rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em]">Après</figcaption>
              </figure>
            </div>
            <div className="mt-5 px-2 pb-2 text-center text-sm tracking-wide text-muted-foreground">{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const items = [
    { icon: Microscope, title: "Technologie avancée", desc: "Imagerie 3D, scanners intra-oraux et bloc opératoire dernière génération pour une précision absolue." },
    { icon: ShieldCheck, title: "Équipe d'experts", desc: "Des praticiens diplômés, formés en continu dans les meilleurs centres internationaux." },
    { icon: HeartHandshake, title: "Expérience personnalisée", desc: "Un accompagnement sur-mesure, attentif et discret, à chaque étape de votre parcours." },
  ];
  return (
    <section id="why" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Pourquoi nous choisir" title="Une approche différente de la dentisterie." />
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-7">
        {items.map((it) => (
          <div key={it.title} className="relative bg-card rounded-[2rem] p-10 shadow-soft hover:-translate-y-3 hover:shadow-elevated transition-all duration-500 overflow-hidden">
            <div aria-hidden className="absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-30" style={{ background: "var(--gold-soft)" }} />
            <div className="relative h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-white shadow-glow">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="relative mt-7 font-display text-2xl">{it.title}</h3>
            <p className="relative mt-4 text-muted-foreground leading-[2] text-[15px]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Doctor ---------- */
function Doctor() {
  return (
    <section id="doctor" className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative animate-fade-up">
          <div aria-hidden className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
          <img src={doctor1} alt="Dr Yasmine El Amrani — Fondatrice Auradent Studio"
            loading="lazy" width={1100} height={1400}
            className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-elevated" />
        </div>
        <div className="animate-fade-up">
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold font-medium">Praticien Fondateur</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.1]">Dr Yasmine El Amrani</h2>
          <p className="mt-3 text-sm tracking-wide text-muted-foreground">Chirurgien-dentiste · Esthétique & Implantologie</p>

          <p className="mt-8 text-muted-foreground leading-[2] text-[15px]">
            Diplômée de la Faculté de Médecine Dentaire de Casablanca, formée à Paris et Genève, Dr El Amrani a fondé Auradent Studio avec une vision : offrir au Maroc une dentisterie d'exception, élégante et profondément humaine.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <Award className="h-5 w-5 text-gold mt-1" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold">Expérience</div>
                <div className="mt-1 text-sm text-foreground/90">15+ années de pratique clinique</div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <GraduationCap className="h-5 w-5 text-gold mt-1" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gold">Formations</div>
                <div className="mt-1 text-sm text-foreground/90">Paris · Genève · Casablanca</div>
              </div>
            </div>
          </div>

          <a href="#appointment" className="mt-10 inline-flex bg-gradient-gold text-white px-8 py-3.5 rounded-full text-[13px] font-medium shadow-glow hover:-translate-y-1 transition-transform">
            Consulter le Dr El Amrani
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    { name: "Sophia M.", city: "Casablanca", text: "Une expérience exceptionnelle du début à la fin. L'équipe est attentionnée, le cabinet sublime et le résultat dépasse toutes mes attentes." },
    { name: "Karim B.", city: "Rabat", text: "Je n'avais jamais vu un cabinet dentaire aussi raffiné au Maroc. Précision, douceur et écoute — un vrai standard international." },
    { name: "Lina H.", city: "Marrakech", text: "Mon sourire a été totalement transformé. Tout est expliqué avec patience, et le suivi est irréprochable. Je recommande sans hésiter." },
  ];
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Témoignages" title="La confiance de nos patients." />
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-7">
        {items.map((t) => (
          <figure key={t.name} className="relative bg-card rounded-[2rem] p-10 shadow-soft hover:-translate-y-3 transition-transform duration-500">
            <Quote className="h-7 w-7 text-gold opacity-40" />
            <div className="mt-2 flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <blockquote className="mt-5 text-foreground/85 leading-[2] text-[15px]">« {t.text} »</blockquote>
            <figcaption className="mt-7">
              <div className="font-display text-gold text-lg">{t.name}</div>
              <div className="text-xs text-muted-foreground tracking-wide mt-0.5">{t.city}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- Clinic Gallery ---------- */
function ClinicGallery() {
  const tiles = [
    { img: clinicInterior, label: "Espace d'accueil" },
    { img: heroSmile, label: "Expérience patient" },
    { img: doctor2, label: "Salle de traitement" },
    { img: doctor3, label: "Technologie de pointe" },
  ];
  return (
    <section id="gallery" className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <SectionTitle eyebrow="Notre Cabinet" title="Un cadre pensé pour votre sérénité." sub="Un espace lumineux, calme et raffiné — chaque détail a été dessiné pour que vous vous y sentiez chez vous." />
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {tiles.map((t, i) => (
          <figure key={i} className={`relative overflow-hidden rounded-[2rem] shadow-soft group ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
            <img src={t.img} alt={t.label} loading="lazy"
              className={`w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 ${i === 0 ? "h-72 lg:h-full" : "h-52 sm:h-64"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <figcaption className="absolute bottom-4 left-4 glass rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-foreground/80">{t.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Comment se déroule une prise de rendez-vous ?", a: "Vous pouvez réserver votre consultation directement via notre formulaire, par téléphone ou par WhatsApp. Notre équipe vous confirme un créneau adapté en quelques heures et vous reçoit dans un cadre calme et confidentiel." },
    { q: "Quels sont vos tarifs ?", a: "Chaque traitement est unique : nous établissons un devis transparent et personnalisé après votre consultation initiale. Des solutions de paiement flexibles peuvent être proposées pour les soins esthétiques et implantaires." },
    { q: "Quels traitements proposez-vous ?", a: "Nous couvrons l'ensemble de la dentisterie moderne : implants, facettes, blanchiment, orthodontie invisible, dentisterie esthétique et soins conservateurs, le tout avec une approche premium." },
    { q: "Comment se passe la première consultation ?", a: "Un examen complet, une imagerie 3D si nécessaire et un échange approfondi pour comprendre vos attentes. Vous repartez avec un plan de traitement clair, sans engagement." },
    { q: "Acceptez-vous les patients internationaux ?", a: "Oui. Nous accueillons régulièrement des patients de passage au Maroc et organisons leur parcours de soin de A à Z, incluant recommandations d'hébergement à Casablanca." },
  ];
  return (
    <section id="faq" className="py-24 sm:py-32 px-6 sm:px-10">
      <SectionTitle eyebrow="Questions Fréquentes" title="Tout ce que vous souhaitez savoir." />
      <div className="mx-auto max-w-3xl animate-fade-up">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f-${i}`} className="bg-card rounded-2xl border-0 shadow-soft px-6 sm:px-8">
              <AccordionTrigger className="text-left font-display text-lg sm:text-xl py-6 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-[2] text-[15px] pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
        style={{ background: "linear-gradient(135deg, oklch(0.94 0.025 235), oklch(0.985 0.004 90))" }}>
        <div aria-hidden className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, var(--gold), transparent)" }} />
        <div className="relative text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Rendez-vous</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Réservez votre consultation.</h2>
          <p className="mt-4 text-muted-foreground leading-[2] text-[15px]">Décrivez-nous votre besoin — notre équipe vous recontacte sous quelques heures avec une proposition de créneau.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="relative grid gap-5 max-w-2xl mx-auto">
          <input required maxLength={80} className="form-input" placeholder="Nom complet" />
          <input required type="tel" maxLength={30} className="form-input" placeholder="Numéro de téléphone" />
          <select className="form-input" defaultValue="">
            <option value="" disabled>Choisissez un service</option>
            <option>Implants dentaires</option>
            <option>Blanchiment dentaire</option>
            <option>Orthodontie</option>
            <option>Dentisterie esthétique</option>
            <option>Consultation générale</option>
          </select>
          <textarea rows={4} maxLength={500} className="form-input resize-none" placeholder="Votre message (optionnel)" />
          <button type="submit" className="bg-gradient-gold text-white rounded-2xl py-5 text-[15px] font-medium shadow-glow hover:-translate-y-1.5 transition-transform duration-500">
            {sent ? "Merci — nous vous recontactons rapidement" : "Demander un rendez-vous"}
          </button>
        </form>
        <div className="relative mt-10 text-center text-sm text-muted-foreground leading-[2.4]">
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
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 bg-gradient-soft">
      <SectionTitle eyebrow="Nous Rendre Visite" title="Nous sommes là pour vous." />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <ContactRow icon={MapPin} title="Adresse du cabinet" value={ADDRESS} />
          <ContactRow icon={Phone} title="Téléphone" value={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <ContactRow icon={MessageCircle} title="WhatsApp" value="Discutez avec notre équipe" href={WHATSAPP_URL} />
          <ContactRow icon={Mail} title="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={Clock} title="Horaires d'ouverture" value="Lun–Sam · 9h00 – 19h00 · Dim fermé" />
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-soft aspect-[4/3]">
          <iframe
            title="Localisation Auradent Studio"
            src="https://www.google.com/maps?q=Boulevard+Mohammed+V+Casablanca&output=embed"
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
          <div className="font-display text-2xl tracking-[0.2em] font-semibold">AURADENT</div>
          <p className="mt-4 text-sm text-muted-foreground leading-[2] max-w-xs">L'excellence dentaire au Maroc — une expérience patient pensée comme dans les plus grandes cliniques internationales.</p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Navigation</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="#resultats" className="hover:text-gold transition-colors">Résultats</a></li>
            <li><a href="#doctor" className="hover:text-gold transition-colors">Praticien</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            <li><a href="#appointment" className="hover:text-gold transition-colors">Rendez-vous</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground leading-[1.9]">
            <li>{ADDRESS}</li>
            <li>{PHONE}</li>
            <li>{EMAIL}</li>
            <li>Lun–Sam · 9h00 – 19h00</li>
          </ul>
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
          <div>© {new Date().getFullYear()} Auradent Studio · Casablanca. Tous droits réservés.</div>
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
