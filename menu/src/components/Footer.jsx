import React from 'react';
import { Instagram, MessageCircle, Twitter, Music } from 'lucide-react';
import { COLORS, SHOP_INFO } from '../config/constants';

const Footer = () => {
  return (
    <>
      {/* Wavy Divider */}
      <div className="relative h-32 overflow-hidden" style={{ backgroundColor: COLORS.darkBg }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: COLORS.tanAccent }}
        >
          <path d="M0,80 Q300,30 600,80 Q900,130 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Footer Content */}
      <footer
        className="py-16 px-8"
        style={{ backgroundColor: COLORS.tanAccent, color: COLORS.darkSecondary }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top Section - 3 Columns */}
          <div className="grid grid-cols-3 gap-12 mb-12">
            {/* Left - Brand & Social */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl">☕</span>
                <div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Playfair Display' }}
                  >
                    MAU KOPI
                  </h3>
                </div>
              </div>
              <p className="text-sm mb-6 opacity-80">
                Crafting moments of calm, one cup at a time.
              </p>
              <div className="flex gap-3">
                <a
                  href={SHOP_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:opacity-80"
                  style={{
                    backgroundColor: COLORS.darkSecondary,
                    color: COLORS.tanAccent,
                  }}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SHOP_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:opacity-80"
                  style={{
                    backgroundColor: COLORS.darkSecondary,
                    color: COLORS.tanAccent,
                  }}
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={SHOP_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:opacity-80"
                  style={{
                    backgroundColor: COLORS.darkSecondary,
                    color: COLORS.tanAccent,
                  }}
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={SHOP_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:opacity-80"
                  style={{
                    backgroundColor: COLORS.darkSecondary,
                    color: COLORS.tanAccent,
                  }}
                >
                  <Music size={20} />
                </a>
              </div>
            </div>

            {/* Center - Address */}
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Address
              </h4>
              <p className="text-sm leading-relaxed opacity-90">
                {SHOP_INFO.address}
              </p>
              <p className="text-sm mt-4 opacity-80">
                <strong>Phone:</strong> {SHOP_INFO.phone}
              </p>
            </div>

            {/* Right - Hours */}
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Hours
              </h4>
              <p className="text-sm mb-2">{SHOP_INFO.hours.weekdays}</p>
              <p className="text-sm font-semibold">{SHOP_INFO.hours.time}</p>
              <p className="text-xs mt-4 opacity-70">
                Every day we brew fresh, every moment counts.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t mb-6"
            style={{ borderTopColor: `${COLORS.darkSecondary}30` }}
          />

          {/* Bottom Section */}
          <div className="flex justify-between items-center text-sm">
            <p opacity="0.8">
              Copyright © 2025. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline transition-all opacity-80 hover:opacity-100">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline transition-all opacity-80 hover:opacity-100">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
