export default function DailySchedule() {
  return (
    <div className="main_block w-80 h-100 bg-white rounded-2xl">
      <div className="font-bold text-gray-900 p-2 text-xl ">
        Daily Schedule
      </div>

      {/*сами колонны*/}
      <div className="flex flex-col gap-3 mt-2 px-3">
        {/*1 формочка*/}
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-[#eaeaea]">
          {/*иконка*/}
          <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="./flower-svgrepo-com.svg"
              alt="course icon"
              className="w-8 h-8"
            />{" "}
          </div>

          {/*ТЕКСТ*/}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Design System</h3>
            <p className="text-sm text-gray-900">Lecture - Class</p>
          </div>

          {/*КНОПКА*/}
          <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
        </div>
        {/*2 формочка*/}
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-[#eaeaea]">
          {/*иконка*/}
          <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="./lamp-svgrepo-com.svg"
              alt="course icon"
              className="w-8 h-8"
            />{" "}
          </div>

          {/*ТЕКСТ*/}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Typography</h3>
            <p className="text-sm text-gray-900">Group-Test</p>
          </div>

          {/*КНОПКА*/}
          <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
        </div>

        {/*3 формочка*/}
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-[#eaeaea]">
          {/*иконка*/}
          <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
            {" "}
            <img
              src="./paint-svgrepo-com (1).svg"
              alt="course icon"
              className="w-8 h-8"
            />{" "}
          </div>

          {/*ТЕКСТ*/}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Color Style</h3>
            <p className="text-sm text-gray-900">Group-Test</p>
          </div>

          {/*КНОПКА*/}
          <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
        </div>

        {/*4 формочка*/}
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 cursor-pointer hover:bg-[#eaeaea]">
          {/*иконка*/}
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            {" "}
            <img src="./ссс.svg" alt="course icon" className="w-8 h-8" />{" "}
          </div>

          {/*ТЕКСТ*/}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900">Visual design</h3>
            <p className="text-sm text-gray-900">Lecture - Test</p>
          </div>

          {/*КНОПКА*/}
          <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
        </div>
      </div>
    </div>
  );
}
