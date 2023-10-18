import React from 'react'
import More from '../assets/icons/More'
import logo from '../assets/img/wikipedia.jpg'
import Search from '../assets/icons/Search'
import Point from '../assets/icons/point'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className='h-16'>
            <div className='flex items-center mx-6 justify-between my-1'>
              <div className='flex items-center cursor-pointer '>
                <div className='mr-2 hover:bg-slate-100 rounded-md h-11 w-11 flex items-center justify-center'>
                  <More/>
                </div>
                <div className='flex cursor-pointer'>
                  <img className='h-12 w-12 mr-2.5' src={logo} alt="#Anh" />
                  <div className='flex flex-col items-center'>
                    <Link to= '/'>
                    <p className='font-semibold text-lg'>WIKIPEDIA</p>
                    <p className='text-sm'>Bách khoa toàn thư mở</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex items-center cursor-pointer justify-between w-4/5'>
                <div>
                  <form className='w-[450px] relative' action="">
                    <div className='relative'>
                      <input type="search" className='w-full p-4 h-10 rounded-full border placeholder:text-sm' placeholder='Tìm kiếm trên Wikipedia'/>
                      <button className='absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200'>
                        <Search/>
                      </button>
                    </div>
                  </form>
                </div>
                <div className='flex items-center'>
                  <div className='mx-5 hover:opacity-50'>
                  <Link to = '/Signup'>
                    <p>Tạo tài khoản</p>
                    </Link>
                  </div>
                  <div className='mr-5 hover:opacity-50'>
                    <Link to = '/Login'>
                    <p>Đăng nhập</p>
                    </Link>
                  </div>
                  <div className='hover:bg-slate-100 rounded-md h-11 w-11 flex items-center justify-center'>
                    <Point/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }
    

