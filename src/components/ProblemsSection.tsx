
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    "Bingung mulai dari mana meski sudah ikut banyak webinar",
    "Konten asal viral, tidak ada sistem yang terukur",
    "Takut beriklan karena hitungan ROAS rumit dan boros budget",
    "Malu tampil wajah di video TikTok",
    "Hasil affiliasi naik-turun, tidak stabil"
  ];

  return (
    <div className="py-16 md:py-24 bg-white relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-gray-800">Apakah Ini yang Kamu</span>{" "}
            <span className="tiktok-text-gradient">Rasakan?</span>
          </h2>
          
          {/* Confused person illustration */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-tiktok-pink/20 rounded-full animate-pulse-slow"></div>
            <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gray-100 overflow-hidden">
              <span className="text-4xl">🤔</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-gray-200 hover:border-tiktok-pink/30 transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <X className="w-4 h-4" />
                </div>
                <p className="text-gray-700">{problem}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-5 left-10 w-20 h-20 bg-tiktok-teal/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-tiktok-pink/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default ProblemsSection;
