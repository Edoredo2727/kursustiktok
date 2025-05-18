import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleScrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-br from-black to-gray-900">
      {/* Floating elements for TikTok style */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-tiktok-pink opacity-30 animate-float"></div>
      <div className="absolute top-40 right-14 w-8 h-8 rounded-full bg-tiktok-teal opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-tiktok-teal opacity-20 animate-float" style={{animationDelay: "2s"}}></div>
      
      {/* TikTok logo-like element */}
      <div className="relative mb-6">
        <div className="absolute inset-0 tiktok-gradient blur-lg opacity-30"></div>
        <h2 className="relative text-white text-xl md:text-2xl font-bold animate-tiktok-bounce">
          TikTok <span className="text-tiktok-teal">Affiliate</span> <span className="text-tiktok-pink">Blueprint</span>
        </h2>
      </div>
      
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl">
        Rahasia Jadi Affiliator TikTok Cetak Penjualan dalam 2 Bulan
        <span className="block text-tiktok-pink mt-2">Garansi Uang Kembali Jika Tidak Ada Hasil!</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
        Pelajari Strategi Terstruktur dari Nol sampai Profit Stabil, Tanpa Trial & Error, 
        Cocok untuk Pemula yang Tak Mau Tampil Wajah
      </p>

      {/* Hasil actual section */}
      <div className="grid grid-cols-3 gap-3 md:gap-8 mb-10 max-w-3xl w-full bg-white/5 backdrop-blur-sm p-4 rounded-xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-tiktok-pink">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">GMV</span>
          </div>
          <div className="text-white font-bold text-xl md:text-3xl">232M+</div>
          <div className="text-green-400 text-xs">+151%</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-tiktok-pink">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">Produk</span>
          </div>
          <div className="text-white font-bold text-xl md:text-3xl">2,9K+</div>
          <div className="text-green-400 text-xs">+171%</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-tiktok-pink">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs">Komisi</span>
          </div>
          <div className="text-white font-bold text-xl md:text-3xl">17,8M+</div>
          <div className="text-green-400 text-xs">+148%</div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button 
          className="bg-tiktok-pink hover:bg-tiktok-pink/80 text-white px-8 py-6 text-xl rounded-full tiktok-shadow flex items-center gap-2"
          onClick={handleScrollToPricing}
        >
          <MessageCircle className="w-5 h-5" />
          Gabung Sekarang
        </Button>
      </div>
      
      <div className="text-white text-sm sm:text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
        <span className="text-tiktok-teal font-semibold">1,200+</span> orang sudah bergabung minggu ini
      </div>
      
      <div className="absolute -bottom-32 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
    </div>
  );
};

export default HeroSection;
