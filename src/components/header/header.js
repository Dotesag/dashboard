export default function Header() {
  return (
    <header className="header-container flex items-center justify-between text-nowrap w-320 mb-5">
      <div className="header-greeting text-3xl font-bold text-gray-900 flex items-center">
        С возвращением, Тейлор<span className="inline-flex items-center">👋</span>
      </div>
      <div className="header-actions flex gap-5 items-center">
        <input
          type="text"
          className="header-search-input border-1 border-gray-600 rounded-2xl w-70 h-10 pl-3 text-sm"
          placeholder="🔍︎ Поиск курсов"
        />
        <img
          src="/group-svgrepo-com.svg"
          alt="avatar"
          className="header-avatar w-12 h-12 rounded-full object-cover object-center"
        />
      </div>
    </header>
  );
}

