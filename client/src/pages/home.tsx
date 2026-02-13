import { BookingForm } from "@/components/booking-form";

// In Home.tsx, I used a placeholder custom element <booking-form-placeholder />
// I need to replace it with the actual component in the file content.
// Or better, I can just fix Home.tsx to import and use BookingForm directly.
// Wait, I already wrote Home.tsx but I put <booking-form-placeholder /> in the JSX.
// Let me correct Home.tsx to actually use the BookingForm component.

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { ArrowRight, Phone, Heart, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-peaceful.png" 
            alt="Peaceful Kashi Sunrise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background z-10" />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 text-center text-white pt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Pavitra & Vedic Antim Sanskar
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Dignified Hindu Rituals <br/> Conducted with Devotion
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Complete end-to-end Hindu funeral and after-death Shradh services. 
            We handle every Vedic ritual with purity and respect.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/booking">
              <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-primary hover:bg-primary/90 border-none shadow-lg hover:shadow-xl transition-all">
                Book Ritual Now
              </Button>
            </Link>
            <a href="tel:919876543210">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                <Phone className="mr-2 size-4" /> 24/7 Immediate Help
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Vedic Sanskar Process</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Supporting you through the sacred journey of honoring your loved ones according to Hindu traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-border z-0" />

            {/* Step 1 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">1</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Sankalp (Contact)</h3>
              <p className="text-muted-foreground px-4">
                Share details about the tradition, location, and specific Vedic requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">2</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Vidhi (Customized Rituals)</h3>
              <p className="text-muted-foreground px-4">
                Arranging expert Pandits, sacred Samagri, and suitable venues for the Kriya.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center group">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-serif text-3xl text-primary font-medium">3</span>
              </div>
              <h3 className="font-serif text-xl mb-3">Moksha (Final Support)</h3>
              <p className="text-muted-foreground px-4">
                Assistance with Asthi Visarjan, Shradh, and Terahvin ceremonies with complete devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Pavitra Services</h2>
              <p className="text-muted-foreground max-w-xl">
                Comprehensive Vedic care tailored to your family's Hindu traditions and customs.
              </p>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80 hover:bg-transparent px-0 group">
                All Ritual Services <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Antim Kriya (Cremation)"
              description="Complete coordination for cremation according to Vedic rites, including wood/electric options and samagri."
              image="/images/service-lilies.png"
              icon={<Heart className="size-5" />}
            />
            <ServiceCard 
              title="Pandit & Puja Booking"
              description="Experienced Vedic Pandits for all rituals including Dahan, Asthi Visarjan, and Shradh ceremonies."
              image="/images/service-ritual.png"
              icon={<ShieldCheck className="size-5" />}
            />
            <ServiceCard 
              title="Documentation & Asthi"
              description="Assistance with legal death certificates and arranging Asthi Visarjan at sacred locations like Haridwar/Kashi."
              image="/images/service-support.png"
              icon={<Clock className="size-5" />}
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <Button variant="outline" className="w-full">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Support Strip */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-medium mb-2">Need Immediate Antim Kriya Help?</h3>
            <p className="text-primary-foreground/80">Our compassionate Vedic team is available 24/7 to support your family.</p>
          </div>
          <div className="flex gap-4">
             <a href="tel:919876543210">
              <Button size="lg" variant="secondary" className="font-medium shadow-lg">
                <Phone className="mr-2 size-4" /> Call +91 98765 43210
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Commitment to Families</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary/20 p-8 rounded-xl border border-border/50 relative">
              <span className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</span>
              <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">
                "Antim Sanskar handled my father's rituals with complete Vedic purity. The Pandit they arranged was very knowledgeable and patient with our family during the Kriya."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Amit Sharma</h4>
                  <p className="text-xs text-muted-foreground">Varanasi, UP</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-xl border border-border/50 relative">
              <span className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">"</span>
              <p className="text-muted-foreground italic mb-6 relative z-10 pt-4">
                "We were lost during the Terahvin preparations, but their team stepped in and organized everything seamlessly. Truly trustworthy and respectful of our Hindu traditions."
              </p>
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  P
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Priya Gupta</h4>
                  <p className="text-xs text-muted-foreground">Delhi, NCR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/30" id="contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Pavitra Sewa</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need immediate Antim Kriya assistance or are planning Shradh rituals, please reach out. 
                Our Vedic experts are here to guide your family.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">24/7 Vedic Helpline</h4>
                    <p className="text-sm text-muted-foreground">Help available at any hour of need</p>
                    <a href="tel:919876543210" className="text-primary font-medium hover:underline">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Ritual Locations</h4>
                    <p className="text-sm text-muted-foreground">Assistance at local cremation grounds or sacred Tirthas like Haridwar and Kashi.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-border mt-8">
                  <h4 className="font-serif text-lg mb-2">Transparent Dakshina</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer Basic, Standard, and Premium Vidhi packages with fixed dakshina. 
                    No hidden charges, all samagri included.
                  </p>
                  <Link href="/services">
                    <a className="text-sm font-medium text-primary hover:underline">View Ritual Packages &rarr;</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">
              <div className="mb-6">
                 <h3 className="font-serif text-2xl mb-1">Request Assistance</h3>
                 <p className="text-sm text-muted-foreground">Fill in the details below and we will contact you immediately.</p>
              </div>
              <div id="booking-form-container">
                 <BookingForm /> 
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
