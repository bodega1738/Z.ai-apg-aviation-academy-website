"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ZoomIn, MapPin, Calendar } from "lucide-react"

interface FacilityModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
  description: string
  year: string
}

export function FacilityModal({ 
  isOpen, 
  onClose, 
  imageSrc, 
  title, 
  description, 
  year 
}: FacilityModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && isOpen) {
        const modalElement = document.querySelector('[role="dialog"]')
        if (modalElement) {
          const focusableElements = modalElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus()
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus()
              e.preventDefault()
            }
          }
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleTab)
      document.body.style.overflow = 'hidden'
      
      // Focus management
      setTimeout(() => {
        const closeButton = document.querySelector('[aria-label="Close modal"]') as HTMLElement
        closeButton?.focus()
      }, 100)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-6xl mx-4 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="relative bg-[#212A36] rounded-2xl shadow-2xl overflow-hidden border border-[#E53935]/20">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#E53935]" />
              </div>
              <div>
                <h3 id="modal-title" className="text-2xl font-bold text-white">{title}</h3>
                <div className="flex items-center gap-2 text-[#d97706]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{year}</span>
                </div>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white group-hover:text-[#E53935] transition-colors" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Image Section */}
              <div className="lg:col-span-2">
                <div className="relative rounded-xl overflow-hidden bg-black/20">
                  <div className="aspect-video relative">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      onLoad={() => setIsLoaded(true)}
                    />
                    
                    {/* Loading State */}
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/20 to-[#d97706]/20 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#E53935] border-t-transparent" />
                      </div>
                    )}
                    
                    {/* Image Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Zoom Indicator */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                      <ZoomIn className="w-4 h-4 text-white" />
                      <span className="text-xs text-white font-medium">High Resolution</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="lg:col-span-1 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-[#E53935]/10 to-[#d97706]/10 rounded-xl p-6 border border-[#E53935]/20">
                  <h4 className="text-lg font-semibold text-white mb-4 font-serif">
                    Facility Overview
                  </h4>
                  <p id="modal-description" className="text-white/90 leading-relaxed mb-6">
                    {description}
                  </p>
                  
                  {/* Additional Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#E53935] rounded-full" />
                      <span className="text-sm text-white/80">
                        State-of-the-art aviation infrastructure
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#d97706] rounded-full" />
                      <span className="text-sm text-white/80">
                        Modern training facilities and equipment
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#E53935] rounded-full" />
                      <span className="text-sm text-white/80">
                        Professional aviation environment
                      </span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-[#d97706] italic">
                      "Where aviation dreams take flight since {year}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Navigation Hints */}
            <div className="mt-6 flex items-center justify-between text-sm text-white/60">
              <div className="flex items-center gap-4">
                <span>Press ESC to close</span>
                <span>•</span>
                <span>Click outside to dismiss</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>High quality image loaded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}