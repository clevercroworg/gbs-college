import React from 'react';
import { Shield, Eye, Database, Lock, Globe, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pt-28 pb-16">
      {/* Hero Header */}
      <div className="bg-bgs-dark text-white py-16 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[75%] h-[75%] rounded-full bg-gradient-to-b from-bgs-yellow to-transparent blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-bgs-red to-transparent blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-bgs-yellow hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          <span className="bg-bgs-red/25 border border-bgs-red/40 text-rose-300 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full block w-fit mx-auto mb-4">
            Security & Trust
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Last Updated: May 21, 2026. This policy describes how BGS College collects, uses, and safeguards your personal information.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-12">
          
          {/* Intro Section */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              BGS College (including BGS Global Institute of Allied Health Sciences and BGS Global Institute of Nursing Sciences, managed under Sri Adichunchanagiri Shikshana Trust) respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy governs our data collection, processing, and usage practices when you visit our website, submit admission inquiries, or interact with our campus representatives.
            </p>
          </div>

          <div className="border-t border-slate-100 my-8"></div>

          {/* Section 1: Information Collection */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Eye size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">1. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                We collect personal information that you voluntarily provide to us when you fill out enquiry forms, contact us via WhatsApp, phone, or email, or submit application details. This information may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-slate-600">
                <li>Full Name & Contact Details</li>
                <li>Email Address & Mobile Number</li>
                <li>Academic Qualifications & Marks</li>
                <li>Preferred Course/Program of Interest</li>
                <li>State of Residence & Nationality</li>
                <li>IP Address & Browser Cookie Data</li>
              </ul>
            </div>
          </div>

          {/* Section 2: How We Use Information */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Database size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">2. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                The information we collect is used solely to facilitate the educational and counseling process. Specifically, we use your data to:
              </p>
              <ul className="space-y-2.5 text-slate-600 pl-4 list-disc">
                <li>Provide accurate academic counseling and course recommendations.</li>
                <li>Process your pre-admission enquiries and verify eligibility criteria.</li>
                <li>Send official notifications, schedules, and program updates.</li>
                <li>Respond to your requests via call, SMS, WhatsApp, or email.</li>
                <li>Analyze website traffic and optimize our online user experience.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Protection & Security */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Lock size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">3. Data Protection and Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm text-slate-500 leading-relaxed">
                <strong>Please Note:</strong> While we employ industry-standard encryption protocols (SSL/HTTPS) to secure data transmission, no method of transmission over the internet or database storage is 100% secure. We encourage you to safeguard your credentials and report any suspicious activity immediately.
              </div>
            </div>
          </div>

          {/* Section 4: Data Sharing */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Shield size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">4. Sharing and Disclosure of Data</h2>
              <p className="text-slate-600 leading-relaxed">
                BGS College does not sell, trade, rent, or lease your personal identification information to third parties. We may disclose your information under the following limited circumstances:
              </p>
              <ul className="space-y-2 text-slate-600 pl-4 list-disc">
                <li>To regulatory bodies, university affiliates (RGUHS, INC, etc.), or government agencies when legally mandated.</li>
                <li>To trusted external IT service providers who assist us in operating our website and databases, subject to strict confidentiality agreements.</li>
              </ul>
            </div>
          </div>

          {/* Section 5: Cookies Policy */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Globe size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">5. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website uses cookies and tracking pixels (such as Google Analytics) to distinguish you from other users, personalize your web experience, and track general traffic behavior. You can configure your browser settings to reject cookies, though some features of this landing page may not function optimally as a result.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 my-8"></div>

          {/* Section 6: Contact Information */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-10 text-white pointer-events-none">
              <FileText size={200} />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-bold text-bgs-yellow">Contact Privacy Officer</h3>
              <p className="text-sm text-slate-300">
                If you have any questions about this Privacy Policy, your data rights, or wish to opt out of communications, please contact our administrative desk:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm pt-2">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-bgs-yellow" />
                  <span>BGS Health & Education City, Kengeri, Bangalore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-bgs-yellow" />
                  <a href="tel:07259350707" className="hover:underline">07259350707</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-bgs-yellow" />
                  <a href="mailto:info@bgscollege.com" className="hover:underline">info@bgscollege.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
