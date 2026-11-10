import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Filter, Layers, Code2, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects, allCategories } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured Engineering"
          title="Software Projects Portfolio"
          subtitle="Explore in-depth full-stack applications, geospatial navigation algorithms, and analytical case studies. Click any project card to access its comprehensive architectural details."
        />

        {/* Search & Filter Toolbar */}
        <div className="my-8 bg-white p-4 rounded-2xl border border-[#D1FAE5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent text-slate-800"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#064E3B] text-white shadow-xs'
                    : 'bg-slate-50 hover:bg-[#ECFDF5] text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Results Count */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#64748B]">
          <span>Showing {filteredProjects.length} of {projects.length} projects</span>
          <span className="text-emerald-700 font-semibold">Individual deep-dive pages available for all</span>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#D1FAE5] my-10">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="font-bold text-lg text-slate-700">No matching projects found</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try clearing your search query or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-[#10B981] text-white hover:bg-[#059669] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note on RideShare Connect Interactive Showcase */}
        <div className="mt-16 p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span className="font-bold text-sm text-[#064E3B]">
                Interactive Product Showcase: RideShare Connect
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Explore an interactive visual walkthrough of the carpooling platform including driver dashboards, passenger route corridor overlap previews, and dynamic fare computation.
            </p>
          </div>
          <a
            href="/projects/rideshare-connect"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#064E3B] text-white hover:bg-emerald-900 transition-colors whitespace-nowrap"
          >
            Open Interactive Showcase
          </a>
        </div>
      </div>
    </div>
  );
}

