import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || location !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-xl">🕊️</span>
            </div>
            <span
              className={cn(
                "font-serif text-xl font-medium tracking-wide transition-colors",
                isScrolled || location !== "/" ? "text-foreground" : "text-white"
              )}
            >
              Antim Sanskar
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary/80",
                  location === link.href
                    ? "text-primary"
                    : isScrolled || location !== "/"
                    ? "text-foreground/80"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/booking">
            <Button
              variant={isScrolled || location !== "/" ? "default" : "secondary"}
              className="rounded-full px-6 shadow-sm"
            >
              Arrange Service
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-primary font-medium">
            <div className="bg-primary/10 p-2 rounded-full">
              <Phone className="size-4" />
            </div>
            <span className={isScrolled || location !== "/" ? "text-foreground" : "text-white"}>
              (555) 123-4567
            </span>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled || location !== "/" ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                      <a
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                  <Link href="/booking">
                    <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                      Arrange Service
                    </Button>
                  </Link>
                </nav>
                <div className="flex flex-col gap-2 p-4 bg-secondary/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">24/7 Support Line</span>
                  <a href="tel:5551234567" className="flex items-center gap-2 text-primary font-bold">
                    <Phone className="size-4" /> (555) 123-4567
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
