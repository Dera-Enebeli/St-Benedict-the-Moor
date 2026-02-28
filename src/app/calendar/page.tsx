"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const ADMIN_PASSWORD = "stbenedict";

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "", location: "", description: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("church-events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
    const adminLoggedIn = localStorage.getItem("church-admin");
    if (adminLoggedIn === "true") {
      setIsAdmin(true);
    }
  }, []);

  const saveEvents = (newEvents: CalendarEvent[]) => {
    setEvents(newEvents);
    localStorage.setItem("church-events", JSON.stringify(newEvents));
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword("");
      localStorage.setItem("church-admin", "true");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("church-admin");
  };

  const handleAddEvent = () => {
    if (!newEvent.date || !newEvent.title) return;

    const event: CalendarEvent = {
      id: Date.now().toString(),
      title: newEvent.title,
      date: newEvent.date,
      time: newEvent.time,
      location: newEvent.location,
      description: newEvent.description,
    };

    saveEvents([...events, event]);
    setNewEvent({ title: "", date: "", time: "", location: "", description: "" });
    setShowEventForm(false);
  };

  const handleDeleteEvent = (id: string) => {
    saveEvents(events.filter((e) => e.id !== id));
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
      {/* Top Bar - Contact Info */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-white h-12 flex items-center border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-1">
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
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
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
              <Link href="/" className="text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Home</Link>
              <Link href="/calendar" className="text-[#8A6F2D] hover:text-[#8A6F2D] transition-colors text-sm font-medium">Calendar</Link>
            </div>
            <button className="md:hidden text-[#8A6F2D] p-2" onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium">Home</Link>
            <Link href="/calendar" className="block text-[#8A6F2D] text-base font-medium">Calendar</Link>
          </div>
        </div>
      </nav>

      {/* Calendar Hero */}
      <div className="bg-gradient-to-r from-[#1E8E3E] to-[#2da852] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 font-[family-name:var(--font-source-serif)]">
            Calendar of Events
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-4"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay connected with our parish community. View upcoming masses, activities, and gatherings.
          </p>
        </div>
      </div>

      {/* Admin Controls */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div>
            {!isAdmin ? (
              <button
                onClick={() => setShowLogin(true)}
                className="text-[#1E8E3E] hover:text-[#8A6F2D] font-semibold transition-colors"
              >
                Login to manage events
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <span className="text-[#1E8E3E] font-semibold">Admin mode</span>
                <button
                  onClick={handleLogout}
                  className="text-[#A0A0A0] hover:text-[#8A6F2D] text-sm transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          {isAdmin && (
            <button
              onClick={() => setShowEventForm(!showEventForm)}
              className="bg-[#8A6F2D] hover:bg-[#7a5f28] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              {showEventForm ? "Cancel" : "+ Add Event"}
            </button>
          )}
        </div>
      </div>

      {/* Event Form */}
      {showEventForm && (
        <div className="bg-gray-50 py-8 border-b border-gray-200">
          <div className="max-w-xl mx-auto px-4">
            <h3 className="text-xl font-bold text-[#1E8E3E] mb-4 font-[family-name:var(--font-source-serif)]">
              Add New Event
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Event Title *</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8E3E] focus:border-transparent"
                  placeholder="e.g., Families of Faith & Confirmation Class"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8E3E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
                  <input
                    type="text"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8E3E] focus:border-transparent"
                    placeholder="e.g., 9:40 AM"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E8E3E] focus:border-transparent"
                  placeholder="e.g., Parish Hall"
                />
              </div>
              <button
                onClick={handleAddEvent}
                className="w-full bg-[#1E8E3E] hover:bg-[#8A6F2D] text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {Object.keys(groupedEvents).length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">No upcoming events scheduled.</p>
              <p className="text-gray-400">Check back soon for updates!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedEvents).map(([date, dayEvents]) => {
                const eventDate = new Date(date + "T00:00:00");
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const dayName = eventDate.toLocaleDateString("en-US", { weekday: "long" });
                const monthName = monthNames[eventDate.getMonth()];
                const year = eventDate.getFullYear();
                const shortDate = eventDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                
                const firstEventOfMonth = Object.keys(groupedEvents).indexOf(date) === 0 || 
                  new Date(Object.keys(groupedEvents)[Object.keys(groupedEvents).indexOf(date) - 1] + "T00:00:00").getMonth() !== eventDate.getMonth();
                
                return (
                  <div key={date}>
                    {firstEventOfMonth && (
                      <h2 className="text-3xl font-bold text-[#1E8E3E] mb-6 font-[family-name:var(--font-source-serif)]">
                        {monthName} {year}
                      </h2>
                    )}
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{dayName}, {shortDate}</h3>
                      <ul className="mt-2 space-y-1">
                        {dayEvents.map((event) => (
                          <li key={event.id} className="flex items-start">
                            <span className="text-[#1E8E3E] mr-2">•</span>
                            <span className="flex-1">
                              <span className="font-medium text-gray-800">{event.title}</span>
                              {event.time && <span className="text-[#8A6F2D]"> — {event.time}</span>}
                              {event.location && <span className="text-gray-600"> — {event.location}</span>}
                            </span>
                            {isAdmin && (
                              <button
                                onClick={() => handleDeleteEvent(event.id)}
                                className="text-red-500 hover:text-red-700 text-sm ml-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            )}
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
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/calendar" className="hover:text-white transition-colors">Calendar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://archomaha.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Archdiocese</a></li>
                <li><a href="https://www.catholicvoiceomaha.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Catholic Voice</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowLogin(false)}>
          <div className="bg-white rounded-xl max-w-sm w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-[#1E8E3E] mb-4 font-[family-name:var(--font-source-serif)] text-center">
              Admin Login
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-[#1E8E3E] focus:border-transparent"
              placeholder="Enter password"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="flex gap-3">
              <button
                onClick={handleLogin}
                className="flex-1 bg-[#1E8E3E] hover:bg-[#8A6F2D] text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowLogin(false);
                  setPassword("");
                  setError("");
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
