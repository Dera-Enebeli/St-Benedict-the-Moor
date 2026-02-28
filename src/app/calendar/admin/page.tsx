"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const ADMIN_PASSWORD = "stbenedict";

function getInitialEvents(): CalendarEvent[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem("church-events");
  return stored ? JSON.parse(stored) : [];
}

export default function AdminPage() {
  const router = useRouter();
  const [events, setEvents] = useState<CalendarEvent[]>(getInitialEvents);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", time: "", location: "", description: "" });
  const [error, setError] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    router.push("/calendar");
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
    <div className="min-h-screen bg-gray-50">
      {/* Unified Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'} border-b border-gray-100`}>
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
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="gold-icon">
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
              <Link href="/calendar" className="nav-link text-gray-700 hover:text-[#8A6F2D] transition-colors text-sm font-medium">Calendar</Link>
              <Link href="/calendar/admin" className="nav-link text-[#8A6F2D] hover:text-[#8A6F2D] transition-colors text-sm font-medium">Admin</Link>
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
        
        <div 
          className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium py-2">Home</Link>
            <Link href="/calendar" className="block text-gray-700 hover:text-[#8A6F2D] text-base font-medium py-2">Calendar</Link>
            <Link href="/calendar/admin" className="block text-[#8A6F2D] text-base font-medium py-2">Admin</Link>
          </div>
        </div>
      </nav>

      {/* Admin Hero */}
      <div className="bg-gradient-to-r from-[#8A6F2D] to-[#9F7F3D] pt-28 pb-12 relative overflow-hidden" style={{ marginTop: '5rem' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-source-serif)]">
            Event Manager
          </h1>
          <p className="text-white/90">
            Add and manage calendar events for the parish.
          </p>
        </div>
      </div>

      {/* Login or Admin Content */}
      {showLogin ? (
        <div className="py-20 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full">
            <div className="w-16 h-16 bg-[#8A6F2D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 font-[family-name:var(--font-source-serif)] text-center">
              Admin Login
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">Enter password to manage events</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:ring-2 focus:ring-[#8A6F2D] focus:border-transparent transition-all"
              placeholder="Password"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-4 py-3 rounded-lg font-semibold transition-all"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <Link href="/calendar" className="text-sm text-gray-500 hover:text-[#8A6F2D]">
                ← Back to public calendar
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Admin Controls */}
          <div className="bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="bg-[#8A6F2D] text-white px-3 py-1 rounded-full text-sm font-medium">Admin Mode</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/calendar" className="text-gray-500 hover:text-[#8A6F2D] text-sm">
                  View Public Calendar
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-500 text-sm transition-colors"
                >
                  Logout
                </button>
                <button
                  onClick={() => setShowEventForm(!showEventForm)}
                  className="bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
                >
                  {showEventForm ? "Cancel" : "+ Add Event"}
                </button>
              </div>
            </div>
          </div>

          {/* Event Form */}
          {showEventForm && (
            <div className="bg-white py-8 shadow-lg">
              <div className="max-w-xl mx-auto px-4">
                <h3 className="text-xl font-bold text-gray-800 mb-6 font-[family-name:var(--font-source-serif)]">
                  Add New Event
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Event Title *</label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A6F2D] focus:border-transparent transition-all"
                      placeholder="e.g., Families of Faith & Confirmation Class"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date *</label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A6F2D] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Time</label>
                      <input
                        type="text"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A6F2D] focus:border-transparent transition-all"
                        placeholder="e.g., 9:40 AM"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8A6F2D] focus:border-transparent transition-all"
                      placeholder="e.g., Parish Hall"
                    />
                  </div>
                  <button
                    onClick={handleAddEvent}
                    className="w-full bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-4 py-3 rounded-lg font-semibold transition-all"
                  >
                    Save Event
                  </button>
                </div>
              </div>
            </div>
          )}

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
                  <p className="text-gray-600 text-lg font-medium">No events yet.</p>
                  <p className="text-gray-400 mt-2">Click "Add Event" to create your first event.</p>
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

                    return (
                      <div key={date}>
                        {firstEventOfMonth && (
                          <h2 className="text-2xl font-bold text-[#8A6F2D] mb-4 font-[family-name:var(--font-source-serif)]">
                            {monthName} {year}
                          </h2>
                        )}
                        
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                          <div className="bg-gray-50 px-5 py-3 border-b border-gray-100">
                            <span className="text-xs font-medium text-[#8A6F2D] uppercase tracking-wider">{shortDate}</span>
                            <span className="text-gray-400 mx-2">•</span>
                            <span className="text-sm font-medium text-gray-700">{dayName}</span>
                          </div>
                          <ul className="divide-y divide-gray-50">
                            {dayEvents.map((event) => (
                              <li key={event.id} className="px-5 py-4 flex items-start group hover:bg-gray-50 transition-colors">
                                <div className="w-1.5 h-1.5 bg-[#8A6F2D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                  <div>
                                    <span className="font-medium text-gray-800">{event.title}</span>
                                    {event.time && <span className="text-[#8A6F2D] font-medium ml-2">{event.time}</span>}
                                    {event.location && <span className="text-gray-500 ml-2">— {event.location}</span>}
                                  </div>
                                  <button
                                    onClick={() => handleDeleteEvent(event.id)}
                                    className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
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
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
