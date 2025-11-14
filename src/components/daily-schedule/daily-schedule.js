const SCHEDULE_ITEMS = [
  {
    id: 1,
    title: "Система дизайна",
    type: "Лекция - Занятие",
    icon: "./flower-svgrepo-com.svg",
    bgColor: "bg-orange-200",
  },
  {
    id: 2,
    title: "Типографика",
    type: "Групповой тест",
    icon: "./lamp-svgrepo-com.svg",
    bgColor: "bg-purple-300",
  },
  {
    id: 3,
    title: "Цветовая палитра",
    type: "Групповой тест",
    icon: "./paint-svgrepo-com (1).svg",
    bgColor: "bg-green-200",
  },
  {
    id: 4,
    title: "UI/UX Дизайн",
    type: "Лекция - Тест",
    icon: "./ссс.svg",
    bgColor: "bg-orange-100",
  },
];

export default function DailySchedule() {
  return (
    <div className="daily-schedule-container w-80 h-100 bg-white rounded-2xl p-4">
      <div className="daily-schedule-title font-bold text-gray-900 mb-4 text-xl">
        Расписание на день
      </div>

      <div className="daily-schedule-list flex flex-col gap-3">
        {SCHEDULE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="daily-schedule-item flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-[#eaeaea]"
          >
            <div
              className={`schedule-item-icon w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <img src={item.icon} alt="course icon" className="w-6 h-6 object-contain" />
            </div>

            <div className="schedule-item-content flex-1">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.type}</p>
            </div>

            <img
              src="arrow-next-svgrepo-com.svg"
              alt="arrow"
              className="schedule-item-arrow h-5 w-5 flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

