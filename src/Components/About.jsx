import React, { useState } from "react";
import {
  Award,
  Globe,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Quote,
  Mail,
  Linkedin,
  MapPin,
  MessageSquare,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import Gagan from "../assets/mine.jpeg";

const About = () => {
  const [activeSection, setActiveSection] = useState("vision");

  const milestones = [
    {
      year: "2024",
      title: "Conceived Safraana Idea",
      description:
        "Identified the gap in certified Indian exports during final year of college",
    },
    {
      year: "2024",
      title: "Research & Planning Phase",
      description:
        "Studied export regulations, market demand, and built business plan",
    },
    {
      year: "2025",
      title: "Launched Safraana Global Export",
      description:
        "Started the company with focus on quality, certification, and traceability",
    },
    {
      year: "2025",
      title: "Building Partnership Network",
      description:
        "Establishing relationships with manufacturers and retailers in UAE & UK",
    },
  ];

  const strengths = [
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Fresh Perspective",
      desc: "Young entrepreneur bringing innovative ideas and modern approaches to traditional export business",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Focus",
      desc: "Deep commitment to certifications, testing, and maintaining highest standards",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Tech-Savvy Approach",
      desc: "Implementing QR traceability and digital solutions for modern export management",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Growth Mindset",
      desc: "Learning daily, adapting quickly, and building sustainable business from ground up",
    },
  ];

  const stats = [
    { value: "2025", label: "Founded" },
    { value: "UAE & UK", label: "Target Markets" },
    { value: "8+", label: "Product Categories" },
    { value: "100%", label: "Certified Quality" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-slate-50 flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-black border-4 border-slate-900 shadow-2xl flex items-center justify-center rounded-2xl">
              <img src={Gagan} alt="Gagan" />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-8 py-3 shadow-xl text-center rounded-lg">
              <div
                className="text-sm tracking-widest mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                FOUNDER & ENTREPRENEUR
              </div>
              <div
                className="text-xs"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Building India's Export Future
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-amber-100 px-6 py-2 rounded-full shadow mb-6 border border-amber-200">
              <span
                className="text-sm sm:text-base tracking-widest text-slate-700 font-medium"
                style={{ fontFamily: "Georgia, serif" }}
              >
                FOUNDER & CEO
              </span>
            </div>

            <h1
              className="text-3xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight text-slate-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Gagan Bansal
            </h1>

            <p
              className="text-2xl sm:text-3xl text-amber-600 font-bold mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Founder & Chief Executive Officer
            </p>

            <p
              className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A young entrepreneur with a vision to elevate Indian products on
              the global stage through quality, authenticity, and complete
              traceability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 border border-slate-200 text-center rounded-lg shadow-md"
                >
                  <div
                    className="text-xl sm:text-2xl font-bold text-amber-600 mb-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm text-slate-600"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 text-lg font-bold tracking-wider hover:bg-amber-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 rounded-lg">
                <Mail className="w-5 h-5" />
                CONTACT
              </button>
              <button className="bg-white text-slate-900 px-8 py-4 text-lg font-bold tracking-wider border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-3 rounded-lg">
                <Linkedin className="w-5 h-5" />
                LINKEDIN
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-slate-900 text-white py-20 sm:py-32 text-center relative overflow-hidden">
        <Quote className="absolute top-10 left-10 text-amber-600 opacity-20 w-24 h-24" />
        <Quote className="absolute bottom-10 right-10 text-amber-600 opacity-20 rotate-180 w-24 h-24" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 sm:px-12"
        >
          <p
            className="text-3xl sm:text-5xl font-bold leading-relaxed mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "Age is just a number when you have passion, dedication, and a
            vision to make India proud on the global stage."
          </p>
          <p
            className="text-lg sm:text-2xl text-amber-500 font-bold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            — Gagan, Founder & CEO, Safraana Export
          </p>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <div className="sticky top-0 bg-white border-b border-slate-200 shadow-sm z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 py-4 px-4 sm:px-8">
          {[
            { id: "vision", label: "VISION & MISSION" },
            { id: "strengths", label: "STRENGTHS" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-4 sm:px-8 py-3 text-sm sm:text-lg font-bold tracking-wider rounded-md transition-all duration-300 ${activeSection === tab.id
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-32 transition-all duration-300">
        {/* --- Import your existing content sections here as-is (vision, journey, strengths, education) --- */}
        {/* They’ll automatically be responsive thanks to Tailwind grid adjustments */}
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-900 text-white">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 py-20">
          <div className="max-w-5xl mx-auto text-center px-12">
            <h3 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to Export with Excellence?
            </h3>
            <p className="text-2xl text-amber-100 mb-12 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              Partner with SAFRAANA for certified, traceable, and premium quality exports to UAE and UK markets
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-white cursor-pointer text-amber-600 px-12 py-5 text-xl font-bold tracking-wider hover:bg-slate-100 transition-all duration-300 shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                CONTACT US TODAY
              </button>
              <button className="bg-slate-900 cursor-pointer text-white px-12 py-5 text-xl font-bold tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-2xl border-4 border-white" style={{ fontFamily: 'Georgia, serif' }}>
                OUR PARTNER'S
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-16 mb-16">
              {/* Office Address */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-10 h-10 text-amber-600" />
                  <h4 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Office Address</h4>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Safraana Global Export<br />
                  {/* [Your Street Address]<br />
                                    [City, State - PIN Code]<br /> */}
                  Chandigarh, India
                </p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Email Us</h4>
                </div>
                <p className="text-xl text-slate-300 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  infosafraanaexport@gmail.com<br />
                  salessafraanaexport@gmail.com<br />
                  {/* support@safraanaexport.com */}
                </p>
                <p className="text-base text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                  We respond within 24 hours
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Call Us</h4>
                </div>
                <p className="text-xl text-slate-300 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  +91 99968-92070<br />
                  +91 99962-50045
                </p>
                <p className="text-base text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                  Mon - Sat: 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-12 border-t-2 border-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    SAFRAANA
                  </h3>
                  <p className="text-lg text-slate-400" style={{ fontFamily: 'Georgia, serif' }}>
                    Global Export | Safe • Trusted • Certified
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-base text-slate-400 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Export Markets</p>
                    <div className="flex items-center gap-4">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23FF0000' d='M0 0h60v10H0z'/%3E%3Cpath fill='%23FFFFFF' d='M0 10h60v10H0z'/%3E%3Cpath fill='%23000000' d='M0 20h60v10H0z'/%3E%3C/svg%3E" alt="UAE" className="w-12 h-8 rounded-sm" />
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath fill='%23012169' d='M0 0h60v30H0z'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0 0l60 30m0-30L0 30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E" alt="UK" className="w-12 h-8 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-base text-slate-500" style={{ fontFamily: 'Georgia, serif' }}>
                  © 2025 Safraana Global Export. All rights reserved. | IEC: 0325067890 | FSSAI: 10025043001234
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;