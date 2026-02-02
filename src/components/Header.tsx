import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "Weight Loss", href: "#" },
  { label: "Strength", href: "#" },
  { label: "Anti-Aging", href: "#" },
  { label: "Hair Growth", href: "#" },
  { label: "Mood", href: "#" },
];

const moreLinks = [
  { label: "NAD+", href: "#" },
  { label: "Women's Health", href: "#" },
  { label: "Men's Health", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        height: scrolled ? 56 : 64,
        boxShadow: scrolled
          ? "0 4px 20px -2px rgba(0, 0, 0, 0.1)"
          : "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/98 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-full items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          animate={{ scale: scrolled ? 0.95 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">H</span>
          </div>
          <span className="text-xl font-bold text-foreground">HealthRx</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-1 p-2">
                    {moreLinks.map((link) => (
                      <li key={link.label}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" className="text-sm font-medium">
            Login
          </Button>
          <motion.div
            animate={{ scale: scrolled ? 0.95 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button className="rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="border-t border-border bg-background lg:hidden"
        >
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-4">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full rounded-full bg-primary text-primary-foreground">
                Get Started
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
