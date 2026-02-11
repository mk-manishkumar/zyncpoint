"use client";

import { motion } from "motion/react";
import { Search, X } from "lucide-react";

type Props = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const BlogSearchBar = ({ searchQuery, onSearchChange }: Props) => {
  return (
    <motion.div className="mb-10 mx-auto max-w-2xl" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
      <div className="relative group">
        {/* Search Icon */}
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary transition-colors duration-300 group-focus-within:text-primary" />

        {/* Input */}
        <input type="text" placeholder="Search the blog..." value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-[rgba(50,184,198,0.15)] bg-dark-secondary text-text placeholder:text-text-secondary focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300" />

        {/* Clear Button */}
        {searchQuery && (
          <button onClick={() => onSearchChange("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors duration-200" aria-label="Clear search">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default BlogSearchBar;
