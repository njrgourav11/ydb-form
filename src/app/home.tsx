'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            🌸 You Deserve Better 🌸
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
            Your Story, Your Strength, Your Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join thousands of beautiful souls sharing their PCOS journey. Together we rise, together we heal. 
            Your voice matters in creating awareness and support for women across India.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto mb-8 sm:mb-12 mx-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600">
              🦋 You are not broken. You are not less than. You are beautifully, uniquely you. 🦋
            </p>
          </div>

          <Link href="/form">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-full text-lg sm:text-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              ✨ Share Your Story ✨
            </button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">The Reality We Face Together</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <span className="text-pink-600 text-4xl sm:text-5xl lg:text-6xl font-bold block mb-3 sm:mb-4">1 in 5</span>
              <p className="text-gray-700 font-semibold text-base sm:text-lg">Indian women experiences PCOS/PCOD</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <span className="text-purple-600 text-4xl sm:text-5xl lg:text-6xl font-bold block mb-3 sm:mb-4">70%</span>
              <p className="text-gray-700 font-semibold text-base sm:text-lg">Never receive a proper diagnosis</p>
            </div>
            <div className="bg-gradient-to-br from-rose-100 to-purple-100 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center sm:col-span-2 lg:col-span-1">
              <span className="text-rose-600 text-4xl sm:text-5xl lg:text-6xl font-bold block mb-3 sm:mb-4">22.5%</span>
              <p className="text-gray-700 font-semibold text-base sm:text-lg">Prevalence growing across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Story Matters */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Your Story Matters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💪</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Break the Silence</h4>
              <p className="text-gray-600">Help other women recognize symptoms early and seek proper care</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Improve Healthcare</h4>
              <p className="text-gray-600">Your experiences help identify gaps in PCOS care and treatment</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Build Community</h4>
              <p className="text-gray-600">Connect with sisters who understand your journey</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Drive Research</h4>
              <p className="text-gray-600">Contribute to better understanding of PCOS in Indian women</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Inspire Hope</h4>
              <p className="text-gray-600">Show others they're not alone in this journey</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💝</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Create Change</h4>
              <p className="text-gray-600">Be part of the movement for better PCOS awareness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ready to Share Your Journey?</h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Your story takes just 10-15 minutes to share and could help thousands of women. 
            All responses are confidential and used only for research and awareness.
          </p>
          <Link href="/form">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-full text-lg sm:text-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              🌸 Start Your Story 🌸
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🌸 You Deserve Better 🌸</h4>
          <p className="text-gray-300 mb-3 sm:mb-4">Together We Rise, Together We Heal</p>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            This survey is conducted for research and awareness purposes. 
            All data is kept confidential and secure.
          </p>
        </div>
      </footer>
    </main>
  );
}