import React from 'react'
import Pen from '../assets/icons/Pen'
import Contents from '../assets/icons/Contents'
import Users from '../assets/icons/users'
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
    function onChange() {
      }
  return (

    <div className='mx-6 mt-8'>
        <div>
            <p className='font-semibold text-3xl mb-2'>Tạo tài khoản</p>
            <hr className='' />
            <p className='my-3 text-sm px-1'>Ngôn ngữ: <span className='cursor-pointer'>
            Deutsch | English | Esperanto | Français | Español | Italiano | Nederlands | Tiếng Việt
            </span> </p>
            <hr />
            <div className=' w-3/5 h-[600px] border my-4 flex'>
                <div className='bg-gray-400 w-1/2'>
                    <div className='mx-4 my-8'>
                        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight mb-12">
                            Tạo tài khoản <span class="text-white">Wikipedia</span>
                        </h3>
                        <p className='mb-12 text-lg'>Wikipedia là một bách khoa toàn thư mở trực tuyến đa ngôn ngữ được sáng lập và duy trì bởi một cộng đồng biên tập viên tình nguyện.</p>
                        {/* <p className='font-semibold text-base'>Wikipedia được tạo lên bởi những người như bạn</p> */}
                        <div className='flex items-center mb-3'>
                            <div><Pen/></div>
                            <div className='ml-6 text-lg'>
                                <span>70.722.918</span>
                                <p>Lần sửa đổi</p>
                            </div>                           
                        </div>
                        <div className='flex items-center mb-3'>
                            <div><Contents/></div>
                            <div className='ml-6 text-lg'>
                                <span>1.288.245</span>
                                <p>Bài viết</p>
                            </div>                           
                        </div>
                        <div className='flex items-center'>
                            <div><Users/></div>
                            <div className='ml-6 text-lg'>
                                <span>1.883</span>
                                <p>Người đóng góp gần đây</p>
                            </div>                           
                        </div>
                    </div>
                </div>
                <form className='w-1/2 my-8 mx-6' action="">
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='mb-2 text-lg'>Tên đăng nhập</label>
                            <input required type="text" className=' block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' placeholder='Nhập tên đăng nhập' />
                        </div>
                        <div className='flex w-full mt-6'>
                            <div className=' flex flex-col w-1/2 mr-6'>
                                <label className='mb-2' htmlFor="">Mật khẩu</label>
                                <input required className='block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' type="password"  placeholder='Nhập mật khẩu' />
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <label className='mb-2' htmlFor="">Nhập lại mật khẩu</label>
                                <input required className='block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' type="password" name="" id="" placeholder='Nhập lại mật khẩu' />
                            </div>
                        </div>
                        <div className='my-6'>
                            <label htmlFor="">Email</label>
                            <input required placeholder='Nhập vào Email' className='mt-2 block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-lg' type="text" />
                        </div>
                        <ReCAPTCHA 
                            className=''
                            sitekey="6LdVipMoAAAAAKI2EvA4ks0wZsmOa5rkeba3XlI8"
                            onChange={onChange}
                        />
                        <button type='submit' className='bg-sky-500 mt-12 h-12 rounded-lg text-white'>
                            Tạo tài khoản
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <hr className='my-6' />
    </div>
  )
}

export default Signup