"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  type: string;
  description: string;
  images: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-background-white max-w-6xl w-full my-8 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-background-white transition-all"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-gray-900">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} — image ${currentImageIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background-white/90 hover:bg-accent hover:text-background-white rounded-full flex items-center justify-center transition-all"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background-white/90 hover:bg-accent hover:text-background-white rounded-full flex items-center justify-center transition-all"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-background-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {project.images.length}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-h2 font-serif mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-4 text-body-sm text-text-light">
              <span>{project.type}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>

          <p className="text-body text-text-light leading-relaxed">
            {project.description}
          </p>

          {/* Thumbnail Navigation */}
          {project.images.length > 1 && (
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? "ring-2 ring-accent scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={project.images[index]}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
