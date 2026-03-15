"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useLang } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center">
        <Image src={logo} alt="NNM Import and Export" className="h-16 w-auto mx-auto mb-6" height={64} />
        <p className="font-body text-sm text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} NNM Import and Export Inc. {t.footer.rights}
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2">
          {t.footer.drink}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
