const SubHeader = () => {
  const categories = ['Announcement', 'Buzz', 'Talent', 'Shop', 'Find me', 'Account'];

  return (
    <div className="relative border-b border-primary/10 bg-background/20 backdrop-blur-sm supports-[backdrop-filter]:bg-background/15">
      <div className="mx-auto px-4 max-w-3xl">
        <nav className="flex items-center justify-center gap-1 h-12">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="px-6 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 hover:scale-105"
            >
              {category}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubHeader;
