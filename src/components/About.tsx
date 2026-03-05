import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    // Added relative and overflow-hidden to contain the watermark
    <div className="relative overflow-hidden pt-32 md:pt-36 pb-20 px-6 md:px-12 min-h-screen bg-[#1F1F1F] text-neutral-200 flex items-center justify-center">
      
      {/* 
        WATERMARK LAYER 
        - Positioned absolutely behind everything (z-0)
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.07] w-full h-full overflow-hidden font-calligraphy text-white">
        <span className="absolute top-[0%] right-[-10%] md:top-[-4%] md:left-[45%] md:right-auto text-[40vw] md:text-[25vw] leading-none">
          张
        </span>
        <span className="absolute top-[25%] right-[-5%] md:top-[18%] md:left-[76%] md:right-auto text-[40vw] md:text-[25vw] leading-none">
          嘉
        </span>
        <span className="absolute top-[50%] right-[0%] md:top-[40%] md:left-[50%] md:right-auto text-[40vw] md:text-[25vw] leading-none">
          懿
        </span>
      </div>

      {/* Main Content Layer (z-10 to sit above watermark) */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Image Column - Left Side */}
        <div className="w-full lg:w-5/12">
          <div className="aspect-[3/4] bg-neutral-800 overflow-hidden relative shadow-2xl">
            {/* 
              IMPORTANT FOR USER / 用户必读:
              1. Rename your photo to 'portrait.jpg' (lowercase, no spaces).
              2. Open the photo in Preview (Mac), File > Export > JPEG (This ensures it is RGB, not CMYK).
              3. Place 'portrait.jpg' inside the 'public' folder.
              
              1. 把你的照片重命名为 'portrait.jpg' (小写，不要空格)。
              2. 用电脑打开照片，重新“导出”一次为 JPG (这能确保它不是 CMYK 打印色彩模式，Chrome 无法显示 CMYK)。
              3. 把照片放进 'public' 文件夹。
            */}
            <img 
              src="/portrait.jpg" 
              alt="Joy Zhang Portrait" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-1000"
              // onError={(e) => {
              //   // If local image fails, fallback to placeholder so the layout doesn't break
              //   e.currentTarget.src = "https://picsum.photos/id/338/800/1060";
              // }}
            />
          </div>
        </div>

        {/* Text Column - Right Side */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-4">
          <h1 className="font-serif-display text-3xl md:text-5xl font-normal mb-10 text-white leading-tight">
            "I create visual environments that breathe, listen, and react to the narrative."
          </h1>
          
          <div className="space-y-8 text-neutral-300 font-light text-lg leading-relaxed max-w-2xl font-sans">
            <p>
              Hi, my name is Joy Zhang (张嘉懿). I'm a New York-based theater artist specializing in directing and lighting design. Currently pursuing dual studies in Drama and Mathematics at NYU, I trained at Playwrights Horizons Theater School and the Production & Design Studio. I believe that mathematics is not the opposite of art, but its hidden skeleton; it offers the structural integrity that allows a production to stand. By applying this analytical precision to my work, I create a foundation where creativity can flourish safely and boldly, proving that logic is the vital, invisible rhythm behind every great performance.
            </p>
            <p>
              At its core, however, my work is defined by people. I view the theater as a sanctuary for connection: a thread that binds together those onstage, offstage, and backstage. I strive to direct with mercy, holding space for the specific needs and humanity of my actors to foster genuine vulnerability. As a designer, I aim to construct visual environments that support the story’s truth without explaining it away, offering the audience an atmosphere to inhabit rather than a conclusion to read. I blend art and logic to create work that is as structurally sound as it is emotionally resonant.
            </p>
          </div>

          {/* Portfolio/Resume Links Section */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            {/* LINK 2: Professional CV */}
            <a 
              href="/ProfessionalCV.pdf"
              download="Joy_Zhang_CV.pdf"
              className="group flex items-center gap-3 px-6 py-3 border border-neutral-600 hover:border-white transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white">Professional CV</span>
              <Download size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-700/50 grid grid-cols-2 md:grid-cols-3 gap-12 font-sans relative z-20">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-white">Focus</h3>
              <ul className="text-sm text-neutral-400 space-y-2 font-light">
                <li>Lighting Design</li>
                <li>Directing</li>
                <li>Scenography</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-white">Tools</h3>
              <ul className="text-sm text-neutral-400 space-y-2 font-light">
                <li>Vectorworks</li>
                <li>Adobe Suite</li>
              </ul>
            </div>
            <div>
               <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-white">Recognition</h3>
               <ul className="text-sm text-neutral-400 space-y-2 font-light">
                 <li>BFA NYU Drama 27'</li>
                 <li>BA NYU Math 27'</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;