import React from "react";
import img1 from "../assets/img/px1.jpg";
import Star from "../assets/icons/Star";
import { cardDesc } from "../types/types";
import parse from "html-react-parser";
function Card({ title, desc }: { title: string; desc: cardDesc }) {
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mb-5 ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={img1}
          alt=""
        />
        <div className="flex flex-col justify-between px-4 leading-normal h-full">
          <div className="flex w-full mb-4">
            <div className="bg-amber-400 p-2">
              <Star />
            </div>
            <p className="bg-amber-100 p-2 w-full cursor-pointer">{title}</p>
          </div>
          <div className="border-b-2">
            <h2>{parse(desc.displaytitle)}</h2>
            <p className=" font-normal text-gray-700 dark:text-gray-400 pb-2">
              {parse(desc.extract_html)}
            </p>
            <button className="bg-amber-300 mb-2 px-4 py-1 text-white rounded-lg">
              Đọc tiếp
            </button>
          </div>
          <div className="mt-2">
            <a href="" className="px-2 hover:text-sky-600 font-medium text-sm">
              Lưu trữ
            </a>
            <a href="" className="px-2 hover:text-sky-600 font-medium text-sm">
              Thêm
            </a>
            <a href="" className="px-2 hover:text-sky-600 font-medium text-sm">
              Ứng cử viên
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
