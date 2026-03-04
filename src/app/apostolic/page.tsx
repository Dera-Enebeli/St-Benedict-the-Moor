"use client";

import Image from "next/image";
import Link from "next/link";

export default function Apostolic() {
  const priorities = [
    {
      number: "I",
      title: "Celebrate",
      description:
        "Recognize and celebrate each parish in its unique identities and charisms. Support one another in strengthening these communities and their gifts.",
    },
    {
      number: "II",
      title: "Acknowledge",
      description:
        "Continue forming our Historic 24th Street Family by acknowledging our shared history and present (including failures and successes) to foster understanding and reconciliation.",
    },
    {
      number: "III",
      title: "Build",
      description:
        "Weave the social fabric across our Family of Parishes by building intentional relationships, collaboration, and community.",
    },
    {
      number: "IV",
      title: "Discern",
      description:
        "Commit to ongoing individual and communal discernment to cultivate our Christian mission within the larger community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/New-logo.jpeg"
                alt="Church Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Link
                href="/"
                className="text-[#8A6F2D] font-semibold text-sm sm:text-base hover:text-[#9F7F3D]"
              >
                St. Benedict the Moor
              </Link>
            </div>

            <Link
              href="/"
              className="text-gray-700 hover:text-[#8A6F2D] text-xs sm:text-sm font-medium"
            >
              ← Back
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden mt-14 sm:mt-16">
        <div className="absolute inset-0">
          <Image
            src="/new-church-hero.png"
            alt="Church"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 font-serif leading-tight">
            Apostolic Priorities
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90">
            The Historic 24th Street Family of Parishes
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-12 sm:py-20 bg-[#F9F6EF]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4 sm:space-y-6">
            {priorities.map((priority) => (
              <div
                key={priority.number}
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-md flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-lg transition duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 bg-[#8A6F2D] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                  {priority.number}
                </div>

                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 font-serif">
                    {priority.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {priority.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/"
              className="inline-block bg-[#8A6F2D] hover:bg-[#9F7F3D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} St. Benedict the Moor Catholic
            Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}