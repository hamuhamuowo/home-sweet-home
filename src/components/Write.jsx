import React from "react";

const Write = () => {
  return (
    <div className="flex justify-center">
      <div className="w-7xl pr-[100px] pl-[100px]">
        <form action="" className="flex flex-col gap-2.5">
          <input
            className="h-[60px] p-3.5 outline-none border-1 border-solid font-bold"
            type="text"
            placeholder="title"
          />
          <textarea
            className="h-[800px] p-3.5 outline-none border-1 border-solid resize-none font-bold"
            placeholder="Write ..."
          ></textarea>
          <div className="flex gap-1.5 justify-center mt-4">
            <button className="pl-3 pr-3 pt-1 pb-1 bg-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-white hover:border-1 hover:border-solid">
              취소
            </button>
            <button
              className="pl-3 pr-3 pt-1 pb-1 bg-gray-300 rounded-lg font-semibold cursor-pointer hover:bg-white hover:border-1 hover:border-solid"
              type="submit"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Write;
