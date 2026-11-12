'use client'

import React, { useEffect, useRef } from 'react'
import * as maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useTheme } from 'next-themes'

interface MapProps {
  center?: [number, number] // [lng, lat]
  zoom?: number
  className?: string
  markerTitle?: string
}

const CARTO_DARK = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
const CARTO_LIGHT = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

export function MapCN({
  center = [80.2872, 13.1118], // Chennai Old Washermenpet
  zoom = 13.5,
  className = 'w-full h-full',
  markerTitle = 'Megovista HQ',
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const marker = useRef<maplibregl.Marker | null>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!mapContainer.current) return

    const isDark = resolvedTheme !== 'light'
    const styleUrl = isDark ? CARTO_DARK : CARTO_LIGHT

    if (!map.current) {
      const mapInstance = new maplibregl.Map({
        container: mapContainer.current,
        style: styleUrl,
        center: center,
        zoom: zoom,
        attributionControl: false,
        dragRotate: false,
        pitchWithRotate: false,
      })

      // Add zoom control
      mapInstance.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right')

      // Create custom marker element matching Megovista brand
      const el = document.createElement('div')
      el.className = 'relative flex items-center justify-center cursor-pointer group'
      el.innerHTML = `
        <div class="absolute w-10 h-10 rounded-full bg-[#FF5A36]/30 animate-ping"></div>
        <div class="relative w-7 h-7 rounded-full bg-[#0C0B14] border-2 border-[#FF5A36] flex items-center justify-center shadow-xl">
          <div class="w-2.5 h-2.5 rounded-full bg-[#FF5A36]"></div>
        </div>
        <div class="absolute -bottom-7 whitespace-nowrap px-2 py-0.5 rounded-md bg-[#0C0B14]/90 text-white font-mono text-[10px] font-bold border border-white/10 shadow-lg pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
          ${markerTitle}
        </div>
      `

      const markerInstance = new maplibregl.Marker({ element: el })
        .setLngLat(center)
        .addTo(mapInstance)

      marker.current = markerInstance
      map.current = mapInstance
    } else {
      map.current.setStyle(styleUrl)
    }

    return () => {
      // MapLibre cleanup on unmount
    }
  }, [resolvedTheme, center, zoom, markerTitle])

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-[20px]" />
    </div>
  )
}
