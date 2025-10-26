import React from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'

export default function Partner() {
    return (
        <div>
            <div className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-slate-100 to-blue-50">
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '60px 60px'
                        }}
                    />
                    

                    {/* UAE Architecture */}
                    <div className="absolute right-0 top-0 w-1/2 h-full opacity-4 hidden md:block">
                        <div className="absolute bottom-0 right-20 w-24 h-full bg-gradient-to-t from-amber-600 to-transparent" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute bottom-0 right-52 w-16 h-4/5 bg-gradient-to-t from-amber-500 to-transparent" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute bottom-0 right-80 w-28 h-3/4 bg-gradient-to-t from-amber-700 to-transparent" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                    </div>

                    {/* UK Architecture */}
                    <div className="absolute left-0 top-0 w-1/2 h-full opacity-4 hidden md:block">
                        <div className="absolute bottom-0 left-24 w-32 h-2/3 bg-gradient-to-t from-slate-700 to-transparent"></div>
                        <div className="absolute bottom-0 left-64 w-20 h-4/5 bg-gradient-to-t from-slate-600 to-transparent"></div>
                        <div className="absolute bottom-0 left-96 w-28 h-3/5 bg-gradient-to-t from-slate-800 to-transparent"></div>
                    </div>
                </div>

                <div className="relative z-10  min-h-screen px-4 sm:px-6 md:px-12 py-6">
                    <Navbar/>

                    <div className='text-3xl bg-white p-4 rounded-2xl text-center'>
                        Our Partner Will Be Listed Soon
                    </div>

                    
                </div>
                <div className='relative bg-slate-900 text-white'>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
