import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">TikTok Affiliate Blueprint</h3>
            <p className="text-gray-400 max-w-sm">
              Sistem lengkap untuk sukses sebagai affiliator TikTok tanpa tampil wajah.
              Dari pemulanpm run hingga profesional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-tiktok-pink">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-tiktok-teal">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-white">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:edytrade27@gmail.com" className="text-gray-400 hover:text-white transition-colors">edytrade27@gmail.com</a></li>
                <li><a href="https://wa.me/6283878865297" className="text-gray-400 hover:text-white transition-colors">0838-7886-5297</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TikTok Affiliate Blueprint. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Disclaimer: Income results may vary. This is not a get-rich-quick scheme.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
