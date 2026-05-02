import { useState, useEffect, type FormEvent } from "react";
import { SpaceRoot } from "@hatch/sdk/components";
import {
  Menu, X, Phone, Mail, MapPin, Clock, ChevronRight,
  DoorOpen, DoorClosed, ArrowUpRight, Fence, ShowerHead, Wrench, Star,
  Facebook, Hammer, Camera
} from "lucide-react";

const PHONE = "(516) 530-1601";
const EMAIL = "wondedoorsandstairs@gmail.com";
const ADDRESS = "56-58 West Merrick Road, Freeport, NY 11520";
const FB_URL = "https://www.facebook.com/profile.php?id=61566541625284";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.5!2d-73.587!3d40.6575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM5JzI3LjAiTiA3M8KwMzUnMTMuMiJX!5e0!3m2!1sen!2sus!4v1700000000000";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { name: "Interior Doors", desc: "Premium interior doors that elevate your living spaces. From panel doors to French doors, installed with precision.", icon: DoorOpen },
  { name: "Exterior Doors", desc: "Durable, beautiful entry doors that make a lasting first impression and provide security for your home.", icon: DoorClosed },
  { name: "Staircases", desc: "Custom staircase design and installation. From classic wood to modern floating designs, built to last.", icon: ArrowUpRight },
  { name: "Railings", desc: "Elegant railings in wood, iron, and glass. Safety meets style with expert craftsmanship.", icon: Fence },
  { name: "Shower Doors", desc: "Frameless and framed shower enclosures. Crystal-clear glass doors that transform your bathroom.", icon: ShowerHead },
  { name: "Custom Work", desc: "Unique projects deserve unique solutions. We bring your vision to life with bespoke craftsmanship.", icon: Wrench },
];

const GALLERY_ITEMS = [
  { title: "Modern Entry Door", category: "Exterior Doors" },
  { title: "Oak Staircase Install", category: "Staircases" },
  { title: "Frameless Shower", category: "Shower Doors" },
  { title: "Custom Iron Railing", category: "Railings" },
  { title: "French Door Set", category: "Interior Doors" },
  { title: "Grand Stairway", category: "Staircases" },
  { title: "Barn Door Install", category: "Interior Doors" },
  { title: "Glass Balustrade", category: "Railings" },
];

