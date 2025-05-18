
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Saya benar-benar pemula, bisa ikut?",
      answer: "Materi dirancang step-by-step, termasuk cara buka akun dari nol. Panduan sangat rinci dan bisa diikuti bahkan jika Anda belum pernah membuat konten TikTok sebelumnya."
    },
    {
      question: "Bagaimana garansi uang kembali bekerja?",
      answer: "Jika Anda ikuti semua modul & konsultasi tapi tidak ada penjualan dalam 3 bulan, kami kembalikan 120% dari biaya yang sudah Anda bayarkan. Syaratnya adalah Anda harus menyelesaikan semua modul dan mengikuti minimal 2 sesi konsultasi."
    },
    {
      question: "Butuh modal besar untuk iklan?",
      answer: "Tidak perlu. Kami ajarkan strategi \"Micro Budget\" mulai dari Rp 30.000/hari. Fokus kami adalah ROI positif, sehingga setiap rupiah yang Anda keluarkan akan menghasilkan lebih."
    },
    {
      question: "Berapa lama saya bisa mengakses materi?",
      answer: "Anda mendapatkan akses seumur hidup ke semua materi kursus termasuk update di masa mendatang. Sekali bayar, Anda bisa mengakses kapanpun tanpa biaya tambahan."
    },
    {
      question: "Apakah konten tanpa wajah benar-benar efektif?",
      answer: "Sangat efektif! Banyak peserta kami yang menghasilkan belasan juta rupiah dengan konten tanpa wajah. Metode ini fokus pada value dan storytelling, bukan popularitas pribadi."
    },
    {
      question: "Berapa jam per hari yang perlu saya luangkan?",
      answer: "Minimal 1-2 jam per hari di awal untuk mengikuti materi dan membuat konten. Setelah sistemnya berjalan, Anda hanya perlu 3-4 jam per minggu untuk maintenance."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Pertanyaan <span className="tiktok-text-gradient">Umum</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-10">
          <p className="text-gray-500">
            Masih ada pertanyaan lain?{" "}
            <a href="#" className="text-tiktok-pink font-medium">Hubungi kami</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
