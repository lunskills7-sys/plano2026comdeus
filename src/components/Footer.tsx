const Footer = () => {
  return (
    <footer className="section-container py-8 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} • Todos os direitos reservados
      </p>
      <p className="text-xs text-muted-foreground/70 mt-2">
        Esta é uma oferta exclusiva disponível apenas nesta página
      </p>
    </footer>
  );
};

export default Footer;
