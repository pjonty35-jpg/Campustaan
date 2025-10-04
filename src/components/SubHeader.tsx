const SubHeader = () => {
  const categories = ['Announcement', 'Buzz', 'Talent', 'Shop', 'Account'];

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center space-x-8 h-14">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
