import Image from "next/image";
import Link from "next/link";

export default function Apostolic() {
  const priorities = [
    {
      number: 1,
      title: "Discipleship",
      description: "Growing in faith through daily prayer, Scripture study, and participation in parish life.",
    },
    {
      number: 2,
      title: "Evangelization",
      description: "Sharing the Good News of Jesus Christ with our community and beyond.",
    },
    {
      number: 3,
      title: "Service",
      description: "Responding to the needs of our neighbors through charitable works and community outreach.",
    },
    {
      number: 4,
      title: "Worship",
      description: "Gathering together for Mass and liturgical celebrations that nourish our spiritual life.",
    },
    {
      number: 5,
      title: "Fellowship",
      description: "Building authentic relationships within our parish family and the wider community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as homepage */}
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

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" style={{ marginTop: '4rem' }}>
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
            Apostolic Priorities
          </h1>
          <p className="text-xl text-white/90">
            Our commitment to living the Gospel
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 section-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              At St. Benedict the Moor, we are committed to following the call of Christ 
              to make disciples of all nations. Our Apostolic Priorities guide our mission 
              and ministry in the community.
            </p>
          </div>

          <div className="space-y-6">
            {priorities.map((priority) => (
              <div 
                key={priority.number} 
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#8A6F2D] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {priority.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-[family-name:var(--font-source-serif)]">
                    {priority.title}
                  </h3>
                  <p className="text-gray-600">{priority.description}</p>
                </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
