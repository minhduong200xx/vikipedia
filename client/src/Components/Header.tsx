import React from "react";
import More from "../assets/icons/More";
import logo from "../assets/img/wikipedia.jpg";
import Point from "../assets/icons/point";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="h-16">
      <div className="flex items-center mx-6 justify-between my-1">
        <div className="flex items-center cursor-pointer ">
          <div className="mr-2 hover:bg-slate-100 rounded-md h-11 w-11 flex items-center justify-center">
            <More />
          </div>
          <div className="flex cursor-pointer">
            <img className="h-12 w-12 mr-2.5" src={logo} alt="#Anh" />
            <div className="flex flex-col items-center">
              <Link to="/">
                <p className="font-semibold text-lg">WIKIPEDIA</p>
                <p className="text-sm">Bách khoa toàn thư mở</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center cursor-pointer justify-between w-4/5">
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center">
            <div className="mx-5 hover:opacity-50">
              <Link to="/register">
                <p>Tạo tài khoản</p>
              </Link>
            </div>
            <div className="mr-5 hover:opacity-50">
              <Link to="/login">
                <p>Đăng nhập</p>
              </Link>
            </div>
            <div className="hover:bg-slate-100 rounded-md h-11 w-11 flex items-center justify-center">
              <Point />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
