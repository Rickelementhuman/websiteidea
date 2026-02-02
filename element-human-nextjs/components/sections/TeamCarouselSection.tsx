'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const teamMembers = [
  { name: 'Matt', role: 'Chief Executive Officer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a5c161c8044560cc2074f2_MattProf.jpeg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a5c161c8044560cc2074f2_MattProf.jpeg' },
  { name: 'Diego', role: 'Chief Technology Officer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68b7c276379679050b2f9a2e_DiegoProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a5cc02796159e22f664616_DiegoFun.jpeg' },
  { name: 'Charlie', role: 'Head of Finance', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa99189275cba3dc51a_CharlieProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa99bd5ca0f00913115_CharlieFun.jpg' },
  { name: 'Hamish', role: 'Chief Customer Officer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa85dd3ad2de5caa9c4_HamishProf.png', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a32ea49d2ece7ad9fa6f4a_HamishFun.png' },
  { name: 'Paul', role: 'Chief Revenue Officer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa84a72116f2f1599a3_PaulProf.JPG', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa8fb1f74245f404bb6_PaulFun.jpg' },
  { name: 'Aliaksandra', role: 'Head of Operations', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa9813dcfc40a54cd8e_AliaksandraProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a32852a3876fad95715469_AliaksandraFun.jpg' },
  { name: 'Koko', role: 'Front-end Engineer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa9118175dba5bd92a4_KokoProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa8da4c4a5087b9a08a_KokoFun.jpeg' },
  { name: 'Lilit', role: 'Back-end Engineer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa8fac6263545266eed_LilithProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa8fac6263545266eed_LilithProf.jpg' },
  { name: 'Iulia', role: 'Data Analyst', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68e229930b7b84e9f4da5fa0_IuliaProf.jpeg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68e2295a2f5c74270c5f2c50_IuliaFun.jpeg' },
  { name: 'Manuel', role: 'Customer Success', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa99ac687e47946792d_ManuelProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa967a414c020a03420_ManuelFun.jpg' },
  { name: 'Teodora', role: 'Customer Success', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa9a6cc83f91642a047_TeodoraProf.jpg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68a31aa8bc4fcdd63917ccf4_TeodoraFun.jpg' },
  { name: 'Rick', role: 'GTM Engineer', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68ac6ec9018be239d09da0d3_RickProf.jpeg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68ac6f695b168eac8092b67c_RickFun.jpg' },
  { name: 'Steph', role: 'VP, Go To Market', profPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68c91bd67ec0e9bedf4d1f84_StephProf.jpeg', funPic: 'https://cdn.prod.website-files.com/5e943092459693077575d420/68c91bda36b6c6570f491f76_StephFun.jpg' },
]

function getCardPosition(index: number, currentIndex: number, totalCards: number) {
  const offset = (index - currentIndex + totalCards) % totalCards

  if (offset === 0) {
    return { position: 'center', transform: 'translateX(-50%) scale(1.1)', zIndex: 10, opacity: 1, filter: 'grayscale(0%)' }
  } else if (offset === 1) {
    return { position: 'right-1', transform: 'translateX(-50%) translateX(200px) scale(0.9) translateZ(-100px)', zIndex: 5, opacity: 0.9, filter: 'grayscale(100%)' }
  } else if (offset === 2) {
    return { position: 'right-2', transform: 'translateX(-50%) translateX(400px) scale(0.8) translateZ(-300px)', zIndex: 1, opacity: 0.7, filter: 'grayscale(100%)' }
  } else if (offset === totalCards - 1) {
    return { position: 'left-1', transform: 'translateX(-50%) translateX(-200px) scale(0.9) translateZ(-100px)', zIndex: 5, opacity: 0.9, filter: 'grayscale(100%)' }
  } else if (offset === totalCards - 2) {
    return { position: 'left-2', transform: 'translateX(-50%) translateX(-400px) scale(0.8) translateZ(-300px)', zIndex: 1, opacity: 0.7, filter: 'grayscale(100%)' }
  } else {
    return { position: 'hidden', transform: 'translateX(-50%) scale(0.7)', zIndex: 0, opacity: 0, filter: 'grayscale(100%)' }
  }
}

export function TeamCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFunPic, setShowFunPic] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[450px] perspective-1000 mb-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-brand-navy hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-brand-navy shadow-lg hover:scale-110"
              aria-label="Previous team member"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-brand-navy hover:text-white transition-all duration-300 flex items-center justify-center text-2xl text-brand-navy shadow-lg hover:scale-110"
              aria-label="Next team member"
            >
              ›
            </button>

            {/* Cards */}
            <div className="relative w-full h-full preserve-3d">
              {teamMembers.map((member, index) => {
                const cardStyle = getCardPosition(index, currentIndex, teamMembers.length)

                return (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-0 w-[280px] h-[380px] cursor-pointer"
                    style={{
                      zIndex: cardStyle.zIndex,
                    }}
                    animate={{
                      transform: cardStyle.transform,
                      opacity: cardStyle.opacity,
                    }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setShowFunPic(index)}
                    onMouseLeave={() => setShowFunPic(null)}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={showFunPic === index ? member.funPic : member.profPic}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500"
                        style={{ filter: cardStyle.filter }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Member Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-brand-navy mb-2 relative inline-block">
                {teamMembers[currentIndex].name}
                <span className="absolute left-[-120px] top-1/2 w-[100px] h-0.5 bg-brand-navy"></span>
                <span className="absolute right-[-120px] top-1/2 w-[100px] h-0.5 bg-brand-navy"></span>
              </h2>
              <p className="text-lg text-neutral-600 uppercase tracking-wider font-medium">
                {teamMembers[currentIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-navy scale-125'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
