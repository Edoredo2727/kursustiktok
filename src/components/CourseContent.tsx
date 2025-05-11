
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseContent = () => {
  const modules = [
    {
      month: "Bulan 1",
      title: "Foundation",
      topics: [
        "🔹 Fundamental & Mindset",
        "🔹 Pahami Algoritma & Hindari Pelanggaran",
        "🔹 Teknik Produksi Konten",
        "🔹 Editing Efektif & Efisien",
        "🔹 Strategi Konsisten Upload"
      ],
      color: "text-tiktok-pink"
    },
    {
      month: "Bulan 2",
      title: "Optimization",
      topics: [
        "🔹 Riset Produk & Wining Produk",
        "🔹 Iklan & Optimasi",
        "🔹 Targeting & Evaluasi Akun",
        "🔹 Cara Dapat 600 Follower Cepat",
        "🔹 Manajemen Keuangan"
      ],
      color: "text-tiktok-teal"
    }
  ];

  const bonuses = [
    "📌 Ebook ini hanya langkah awal",
    "📌 Kunci sukses sebenarnya ada di Grup Eksklusif!",
    "✅ Dimentori langsung soal teknis konten & iklan",
    "✅ Dapat update strategi terbaru & tanya jawab real-time"
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-gray-800">Struktur</span>{" "}
            <span className="tiktok-text-gradient">Materi</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Roadmap terstruktur selama 2 bulan untuk menghasilkan dari TikTok
          </p>
        </div>

        <Tabs defaultValue="course" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="course">Roadmap 2 Bulan</TabsTrigger>
            <TabsTrigger value="bonuses">Bonus Penting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="course">
            <div className="space-y-8">
              {modules.map((module, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-gray-900 to-black p-4 flex justify-between items-center">
                    <h3 className="font-bold text-white text-xl">{module.month}: <span className={module.color}>{module.title}</span></h3>
                    <div className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                      Minggu {index * 4 + 1} - {(index + 1) * 4}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-6">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <span className={`${module.color} font-bold`}>{topic.split(" ")[0]}</span>
                          </div>
                          <p className="text-gray-700">{topic.split(" ").slice(1).join(" ")}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="bonuses">
            <Card className="border-tiktok-pink/20 bg-gradient-to-br from-white to-pink-50/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-center mb-8 text-gray-800">
                  <span className="tiktok-text-gradient">🎁 BONUS PENTING!</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    <ul className="space-y-6">
                      {bonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <span className="text-tiktok-pink font-bold">{bonus.split(" ")[0]}</span>
                          </div>
                          <p className="text-gray-700">{bonus.split(" ").slice(1).join(" ")}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 p-4 bg-tiktok-pink/10 rounded-lg">
                      <p className="text-gray-800 font-medium">Tanpa gabung grup = materi tidak maksimal dijalankan.</p>
                      <p className="text-tiktok-pink font-bold mt-2">Jangan cuma baca, tapi praktik langsung bareng komunitasnya!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseContent;
