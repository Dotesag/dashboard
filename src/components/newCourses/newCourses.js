export default function NewCourses() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="new text-2xl font-bold text-gray-800 whitespace-nowrap  ">
          New courses
        </div>
        <a
          href="https://www.youtube.com/watch?v=4DCc1h_92U8"
          className="c_header__side whitespace-nowrap -translate-x-20 underline decoration-1 decoration-gray-400 underline-offset-2"
        >
          View All
        </a>
      </div>
      {/* начало первого блока */}
      <div className="block_ib_osnova flex gap-5">
        
        <div className="w-70 h-35 block aspect-square bg-white rounded-2xl p-4">
          <div className="grid grid-rows-2 gap-2 h-full">
            <div className="flex flex-col h-full gap-4">
              {/* вверх с иконкой и текстом блока 2 */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-200  rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="./pp.svg"
                    alt="course icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    Content Writing
                  </h3>
                  <p className="text-sm text-gray-600">12 Lessons</p>
                </div>
              </div>
              {/*низ футер*/}
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
        </div>
        {/* конец первого блока */}

        {/* начало второго блока */}
        <div className="w-70 h-35 block aspect-square bg-white rounded-2xl p-4">
          <div className="grid grid-rows-2 gap-2 h-full">
            <div className="flex flex-col h-full gap-4">
              {/* вверх с иконкой и текстом блока 2 */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="./message-square-chat-svgrepo-com.svg"
                    alt="course icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    Usability testing
                  </h3>
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
        <div className="w-70 h-35 block aspect-square bg-white rounded-2xl p-4">
          <div className="grid grid-rows-2 gap-2 h-full">
            <div className="flex flex-col h-full gap-4">
              {/* вверх с иконкой и текстом блока 3 */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="./camera-svgrepo-com.svg"
                    alt="course icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">
                    Photography
                  </h3>
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
                  <span className="text-sm">Art and Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
