import React from "react";
import { ChevronRight, TrendingUp, ShoppingCart, Eye } from "lucide-react";

const ResultsShowcaseSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-gray-800">Hasil</span>{" "}
            <span className="tiktok-text-gradient">Nyata</span>{" "}
            <span className="text-gray-800">Alumni Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat bukti pendapatan affiliate TikTok yang dihasilkan oleh para peserta kursus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
            <div className="bg-black/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-tiktok-pink" />
                  <span className="font-semibold">GMV</span>
                </div>
                <span className="text-xs bg-black/5 px-2 py-1 rounded">April 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800">Rp 86,5M</h3>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <TrendingUp className="w-4 h-4" /> +101%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Produk terjual</span>
                  <p className="font-semibold text-xl">726</p>
                  <span className="text-green-500 text-xs">+78,82%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Estimasi komisi</span>
                  <p className="font-semibold text-xl">Rp 7,3M</p>
                  <span className="text-green-500 text-xs">+129%</span>
                </div>
              </div>
            </div>
            <img 
              src="/lovable-uploads/7c7bc76d-d129-4460-b571-0db60bbe3cb2.png"
              alt="Data TikTok Affiliate"
              className="w-full h-auto object-cover transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
            <div className="bg-black/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-tiktok-pink" />
                  <span className="font-semibold">Visibility</span>
                </div>
                <span className="text-xs bg-black/5 px-2 py-1 rounded">April 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800">232,6M GMV</h3>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <TrendingUp className="w-4 h-4" /> +151%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Produk dilihat</span>
                  <p className="font-semibold text-xl">800,7K</p>
                  <span className="text-green-500 text-xs">+35,84%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Klik produk</span>
                  <p className="font-semibold text-xl">61,9K</p>
                  <span className="text-green-500 text-xs">+144%</span>
                </div>
              </div>
            </div>
            <img 
              src="/lovable-uploads/cd978c06-37e3-4676-b1e8-5f2153e15a6f.png" 
              alt="Data Visibility TikTok Shop"
              className="w-full h-auto object-cover transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
            <div className="bg-black/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-tiktok-pink" />
                  <span className="font-semibold">Conversions</span>
                </div>
                <span className="text-xs bg-black/5 px-2 py-1 rounded">Januari 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800">135,0M GMV</h3>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <TrendingUp className="w-4 h-4" /> +313%
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Barang terjual</span>
                  <p className="font-semibold text-xl">4,9K</p>
                  <span className="text-green-500 text-xs">+804%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Estimasi komisi</span>
                  <p className="font-semibold text-xl">Rp 9,7M</p>
                  <span className="text-green-500 text-xs">+191%</span>
                </div>
              </div>
            </div>
            <img 
              src="/lovable-uploads/3f43f5bc-ebc8-4def-bfa9-956d07fc97eb.png" 
              alt="Data Konversi TikTok Shop"
              className="w-full h-auto object-cover transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>

          {/* Showcase dari screenshot user */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
            <div className="bg-black/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-tiktok-pink" />
                  <span className="font-semibold">GMV</span>
                </div>
                <span className="text-xs bg-black/5 px-2 py-1 rounded">Mei 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800">Rp43,0M</h3>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <TrendingUp className="w-4 h-4" /> +131%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Barang terjual</span>
                  <p className="font-semibold text-xl">314</p>
                  <span className="text-green-500 text-xs">+117%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Estimasi komisi</span>
                  <p className="font-semibold text-xl">Rp2,4M</p>
                  <span className="text-green-500 text-xs">+124%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Produk dilihat</span>
                  <p className="font-semibold text-xl">244,2K</p>
                  <span className="text-green-500 text-xs">+207%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Klik produk</span>
                  <p className="font-semibold text-xl">13,6K</p>
                  <span className="text-green-500 text-xs">+145%</span>
                </div>
              </div>
            </div>
            <img 
              src="/screenshots/hasil-mei-2025.jpg"
              alt="Data TikTok Affiliate Mei 2025"
              className="w-full h-auto object-cover transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
            <div className="bg-black/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-tiktok-pink" />
                  <span className="font-semibold">GMV</span>
                </div>
                <span className="text-xs bg-black/5 px-2 py-1 rounded">April 2025</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-gray-800">Rp252,7M</h3>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <TrendingUp className="w-4 h-4" /> +163%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-500 text-sm">Barang terjual</span>
                  <p className="font-semibold text-xl">3,1K</p>
                  <span className="text-green-500 text-xs">+179%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Estimasi komisi</span>
                  <p className="font-semibold text-xl">Rp19,5M</p>
                  <span className="text-green-500 text-xs">+164%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Produk dilihat</span>
                  <p className="font-semibold text-xl">849,1K</p>
                  <span className="text-green-500 text-xs">+41,00%</span>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Klik produk</span>
                  <p className="font-semibold text-xl">65,9K</p>
                  <span className="text-green-500 text-xs">+150%</span>
                </div>
              </div>
            </div>
            <img 
              src="/screenshots/hasil-april-2025.jpg"
              alt="Data TikTok Affiliate April 2025"
              className="w-full h-auto object-cover transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/cbea5a52-ef1d-45e4-a40f-392568a3821a.png" 
                alt="Bukti bonus affiliate TikTok"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <div className="bg-tiktok-pink/10 text-tiktok-pink px-4 py-1 rounded-full inline-block text-sm font-medium mb-4">
                Bonus Affiliate
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Para Peserta Juga Mendapatkan Bonus Bulanan!
              </h3>
              <p className="text-gray-600 mb-6">
                Salah satu alumni kami berhasil mendapatkan bonus Rp 2.500.000 setelah mencapai
                penjualan sebesar 88 Juta dalam sebulan. Ini hanya salah satu dari banyak kisah sukses
                yang akan Anda alami dengan sistem kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsShowcaseSection;
