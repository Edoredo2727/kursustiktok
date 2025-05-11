import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Video } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah",
      role: "Ibu Rumah Tangga",
      content: "Gak nyangka sistem tanpa wajah ini works! Awalnya malu rekam video, sekarang bisa hasil 15-20juta/bulan konsisten",
      rating: 5,
      image: "🧕"
    },
    {
      name: "Budi",
      role: "Karyawan Swasta",
      content: "Meski cuma pakai waktu luang sepulang kerja, sudah bisa dapet income tambahan 8-10jt. Simple dan mudah diikuti!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Rina",
      role: "Mahasiswa",
      content: "Awalnya gak percaya bisa jualan tanpa tampil muka. Tapi setelah ikutin modul 1-2, langsung dapat 3 penjualan pertama!",
      rating: 5,
      image: "👩‍🎓"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Cerita <span className="text-tiktok-pink">Sukses</span> Para Peserta
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lihat bagaimana mereka sukses dengan metode tanpa wajah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full bg-tiktok-pink/20 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tiktok-pink text-tiktok-pink" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-300 flex-1">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-400">
            Dan <span className="text-tiktok-pink font-bold">1,200+ alumni</span> lainnya yang sudah berhasil
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
