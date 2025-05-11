
import React from "react";
import { Check, Star, Clock, Users, DollarSign, MessageSquare } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-tiktok-pink" />,
      title: "\"Plug & Play System\"",
      description: "Template konten siap pakai"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-tiktok-pink" />,
      title: "Teknik iklan \"Set Once Earn Forever\"",
      description: "Otomatis menghasilkan tanpa pantau terus-menerus"
    },
    {
      icon: <Check className="w-6 h-6 text-tiktok-pink" />,
      title: "Riset produk high-conversion",
      description: "Khusus untuk platform TikTok"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-tiktok-pink" />,
      title: "Mindset \"Anti-Mental Block\"",
      description: "Untuk pemula yang ragu memulai"
    },
    {
      icon: <Users className="w-6 h-6 text-tiktok-pink" />,
      title: "Sistem manajemen keuangan",
      description: "Rahasianya para investor sukses"
    },
    {
      icon: <Clock className="w-6 h-6 text-tiktok-pink" />,
      title: "Garansi 120% uang kembali",
      description: "Jika tidak ada penjualan dalam 3 bulan"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-gray-800">6 Keunggulan</span>{" "}
            <span className="tiktok-text-gradient">Inti</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tidak seperti kursus lain, sistem ini fokus pada hasil nyata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-tiktok-pink/10 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
