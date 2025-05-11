import React from "react";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const otherCourses = [
    "Materi bertele-tele, teori tanpa praktek",
    "Fokus pada 'hype' tanpa sistem",
    "Biarin kamu trial-error sendiri",
    "Hanya ajarkan konten wajah"
  ];

  const ourCourse = [
    "Roadmap 2 bulan STEP-BY-STEP",
    "Formula konten \"TANPA WAJAH\" yang terbukti",
    "Teknik iklan auto-profit tanpa mikir ROAS",
    "Modul manajemen keuangan \"Gulung Profit\"",
    "Dibimbing praktisi dengan omzet 500jt+/bulan"
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Kenapa Kursus Ini <span className="tiktok-text-gradient">Berbeda?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bukan sekedar kursus, tapi sistem penjualan yang sudah terbukti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Other Courses */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Kursus Lain:</h3>
            </div>

            <ul className="space-y-4">
              {otherCourses.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Course */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-tiktok-pink/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-tiktok-teal/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-tiktok-teal/20 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-tiktok-teal" />
                </div>
                <h3 className="text-xl font-bold text-white">Kursus KAMI:</h3>
              </div>

              <ul className="space-y-4">
                {ourCourse.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-tiktok-teal/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-tiktok-teal" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
