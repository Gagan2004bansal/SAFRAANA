import React from 'react';
import { Link } from 'react-router-dom';

function Cta() {
    return (
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 py-10 md:py-20">
            <div className="max-w-5xl mx-auto text-center px-4 md:px-12">
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                    Ready to Export with Excellence?
                </h3>
                <p className="text-base sm:text-xl md:text-2xl text-amber-100 mb-6 md:mb-12 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    Partner with SAFRAANA for certified, traceable, and premium quality exports to UAE and UK markets
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                    <Link to="/contact">
                        <button className="bg-white cursor-pointer text-amber-600 px-8 md:px-12 py-3 md:py-5 text-base md:text-xl font-bold tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                            CONTACT US TODAY
                        </button>
                    </Link>
                    <Link to='/partner'>
                        <button className="bg-slate-900 cursor-pointer text-white px-8 md:px-12 py-3 md:py-5 text-base md:text-xl font-bold tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-2xl border-2 md:border-4 border-white" style={{ fontFamily: 'Georgia, serif' }}>
                            OUR PARTNER'S
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cta