const NEW_COURSES = [
  {
    id: 1,
    title: "Копирайтинг",
    lessons: "12 уроков",
    rate: "4.8",
    type: "Исследование данных",
    icon: "./pp.svg",
    bgColor: "bg-orange-200",
  },
  {
    id: 2,
    title: "Тестирование",
    lessons: "15 уроков",
    rate: "5.0",
    type: "UI/UX Дизайн",
    icon: "./message-square-chat-svgrepo-com.svg",
    bgColor: "bg-green-200",
  },
  {
    id: 3,
    title: "Фотография",
    lessons: "8 уроков",
    rate: "4.6",
    type: "Искусство и дизайн",
    icon: "./camera-svgrepo-com.svg",
    bgColor: "bg-purple-300",
  },
];

export default function NewCourses() {
  return (
    <div className="new-courses-container">
      <div className="new-courses-header flex justify-between mb-5">
        <div className="new-courses-title text-xl font-bold text-gray-800 whitespace-nowrap">
          Новые курсы
        </div>
        <a
          href="https://www.youtube.com/watch?v=4DCc1h_92U8"
          className="new-courses-view-all whitespace-nowrap -translate-x-20 text-sm underline decoration-1 decoration-gray-400 underline-offset-2 hover:text-gray-600"
        >
          Смотреть все
        </a>
      </div>

      <div className="new-courses-list flex gap-5">
        {NEW_COURSES.map((course) => (
          <div
            key={course.id}
            className="new-course-card w-70 h-35 block aspect-square bg-white rounded-2xl p-4"
          >
            <div className="new-course-card-content grid grid-rows-2 gap-2 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`course-icon-wrapper w-12 h-12 ${course.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <img
                      src={course.icon}
                      alt="course icon"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600">{course.lessons}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Рейтинг</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">☆</span>
                      <span className="text-sm font-semibold">{course.rate}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Тип</span>
                    <span className="text-sm">{course.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

