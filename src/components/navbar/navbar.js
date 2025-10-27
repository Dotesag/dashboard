export default function Navbar() {
  const buttons = [
    { name: "Dashboard", ico: "./dashboard/dashboard.svg" },
    { name: "My cources", ico: "./dashboard/cources.svg" },
    { name: "My classes", ico: "./dashboard/classes.svg" },
    { name: "Messages", ico: "./dashboard/messages.svg" },
    { name: "Notifications", ico: "./dashboard/notifications.svg" },
    { name: "Calendar", ico: "./dashboard/calendar.svg" },
    { name: "Community", ico: "./dashboard/community.svg" },
    { name: "Settings", ico: "./dashboard/settings.svg" },
  ];

  return (
    <div className="w-70 bg-[#1f1e30] flex flex-col p-5 m-5 rounded-3xl text-[#f7f7f5]">
      <p className="text-2xl text-center pb-7">Eduplex</p>
      <div>
        {buttons.map((button) => (
          <a
            className="py-3 px-4 m-2 flex gap-4 rounded-full hover:bg-[#d8f274] hover:text-[#1f1e30] group duration-500"
            key={button.name}
          >
            <img
              src={button.ico}
              className="w-6 group-hover:invert duration-500"
            />
            <p>{button.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
