import React, { useState, useEffect, useCallback } from 'react';
import { PROJECTS } from '../constants';
import type { Project, ProjectCategory } from '../types'; // 使用 type 引入接口
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorksProps {
  limit?: number;
  showTitle?: boolean;
  onViewAll?: () => void;
}

const Works: React.FC<WorksProps> = ({ limit, showTitle = true, onViewAll }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Categories for the filter bar
  const categories = ['All', 'Design', 'Directing', 'Producing', 'Performing'];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Filter Logic
  const getDisplayedProjects = () => {
    let filtered = PROJECTS;
    
    // 1. Filter by Category (only applies if title is shown / not homepage mode)
    if (showTitle && activeCategory !== 'All') {
      filtered = PROJECTS.filter(p => {
        // Check if category is an array (multi-category project)
        if (Array.isArray(p.category)) {
          return p.category.includes(activeCategory as ProjectCategory);
        }
        // Check if category is a single string
        return p.category === activeCategory;
      });
    }

    // 2. Apply Limit (if provided, usually for Homepage view)
    if (limit) {
      return filtered.slice(0, limit);
    }

    return filtered;
  };

  const displayedProjects = getDisplayedProjects();

  // Reduced padding from previous pt-44 to pt-32/28 since nav is now compact on mobile
  const containerPaddingTop = showTitle ? 'pt-32 md:pt-36' : 'pt-24 md:pt-32';

  // DYNAMIC GRID LAYOUT
  const gridClasses = showTitle 
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
    : "grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"; // Bigger gaps for homepage

  return (
    <div className={`${containerPaddingTop} pb-32 px-6 md:px-12 ${!showTitle ? 'min-h-0' : 'min-h-screen'} bg-[#1F1F1F] text-neutral-200`}>
      
      {/* Intro Header - Only show if showTitle is true (Portfolio Page) */}
      {showTitle && (
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 tracking-widest text-white uppercase">Portfolio</h2>
          <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
            A collection of works across disciplines.
          </p>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b border-transparent ${
                  activeCategory === cat 
                    ? 'text-white border-white' 
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className={`grid ${gridClasses} max-w-[1800px] mx-auto min-h-[300px]`}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-500"
              onClick={() => setSelectedProject(project)}
            >
              {/* Landscape aspect ratio (3:2 = 1.5:1) */}
              <div className="relative aspect-[3/2] overflow-hidden bg-neutral-800 shadow-lg">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              {/* Text Layout */}
              <div className="mt-1">
                <div className="flex justify-between items-baseline">
                  <h3 className={`font-normal text-white group-hover:text-neutral-300 transition-colors tracking-wide truncate pr-2 ${!showTitle ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <span className="text-neutral-500 text-sm tracking-widest font-light flex-shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mt-2 font-sans font-medium text-left">
                  {project.role}
                </p>
              </div>
            </div>
          ))
        ) : (
          /* Empty State if no projects in category */
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-neutral-500">
            <p className="text-lg font-light">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* "View All" Link - Only on Homepage (when limit is set or showTitle is false) */}
      {!showTitle && onViewAll && (
        <div className="mt-24 w-full flex justify-center animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
          <button 
            onClick={onViewAll}
            className="group flex items-center gap-4 text-white uppercase tracking-[0.25em] text-sm hover:text-neutral-400 transition-colors pb-1 border-b border-white hover:border-neutral-400"
          >
            View All Works
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      )}

      {/* Full Screen Project Detail Overlay */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => 
      prev !== null ? (prev - 1 + project.gallery.length) % project.gallery.length : null
    );
  }, [project.gallery.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => 
      prev !== null ? (prev + 1) % project.gallery.length : null
    );
  }, [project.gallery.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <div className="fixed inset-0 z-[60] bg-[#1F1F1F] overflow-y-auto animate-in fade-in duration-300 text-neutral-200">
      
      {/* Close Button - Sticky */}
      <div className="fixed top-0 right-0 p-8 z-50">
        <button 
          onClick={onClose}
          className="p-3 bg-black/20 hover:bg-white hover:text-black rounded-full backdrop-blur-md transition-all duration-300 group border border-transparent hover:border-white"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Project Header */}
        <div className="text-center mb-16 max-w-3xl animate-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-light mb-8 text-white uppercase tracking-wide">{project.title}</h1>
          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-400 font-sans">
            <span>{project.role}</span>
            <span className="opacity-30">•</span>
            <span>{project.venue}</span>
            <span className="opacity-30">•</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Detailed Credits Section */}
        {(project.credits || project.productionCompany) && (
          <div className="w-full max-w-4xl mx-auto mb-24 px-4 md:px-12 animate-in slide-in-from-bottom-10 duration-700 delay-100">
            
            {/* Divider */}
            <div className="w-full h-px bg-neutral-800 mb-10" />
            
            {/* Header: Company & Venue */}
            <div className="mb-8">
              {project.productionCompany && (
                <h3 className="text-xl md:text-2xl text-white uppercase tracking-widest font-normal mb-2">
                  {project.productionCompany}
                </h3>
              )}
              {project.venue && (
                <p className="text-neutral-500 text-sm uppercase tracking-[0.2em]">
                  {project.venue}
                </p>
              )}
            </div>

            {/* Credits List */}
            {project.credits && project.credits.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                {project.credits.map((credit, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-neutral-900/50 pb-2 md:border-none md:pb-0">
                    <span className="text-neutral-500 uppercase text-xs tracking-widest font-semibold shrink-0">
                      {credit.role}:
                    </span>
                    <span className="text-neutral-300 text-sm font-light uppercase tracking-wide text-left">
                      {credit.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Gallery Stack */}
        <div className="w-full space-y-24">
          {project.gallery.map((img, idx) => (
            <div 
              key={idx}
              className="w-full relative cursor-zoom-in animate-in slide-in-from-bottom-20 duration-1000 fill-mode-backwards"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => setLightboxIndex(idx)}
            >
              <img 
                src={img} 
                alt={`${project.title} view ${idx + 1}`} 
                className="w-full h-auto object-cover shadow-2xl" 
              />
            </div>
          ))}
        </div>

        {/* Footer Navigation within Modal */}
        <div className="mt-32 pt-12 border-t border-neutral-800 w-full text-center">
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-white uppercase tracking-widest text-xs transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] bg-[#2b2b2b] flex items-center justify-center animate-in fade-in duration-300">
          
          {/* Lightbox Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-8 right-8 p-3 text-neutral-400 hover:text-white z-50 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Previous Button - Always Visible for Looping */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 p-4 text-neutral-400 hover:text-white z-50 transition-colors hover:scale-110 duration-200"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
            <img 
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} full screen`}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>

          {/* Next Button - Always Visible for Looping */}
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-4 text-neutral-400 hover:text-white z-50 transition-colors hover:scale-110 duration-200"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
          
          {/* Counter removed as requested */}
        </div>
      )}

    </div>
  );
};

export default Works;