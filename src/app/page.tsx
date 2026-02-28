"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Contact Info */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-white h-12 flex items-center border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap justify-start items-center gap-x-6">
            <span className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2423 Grant Street, Omaha, NE 68111
            </span>
            <span className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              402-451-5755
            </span>
            <a href="mailto:rongaspard@cox.net" className="flex items-center text-gray-700 hover:text-[#8A6F2D] transition-colors">
              <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              rongaspard@cox.net
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8A6F2D] hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8A6F2D] hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#8A6F2D] hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-12 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image 
                src="/New-logo.jpeg" 
                alt="St. Benedict the Moor Church Logo" 
                width={28} 
                height={28} 
                className="object-contain h-7 w-auto"
              />
              <span className="text-[#8A6F2D] font-semibold text-base">
                St. Benedict the Moor
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">About</button>
              <button onClick={() => scrollToSection("mass-times")} className="text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Mass Times</button>
              <button onClick={() => scrollToSection("ministries")} className="text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Ministries</button>
              <Link href="/calendar" className="text-gray-700 hover:text-[#8A6F2D] px-3 py-2 text-sm font-medium transition-colors">
                Calendar
              </Link>
            </div>
            <button className="md:hidden text-[#8A6F2D] p-2" onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("home")} className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium w-full text-left">Home</button>
            <button onClick={() => scrollToSection("about")} className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium w-full text-left">About</button>
            <button onClick={() => scrollToSection("mass-times")} className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium w-full text-left">Mass Times</button>
            <button onClick={() => scrollToSection("ministries")} className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium w-full text-left">Ministries</button>
            <Link href="/calendar" className="block bg-[#1E8E3E] text-white px-5 py-2 rounded-full text-sm font-medium text-center">Calendar</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 top-20">
          <Image 
            src="/hero-bg.png" 
            alt="St. Benedict the Moor Church" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full mb-6 border border-white/30">
            <Image 
              src="/New-logo.jpeg" 
              alt="Logo" 
              width={24} 
              height={24} 
              className="object-contain h-6 w-auto"
            />
            <span className="text-white font-medium text-xs tracking-wider">WELCOME TO OUR PARISH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight font-[family-name:var(--font-source-serif)]">
            We Are a Vibrant &<br /><span className="text-[#C9A227]">Diverse</span> Community
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Everyone has a home at St. Benedict the Moor. Come join us and experience the love of Christ together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button onClick={() => scrollToSection("mass-times")} className="bg-[#8A6F2D] hover:bg-[#7a5f28] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl">
              Join Us for Mass
            </button>
            <Link href="/calendar" className="border-2 border-white text-white hover:bg-white hover:text-[#1E8E3E] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all text-center">
              View Calendar
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8A6F2D] font-semibold text-sm tracking-wider">WHO WE ARE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6 font-[family-name:var(--font-source-serif)]">
              Welcome to St. Benedict the Moor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We, the people of St. Benedict the Moor, believing in God, and guided by the Holy Spirit, 
              dedicate ourselves to forming a vibrant Christian community by: celebrating the presence of 
              Jesus, serving the needs of the people, affirming the gifts of each person, and sharing 
              lives and prayer, in love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl text-gray-800 mb-2 font-[family-name:var(--font-source-serif)]">Our Heritage</h3>
              <p className="text-gray-600">Serving the Omaha community for over 50 years with faith and dedication.</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl text-gray-800 mb-2 font-[family-name:var(--font-source-serif)]">All Are Welcome</h3>
              <p className="text-gray-600">Everyone has a home at St. Benedict the Moor. Come as you are.</p>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center">
              <h3 className="text-xl text-gray-800 mb-2 font-[family-name:var(--font-source-serif)]">Join Our Community</h3>
              <p className="text-gray-600">Experience the love of Christ together in our vibrant parish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Times Section */}
      <section id="mass-times" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#8A6F2D] font-semibold text-sm tracking-wider">JOIN US IN WORSHIP</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2 font-[family-name:var(--font-source-serif)]">
              Mass Schedule
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Tuesday</h3>
              <p className="text-2xl font-semibold text-[#1E8E3E] mt-1">8:00 AM</p>
              <p className="text-gray-500 text-sm mt-1">Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Wednesday</h3>
              <p className="text-2xl font-semibold text-[#1E8E3E] mt-1">8:00 AM</p>
              <p className="text-gray-500 text-sm mt-1">Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Thursday</h3>
              <p className="text-2xl font-semibold text-[#1E8E3E] mt-1">8:30 AM</p>
              <p className="text-gray-500 text-sm mt-1">School Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Friday</h3>
              <p className="text-2xl font-semibold text-[#1E8E3E] mt-1">8:00 AM</p>
              <p className="text-gray-500 text-sm mt-1">Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Saturday</h3>
              <p className="text-2xl font-semibold text-[#C9A227] mt-1">5:00 PM</p>
              <p className="text-gray-500 text-sm mt-1">Vigil Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Sunday</h3>
              <p className="text-2xl font-semibold text-[#C9A227] mt-1">8:30 AM</p>
              <p className="text-gray-500 text-sm mt-1">Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Sunday</h3>
              <p className="text-2xl font-semibold text-[#C9A227] mt-1">10:45 AM</p>
              <p className="text-gray-500 text-sm mt-1">Mass</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border-[#1E8E3E] border-2 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-700">Monday</h3>
              <p className="text-gray-500 mt-1">No Mass</p>
              <p className="text-gray-400 text-sm mt-1">Office: 9am-5pm</p>
            </div>
          </div>

          <div className="mt-10 bg-[#C9A227]/10 rounded-xl p-4 text-center max-w-lg mx-auto border border-[#C9A227]/20">
            <p className="text-gray-700 text-sm">
              <span className="font-medium text-[#C9A227]">Confessions:</span> Available 30 minutes before weekend Masses
            </p>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/calendar" className="inline-block bg-[#1E8E3E] hover:bg-[#8A6F2D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-md">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section id="ministries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#8A6F2D] font-semibold text-sm tracking-wider">GET INVOLVED</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E8E3E] mt-2 font-[family-name:var(--font-source-serif)]">
              Our Ministries
            </h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Find your place to serve and grow in faith with our various parish ministries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Family Ministry</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Supporting families through all stages of life with resources, events, and community.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Music Ministry</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Praise God through music with our choir and liturgical musicians.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Social Justice</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Serving the poor and marginalized in our community through various outreach programs.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Youth Ministry</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Building faith and community among our young people through events and education.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Religious Education</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Faith formation for all ages through classes, sacramental preparation, and more.</p>
            </div>

            <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-[#1E8E3E]">
              <div className="w-14 h-14 bg-[#1E8E3E]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors">
                <svg className="w-7 h-7 text-[#1E8E3E] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-[family-name:var(--font-source-serif)]">Prayer Ministry</h3>
              <div className="w-12 h-0.5 bg-[#C9A227] mb-3"></div>
              <p className="text-gray-600">Lifting up our community in prayer through prayer groups and intercessory prayer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E8E3E] via-[#237a42] to-[#1E8E3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-source-serif)]">
            Stay Connected
          </h2>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-6"></div>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to stay updated with parish news, events, and spiritual resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-4">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9A227] bg-white/95 backdrop-blur-sm" />
            <button className="bg-[#C9A227] hover:bg-[#b8911f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all hover:shadow-lg">
              Subscribe
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4">Join 500+ parish members staying connected</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/New-logo.jpeg" 
                  alt="St. Benedict the Moor Church Logo" 
                  width={50} 
                  height={50} 
                  className="object-contain h-12 w-auto"
                />
                <span className="text-xl font-semibold">St. Benedict the Moor</span>
              </div>
              <p className="text-gray-400 mb-4">
                A vibrant and diverse Catholic community welcoming everyone to experience the love of Christ.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1E8E3E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1E8E3E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1E8E3E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection("mass-times")} className="hover:text-white transition-colors">Mass Times</button></li>
                <li><Link href="/calendar" className="hover:text-white transition-colors">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://archomaha.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Archdiocese</a></li>
                <li><a href="https://www.catholicvoiceomaha.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Catholic Voice</a></li>
                <li><a href="https://www.vaticannews.va/en.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vatican News</a></li>
                <li><a href="http://www.usccb.org/bible/books-of-the-bible/index.cfm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bible</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
