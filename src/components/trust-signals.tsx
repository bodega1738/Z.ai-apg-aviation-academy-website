"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const interactiveFeatures = [
  {
    id: 1,
    title: "Accredited, career‑ready training",
    description: "Clear pathway from PPL to CPL, IR and ME for commercial pilot careers",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013010-U6QgXYjL3EMXD2DbSgAzBjFfEmdx1M.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013010-U6QgXYjL3EMXD2DbSgAzBjFfEmdx1M.mp4",
  },
  {
    id: 2,
    title: "Modern fleet and training environment",
    description: "Hands‑on hours on Cessna/Piper; simulator and maintenance support improve safety and readiness",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013353-blSgMVF5d1pnJNN2UKWdIoUegrWIVK.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013353-blSgMVF5d1pnJNN2UKWdIoUegrWIVK.mp4",
  },
  {
    id: 3,
    title: "Comprehensive support services",
    description: "Visa help, accommodation options, transport and bundled course pricing lower barriers to enrollment",
    videoSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013849-hae5BfC36JDeorK8XnnPOBYXoahM29.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-09-29%20013849-hae5BfC36JDeorK8XnnPOBYXoahM29.mp4",
  },
]

const trustBadges = [
  {
    label: "CAAP CERTIFIED",
    bgColor: "bg-amber-600",
    textColor: "text-amber-50",
    borderColor: "border-amber-400",
  },
  {
    label: "95% JOBS PLACEMENT RATE",
    bgColor: "bg-blue-600",
    textColor: "text-blue-50",
    borderColor: "border-blue-400",
  },
]

export function TrustSignals() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    null
  )
}
