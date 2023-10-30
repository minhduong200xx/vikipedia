import React, { useEffect } from "react";
import ArrDown from "../assets/icons/ArrDown";
import Card from "./Card";
import { useState } from "react";
import axios from "axios";
import { cardDesc } from "../types/types";
function Home() {
  const [data, setData] = useState<cardDesc>();
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://en.wikipedia.org/api/rest_v1/feed/featured/2023/10/18",
    headers: {},
  };
  useEffect(() => {
    async function fetchData() {
      axios
        .request(config)
        .then((response) => {
          setData(response.data.tfa);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="h-auto mx-6 flex justify-center mt-8 mb-10">
      <div className="w-[1240px] flex items-center flex-col">
        <div className="flex w-[1240px] justify-between p-3 border-b-2">
          <ul className="flex">
            <div className="flex">
              <li className="">
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Trang chính
                </a>
              </li>
              <li>
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Thảo luận
                </a>
              </li>
            </div>
          </ul>
          <div className="flex">
            <ul className="flex">
              <li>
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Đọc
                </a>
              </li>
              <li>
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Xem mã nguồn
                </a>
              </li>
              <li>
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Xem lịch sử
                </a>
              </li>
              <li>
                <a className="mr-4 hover:bg-slate-100 rounded-lg p-2" href="">
                  Xem lịch sử
                </a>
              </li>
              <li className="flex hover:opacity-50">
                <a href="">Công cụ</a>
                <div className="ml-1">
                  <ArrDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-[1240px] border h-52">
            <div className="border-b-2 flex justify-between p-8  bg-slate-100">
              <div className="p-4">
                <p className="text-2xl text-center mb-4">
                  Wikipedia Tiếng Việt
                </p>
                <p>Bạn chính là tác giả của Wikipedia</p>
              </div>
              <div className="p-4 text-center w-[450px] ">
                <div>
                  <p>
                    <span className="text-sky-400">1.288.236</span> bài viết và{" "}
                    <span className="text-sky-400">928.847</span> thành viên
                  </p>
                </div>
                <div className="flex justify-around mt-2">
                  <a
                    href=""
                    className="font-medium hover:bg-slate-100 p-2 rounded-lg hover:text-sky-600"
                  >
                    Tạo bài
                  </a>
                  <a
                    href=""
                    className="font-medium hover:bg-slate-100 p-2 rounded-lg hover:text-sky-600"
                  >
                    Sửa bài
                  </a>
                  <a
                    href=""
                    className="font-medium hover:bg-slate-100 p-2 rounded-lg hover:text-sky-600"
                  >
                    Tải hình
                  </a>
                  <a
                    href=""
                    className="font-medium hover:bg-slate-100 p-2 rounded-lg hover:text-sky-600"
                  >
                    Quy tắc
                  </a>
                  <a
                    href=""
                    className="font-medium hover:bg-slate-100 p-2 rounded-lg hover:text-sky-600"
                  >
                    Đặt câu hỏi
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="px-12 pt-1 flex justify-between">
                <div className="flex">
                  <p className="font-medium">Bài viết:</p>
                  <div className="flex">
                    <a href="" className="px-2 hover:text-sky-600">
                      Tra cứu
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Bài mới
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Hỏi đáp
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Thỉnh cầu
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Thư viện
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-medium">Trợ giúp:</p>
                  <div className="flex">
                    <a href="" className="px-2 hover:text-sky-600">
                      FAQ
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Giúp đỡ
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Hướng dẫn
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Chỗ thử
                    </a>
                    <a href="" className="px-2 hover:text-sky-600">
                      Guestbook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 w-full flex justify-between">
          <div>{data && <Card title="Bài viết mới" desc={data}></Card>}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
