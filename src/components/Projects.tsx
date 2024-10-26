
function Projects() {
  return (
    <div className="h-screen w-screen relative grid-cols-2 sm:grid-cols-4 grid place-items-center py-16 ">
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 h-40 w-10 relative sm:scale-100 scale-[60%]">
          <div
            className="mix-blend-multiply bg-gray-100 h-24 rounded-br-full rounded-tr-full scale-110  absolute aspect-square"></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 h-24 w-10 relative sm:scale-100 scale-[60%]">
          <div className="mix-blend-multiply bg-gray-100  w-20 h-10 rounded-t-full left-1/2 absolute "></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 h-24 aspect-square relative rounded-full sm:scale-100 scale-[60%]">
        </div>
      </div>
      <div className="h-full w-full flex flex-col gap-6  items-center justify-center">
        <div className="bg-gray-100 h-40 w-10 relative sm:scale-100 scale-[60%]">
          <div
            className="scale-110 mix-blend-multiply bg-gray-100 right-0  w-24 h-12 rounded-b-full bottom-0  absolute "></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-24 aspect-square grid grid-rows-3 gap-2">
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 h-24 aspect-square relative rounded-l-full sm:scale-100 scale-[60%]"></div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="bg-gray-100 h-40 w-10 relative sm:scale-100 scale-[60%]">
          <div className="mix-blend-multiply bg-gray-100 w-24 h-10 -left-1/2 top-1/4 absolute aspect-square"></div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-28 aspect-square relative sm:scale-100 scale-[60%] -rotate-45">
          <div className="bg-gray-100 h-14 w-28 rounded-t-full absolute top-0 left-1/3 "></div>
          <div className="bg-gray-100 h-14 w-28 rounded-b-full absolute -bottom-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;