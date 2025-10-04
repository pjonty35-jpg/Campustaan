const SubHeader = () => {
  const categories = ['Announcement', 'Buzz', 'Talent', 'Shop', 'Find me', 'Account'];

  return (
    <div className="relative border-b border-primary/20 bg-background/30 backdrop-blur-md supports-[backdrop-filter]:bg-background/20 shadow-sm">
      <div className="mx-auto px-4 max-w-4xl">
        <nav className="flex items-center justify-center gap-6 h-14 py-2">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="group relative px-5 py-2.5 text-sm font-semibold text-foreground/70 hover:text-primary rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/10 border border-transparent hover:border-primary/30"
            >
              <span className="relative z-10">{category}</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubHeader;
