"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface SimpleModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  description: string
}

export function SimpleModal({ 
  isOpen, 
  onClose, 
  imageSrc, 
  description
}: SimpleModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Image */}
          <div className="relative aspect-video">
            <Image
              src={imageSrc}
              alt="Facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="p-6">
            <p className="text-gray-800 text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}