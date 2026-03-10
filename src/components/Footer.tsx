import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center">
        <img src={logo} alt="NNM Import and Export" className="h-16 mx-auto mb-6" />
        <p className="font-body text-sm text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} NNM Import and Export Inc. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2">
          Please drink responsibly. Must be of legal drinking age.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
