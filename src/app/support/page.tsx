import Image from "next/image";
import Link from "next/link";

export default function Support() {
  const projects = [
    { label: "Heating & Air Conditioning", amount: "$26,428.55", color: "bg-[#8A6F2D]" },
    { label: "Elevator Update", amount: "$104,750.00", color: "bg-[#1E8E3E]" },
    { label: "Fire System Upgrade", amount: "$14,528.00", color: "bg-[#C9A227]" },
    { label: "Pella Window Replacement", amount: "$130,305.12", color: "bg-[#8A6F2D]" },
    { label: "Additional Construction Work", amount: "$45,740.00", color: "bg-[#1E8E3E]" },
  ];

  const total = "$321,751.67";

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
            Capital Campaign
          </h1>
          <p className="text-xl text-white/90">
            Projects in Need of Support
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#FDF8F3] to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {projects.map((project, index) => (
              <div key={index} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-5 ${index !== 4 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
                <div className="flex items-center gap-4">
                  <span className={`${project.color} text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                    {index + 1}
                  </span>
                  <span className="text-gray-800 font-medium text-sm sm:text-base">{project.label}</span>
                </div>
                <span className="text-[#8A6F2D] font-bold text-lg sm:text-xl ml-12 sm:ml-0">{project.amount}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Total: <span className="font-bold text-[#8A6F2D] text-xl">{total}</span></p>
            <button className="bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-yellow-600/30">
              Support Our Campaign
            </button>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-[family-name:var(--font-source-serif)]">Ways to Give</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Online Giving</h3>
                <p className="text-gray-600 mb-4">Make a secure donation online through our giving portal.</p>
                <button className="text-[#8A6F2D] hover:text-[#C9A227] font-medium">
                  Donate Now →
                </button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mail a Donation</h3>
                <p className="text-gray-600 mb-4">Send your contribution by mail to the parish office.</p>
                <p className="text-gray-500 text-sm">2423 Grant Street<br />Omaha, NE 68111</p>
              </div>
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} St. Benedict the Moor Catholic Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
