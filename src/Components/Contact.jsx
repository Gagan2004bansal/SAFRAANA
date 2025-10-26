import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Package, Building2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        partnerName: '',
        partnerPhone: '',
        partnerEmail: '',
        partnerProduct: '',
        productDescription: '',
        partnerType: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                partnerName: '',
                partnerPhone: '',
                partnerEmail: '',
                partnerProduct: '',
                productDescription: '',
                partnerType: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-amber-50 via-slate-100 to-blue-50 py-16 md:py-24">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}
                />
                
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-12">
                    <div className="inline-block bg-white px-6 py-2 md:px-8 md:py-3 rounded-full shadow-lg mb-6 md:mb-8 border-2 border-slate-200">
                        <span className="text-xs md:text-base tracking-widest text-slate-600 font-medium" style={{ fontFamily: 'Georgia, serif' }}>PARTNERSHIP INQUIRY</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        <span className="block text-slate-900">BECOME A</span>
                        <span className="block text-amber-600 mt-2 md:mt-4">SAFRAANA PARTNER</span>
                    </h1>
                    
                    <p className="text-base sm:text-xl md:text-2xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                        Join our network of trusted manufacturers and brands exporting premium Indian products to UAE and UK markets
                    </p>
                </div>
            </div>

            {/* Contact Information Bar */}
            <div className="bg-slate-900 text-white py-8 md:py-12">
                <div className="max-w-6xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
                        <div className="flex flex-col items-center gap-3">
                            <Phone className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                            <div>
                                <p className="text-xs md:text-sm text-slate-400 mb-1" style={{ fontFamily: 'Georgia, serif' }}>CALL US</p>
                                <p className="text-sm md:text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>+91 99968-92070</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Mail className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                            <div>
                                <p className="text-xs md:text-sm text-slate-400 mb-1" style={{ fontFamily: 'Georgia, serif' }}>EMAIL US</p>
                                <p className="text-sm md:text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>infosafraanaexport@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                            <div>
                                <p className="text-xs md:text-sm text-slate-400 mb-1" style={{ fontFamily: 'Georgia, serif' }}>LOCATION</p>
                                <p className="text-sm md:text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>Chandigarh, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto px-4 md:px-12 py-12 md:py-24">
                {submitted ? (
                    <div className="bg-white p-8 md:p-16 border-4 border-amber-600 shadow-2xl text-center">
                        <div className="w-20 h-20 md:w-32 md:h-32 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                            <CheckCircle className="w-12 h-12 md:w-20 md:h-20 text-white" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                            Thank You!
                        </h2>
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                            Your partnership inquiry has been received. Our team will contact you within 24-48 hours to discuss export opportunities.
                        </p>
                    </div>
                ) : (
                    <div className="bg-white border-2 border-slate-200 shadow-xl">
                        <div className="bg-slate-900 text-white p-6 md:p-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Partnership Application Form
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-slate-300" style={{ fontFamily: 'Georgia, serif' }}>
                                Fill in your details below and we'll get back to you with export solutions
                            </p>
                        </div>

                        <div className="p-6 md:p-12 space-y-6 md:space-y-8">
                            {/* Partner Name */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Partner Name *
                                </label>
                                <input
                                    type="text"
                                    name="partnerName"
                                    value={formData.partnerName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name or company name"
                                    className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 focus:border-amber-600 focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            {/* Partner Phone */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Partner Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="partnerPhone"
                                    value={formData.partnerPhone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 focus:border-amber-600 focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            {/* Partner Email */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Partner Email *
                                </label>
                                <input
                                    type="email"
                                    name="partnerEmail"
                                    value={formData.partnerEmail}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@company.com"
                                    className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 focus:border-amber-600 focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            {/* Partner Type */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Partner Type *
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    <div 
                                        onClick={() => handleChange({ target: { name: 'partnerType', value: 'manufacturer' }})}
                                        className={`flex items-center gap-4 p-4 md:p-6 border-2 cursor-pointer transition-all ${
                                            formData.partnerType === 'manufacturer' 
                                            ? 'border-amber-600 bg-amber-50' 
                                            : 'border-slate-300 hover:border-slate-400'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${
                                            formData.partnerType === 'manufacturer' ? 'border-amber-600' : 'border-slate-400'
                                        }`}>
                                            {formData.partnerType === 'manufacturer' && (
                                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-600"></div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Package className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                                            <div>
                                                <div className="text-base md:text-lg font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                                    Manufacturer
                                                </div>
                                                <div className="text-xs md:text-sm text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                                    I produce the goods
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div 
                                        onClick={() => handleChange({ target: { name: 'partnerType', value: 'brand' }})}
                                        className={`flex items-center gap-4 p-4 md:p-6 border-2 cursor-pointer transition-all ${
                                            formData.partnerType === 'brand' 
                                            ? 'border-amber-600 bg-amber-50' 
                                            : 'border-slate-300 hover:border-slate-400'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${
                                            formData.partnerType === 'brand' ? 'border-amber-600' : 'border-slate-400'
                                        }`}>
                                            {formData.partnerType === 'brand' && (
                                                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-amber-600"></div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Building2 className="w-6 h-6 md:w-8 md:h-8 text-slate-700" />
                                            <div>
                                                <div className="text-base md:text-lg font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                                    Brand Company
                                                </div>
                                                <div className="text-xs md:text-sm text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                                    I have a brand
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Partner Product */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Partner Product *
                                </label>
                                <input
                                    type="text"
                                    name="partnerProduct"
                                    value={formData.partnerProduct}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Basmati Rice, Spices, Dry Fruits, Textiles"
                                    className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 focus:border-amber-600 focus:outline-none transition-colors"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                                <p className="text-xs md:text-sm text-slate-500 mt-2" style={{ fontFamily: 'Georgia, serif' }}>
                                    Please specify the main product category you want to export
                                </p>
                            </div>

                            {/* Product Description */}
                            <div>
                                <label className="block text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    Product Description *
                                </label>
                                <textarea
                                    name="productDescription"
                                    value={formData.productDescription}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    placeholder="Describe your product in detail: quality, varieties, certifications, production capacity, target markets, etc."
                                    className="w-full px-4 md:px-6 py-3 md:py-4 text-base md:text-lg border-2 border-slate-300 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 md:pt-6">
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-slate-900 text-white px-8 py-4 md:py-5 text-base md:text-xl font-bold tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 md:gap-4"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    <span>SUBMIT PARTNERSHIP INQUIRY</span>
                                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <p className="text-xs md:text-sm text-slate-500 text-center mt-4" style={{ fontFamily: 'Georgia, serif' }}>
                                    By submitting, you agree to our terms and conditions for partnership
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Info */}
                <div className="mt-12 md:mt-16 bg-amber-50 border-2 border-amber-200 p-6 md:p-12">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                        What Happens Next?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-6 md:mt-8">
                        <div className="text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-auto mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                01
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                Initial Review
                            </h4>
                            <p className="text-sm md:text-base text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                We review your application within 24-48 hours
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-auto mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                02
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                Consultation Call
                            </h4>
                            <p className="text-sm md:text-base text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                Our team schedules a detailed discussion
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mx-auto mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                03
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                Partnership Setup
                            </h4>
                            <p className="text-sm md:text-base text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                We begin the export certification process
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-900 text-white py-8 md:py-12">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                        SAFRAANA
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                        Global Export | Safe • Trusted • Certified
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500" style={{ fontFamily: 'Georgia, serif' }}>
                        © 2025 Safraana Global Export. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;