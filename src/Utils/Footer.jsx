import React from 'react';
import { MapPin } from 'lucide-react';


function Footer() {
    return (
        <div className="py-10 md:py-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-16">
                    {/* Office Address */}
                    <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Office Address</h4>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                            Safraana Global Export<br />
                            Chandigarh, India
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Email Us</h4>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                            infosafraanaexport@gmail.com<br />
                            {/* salessafraanaexport@gmail.com<br /> */}
                        </p>
                        <p className="text-sm md:text-base text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                            We respond within 24 hours
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Call Us</h4>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                            +91 99968-92070<br />
                        </p>
                        <p className="text-sm md:text-base text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                            Mon - Fri: 10:00 AM - 05:00 PM IST
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 md:pt-12 border-t-2 border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                SAFRAANA
                            </h3>
                            <p className="text-base sm:text-lg text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                                Global Export | Safe • Trusted • Certified
                            </p>
                        </div>

                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="text-center md:text-right">
                                <p className="text-sm md:text-base text-slate-400 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Export Markets</p>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/960px-Flag_of_the_United_Arab_Emirates.svg.png" alt="UAE" className="w-10 h-6 md:w-12 md:h-8 rounded-sm" />
                                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23012169' d='M0 0h60v30H0z'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK" className="w-10 h-6 md:w-12 md:h-8 rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12 text-center">
                        <p className="text-xs sm:text-sm md:text-base text-slate-500" style={{ fontFamily: 'Georgia, serif' }}>
                            © 2025 Safraana Global Export. All rights reserved.
                            {/* © 2025 Safraana Global Export. All rights reserved. | IEC: 0325067890 | FSSAI: 10025043001234 */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer