import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
  const teamMembers = [
    {
      name: "Rev. David Korth",
      role: "Pastor",
      email: "dmkorth@archomaha.org",
    },
    {
      name: "Thierry Mazimpaka",
      role: "Director of Discipleship",
      email: "tmazimapaka@archomaha.org",
    },
    {
      name: "Michella Blankman",
      role: "Families of Faith Director",
      email: "meblankman@archomaha.org",
    },
    {
      name: "Jacques Musavyimana",
      role: "Member",
      email: "jcmusavyimana@archomaha.org",
    },
    {
      name: "Perlie Whitley",
      role: "Member",
      email: "whitley29295@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image 
                  src="/New-logo.jpeg" 
                  alt="St. Benedict the Moor Church Logo" 
                  width={36} 
                  height={36} 
                  className="object-contain h-9 w-auto"
                />
              </div>
              <Link href="/" className="text-[#8A6F2D] font-semibold text-base hover:text-[#9F7F3D]">
                St. Benedict the Moor
              </Link>
            </div>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#8A6F2D] text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" style={{ marginTop: '4rem' }}>
        <div className="absolute inset-0 z-0">
          <Image 
            src="/new-church-hero.png" 
            alt="St. Benedict the Moor Church" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-source-serif)]">
            Leadership Team
          </h1>
          <p className="text-xl text-white/90">
            Serving our parish community
          </p>
        </div>
      </section>

      <section className="py-20 section-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#8A6F2D]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#8A6F2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 font-[family-name:var(--font-source-serif)]">
                    {member.name}
                  </h3>
                  <p className="text-[#8A6F2D] font-medium">{member.role}</p>
                </div>
                <a 
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-[#8A6F2D] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-block bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
