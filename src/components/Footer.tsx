"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-16 p-2.5">
        <div className="footer-section flex bg-gradient-to-tl from-blue-900 to-fuchsia-900 rounded-2xl text-white mx-8 pb-8">
          <div className="footer-columns column-1">
            <h3>About us</h3>
            <p>
              यह वेबसाइट हिंदी सिंक ब्लॉग का एक अनुभाग है। इस वेबसाइट में आपको
              ऑनलाइन पैसे कमाने के टिप्स एवं सम्बंधित वेबसाइट तथा एप्स के बारे
              में बताया जाता है। अन्य लेख पढने के लिए HindiSink.com पर विजिट
              करें।
            </p>
          </div>
          <div className="footer-columns">
            <h3>Popular Posts</h3>
            <ul>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                <a href="https://hindisink.com/photo-se-video-kaise-banaye/">
                  फोटो से वीडियो कैसे बनाएं
                </a>
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                <a href="https://hindisink.com/instagram-account-kaise-banaye/">
                  इंस्टाग्राम अकाउंट कैसे बनाएं
                </a>
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                <a href="https://hindisink.com/game-kaise-banaye/">
                  गेम कैसे बनाएं और पैसे कमाएं
                </a>
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                <a href="https://hindisink.com/whatsapp-par-khud-ko-unblock-kaise-kare/">
                  WhatsApp पर खुद को अनब्लॉक कैसे करें
                </a>
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                <a href="https://hindisink.com/live-train-status-train-kaha-hai-kaise-pata-kare/">
                  ट्रेन कहाँ है कैसे पता करें
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-columns">
            <h3>Site Links</h3>
            <ul>
              <li>
                <a href="https://hindisink.com/about-us/" className="relative pl-4 before:content-['>'] before:absolute before:left-0">हमारे बारे में</a>
              </li>
              <li>
                <a href="https://hindisink.com/contact-us/" className="relative pl-4 before:content-['>'] before:absolute before:left-0">संपर्क करें</a>
              </li>
              <li>
                <a href="https://hindisink.com/disclaimer/" className="relative pl-4 before:content-['>'] before:absolute before:left-0">अस्वीकरण</a>
              </li>
              <li>
                <a href="https://hindisink.com/privacy-poilicy/" className="relative pl-4 before:content-['>'] before:absolute before:left-0">
                  गोपनीयता नीति
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="sub-footer items-center text-center bg-stone-950 rounded-2xl mb-4 mx-10 py-4 text-white">
        <p className="m-0">
          © 2025 <a href="https://hindisink.com">Hindi Sink</a> - All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
