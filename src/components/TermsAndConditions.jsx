import React from 'react';
import { Scale, FileSpreadsheet, AlertTriangle, Copyright, HelpCircle, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
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
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
            Last Updated: May 21, 2026. Please read these terms and conditions carefully before using our informational portal.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 space-y-12">
          
          {/* Intro Section */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to the BGS College portal. By accessing this website and using our online services (such as course details, enquiry forms, and program catalogs), you agree to comply with and be bound by the following terms and conditions. These terms govern the relation between BGS College (including Allied Health and Nursing Institutes managed under Sri Adichunchanagiri Shikshana Trust) and you in relation to this website.
            </p>
          </div>

          <div className="border-t border-slate-100 my-8"></div>

          {/* Section 1: Use of Website & Portal */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Scale size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">1. Use of the Website</h2>
              <p className="text-slate-600 leading-relaxed">
                The content of this website is strictly for your general information and personal use. It is subject to change without notice. You agree to use the site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>
            </div>
          </div>

          {/* Section 2: Admissions & Inquiry Submission */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <FileSpreadsheet size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">2. Course Enquiries and Admissions</h2>
              <p className="text-slate-600 leading-relaxed">
                By submitting your personal and academic details via our online inquiry forms, you express an interest in our academic programs. 
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm text-slate-600 space-y-2">
                <p><strong>Important Clarifications:</strong></p>
                <ul className="list-disc pl-4 space-y-1.5 text-slate-500">
                  <li><strong>Not an Admission Offer:</strong> Form submission does not guarantee admission. Admissions are subject to eligibility checks, fee structures, and document verification.</li>
                  <li><strong>Affiliation Guidelines:</strong> All admissions conform to regulations outlined by Rajiv Gandhi University of Health Sciences (RGUHS), Indian Nursing Council (INC), Karnataka Nursing Council (KNC), and other statutory authorities.</li>
                  <li><strong>Document Accuracy:</strong> You agree that all academic documents and scores uploaded or submitted are genuine and accurate.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Intellectual Property */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <Copyright size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">3. Intellectual Property Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                This website contains material which is owned by or licensed to BGS College and Sri Adichunchanagiri Shikshana Trust. This material includes, but is not limited to, the design, layout, look, appearance, graphics, videos, logo branding, and text content. Reproduction or reuse of this material without prior written permission is strictly prohibited.
              </p>
            </div>
          </div>

          {/* Section 4: Limitation of Liability */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <AlertTriangle size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">4. Disclaimer and Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                The information provided on this website is on an "as is" and "as available" basis. While we strive to maintain correct and up-to-date details, BGS College makes no warranties of any kind regarding accuracy, reliability, or completeness of the information, courses, fees, or graphics contained herein.
              </p>
              <p className="text-slate-600 leading-relaxed">
                BGS College, its directors, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or the information therein.
              </p>
            </div>
          </div>

          {/* Section 5: Governing Law */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-12 shrink-0">
              <div className="bg-bgs-red/10 p-3 rounded-2xl text-bgs-red w-fit">
                <HelpCircle size={24} />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-bgs-dark">5. Governing Law and Jurisdiction</h2>
              <p className="text-slate-600 leading-relaxed">
                Your use of this website, and any dispute arising out of such use, is subject to the laws of the State of Karnataka, India. Any legal action or proceeding related to this website shall be brought exclusively in a court of competent jurisdiction in Bangalore, Karnataka.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 my-8"></div>

          {/* Contact Information Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-10 text-white pointer-events-none">
              <Scale size={200} />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-bold text-bgs-yellow">Contact Legal Desk</h3>
              <p className="text-sm text-slate-300">
                If you have questions, disputes, or clarifications regarding our terms of service, you can reach out directly to our administrative and compliance desk:
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

export default TermsAndConditions;
