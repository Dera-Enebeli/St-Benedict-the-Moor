import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
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
            Welcome to Our Parish
          </h1>
          <p className="text-xl text-white/90">
            A message from our Pastor
          </p>
        </div>
      </section>

      {/* Welcome Letter Content */}
      <section className="py-20 section-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              [Welcome letter content to be provided]
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We look forward to welcoming you to our parish family.
            </p>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-800 font-semibold text-lg">Rev. David Korth</p>
              <p className="text-gray-600">Pastor, St. Benedict the Moor Catholic Church</p>
            </div>
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
