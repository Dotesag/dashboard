import ChartActivity from "./chart-activity/chart-activity";

export default function HoursActivity() {
  return (
    <div className="hours-activity-container bg-white rounded-2xl p-4 grow">
      <h2 className="hours-activity-title text-xl font-bold text-gray-900 mb-4">
        Активность по часам
      </h2>
      <div>
        <div className="flex justify-between px-4 ">
          <p className="font-semibold text-[#555555] flex items-center">
            <span className="pr-3 text-green-500 font-bold text-xl">+3%</span>
            больше, чем на прошлой неделе
          </p>
          <div className="p-2 border-[#d5d5d5] border-2 rounded-full text-[#555555] font-semibold">
            <select>
              <option>Неделя</option>
            </select>
          </div>
        </div>
      </div>
      <ChartActivity />
    </div>
  );
}
