const MENU_ITEMS = [
  { name: "Панель управления", icon: "./dashboard/dashboard.svg" },
  { name: "Мои курсы", icon: "./dashboard/cources.svg" },
  { name: "Мои занятия", icon: "./dashboard/classes.svg" },
  { name: "Сообщения", icon: "./dashboard/messages.svg" },
  { name: "Уведомления", icon: "./dashboard/notifications.svg" },
  { name: "Календарь", icon: "./dashboard/calendar.svg" },
  { name: "Сообщество", icon: "./dashboard/community.svg" },
  { name: "Настройки", icon: "./dashboard/settings.svg" },
];

export default function Navbar() {
  return (
    <div className="navbar-container w-70 bg-[#1f1e30] flex flex-col p-5 rounded-3xl text-[#f7f7f5]">
      <p className="navbar-brand text-2xl font-bold text-center pb-7">Eduplex</p>
      <div className="navbar-menu">
        {MENU_ITEMS.map((item) => (
          <a
            key={item.name}
            className="navbar-menu-item py-3 px-4 m-2 flex gap-4 items-center rounded-full hover:bg-[#d8f274] hover:text-[#1f1e30] group duration-500"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="navbar-menu-icon w-6 h-6 group-hover:invert duration-500"
            />
            <p className="navbar-menu-text text-base">{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
