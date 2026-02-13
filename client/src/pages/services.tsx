import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Vedic Basic",
    description: "Essential Hindu rituals for a dignified Antim Sanskar.",
    price: "Starting at ₹25,000",
    features: [
      "Pandit for Mukhagni Vidhi",
      "Essential Samagri Kit",
      "Wood/Electric coordination",
      "Transportation to Shamshan",
      "Documentation assistance",
    ],
  },
  {
    name: "Standard Vidhi",
    description: "Complete Hindu rituals with added support for Shradh.",
    price: "Starting at ₹50,000",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Asthi Visarjan coordination",
      "Pandit for 4th Day Shuddhikaran",
      "Samagri for all 13 days",
      "Assistance with sacred location",
      "On-site Sewadar assistance",
    ],
  },
  {
    name: "Premium Moksha",
    description: "Complete end-to-end Vedic service at sacred Tirthas.",
    price: "Starting at ₹1,00,000",
    features: [
      "Everything in Standard",
      "Kashi/Haridwar ritual booking",
      "VIP Shamshan arrangement",
      "Catering for Terahvin",
      "Memory album of rituals",
      "Shradh anniversary reminders",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Pavitra Vidhi & Packages</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer transparent, respectful, and Vedic-compliant options to honor your loved ones. 
            All dakshina is fixed to ensure no commercialization of sacred rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`relative bg-white rounded-2xl border ${pkg.isPopular ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-border shadow-sm'} p-8 flex flex-col`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Vidhi Popular
                </div>
              )}
              <h3 className="font-serif text-2xl font-medium mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">{pkg.description}</p>
              <div className="text-xl font-bold text-foreground mb-8">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="size-5 text-primary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/booking">
                <Button 
                  className={`w-full ${pkg.isPopular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                >
                  Book {pkg.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed Service List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">Sacred Rituals</h2>
          <div className="space-y-12">
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-lilies.png" alt="Antim Kriya" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Antim Kriya Vidhi</h3>
                <p className="text-muted-foreground mb-4">
                  We handle all logistics for cremation according to Hindu Shastras, including coordination with local cremation grounds, arranging sacred wood, and Pandit for Mukhagni.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Ritual Consultation &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-ritual.png" alt="Vedic Rituals" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Asthi Visarjan & Tirth</h3>
                <p className="text-muted-foreground mb-4">
                  Sacred immersion of ashes in the Ganga at Haridwar, Kashi, or Prayagraj. We arrange Pandits for Tirth rituals and comfortable transportation for the family.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Kashi/Haridwar Booking &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                <img src="/images/service-support.png" alt="Legal Support" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-serif text-2xl mb-3">Shradh & Terahvin Puja</h3>
                <p className="text-muted-foreground mb-4">
                  Complete management of the 13-day ritual cycle, including Terahvin Puja, Brahmin Bhoj coordination, and Varshik Shradh reminders.
                </p>
                <Link href="/booking">
                  <span className="text-primary font-medium hover:underline cursor-pointer">Book Shradh Pandit &rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
