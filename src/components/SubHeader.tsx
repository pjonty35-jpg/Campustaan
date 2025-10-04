import campustaanBg from "@/assets/campustaan-background.jpg";

const SubHeader = () => {
  const categories = ['Announcement', 'Buzz', 'Talent', 'Shop', 'Find me', 'Account'];
  
  const colors = [
    'from-pink-500/60 to-purple-500/60 border-pink-400/40 hover:border-pink-400/70 active:from-pink-600/80 active:to-purple-600/80',
    'from-blue-500/60 to-cyan-500/60 border-blue-400/40 hover:border-blue-400/70 active:from-blue-600/80 active:to-cyan-600/80',
    'from-orange-500/60 to-red-500/60 border-orange-400/40 hover:border-orange-400/70 active:from-orange-600/80 active:to-red-600/80',
    'from-green-500/60 to-emerald-500/60 border-green-400/40 hover:border-green-400/70 active:from-green-600/80 active:to-emerald-600/80',
    'from-violet-500/60 to-fuchsia-500/60 border-violet-400/40 hover:border-violet-400/70 active:from-violet-600/80 active:to-fuchsia-600/80',
    'from-amber-500/60 to-yellow-500/60 border-amber-400/40 hover:border-amber-400/70 active:from-amber-600/80 active:to-yellow-600/80',
  ];

  return (
    <div 
      className="relative border-b border-white/10 backdrop-blur-md shadow-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${campustaanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="mx-auto px-4 max-w-4xl">
        <nav className="flex items-center justify-center gap-4 h-16 py-2 flex-wrap">
          {categories.map((category, index) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className={`group relative px-5 py-2.5 text-sm font-bold text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl border-2 backdrop-blur-sm
                active:scale-95 active:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:animate-pulse
                bg-gradient-to-br ${colors[index % colors.length]}`}
            >
              <span className="relative z-10 drop-shadow-lg">{category}</span>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubHeader;
