import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 }; // Reset to 24 hours
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Roadmap 2 bulan terstruktur",
    "Template konten tanpa wajah",
    "Teknik iklan ROAS positif",
    "4 Bonus eksklusif",
    "Grup konsultasi privat",
    "Update seumur hidup"
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6283878865297?text=Halo%2C%20saya%20tertarik%20dengan%20TikTok%20Affiliate%20Blueprint", "_blank");
  };

  return (
    <div className="py-16 md:py-24 bg-white" id="pricing">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tiktok-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tiktok-teal/20 rounded-full blur-3xl"></div>
          
          <div className="relative p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Mulai Bangun Sistem Affiliate Auto-Pilot Hari Ini!
              </h2>
              
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="text-white font-semibold flex items-center justify-center gap-2">
                  <span>Diskon berakhir dalam:</span>
                  <span className="bg-tiktok-pink/20 px-2 py-1 rounded">
                    {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-xl">TikTok Affiliate Blueprint</h3>
                      <p className="text-gray-300">Sistem lengkap 2 bulan</p>
                    </div>
                    <div className="bg-tiktok-pink/20 px-3 py-1 rounded text-white text-sm">
                      Best Seller
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gray-400 line-through text-lg">Rp 1.200.000</span>
                    <span className="text-white text-3xl font-bold">Rp 99.000</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-tiktok-pink/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-tiktok-pink" />
                        </div>
                        <p className="text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-tiktok-pink/20 p-3 rounded text-white text-sm text-center mb-6">
                    Garansi 120% uang kembali dalam 90 hari
                  </div>
                  
                  <Button 
                    className="w-full py-6 text-lg bg-tiktok-pink hover:bg-tiktok-pink/80 text-white flex items-center justify-center gap-2"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hubungi via WhatsApp
                  </Button>
                </div>
                
                <div className="text-center text-sm text-gray-400">
                  Pembayaran aman melalui: 
                  <span className="text-white ml-1">Midtrans • QRIS • Bank Transfer</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-tiktok-pink/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-tiktok-pink" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Akses Seumur Hidup</h4>
                      <p className="text-gray-400">Termasuk semua update materi dan fitur baru</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-tiktok-pink/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-tiktok-pink" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Konsultasi Pribadi</h4>
                      <p className="text-gray-400">3x sesi konsultasi live 1-on-1 dengan mentor</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-tiktok-teal/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-tiktok-teal" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Pesan dari founder</h4>
                      <p className="text-gray-400">"Saya pernah gagal 7 bulan trial-error, ini sistem yang saya wish ada dari dulu"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
