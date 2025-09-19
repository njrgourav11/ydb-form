// app/Form.js

'use client'; // This directive is necessary for client-side functionality like state management and event handling in Next.js App Router

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (prevData[name] ? [...prevData[name], value] : [value]) : value
    }));

    // Simple progress calculation (you can make this more complex)
    const totalFields = 20; // Example total number of fields
    const filledFields = Object.keys(formData).length;
    setProgress(Math.round((filledFields / totalFields) * 100));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data submitted:', formData);
    alert('Thank you for sharing your story! 💕');
    setIsSubmitting(false);
  };

  const scrollToSection = (sectionNumber) => {
    setCurrentSection(sectionNumber);
    const element = document.getElementById(`section-${sectionNumber}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌸</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              You Deserve Better Survey
            </h1>
          </div>
          <div className="text-sm font-medium text-gray-600">
            {progress}% Complete
          </div>
        </div>
        <div className="w-full bg-gray-200 h-1">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Hero Section */}
        <section className="text-center py-12 mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Story, Your Strength, Your Community</h2>
            <p className="text-lg text-gray-600 mb-6">Together We Rise, Together We Heal ✨</p>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
              <p className="font-bold text-pink-600 text-xl">
                🦋 You are not broken. You are not less than. You are beautifully, uniquely you. 🦋
              </p>
            </div>
          </div>
        </section>



        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-xl shadow-md text-center">
            <span className="text-pink-600 text-3xl font-bold block">1 in 5</span>
            <p className="text-gray-700 text-sm">Indian women have PCOS</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl shadow-md text-center">
            <span className="text-purple-600 text-3xl font-bold block">70%</span>
            <p className="text-gray-700 text-sm">Never get proper diagnosis</p>
          </div>
          <div className="bg-gradient-to-br from-rose-100 to-purple-100 p-4 rounded-xl shadow-md text-center">
            <span className="text-rose-600 text-3xl font-bold block">22.5%</span>
            <p className="text-gray-700 text-sm">Prevalence growing</p>
          </div>
        </section>

        {/* Section Navigation */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
          <div className="flex flex-wrap justify-center gap-2">
            {[1, 2, 3, 4, 5].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentSection === section 
                    ? 'bg-pink-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1 */}
          <div id="section-1" className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-pink-400">
            <h3 className="text-xl font-bold text-pink-600 mb-6 flex items-center gap-2">
              <span className="bg-pink-100 p-2 rounded-full text-sm">🌸</span>
              1. Getting to Know You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Life Stage *</label>
                <input type="text" name="lifeStage" onChange={handleChange} className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all" required placeholder="Early twenties..." />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Location *</label>
                <input type="text" name="homeLocation" onChange={handleChange} className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all" required placeholder="Mumbai, Delhi..." />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">Relationship Status *</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Flying solo & loving it', 'Married & blessed', 'Independent & strong', "I'd rather not share"].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-pink-300 cursor-pointer transition-all">
                    <input type="radio" name="relationshipStatus" value={option} onChange={handleChange} className="mr-3 text-pink-500" required />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Education Journey *</label>
                <input type="text" name="education" onChange={handleChange} className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all" required placeholder="Bachelor's degree..." />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">How do you spend your days? *</label>
                <input type="text" name="dailyActivities" onChange={handleChange} className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all" required placeholder="Working professional..." />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Your family's monthly income range *</label>
              <input type="text" name="incomeRange" onChange={handleChange} className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-1 focus:ring-pink-200 transition-all" required placeholder="₹25,000-50,000..." />
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-600 mb-6 flex items-center gap-2">
              <span className="bg-purple-100 p-2 rounded-full text-sm">🔍💖</span>
              2. Your PCOS Discovery Story
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">Has a doctor officially confirmed PCOS/PCOD for you? *</label>
              <div className="space-y-2">
                {['Yes, diagnosed with PCOS', 'Yes, diagnosed with PCOD', 'Not yet, but I strongly suspect I have it', "I'm here to learn and understand", "I'm confused about PCOS vs PCOD"].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-purple-300 cursor-pointer transition-all">
                    <input type="radio" name="diagnosisStatus" value={option} onChange={handleChange} className="mr-3 text-purple-500" required />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">If diagnosed, when did you receive this news?</label>
              <input type="text" name="diagnosisDate" onChange={handleChange} className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-200 transition-all" placeholder="2 years ago, Last month..." />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">What initially made you seek medical help? (Choose all that feel true)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['My periods became unpredictable', 'Unexpected weight changes', 'Unwanted hair growth', 'Hair thinning or loss', 'Persistent skin issues', 'Challenges with conceiving', 'Emotional ups and downs', 'A loved one suggested I get checked', 'Discovered during routine health check'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-purple-300 cursor-pointer transition-all">
                    <input type="checkbox" name="initialSymptoms" value={option} onChange={handleChange} className="mr-2 text-purple-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How many healthcare providers did you visit before getting clear answers?</label>
              <div className="space-y-2">
                {['Just one - I was fortunate!', '2-3 doctors', '4-5 doctors', 'More than 5 - it\'s been a journey', 'Still searching for the right answers', 'Haven\'t started this journey yet'].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-purple-300 cursor-pointer transition-all">
                    <input type="radio" name="doctorCount" value={option} onChange={handleChange} className="mr-3 text-purple-500" />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-rose-400">
            <h3 className="text-xl font-bold text-rose-600 mb-6 flex items-center gap-2">
              <span className="bg-rose-100 p-2 rounded-full text-sm">🌺✨</span>
              3. How PCOS Shows Up in Your Beautiful Life
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">Which of these experiences resonate with your current journey? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {['My menstrual cycle has its own schedule (more than 35 days apart)', 'My periods take long breaks (3+ months missing)', 'When they come, they\'re intense and painful', 'My body gained weight without explanation', 'Weight loss feels like an uphill battle', 'Unwanted hair growth on face or body', 'My beautiful hair is thinning', 'Stubborn acne, especially around jawline', 'Dark skin patches (neck, underarms, groin area)', 'Emotional roller coaster days', 'Feelings of sadness or anxiety', 'Constant tiredness, low energy', 'Sleep doesn\'t come easily', 'Intense cravings for sweets', 'Brain fog and concentration challenges', 'Struggling with self-confidence'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-rose-300 cursor-pointer transition-all">
                    <input type="checkbox" name="currentExperiences" value={option} onChange={handleChange} className="mr-2 text-rose-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How much do these experiences impact your daily life? *</label>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center mb-2">
                  <span className="mr-4 text-green-600 font-medium">Minimal</span>
                  <input type="range" name="impactLevel" min="1" max="10" step="1" onChange={handleChange} className="flex-1" required />
                  <span className="ml-4 text-red-600 font-medium">Significant</span>
                </div>
                <p className="text-xs text-gray-600 text-center">1 - Life goes on normally, 10 - Affects everything I do</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How has this impacted your professional or academic life? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['I\'ve missed work/college due to symptoms', 'My productivity isn\'t what it used to be', 'I skip social or professional events', 'I\'ve adjusted my career aspirations', 'I\'ve faced bias or discrimination', 'I\'ve needed medical leave', 'No significant impact on my work'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-rose-300 cursor-pointer transition-all">
                    <input type="checkbox" name="professionalImpact" value={option} onChange={handleChange} className="mr-2 text-rose-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How has this affected your relationships and social life? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['My romantic relationships have been affected', 'I avoid dating or new relationships', 'My family doesn\'t fully understand', 'Friends sometimes dismiss my concerns', 'It\'s created challenges in my marriage', 'Fertility worries affect my relationship decisions', 'My relationships remain strong and supportive'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-rose-300 cursor-pointer transition-all">
                    <input type="checkbox" name="relationshipImpact" value={option} onChange={handleChange} className="mr-2 text-rose-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span className="bg-green-100 p-2 rounded-full text-sm">💊🌿</span>
              4. Your Healing & Wellness Journey
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">What approaches have you tried on your healing path? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Birth control pills', 'Metformin for insulin resistance', 'Other hormonal medications', 'Weight management medications', 'Anti-androgen medications', 'Fertility treatments', 'Lifestyle modifications (diet & exercise)', 'Alternative medicine (Ayurveda, homeopathy)', 'Natural supplements (inositol, vitamin D, etc.)', 'Counseling or therapy', 'I haven\'t started any treatment yet'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-green-300 cursor-pointer transition-all">
                    <input type="checkbox" name="healingApproaches" value={option} onChange={handleChange} className="mr-2 text-green-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How satisfied are you with your current treatment approach?</label>
              <div className="space-y-2">
                {['Very satisfied - my symptoms are well managed', 'Somewhat satisfied - I see some improvement', 'Neutral - not much change', 'Somewhat dissatisfied - limited improvement', 'Very dissatisfied - no improvement or worsened', 'I\'m not currently receiving treatment'].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-green-300 cursor-pointer transition-all">
                    <input type="radio" name="treatmentSatisfaction" value={option} onChange={handleChange} className="mr-3 text-green-500" />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">What are your biggest challenges in managing PCOS? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Doctors don\'t seem well-informed about PCOS', 'Treatments are too expensive', 'Medication side effects are troublesome', 'I get conflicting advice from different doctors', 'Lack of understanding from family', 'No time for lifestyle changes', 'Too much conflicting information online', 'Social stigma and embarrassment', 'No clear guidance on diet and exercise', 'The emotional and mental health impact'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-green-300 cursor-pointer transition-all">
                    <input type="checkbox" name="managementChallenges" value={option} onChange={handleChange} className="mr-2 text-green-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">How much do you spend monthly on PCOS management? *</label>
              <input type="text" name="monthlySpend" onChange={handleChange} className="w-full p-3 border border-green-200 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-200 transition-all" required placeholder="₹2,000-5,000..." />
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-l-4 border-indigo-400">
            <h3 className="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
              <span className="bg-indigo-100 p-2 rounded-full text-sm">📅💭</span>
              5. Your Personal Story Timeline
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">When did you first notice something felt different?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['During my teenage years (13-18)', 'Early twenties (19-25)', 'Late twenties (26-30)', 'After turning 30', 'After marriage', 'After having a baby', 'I can\'t pinpoint exactly when'].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-indigo-300 cursor-pointer transition-all">
                    <input type="radio" name="firstNotice" value={option} onChange={handleChange} className="mr-3 text-indigo-500" />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">What do you think might have triggered or worsened your symptoms? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Stress (work or personal life)', 'Significant weight gain', 'Changes in eating habits', 'More sedentary lifestyle', 'Natural hormonal changes (puberty, pregnancy)', 'Certain medications', 'Family history/genetics', 'Environmental factors', 'I honestly don\'t know'].map(option => (
                  <label key={option} className="flex items-center p-2 bg-gray-50 rounded-lg border hover:border-indigo-300 cursor-pointer transition-all">
                    <input type="checkbox" name="symptomTriggers" value={option} onChange={handleChange} className="mr-2 text-indigo-500" />
                    <span className="text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">How has your relationship with food evolved?</label>
              <div className="space-y-2">
                {['Significantly improved - I follow a structured eating plan', 'Somewhat improved - I\'m making healthier choices', 'I\'ve tried many approaches but struggle to maintain them', 'No significant changes in my eating habits'].map(option => (
                  <label key={option} className="flex items-center p-3 bg-gray-50 rounded-lg border hover:border-indigo-300 cursor-pointer transition-all">
                    <input type="radio" name="foodRelationship" value={option} onChange={handleChange} className="mr-3 text-indigo-500" />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>nput type="radio" name="diagnosisStatus" value={option} onChange={handleChange} className="mr-3 text-purple-500" required />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>



          {/* Submit Button */}
          <div className="text-center pt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 flex items-center gap-2 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  ✨ Submit Your Story 💕
                </>
              )}
            </button>
            <p className="mt-3 text-gray-600 text-sm">Your story helps other sisters 🌸</p>
          </div>
        </form>}
          <div id="section-2" className="mb-8 p-8 border-2 border-purple-200 rounded-2xl shadow-lg bg-gradient-to-br from-purple-50/50 to-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center gap-2">
              <span className="bg-purple-100 p-2 rounded-full">🔍💖</span>
              2. Your PCOS Discovery Story
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Has a doctor officially confirmed PCOS/PCOD for you? *</label>
              <div className="space-y-3">
                {['Yes, diagnosed with PCOS', 'Yes, diagnosed with PCOD', 'Not yet, but I strongly suspect I have it', "I'm here to learn and understand", "I'm confused about PCOS vs PCOD"].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-200 cursor-pointer">
                    <input type="radio" name="diagnosisStatus" value={option} onChange={handleChange} className="mr-3 scale-125 text-purple-500" required />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-lg">If diagnosed, when did you receive this news?</label>
              <input type="text" name="diagnosisDate" onChange={handleChange} className="w-full p-4 border-2 border-purple-200 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/80" placeholder="e.g., 2 years ago, Last month, During college..." />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">What initially made you seek medical help? (Choose all that feel true)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['My periods became unpredictable', 'Unexpected weight changes', 'Unwanted hair growth', 'Hair thinning or loss', 'Persistent skin issues', 'Challenges with conceiving', 'Emotional ups and downs', 'A loved one suggested I get checked', 'Discovered during routine health check'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="initialSymptoms" value={option} onChange={handleChange} className="mr-3 scale-125 text-purple-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How many healthcare providers did you visit before getting clear answers?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Just one - I was fortunate!', '2-3 doctors', '4-5 doctors', 'More than 5 - it\'s been a journey', 'Still searching for the right answers', 'Haven\'t started this journey yet'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-200 cursor-pointer">
                    <input type="radio" name="doctorCount" value={option} onChange={handleChange} className="mr-3 scale-125 text-purple-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: How PCOS Shows Up in Your Beautiful Life */}
          <div id="section-3" className="mb-8 p-8 border-2 border-rose-200 rounded-2xl shadow-lg bg-gradient-to-br from-rose-50/50 to-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
              <span className="bg-rose-100 p-2 rounded-full">🌺✨</span>
              3. How PCOS Shows Up in Your Beautiful Life
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">Which of these experiences resonate with your current journey? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                {['My menstrual cycle has its own schedule (more than 35 days apart)', 'My periods take long breaks (3+ months missing)', 'When they come, they\'re intense and painful', 'My body gained weight without explanation', 'Weight loss feels like an uphill battle', 'Unwanted hair growth on face or body', 'My beautiful hair is thinning', 'Stubborn acne, especially around jawline', 'Dark skin patches (neck, underarms, groin area)', 'Emotional roller coaster days', 'Feelings of sadness or anxiety', 'Constant tiredness, low energy', 'Sleep doesn\'t come easily', 'Intense cravings for sweets', 'Brain fog and concentration challenges', 'Struggling with self-confidence'].map(option => (
                  <div key={option} className="bg-white p-3 rounded-xl border-2 border-gray-200 hover:border-rose-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="currentExperiences" value={option} onChange={handleChange} className="mr-3 scale-125 text-rose-500" />
                    <label className="cursor-pointer font-medium text-gray-700 text-sm">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How much do these experiences impact your daily life? *</label>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="flex items-center mb-4">
                  <span className="mr-4 font-medium text-green-600">Minimal</span>
                  <input type="range" name="impactLevel" min="1" max="10" step="1" onChange={handleChange} className="flex-1 h-3 bg-gradient-to-r from-green-200 to-red-200 rounded-lg appearance-none cursor-pointer" required />
                  <span className="ml-4 font-medium text-red-600">Significant</span>
                </div>
                <p className="text-sm text-gray-600 text-center bg-gray-50 p-2 rounded-lg">1 - Life goes on normally, 10 - Affects everything I do</p>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How has this impacted your professional or academic life? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['I\'ve missed work/college due to symptoms', 'My productivity isn\'t what it used to be', 'I skip social or professional events', 'I\'ve adjusted my career aspirations', 'I\'ve faced bias or discrimination', 'I\'ve needed medical leave', 'No significant impact on my work'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-rose-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="professionalImpact" value={option} onChange={handleChange} className="mr-3 scale-125 text-rose-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How has this affected your relationships and social life? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['My romantic relationships have been affected', 'I avoid dating or new relationships', 'My family doesn\'t fully understand', 'Friends sometimes dismiss my concerns', 'It\'s created challenges in my marriage', 'Fertility worries affect my relationship decisions', 'My relationships remain strong and supportive'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-rose-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="relationshipImpact" value={option} onChange={handleChange} className="mr-3 scale-125 text-rose-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Your Healing & Wellness Journey */}
          <div id="section-4" className="mb-8 p-8 border-2 border-green-200 rounded-2xl shadow-lg bg-gradient-to-br from-green-50/50 to-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span className="bg-green-100 p-2 rounded-full">💊🌿</span>
              4. Your Healing & Wellness Journey
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">What approaches have you tried on your healing path? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Birth control pills', 'Metformin for insulin resistance', 'Other hormonal medications', 'Weight management medications', 'Anti-androgen medications', 'Fertility treatments', 'Lifestyle modifications (diet & exercise)', 'Alternative medicine (Ayurveda, homeopathy)', 'Natural supplements (inositol, vitamin D, etc.)', 'Counseling or therapy', 'I haven\'t started any treatment yet'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="healingApproaches" value={option} onChange={handleChange} className="mr-3 scale-125 text-green-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How satisfied are you with your current treatment approach?</label>
              <div className="space-y-3">
                {['Very satisfied - my symptoms are well managed', 'Somewhat satisfied - I see some improvement', 'Neutral - not much change', 'Somewhat dissatisfied - limited improvement', 'Very dissatisfied - no improvement or worsened', 'I\'m not currently receiving treatment'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-200 cursor-pointer">
                    <input type="radio" name="treatmentSatisfaction" value={option} onChange={handleChange} className="mr-3 scale-125 text-green-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">What are your biggest challenges in managing PCOS? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Doctors don\'t seem well-informed about PCOS', 'Treatments are too expensive', 'Medication side effects are troublesome', 'I get conflicting advice from different doctors', 'Lack of understanding from family', 'No time for lifestyle changes', 'Too much conflicting information online', 'Social stigma and embarrassment', 'No clear guidance on diet and exercise', 'The emotional and mental health impact'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="managementChallenges" value={option} onChange={handleChange} className="mr-3 scale-125 text-green-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2 text-lg">How much do you spend monthly on PCOS management? *</label>
              <input type="text" name="monthlySpend" onChange={handleChange} className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white/80" required placeholder="e.g., ₹2,000-5,000, ₹5,000-10,000..." />
            </div>
          </div>
          
          {/* Section 5: Your Personal Story Timeline */}
          <div id="section-5" className="mb-8 p-8 border-2 border-indigo-200 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-50/50 to-white hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
              <span className="bg-indigo-100 p-2 rounded-full">📅💭</span>
              5. Your Personal Story Timeline
            </h3>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">When did you first notice something felt different?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['During my teenage years (13-18)', 'Early twenties (19-25)', 'Late twenties (26-30)', 'After turning 30', 'After marriage', 'After having a baby', 'I can\'t pinpoint exactly when'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-200 cursor-pointer">
                    <input type="radio" name="firstNotice" value={option} onChange={handleChange} className="mr-3 scale-125 text-indigo-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">What do you think might have triggered or worsened your symptoms? (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Stress (work or personal life)', 'Significant weight gain', 'Changes in eating habits', 'More sedentary lifestyle', 'Natural hormonal changes (puberty, pregnancy)', 'Certain medications', 'Family history/genetics', 'Environmental factors', 'I honestly don\'t know'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-200 cursor-pointer">
                    <input type="checkbox" name="symptomTriggers" value={option} onChange={handleChange} className="mr-3 scale-125 text-indigo-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3 text-lg">How has your relationship with food evolved?</label>
              <div className="space-y-3">
                {['Significantly improved - I follow a structured eating plan', 'Somewhat improved - I\'m making healthier choices', 'I\'ve tried many approaches but struggle to maintain them', 'No significant changes in my eating habits'].map(option => (
                  <div key={option} className="bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-200 cursor-pointer">
                    <input type="radio" name="foodRelationship" value={option} onChange={handleChange} className="mr-3 scale-125 text-indigo-500" />
                    <label className="cursor-pointer font-medium text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-4 px-12 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting Your Beautiful Story...
                </>
              ) : (
                <>
                  <span>✨</span>
                  Submit Your Story
                  <span>💕</span>
                </>
              )}
            </button>
            <p className="mt-4 text-gray-600 text-sm">Your story matters and will help other sisters on their journey 🌸</p>
          </div>
        </form>
      </div>
    </main>
  );
}