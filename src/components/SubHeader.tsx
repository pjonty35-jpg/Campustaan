import campustaanBg from "@/assets/campustaan-background.jpg";

const SubHeader = () => {
  const categories = ['Announcement', 'Buzz', 'Talent', 'Shop', 'Find me', 'Account'];
  
  const colors = [
    'from-pink-200/20 to-purple-200/20 border-pink-300/30 hover:from-pink-200/30 hover:to-purple-200/30 hover:border-pink-300/50 active:from-pink-300/40 active:to-purple-300/40',
    'from-blue-200/20 to-cyan-200/20 border-blue-300/30 hover:from-blue-200/30 hover:to-cyan-200/30 hover:border-blue-300/50 active:from-blue-300/40 active:to-cyan-300/40',
    'from-orange-200/20 to-red-200/20 border-orange-300/30 hover:from-orange-200/30 hover:to-red-200/30 hover:border-orange-300/50 active:from-orange-300/40 active:to-red-300/40',
    'from-green-200/20 to-emerald-200/20 border-green-300/30 hover:from-green-200/30 hover:to-emerald-200/30 hover:border-green-300/50 active:from-green-300/40 active:to-emerald-300/40',
    'from-violet-200/20 to-fuchsia-200/20 border-violet-300/30 hover:from-violet-200/30 hover:to-fuchsia-200/30 hover:border-violet-300/50 active:from-violet-300/40 active:to-fuchsia-300/40',
    'from-amber-200/20 to-yellow-200/20 border-amber-300/30 hover:from-amber-200/30 hover:to-yellow-200/30 hover:border-amber-300/50 active:from-amber-300/40 active:to-yellow-300/40',
  ];

  return (
    <div 
      className="relative border-b border-white/20 backdrop-blur-xl bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
    >
      <div className="mx-auto px-4 max-w-4xl">
        <nav className="flex items-center justify-center gap-4 h-16 py-2 flex-wrap">
          {categories.map((category, index) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className={`group relative px-5 py-2.5 text-sm font-bold text-white rounded-2xl transition-all duration-300 
                hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] 
                border-2 backdrop-blur-md bg-white/10
                active:scale-95 active:shadow-[0_0_25px_rgba(255,255,255,0.4)] active:bg-white/20
                shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_4px_16px_0_rgba(0,0,0,0.2)]
                bg-gradient-to-br ${colors[index % colors.length]}`}
            >
              <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{category}</span>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50" />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubHeader;
