"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarEvent } from "./types";
import { defaultEvents } from "./data";

function getInitialEvents(): CalendarEvent[] {
  if (typeof window === 'undefined') return defaultEvents;
  const stored = localStorage.getItem("church-events");
  return stored ? JSON.parse(stored) : defaultEvents;
}

export default function CalendarPage() {
  const [events] = useState<CalendarEvent[]>(getInitialEvents);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDate = (date: string) => {
    setExpandedDates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  const groupEventsByDate = () => {
    const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const grouped: { [key: string]: CalendarEvent[] } = {};
    sorted.forEach((event) => {
      if (!grouped[event.date]) {
        grouped[event.date] = [];
      }
      grouped[event.date].push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByDate();

  return (
    <div className="min-h-screen bg-white">
      {/* Unified Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'} border-b border-gray-100`}>
        {/* Top Row - Contact Info */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-row justify-between items-center text-sm h-12 border-b border-gray-100/50">
            <div className="flex flex-wrap justify-start items-center gap-x-6">
              <span className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="hidden sm:inline">2423 Grant Street, Omaha, NE 68111</span>
                <span className="sm:hidden">Omaha, NE</span>
              </span>
              <span className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                402-451-5755
              </span>
              <a href="mailto:rongaspard@cox.net" className="hidden md:flex items-center text-gray-700 hover:text-[#8A6F2D] transition-colors">
                <svg className="w-4 h-4 mr-1.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                rongaspard@cox.net
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/stbenthemoor" target="_blank" rel="noopener noreferrer" className="gold-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="gold-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="gold-icon">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image 
                src="/New-logo.jpeg" 
                alt="St. Benedict the Moor Church Logo" 
                width={36} 
                height={36} 
                className="object-contain h-9 w-auto"
              />
              <span className="text-[#8A6F2D] font-semibold text-base">
                St. Benedict the Moor
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Home</Link>
              <Link href="/calendar" className="nav-link text-[#8A6F2D] hover:text-[#8A6F2D] transition-colors text-sm font-medium">Calendar</Link>
            </div>
            <button 
              className="md:hidden text-[#8A6F2D] p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium py-2">Home</Link>
            <Link href="/calendar" className="block text-[#8A6F2D] text-base font-medium py-2">Calendar</Link>
          </div>
        </div>
      </nav>

      {/* Calendar Hero */}
      <div className="bg-gradient-to-r from-[#8A6F2D] to-[#6B5A25] pt-28 pb-16 relative overflow-hidden" style={{ marginTop: '5rem' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-source-serif)]">
            Calendar of Events
          </h1>
          <div className="gold-divider mx-auto mb-4"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with our parish community.
          </p>
        </div>
      </div>

      {/* Events List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          {Object.keys(groupedEvents).length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#8A6F2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">No upcoming events scheduled.</p>
              <p className="text-gray-400 mt-2">Check back soon for updates!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedEvents).map(([date, dayEvents]) => {
                const eventDate = new Date(date + "T00:00:00");
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const dayName = eventDate.toLocaleDateString("en-US", { weekday: "long" });
                const monthName = monthNames[eventDate.getMonth()];
                const year = eventDate.getFullYear();
                const shortDate = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                
                const firstEventOfMonth = Object.keys(groupedEvents).indexOf(date) === 0 || 
                  new Date(Object.keys(groupedEvents)[Object.keys(groupedEvents).indexOf(date) - 1] + "T00:00:00").getMonth() !== eventDate.getMonth();
                
                const isExpanded = expandedDates.has(date);
                const hasMultipleEvents = dayEvents.length > 1;
                const visibleEvents = isExpanded ? dayEvents : dayEvents.slice(0, 1);
                const hiddenCount = dayEvents.length - 1;

                return (
                  <div key={date}>
                    {firstEventOfMonth && (
                      <h2 className="text-2xl font-bold text-[#8A6F2D] mb-4 font-[family-name:var(--font-source-serif)]">
                        {monthName} {year}
                      </h2>
                    )}
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      {/* Date Header */}
                      <div className="bg-white px-5 py-4 border-b border-gray-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium text-[#8A6F2D] uppercase tracking-wider">{shortDate}</span>
                            <h3 className="text-lg font-bold text-gray-800">{dayName}</h3>
                          </div>
                          {hasMultipleEvents && (
                            <button
                              onClick={() => toggleDate(date)}
                              className="flex items-center gap-2 text-sm font-medium text-[#8A6F2D] hover:text-[#1E8E3E] transition-colors"
                            >
                              <span>{hiddenCount} more {hiddenCount === 1 ? 'event' : 'events'}</span>
                              <svg 
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Events */}
                      <ul className="divide-y divide-gray-50">
                        {visibleEvents.map((event) => (
                          <li key={event.id} className="px-5 py-4 flex items-start hover:bg-gray-50 transition-colors">
                            <div className="w-1.5 h-1.5 bg-[#8A6F2D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <div className="flex-1">
                              <span className="font-medium text-gray-800">{event.title}</span>
                              {event.time && (
                                <div className="flex items-center gap-2 mt-1">
                                  <svg className="w-3.5 h-3.5 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-sm text-[#8A6F2D] font-medium">{event.time}</span>
                                </div>
                              )}
                              {event.location && (
                                <div className="flex items-center gap-2 mt-1">
                                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  </svg>
                                  <span className="text-sm text-gray-500">{event.location}</span>
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
              <p className="text-gray-400 mb-4 max-w-md text-sm">
                A vibrant and diverse Catholic community welcoming everyone to experience the love of Christ.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                  </svg>
                </a>
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                  </svg>
                </a>
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#8A6F2D]">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/calendar" className="hover:text-white transition-colors">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#8A6F2D]">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://archomaha.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Archdiocese</a></li>
                <li><a href="https://www.catholicvoiceomaha.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Catholic Voice</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
