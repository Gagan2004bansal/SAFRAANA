import stamp from "../assets/logo.png";
import QR from "../assets/QR.png";
import Cta from "../Utils/Cta.jsx";
import React, { useState, useEffect } from 'react';
import { Award, Shield, Globe, CheckCircle, FileText, Leaf, Users, Package, Scale, Star, Ship, Clock, Target, Newspaper } from 'lucide-react';
import Footer from "../Utils/Footer.jsx";

const Home = () => {
    const [activeCert, setActiveCert] = useState(null);
    const [activeTab, setActiveTab] = useState('about');
    const [animatedValues, setAnimatedValues] = useState({
        exports: 0,
        buyers: 0,
        quality: 0,
        countries: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValues({
                exports: 250,
                buyers: 45,
                quality: 99.9,
                countries: 2
            });
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const certifications = [
        {
            id: 1,
            name: "APEDA Registration",
            code: "RCMC/2025/SAFRAANA-001",
            issuer: "Agricultural & Processed Food Products Export Development Authority",
            icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Full authorization to export agricultural products including spices, basmati rice, dry fruits, and processed food items to international markets",
            validity: "Valid until December 2026"
        },
        {
            id: 2,
            name: "FSSAI Central Export License",
            code: "10025043001234",
            issuer: "Food Safety and Standards Authority of India",
            icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Central license ensuring all food products meet stringent safety standards, covering manufacturing, packaging, and export operations",
            validity: "Valid until March 2027"
        },
        {
            id: 3,
            name: "Spices Board Registration (CRES)",
            code: "CRES/2025/1234",
            issuer: "Spices Board of India - Ministry of Commerce",
            icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Certificate of Registration as Exporter of Spices with comprehensive quality control and testing protocols for all spice varieties",
            validity: "Permanent Registration"
        },
        {
            id: 4,
            name: "Halal Certification",
            code: "HC-IND-2025-5678",
            issuer: "Halal India - Recognized by UAE & GCC",
            icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Complete Halal compliance certification for UAE and GCC markets, covering sourcing, processing, and packaging standards",
            validity: "Valid until June 2026"
        },
        {
            id: 5,
            name: "IEC - Import Export Code",
            code: "0325067890",
            issuer: "Directorate General of Foreign Trade (DGFT)",
            icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Official government authorization to conduct export-import business operations across all international borders",
            validity: "Permanent Code"
        },
        {
            id: 6,
            name: "Phytosanitary Certificate",
            code: "PQIS/2025/SAFRAANA",
            issuer: "Plant Quarantine & Inspection Services",
            icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
            description: "Plant health certification ensuring all agricultural exports are free from pests, diseases, and meet international quarantine standards",
            validity: "Per Shipment Basis"
        }
    ];

    const productCategories = [
        {
            name: "Premium Indian Spices",
            items: ["Kashmiri Red Chili", "Turmeric Powder", "Cumin Seeds", "Coriander Powder", "Garam Masala", "Black Pepper", "Cardamom", "Cloves"],
            market: "High demand in UAE & UK diaspora communities",
            certification: "Spices Board + FSSAI Certified"
        },
        {
            name: "Basmati Rice Excellence",
            items: ["Aged Basmati (1121)", "Organic Basmati", "Pusa Basmati", "Traditional Basmati", "Brown Basmati"],
            market: "Premium segment in UK supermarkets & UAE retail",
            certification: "APEDA + Phytosanitary Certified"
        },
        {
            name: "Premium Dry Fruits & Nuts",
            items: ["Indian Almonds", "Cashew Kernels (W320)", "Raisins (Golden & Black)", "Pistachios", "Walnuts", "Dried Apricots"],
            market: "Gift packs for UAE festivals & UK retail chains",
            certification: "FSSAI + Lab Tested"
        },
        {
            name: "Specialty Indian Products",
            items: ["Kashmiri Saffron (Kesar)", "Premium Makhana (Fox Nuts)", "Dry Mango Powder", "Tamarind Paste", "Jaggery Powder"],
            market: "Gourmet & specialty stores in both markets",
            certification: "Complete Traceability + QR Coded"
        },
        {
            name: "Ready-to-Cook Range",
            items: ["Biryani Spice Kit", "Curry Masala Mix", "Tandoori Seasoning", "Chai Masala", "Paneer Tikka Mix"],
            market: "Growing demand in UK meal-kit segment",
            certification: "Halal Certified for UAE"
        },
        {
            name: "Indian Ethnic Apparel",
            items: ["Cotton Kurtas", "Silk Sarees", "Ethnic Dupattas", "Traditional Scarves", "Embroidered Garments"],
            market: "South Asian diaspora & mainstream fashion",
            certification: "Fiber Content & Labeling Compliant"
        }
    ];

    const ourStory = {
        vision: "To become the most trusted name in India-to-World exports, setting new standards for quality, authenticity, and transparency in international trade.",
        mission: "Connecting India's finest manufacturers and emerging brands with global markets through rigorous certification, complete traceability, and unwavering commitment to quality.",
        values: [
            "Authenticity in every product we export",
            "Transparency through QR-coded traceability",
            "Quality that exceeds international standards",
            "Partnership with both manufacturers and brands",
            "Cultural bridge between India, UAE, and UK"
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
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

                <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 py-12 md:py-24">
                    <div className="text-center max-w-7xl w-full">
                        <div className="absolute top-4 right-4 md:top-12 md:right-12 w-24 h-24 md:w-48 md:h-48 border-2 md:border-4 border-amber-600 rounded-full flex items-center justify-center bg-white/90 shadow-2xl rotate-12 hover:rotate-0 transition-all duration-500">
                            <div className="text-amber-600 font-bold text-xs md:text-base">
                                <img src={stamp} alt="safraana" className="rounded-full" />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-10">
                            <div className="inline-block bg-white px-4 py-2 md:px-8 md:py-3 rounded-full shadow-lg mb-4 md:mb-8 border-2 border-slate-200">
                                <span className="text-xs md:text-base tracking-widest text-slate-600 font-medium" style={{ fontFamily: 'Georgia, serif' }}>CONNECTING INDIA TO THE WORLD SINCE 2025</span>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-12 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            <span className="block text-slate-900">SAFRAANA</span>
                            <span className="block text-amber-600 mt-2 md:mt-4">GLOBAL EXPORT</span>
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 mb-8 md:mb-16 text-sm sm:text-lg md:text-2xl tracking-widest">
                            <span className="text-slate-700 font-bold" style={{ fontFamily: 'Georgia, serif' }}>SAFE</span>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-600 rounded-full"></div>
                            <span className="text-slate-700 font-bold" style={{ fontFamily: 'Georgia, serif' }}>TRUSTED</span>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-amber-600 rounded-full"></div>
                            <span className="text-slate-700 font-bold" style={{ fontFamily: 'Georgia, serif' }}>CERTIFIED</span>
                        </div>

                        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto mb-8 md:mb-16 leading-relaxed px-4" style={{ fontFamily: 'Georgia, serif' }}>
                            Bringing authentic Indian products to UAE and United Kingdom markets with complete traceability, government certifications, and uncompromising quality standards
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-10 md:mb-20 px-4">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`px-6 sm:px-10 md:px-14 py-3 md:py-5 text-sm md:text-xl hover:border-2 hover:border-amber-600 cursor-pointer tracking-widest transition-all duration-300 ${activeTab === 'about'
                                    ? 'bg-slate-900 text-white shadow-2xl scale-105'
                                    : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-900'
                                    }`}
                                style={{ fontFamily: 'Georgia, serif' }}
                            >
                                ABOUT SAFRAANA
                            </button>
                            <button
                                onClick={() => setActiveTab('certifications')}
                                className={`px-6 sm:px-10 md:px-14 py-3 md:py-5 text-sm md:text-xl cursor-pointer tracking-widest transition-all duration-300 ${activeTab === 'certifications'
                                    ? 'bg-slate-900 text-white shadow-2xl scale-105'
                                    : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-slate-900'
                                    }`}
                                style={{ fontFamily: 'Georgia, serif' }}
                            >
                                CERTIFICATIONS
                            </button>
                        </div>

                        {/* Market Focus */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
                            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white rounded-full shadow-lg border-2 border-slate-200">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/960px-Flag_of_the_United_Arab_Emirates.svg.png" alt="UAE" className="w-8 h-5 md:w-10 md:h-6 rounded-sm" />
                                <span className="text-xs sm:text-sm md:text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>UAE</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white rounded-full shadow-lg border-2 border-slate-200">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23012169' d='M0 0h60v30H0z'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK" className="w-8 h-5 md:w-10 md:h-6 rounded-sm" />
                                <span className="text-xs sm:text-sm md:text-lg font-bold" style={{ fontFamily: 'Georgia, serif' }}>UK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar with Animation */}
            <div className="bg-slate-900 text-white py-10 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-3 gap-4 md:gap-16 text-center">
                        <div>
                            <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-amber-600 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                {Math.round(animatedValues.buyers)}+
                            </div>
                            <div className="text-xs sm:text-sm md:text-xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>ACTIVE BUYERS</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-amber-600 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                {animatedValues.quality.toFixed(1)}%
                            </div>
                            <div className="text-xs sm:text-sm md:text-xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>QUALITY RATE</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-5xl md:text-7xl font-bold text-amber-600 mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                {Math.round(animatedValues.countries)}
                            </div>
                            <div className="text-xs sm:text-sm md:text-xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>COUNTRIES</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-32">
                {activeTab === 'about' && (
                    <div className="space-y-16 md:space-y-40">
                        {/* Our Story */}
                        <div className="relative">
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-8 md:mb-16" style={{ fontFamily: 'Georgia, serif' }}>Our Story</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>Vision</h3>
                                    <p className="text-base sm:text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 md:mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                        {ourStory.vision}
                                    </p>

                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>Mission</h3>
                                    <p className="text-base sm:text-xl md:text-2xl text-slate-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        {ourStory.mission}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>Core Values</h3>
                                    <div className="space-y-4 md:space-y-6">
                                        {ourStory.values.map((value, idx) => (
                                            <div key={idx} className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-6 border-2 border-slate-200 cursor-pointer">
                                                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                                                <p className="text-sm sm:text-base md:text-xl text-slate-700" style={{ fontFamily: 'Georgia, serif' }}>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Models */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-16 border-2 border-amber-200 relative">
                                <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 border-2 md:border-4 border-amber-600 rounded-full flex items-center justify-center bg-white shadow-xl rotate-12">
                                    <div className="text-amber-600 font-bold text-xs"><img src={stamp} alt="safraana" className="rounded-full" /></div>
                                </div>

                                <Package className="w-10 h-10 md:w-16 md:h-16 text-amber-600 mb-4 md:mb-8" />
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                    Private Label Exports
                                </h3>
                                <p className="text-sm sm:text-base md:text-xl text-slate-700 leading-relaxed mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                                    We source premium products directly from India's most trusted manufacturers. Each product is rebranded under the SAFRAANA label with our official stamp and QR code for complete traceability.
                                </p>
                                <ul className="space-y-2 md:space-y-4">
                                    <li className="flex items-start gap-2 md:gap-3">
                                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-slate-700 flex-shrink-0 mt-1" />
                                        <span className="text-sm sm:text-base md:text-lg text-slate-700" style={{ fontFamily: 'Georgia, serif' }}>Marketing & distribution network</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 md:p-16 border-2 border-amber-200 relative">
                                <div className='flex items-center gap-x-3'>
                                    <Newspaper className="w-6 h-6 md:w-8 md:h-8" />
                                    <h3 className='font-bold text-xl md:text-2xl'>Latest Updates</h3>
                                </div>
                            </div>
                        </div>

                        {/* Product Categories - Detailed */}
                        <div>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                                Our Product Portfolio
                            </h2>
                            <p className="text-base sm:text-xl md:text-2xl text-slate-600 text-center mb-10 md:mb-20 max-w-4xl mx-auto px-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Carefully curated products meeting the highest international standards for UAE and UK markets
                            </p>

                            <div className="space-y-6 md:space-y-12">
                                {productCategories.map((category, idx) => (
                                    <div key={idx} className="bg-white cursor-pointer p-6 md:p-12 border-2 border-slate-200 hover:border-amber-600 transition-all duration-300">
                                        <div className="flex flex-col md:flex-row items-start justify-between mb-4 md:mb-8 gap-4">
                                            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                                {category.name}
                                            </h3>
                                            <div className="text-left md:text-right">
                                                <div className="text-xs md:text-sm text-amber-600 font-bold mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {category.certification}
                                                </div>
                                                <div className="text-xs md:text-sm text-slate-500" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {category.market}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
                                            {category.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="bg-slate-50 px-3 py-2 md:px-6 md:py-4 border border-slate-300">
                                                    <div className="text-xs sm:text-sm md:text-lg text-slate-700 font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                                                        {item}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Safraana */}
                        <div className="bg-slate-900 text-white p-8 md:p-20 relative">
                            <div className="absolute -top-8 md:-top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-48 md:h-48 border-2 md:border-4 border-white rounded-full flex items-center justify-center bg-amber-600 shadow-2xl">
                                <div className="text-center">
                                    <div className="text-2xl md:text-5xl mb-1 md:mb-2">⭐</div>
                                    <div className="text-xs md:text-sm font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>PREMIUM</div>
                                    <div className="text-xs md:text-sm text-white" style={{ fontFamily: 'Georgia, serif' }}>QUALITY</div>
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 md:mb-24 text-center mt-12 md:mt-16" style={{ fontFamily: 'Georgia, serif' }}>
                                Why Choose Safraana
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                                <div className="text-center">
                                    <Shield className="w-12 h-12 md:w-20 md:h-20 text-amber-600 mx-auto mb-4 md:mb-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                        Uncompromising Quality
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        All government certifications including FSSAI, APEDA, Spices Board, and Halal compliance for UAE markets handled professionally.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <Globe className="w-12 h-12 md:w-20 md:h-20 text-amber-600 mx-auto mb-4 md:mb-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                        Global Network
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        Established distribution channels in UAE and UK ensure your products reach the right markets efficiently.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <Package className="w-12 h-12 md:w-20 md:h-20 text-amber-600 mx-auto mb-4 md:mb-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                        QR Traceability
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        Every product features a QR code linking to complete certification documents, lab reports, and origin verification.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <Clock className="w-12 h-12 md:w-20 md:h-20 text-amber-600 mx-auto mb-4 md:mb-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                        Timely Delivery
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        Professional logistics management ensures on-time delivery with proper documentation and customs clearance.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <Scale className="w-12 h-12 md:w-20 md:h-20 text-amber-600 mx-auto mb-4 md:mb-8" />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                        Competitive Pricing
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                        Direct manufacturer relationships and efficient operations deliver premium quality at market-leading prices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Process Timeline */}
                        <div>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-10 md:mb-20 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                                Our Export Process
                            </h2>

                            <div className="space-y-6 md:space-y-12">
                                {[
                                    {
                                        step: "01",
                                        title: "Product Sourcing & Audit",
                                        desc: "We identify and audit manufacturers, ensuring they meet our stringent quality standards. Every supplier undergoes capability assessment and product sampling.",
                                        icon: <Target className="w-8 h-8 md:w-12 md:h-12" />
                                    },
                                    {
                                        step: "02",
                                        title: "Quality Testing & Certification",
                                        desc: "Products undergo comprehensive lab testing for pesticides, microbiology, and heavy metals. We secure all required government certifications including FSSAI, APEDA, and Halal.",
                                        icon: <Shield className="w-8 h-8 md:w-12 md:h-12" />
                                    },
                                    {
                                        step: "03",
                                        title: "Branding & Packaging",
                                        desc: "Products are rebranded under SAFRAANA with export-ready packaging, bilingual labels (English/Arabic), and our official stamp with QR code for complete traceability.",
                                        icon: <Package className="w-8 h-8 md:w-12 md:h-12" />
                                    },
                                    {
                                        step: "04",
                                        title: "Documentation & Compliance",
                                        desc: "We handle all export documentation: commercial invoices, certificates of origin, phytosanitary certificates, and destination-specific requirements for UAE and UK.",
                                        icon: <FileText className="w-8 h-8 md:w-12 md:h-12" />
                                    },
                                    {
                                        step: "05",
                                        title: "Logistics & Shipping",
                                        desc: "Professional freight forwarding partners ensure timely delivery. We manage sea and air freight, customs clearance, and delivery to distributors or retail points.",
                                        icon: <Ship className="w-8 h-8 md:w-12 md:h-12" />
                                    },
                                    {
                                        step: "06",
                                        title: "Market Distribution",
                                        desc: "Products reach end consumers through our network of wholesalers, ethnic grocery stores, supermarkets, and online marketplaces in UAE and UK markets.",
                                        icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />
                                    }
                                ].map((process, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row items-start gap-6 md:gap-12 bg-white p-6 md:p-12 border-2 border-slate-200 cursor-pointer">
                                        <div className="flex-shrink-0">
                                            <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-amber-600" style={{ fontFamily: 'Georgia, serif' }}>
                                                {process.step}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 md:gap-6 mb-3 md:mb-6">
                                                <div className="text-slate-700">
                                                    {process.icon}
                                                </div>
                                                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {process.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm sm:text-base md:text-2xl text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                                {process.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'certifications' && (
                    <div className="space-y-16 md:space-y-32">
                        <div className="text-center mb-12 md:mb-24">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                                Government Certifications
                            </h2>
                            <p className="text-base sm:text-xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Every export backed by complete regulatory compliance and international quality standards
                            </p>
                        </div>

                        {/* Certification Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                            {certifications.map((cert) => (
                                <div
                                    key={cert.id}
                                    onClick={() => setActiveCert(activeCert === cert.id ? null : cert.id)}
                                    className={`bg-white p-6 md:p-10 border-2 cursor-pointer transition-all duration-300 ${activeCert === cert.id ? 'border-amber-600 shadow-2xl scale-105' : 'border-slate-200 hover:border-slate-400'
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-4 md:mb-8">
                                        <div className="text-slate-700">{cert.icon}</div>
                                        <div className={`text-xs tracking-widest ${activeCert === cert.id ? 'text-amber-600' : 'text-slate-400'}`} style={{ fontFamily: 'Georgia, serif' }}>
                                            {activeCert === cert.id ? 'VERIFIED ✓' : 'CERTIFIED'}
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-500 mb-2 md:mb-4 font-mono tracking-wide">{cert.code}</p>
                                    <p className='font-extralight text-xs md:text-sm'>click me to know more</p>

                                    {activeCert === cert.id && (
                                        <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t-2 border-slate-200 space-y-4 md:space-y-6">
                                            <div>
                                                <p className="text-xs md:text-sm font-bold text-amber-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                                    ISSUED BY:
                                                </p>
                                                <p className="text-sm md:text-base text-slate-700" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs md:text-sm font-bold text-amber-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                                    DESCRIPTION:
                                                </p>
                                                <p className="text-sm md:text-base text-slate-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {cert.description}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs md:text-sm font-bold text-amber-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                                    VALIDITY:
                                                </p>
                                                <p className="text-sm md:text-base text-slate-700" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {cert.validity}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* QR Traceability Section */}
                        <div className="bg-amber-50 border-2 md:border-4 border-amber-200 p-8 md:p-20 relative">
                            <div className="absolute -top-8 md:-top-16 right-4 md:right-20 w-32 h-32 md:w-64 md:h-64 border-4 md:border-8 border-amber-600 rounded-full flex items-center justify-center bg-white shadow-2xl rotate-12">
                                <div className="text-amber-600 font-bold text-xs md:text-base">
                                    <img src={QR} alt="QR" className="rounded-full" />
                                </div>
                            </div>

                            <div className="max-w-3xl">
                                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                                    Complete Product Traceability
                                </h3>
                                <p className="text-base sm:text-xl md:text-3xl text-slate-700 mb-6 md:mb-12 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                    Every SAFRAANA product includes a unique QR code providing instant access to complete product information
                                </p>

                                <div className="space-y-4 md:space-y-6">
                                    {[
                                        { title: 'Government Certification Documents', desc: 'All FSSAI, APEDA, Spices Board, and Halal certificates' },
                                        { title: 'Lab Test Reports', desc: 'Pesticide analysis, microbiology tests, heavy metal screening' },
                                        { title: 'Batch & Manufacturing Details', desc: 'Production date, batch number, facility information' },
                                        { title: 'Origin Verification', desc: 'Complete supply chain from source to export' },
                                        { title: 'Quality Assurance Records', desc: 'Supplier audits, quality control checks, compliance documentation' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 md:gap-6 bg-white p-4 md:p-8 border-2 border-amber-300">
                                            <CheckCircle className="w-6 h-6 md:w-10 md:h-10 text-amber-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="text-base sm:text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm sm:text-base md:text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certification Process Detailed */}
                        <div className="bg-slate-900 text-white p-8 md:p-20">
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10 md:mb-20 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                                Our Certification Journey
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                                {[
                                    { num: "01", title: "Supplier Selection", desc: "Rigorous manufacturer verification and capability assessment", icon: <Users className="w-8 h-8 md:w-12 md:h-12" /> },
                                    { num: "02", title: "Lab Testing", desc: "Comprehensive safety analysis and quality verification", icon: <Shield className="w-8 h-8 md:w-12 md:h-12" /> },
                                    { num: "03", title: "Documentation", desc: "Complete government certification and approval process", icon: <FileText className="w-8 h-8 md:w-12 md:h-12" /> },
                                    { num: "04", title: "Export Ready", desc: "SAFRAANA stamp, QR code, and global market access", icon: <Globe className="w-8 h-8 md:w-12 md:h-12" /> }
                                ].map((step, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="w-20 h-20 md:w-32 md:h-32 bg-amber-600 rounded-full flex items-center justify-center text-white text-3xl md:text-5xl font-bold mx-auto mb-4 md:mb-8 shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                                            {step.num}
                                        </div>
                                        <div className="mb-3 md:mb-6 flex justify-center text-amber-600">
                                            {step.icon}
                                        </div>
                                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                            {step.title}
                                        </h4>
                                        <p className="text-sm sm:text-base md:text-lg text-slate-300" style={{ fontFamily: 'Georgia, serif' }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compliance Standards */}
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 mb-8 md:mb-16 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                                International Compliance Standards
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                                <div className="bg-white p-8 md:p-16 border-2 border-slate-200">
                                    <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/960px-Flag_of_the_United_Arab_Emirates.svg.png" alt="UAE" className="w-12 h-8 md:w-16 md:h-10 rounded" />
                                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                            UAE Requirements
                                        </h4>
                                    </div>
                                    <ul className="space-y-4 md:space-y-6">
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Arabic Labeling</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Bilingual packaging with Arabic translations</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Halal Certification</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Mandatory for food products entering UAE</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>ESMA Standards</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Emirates Authority for Standardization compliance</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-amber-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Shelf Life Declaration</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Production and expiry dates clearly marked</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 md:p-16 border-2 border-slate-200">
                                    <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23012169' d='M0 0h60v30H0z'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK" className="w-12 h-8 md:w-16 md:h-10 rounded" />
                                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                                            UK Requirements
                                        </h4>
                                    </div>
                                    <ul className="space-y-4 md:space-y-6">
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-slate-700 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>FSA Compliance</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Food Standards Agency labeling requirements</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-slate-700 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>UK Importer Details</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>UK-based FBO address on all packages</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-slate-700 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Allergen Declaration</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Clear allergen information and warnings</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 md:gap-4">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-slate-700 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2" style={{ fontFamily: 'Georgia, serif' }}>Metric Labeling</div>
                                                <p className="text-sm sm:text-base md:text-lg text-slate-600" style={{ fontFamily: 'Georgia, serif' }}>Net weight in grams/kilograms as required</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Information */}
            <div className="bg-slate-900 text-white">
                {/* CTA Section */}
                <Cta/>

                {/* Footer */}
                <Footer/>
            </div>
        </div>
    );
};

export default Home;