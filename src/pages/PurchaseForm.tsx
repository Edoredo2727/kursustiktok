import React, { useState, useEffect } from "react";

const PurchaseForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Format nomor HP ke format internasional (awali 0 jadi 62)
    const waNumber = phone.replace(/^0/, "62");
    // Pesan otomatis
    const message = `Halo, saya ingin membeli TikTok Affiliate Blueprint.\nNama: ${name}\nNo HP: ${phone}\n\nMohon info rekening transfer dan langkah selanjutnya.`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = waUrl;
  };

  useEffect(() => {
    // @ts-expect-error: window.fbq is a global property injected by Facebook Pixel
    if (window.fbq) {
      // @ts-expect-error: window.fbq is a global property injected by Facebook Pixel
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 px-4 py-16">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full border border-tiktok-pink/30">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">Form Pembelian Ebook</h2>
        <p className="text-center text-gray-300 mb-6">Isi data di bawah, lalu klik submit untuk melanjutkan ke WhatsApp dan mendapatkan info pembayaran.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-200 mb-1 font-medium">Nama Lengkap</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-tiktok-pink/30 focus:outline-none focus:ring-2 focus:ring-tiktok-pink"
              placeholder="Nama lengkap Anda"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-1 font-medium">Nomor WhatsApp</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-tiktok-pink/30 focus:outline-none focus:ring-2 focus:ring-tiktok-pink"
              placeholder="08xxxxxxxxxx"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              pattern="0[0-9]{9,13}"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-tiktok-pink text-white font-bold text-lg shadow-md hover:bg-tiktok-pink/80 transition"
            disabled={loading}
          >
            {loading ? "Mengalihkan ke WhatsApp..." : "Submit & Lanjut ke WhatsApp"}
          </button>
        </form>
        <div className="mt-6 text-xs text-gray-400 text-center">
          Setelah transfer dan konfirmasi, ebook akan segera dikirim ke WhatsApp Anda dan Anda akan dimasukkan ke pembelajaran.
        </div>
      </div>
    </div>
  );
};

export default PurchaseForm; 