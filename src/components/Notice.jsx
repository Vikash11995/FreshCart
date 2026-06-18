import React, { useRef, useEffect, useState } from 'react'

const Notice = () => {
  const contentRef = useRef(null)
  const containerRef = useRef(null)
  const [animationDuration, setAnimationDuration] = useState(20)

  useEffect(() => {
    // Dynamically set duration based on content + container width for smoother loop
    const updateDuration = () => {
      const contentWidth = contentRef.current?.offsetWidth || 0
      const containerWidth = containerRef.current?.offsetWidth || 0
      // Set min speed (pixels per second) to around 40 so that even on wide screens it's not too fast
      // Duration makes sure whole text fully scrolls off left before repeating
      // Add extra buffer for full visibility; prevent jumpiness on mobile!
      if (contentWidth && containerWidth) {
        const pixelsToTravel = contentWidth + containerWidth + 32 // add some buffer
        const minSpeed = 40 // px/s, lower value means slower (better visibility)
        let duration = pixelsToTravel / minSpeed
        setAnimationDuration(Math.max(duration, 8))
      }
    }
    updateDuration()
    window.addEventListener('resize', updateDuration)
    return () => window.removeEventListener('resize', updateDuration)
  }, [])

  const slideAnimation = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    willChange: 'transform',
    animation: `notice-slide ${animationDuration}s linear infinite`
  }

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: '#fff3cd',
        color: '#856404',
        padding: '8px 0',
        borderBottom: '1px solid #ffeeba',
        fontWeight: 'bold',
        fontSize: '1rem',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        minHeight: '1em',
        zIndex: 30,
      }}
    >
      <style>{`
        @keyframes notice-slide {
          0% {
            transform: translateX(100%);
          }
          90% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <span
        ref={contentRef}
        style={slideAnimation}
      >
        <span className='text-red-600'>Notice: </span>
        The add to cart functionality is currently unavailable. This website is intended for viewing product prices only.
      </span>
    </div>
  )
}

export default Notice
