"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectData } from "@/lib/projects";
import { modalBackdrop, modalContent } from "@/lib/animations";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            className="relative w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card sm:rounded-2xl shadow-2xl border border-gray-200/20 dark:border-white/5"
            onClick={(e) => e.stopPropagation()}
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close modal"
              id="modal-close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Hero image */}
            <div className="relative h-64 sm:h-80 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Status badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${
                  project.status === "ongoing"
                    ? "bg-primary text-white"
                    : "bg-white/90 text-gray-900"
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Title overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-16 z-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">
                  {project.categoryLabel}
                </p>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              className="p-6 sm:p-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-dark-border">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.year}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {project.details.tonnage && (
                  <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-4 border border-gray-100 dark:border-dark-border">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">Tonnage</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{project.details.tonnage}</p>
                  </div>
                )}
                {project.details.duration && (
                  <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-4 border border-gray-100 dark:border-dark-border">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">Duration</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{project.details.duration}</p>
                  </div>
                )}
                {project.details.standard && (
                  <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-4 border border-gray-100 dark:border-dark-border">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">Standard</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{project.details.standard}</p>
                  </div>
                )}
                <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-4 border border-gray-100 dark:border-dark-border">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-1">Category</p>
                  <p className="text-lg font-bold text-primary">{project.categoryLabel}</p>
                </div>
              </div>

              {/* Scope */}
              <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-5 border border-gray-100 dark:border-dark-border">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-2">Project Scope</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.details.scope}</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
