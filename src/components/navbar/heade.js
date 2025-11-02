import React from "react";

export default function Header(){
  return (
    <>
      <header className="header flex items-center justify-between">
        <div className='text-3xl font-bold'>
          Welcome back Taylor👋
        </div>
        <div className="flex-grow mx-4">
          <input
            type="text"
            className="search-input border-2 border-black rounded-2xl w-72 ml-190"
            placeholder="🌏Введите текст"
          />
        </div>
        <div className="absolute top-2 right-4">
          <img
            src="https://i.pinimg.com/736x/32/96/51/329651bbe6f3d0155307f884be562753.jpg"
            alt="avatar"
            className="inline-block object-cover object-center rounded-full w-12 h-12"
          />
        </div>
      </header>

      <div className="grib">
        <div className="c_header">
          <div className="new text-2xl font-bold text-gray-800 whitespace-nowrap pl-18 " >New corses</div>
          <a href="https://www.youtube.com/watch?v=4DCc1h_92U8" className="c_header__side whitespace-nowrap -translate-x-20 underline decoration-1 decoration-gray-400 underline-offset-2">View All</a>
        </div>

{/* начало первого блока */}
       <div className="block_ib_osnova grid -translate-y-10">
  <div className="w-60 h-auto block bg-slate-50 rounded-2xl p-4">
    <div className="flex flex-col h-full gap-4">
      {/* вверх с иконкой и текстом */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img src="./pp.svg" alt="course icon" className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-900">Content Writing</h3>
          <p className="text-sm text-gray-600">12 Lessons</p>
        </div>
      </div>
      
      {/* низ футер*/}
      <div className="flex justify-between items-center mt-auto pt-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-600 mb-1">Rate</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">☆</span>
            <span className="text-sm font-semibold">4.8</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-600 mb-1">Type</span>
          <span className="text-sm">Data Research</span>
        </div>
      </div>
    </div>
  </div>
  {/* конец первого блока */}
          
           {/* начало второго блока */}
          <div className="w-60 h-35 block aspect-square bg-slate-50 rounded-2xl p-4">
            <div className="grid grid-rows-2 gap-2 h-full">
              <div className="flex flex-col h-full gap-4">
                {/* вверх с иконкой и текстом блока 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                     <img src="./message-square-chat-svgrepo-com.svg" alt="course icon" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900">Usabiliry testing</h3>
                    <p className="text-sm text-gray-600">15 Lessons</p>
                  </div>
                </div>

                {/*низ футер*/}
                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">☆</span>
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Type</span>
                    <span className="text-sm">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

           {/* начало третьего блока */}
          <div className="w-60 h-35 block aspect-square bg-slate-50 rounded-2xl p-4">
            <div className="grid grid-rows-2 gap-2 h-full">
               <div className="flex flex-col h-full gap-4">
                {/* вверх с иконкой и текстом блока 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                     <img src="./camera-svgrepo-com.svg" alt="course icon" className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900">Photography</h3>
                    <p className="text-sm text-gray-600">8 Lessons</p>
                  </div>
                </div>

                {/*низ футер*/}
                <div className="flex justify-between items-center mt-auto pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Rate</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">☆</span>
                      <span className="text-sm font-semibold">4.6</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 mb-1">Type</span>
                    <span className="text-sm">Art and Disign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="main_block w-80 h-100 bg-slate-50 translate-x-165  rounded-2xl">
          <div className="font-bold text-gray-900 p-2 text-xl "> Dally Schedule</div>

          {/*сами колонны*/}
          <div className="flex flex-col gap-3 mt-2">
            {/*1 формочка*/}
            <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-3 cursor-pointer hover:bg-blue-50">
              {/*иконка*/}
              <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center"> <img src="./flower-svgrepo-com.svg" alt="course icon" className="w-8 h-8" /> </div>

              {/*ТЕКСТ*/}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Design System</h3>
              <p className="text-sm text-gray-900">Lecture - Class</p>
            </div>

            {/*КНОПКА*/}
            <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
            </div>
            {/*2 формочка*/}
            <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-3 cursor-pointer hover:bg-blue-50">
              {/*иконка*/}
              <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center"> <img src="./lamp-svgrepo-com.svg" alt="course icon" className="w-8 h-8" /> </div>

              {/*ТЕКСТ*/}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Typography</h3>
              <p className="text-sm text-gray-900">Group-Test</p>
            </div>

            {/*КНОПКА*/}
            <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
            </div>

            {/*3 формочка*/}
            <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-3 cursor-pointer hover:bg-blue-50">
              {/*иконка*/}
              <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center"> <img src="./paint-svgrepo-com (1).svg" alt="course icon" className="w-8 h-8" /> </div>

              {/*ТЕКСТ*/}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Color Style</h3>
              <p className="text-sm text-gray-900">Group-Test</p>
            </div>

            {/*КНОПКА*/}
            <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
            </div>

            {/*4 формочка*/}
            <div className="flex items-center gap-3 bg-slate-50 rounded-2xl p-3 cursor-pointer hover:bg-blue-50">
              {/*иконка*/}
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"> <img src="./ссс.svg" alt="course icon" className="w-8 h-8" /> </div>

              {/*ТЕКСТ*/}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Visual disign</h3>
              <p className="text-sm text-gray-900">Lecture - Test</p>
            </div>

            {/*КНОПКА*/}
            <img src="arrow-next-svgrepo-com.svg" className="h-5 w-5"></img>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}