const TESTIMONIALS = [
  { name: "Maria S.", location: "Freeport, NY", text: "Wonde Doors transformed our entryway with a gorgeous new front door. The team was professional, on time, and the quality exceeded our expectations. Highly recommend!", rating: 5 },
  { name: "James R.", location: "Merrick, NY", text: "Had a full staircase renovation done. From the initial consultation to the final walk-through, everything was handled with care and expertise. Our stairs look incredible.", rating: 5 },
  { name: "Linda K.", location: "Baldwin, NY", text: "They installed frameless shower doors in both our bathrooms. Clean work, fair pricing, and beautiful results. We've already referred them to three neighbors!", rating: 5 },
];

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}
      style={{
        background: scrolled ? "rgba(250,248,245,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
            <Hammer size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", color: scrolled ? "var(--navy)" : "#fff" }}>
              Wonde
            </span>
            <span className="text-[10px] block -mt-1 tracking-[0.2em] uppercase font-medium transition-colors duration-300" style={{ color: scrolled ? "var(--accent)" : "#c49a5c" }}>
              Doors & Stairs
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: scrolled ? "var(--dim)" : "rgba(255,255,255,0.85)" }}>
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <Phone size={14} /> Call Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} style={{ color: scrolled ? "var(--text)" : "#fff" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 py-4 px-5" style={{ background: "rgba(250,248,245,0.98)", borderBottom: "1px solid var(--border)" }}>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 px-3 rounded-lg text-sm font-medium" style={{ color: "var(--text)" }}>
                {l.label}
              </a>
            ))}
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="mt-3 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold" style={{ background: "var(--accent)", color: "#fff" }}>
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, #1a2744 0%, #243352 50%, #2c3d5e 100%)",
      }} />
      {/* Subtle wood-grain texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
      }} />
      {/* Soft glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,94,47,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "rgba(196,154,92,0.6)" }} />
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "rgba(196,154,92,0.9)" }}>
              Serving Long Island Since 2024
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}>
            Quality Doors & Stairs,{" "}
            <span style={{ color: "#c49a5c" }}>Crafted</span> with Care
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            Expert installation of doors, staircases, railings, and shower enclosures.
            Family-owned craftsmanship you can trust for your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all hover:opacity-90"
              style={{ background: "#8b5e2f", color: "#fff" }}
            >
              Get a Free Quote <ChevronRight size={18} />
            </a>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all hover:opacity-90"
              style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <Phone size={16} /> {PHONE}
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#c49a5c" color="#c49a5c" />)}
              </div>
              <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>5-Star Rated</span>
            </div>
            <div className="h-4 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Licensed & Insured</span>
            <div className="h-4 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function Services() {
  return (
    <section id="services" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: "var(--navy)" }}>Our Services</h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: "var(--dim)" }}>
            From front doors to staircases, we handle every detail with expert precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(139,94,47,0.1)" }}>
                  <Icon size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--navy)" }}>{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--dim)" }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{
            background: "linear-gradient(135deg, #e8dfd4 0%, #d4c5b0 100%)",
            border: "1px solid var(--border)",
          }}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <Hammer size={48} style={{ color: "var(--accent)", opacity: 0.5 }} />
              <span className="text-sm font-medium" style={{ color: "var(--dim)", opacity: 0.6 }}>Team Photo</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6" style={{ color: "var(--navy)" }}>
              Family-Owned Craftsmanship
            </h2>
            <p className="text-base leading-7 mb-5" style={{ color: "var(--dim)" }}>
              Wonde Doors & Stairs is a family-owned business proudly serving the Freeport and greater Long Island community.
              Founded in 2024, we bring decades of combined experience in door installation, staircase construction,
              and custom woodworking to every project.
            </p>
            <p className="text-base leading-7 mb-8" style={{ color: "var(--dim)" }}>
              We believe every home deserves the highest quality craftsmanship. That's why we personally oversee each
              installation, from the first measurement to the final walk-through. Your satisfaction is our reputation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: "Projects\nCompleted", value: "200+" },
                { label: "Years\nExperience", value: "10+" },
                { label: "Satisfied\nClients", value: "100%" },
              ].map(s => (
                <div key={s.label}>
                  <span className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--accent)" }}>{s.value}</span>
                  <span className="text-sm block mt-1 whitespace-pre-line" style={{ color: "var(--dim)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ─── */
function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: "var(--navy)" }}>Project Gallery</h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: "var(--dim)" }}>
            Browse recent installations and see the quality we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid var(--border)" }}
            >
              <div
                className="aspect-square flex flex-col items-center justify-center gap-2 relative"
                style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #e8dfd4 0%, #ddd2c3 100%)" : "linear-gradient(135deg, #d4c5b0 0%, #c8b99f 100%)" }}
              >
                <Camera size={28} style={{ color: "var(--accent)", opacity: 0.35 }} />
                <span className="text-xs font-medium" style={{ color: "var(--dim)", opacity: 0.5 }}>Photo Coming Soon</span>
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(26,39,68,0.85) 0%, transparent 60%)" }}>
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="text-xs text-white/70">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: "var(--navy)" }}>What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-7"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#c49a5c" color="#c49a5c" />
                ))}
              </div>
              <p className="text-base leading-7 mb-6" style={{ color: "var(--text)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "rgba(139,94,47,0.1)", color: "var(--accent)" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-semibold block" style={{ color: "var(--text)" }}>{t.name}</span>
                  <span className="text-sm" style={{ color: "var(--dim)" }}>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Thank you! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ color: "var(--navy)" }}>Contact Us</h2>
          <p className="text-base mt-4 max-w-lg mx-auto" style={{ color: "var(--dim)" }}>
            Ready to start your project? Reach out for a free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl p-6 sm:p-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--text)" }}>Full Name</label>
                  <input
                    type="text" required placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", focusRingColor: "var(--accent)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--text)" }}>Phone Number</label>
                  <input
                    type="tel" required placeholder="(516) 555-0000"
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2"
                    style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--text)" }}>Email Address</label>
                <input
                  type="email" required placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--text)" }}>Service Needed</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                >
                  <option value="">Select a service...</option>
                  <option>Interior Doors</option>
                  <option>Exterior Doors</option>
                  <option>Staircases</option>
                  <option>Railings</option>
                  <option>Shower Doors</option>
                  <option>Custom Work</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5" style={{ color: "var(--text)" }}>Message</label>
                <textarea
                  required rows={4} placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 resize-none"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg text-base font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact info card */}
            <div className="rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <h3 className="text-lg font-bold mb-5" style={{ color: "var(--navy)" }}>Contact Info</h3>
              <div className="space-y-4">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,94,47,0.1)" }}>
                    <Phone size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block" style={{ color: "var(--text)" }}>{PHONE}</span>
                    <span className="text-sm" style={{ color: "var(--dim)" }}>Call or text anytime</span>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,94,47,0.1)" }}>
                    <Mail size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block break-all" style={{ color: "var(--text)" }}>{EMAIL}</span>
                    <span className="text-sm" style={{ color: "var(--dim)" }}>We reply within 24 hours</span>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,94,47,0.1)" }}>
                    <MapPin size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block" style={{ color: "var(--text)" }}>{ADDRESS}</span>
                    <span className="text-sm" style={{ color: "var(--dim)" }}>Visit our showroom</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,94,47,0.1)" }}>
                    <Clock size={16} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block" style={{ color: "var(--text)" }}>Mon - Sat: 8 AM - 6 PM</span>
                    <span className="text-sm" style={{ color: "var(--dim)" }}>Sun: By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[200px]" style={{ border: "1px solid var(--border)" }}>
              <iframe
                title="Wonde Doors & Stairs Location"
                src={MAPS_EMBED}
                className="w-full h-full min-h-[200px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12" style={{ background: "var(--navy)", color: "rgba(255,255,255,0.7)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
                <Hammer size={18} color="#fff" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Wonde</span>
                <span className="text-[10px] block -mt-1 tracking-[0.2em] uppercase font-medium" style={{ color: "#c49a5c" }}>Doors & Stairs</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Quality doors and staircase installation serving Freeport and Long Island.
              Family-owned, locally trusted.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map(s => (
                <a key={s.name} href="#services" className="text-sm hover:text-white transition-colors">{s.name}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone size={14} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors break-all">
                <Mail size={14} /> {EMAIL}
              </a>
              <span className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" /> {ADDRESS}
              </span>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Facebook size={14} /> Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm">&copy; {new Date().getFullYear()} Wonde Doors & Stairs. All rights reserved.</span>
            <span className="text-sm">Freeport, NY &bull; Serving Long Island</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <SpaceRoot>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </SpaceRoot>
  );
}
