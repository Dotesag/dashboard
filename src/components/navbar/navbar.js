export default function Navbar() {
  const buttons = [
    { name: "Dashboard", ico: "./dashboard/dashboard.svg" },
    { name: "My cources", ico: "" },
    { name: "My classes", ico: "" },
    { name: "Messages", ico: "" },
    { name: "Notifications", ico: "" },
    { name: "Calendars", ico: "" },
    { name: "Community", ico: "" },
    { name: "Settings", ico: "" },
  ];

  return (
    <div className="w-70 bg-[#1f1e30] flex flex-col p-5 m-5 rounded-3xl text-[#f7f7f5]">
        <p className=" text-2xl text-center pb-7">Eduplex</p>
        <div>
          {buttons.map((button) => (
            <a className="p-3 m-2 flex gap-2 rounded-full hover:bg-[#d8f274] hover:text-[#1f1e30] group duration-500" key={button.name}>
              <img src={button.ico} className="w-6 group-hover:invert duration-500"/>
              <p>{button.name}</p>
            </a>
          ))}
        </div>
    </div>
  );
}
