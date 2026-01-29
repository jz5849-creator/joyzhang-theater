import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  // We removed the handleSubmit function because we are now using the native HTML form action
  // to send data via Formspree.

  return (
    // Adjusted top padding: pt-32 provides enough clearance for the compact mobile nav
    <div className="pt-32 md:pt-36 pb-20 px-6 md:px-12 min-h-screen bg-[#1F1F1F] text-neutral-200 flex flex-col items-center justify-center">
      
      <div className="max-w-2xl w-full text-center">
        {/* Changed font to font-serif-display and added tracking-wide for an elegant look */}
        <h1 className="text-4xl md:text-6xl font-serif-display mb-8 text-white tracking-wide">Let's Create Together</h1>
        <p className="text-neutral-400 text-lg font-light mb-16">
          Open for collaborations, commissions, and coffee.
        </p>

        <div className="flex justify-center gap-10 mb-20">
          {/* Email Link - FIXED: Added 'mailto:' prefix so it opens email client */}
          <a 
            href="mailto:jiayizhang829@gmail.com" 
            className="p-5 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/j.oy_eeeee/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-5 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/joy-jiayi-zhang-49b44329a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-5 bg-neutral-800/50 border border-neutral-700 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* 
          IMPORTANT: To make this form work, go to https://formspree.io/
          1. Create a free account.
          2. Create a new form project.
          3. Copy the 'Endpoint URL' they give you.
          4. Replace 'https://formspree.io/f/YOUR_FORM_ID_HERE' below with your actual URL.
        */}
        <form 
          action="https://formspree.io/f/xpqwzqkq" 
          method="POST" 
          className="text-left space-y-10 font-sans"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group">
              <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 group-focus-within:text-white transition-colors">Name</label>
              <input 
                type="text" 
                name="name" // Added 'name' attribute for Formspree to identify the field
                required
                className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors text-white text-lg font-light"
              />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 group-focus-within:text-white transition-colors">Email</label>
              <input 
                type="email" 
                name="email" // Added 'name' attribute
                required
                className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors text-white text-lg font-light"
              />
            </div>
          </div>
          
          <div className="group">
            <label className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 group-focus-within:text-white transition-colors">Message</label>
            <textarea 
              name="message" // Added 'name' attribute
              rows={4}
              required
              className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors resize-none text-white text-lg font-light"
            ></textarea>
          </div>

          <div className="text-center pt-8">
            <button 
              type="submit"
              className="px-12 py-4 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] hover:bg-neutral-300 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-24 text-xs text-neutral-600 font-sans tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Joy Zhang. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;