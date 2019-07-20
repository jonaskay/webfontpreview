import React from "react"
import PropTypes from "prop-types"

import HeroBackground from "./hero-background"
import heroStyles from "./hero.module.css"

const Hero = ({ headingStyle, defaultStyle }) => (
  <div className="p-6" style={{ width: 1024, height: 640 }}>
    <div className="relative w-full h-full text-white">
      <div className={heroStyles.background}>
        <HeroBackground />
      </div>
      <div className="relative z-10 h-full w-full">
        <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between">
          <div className={heroStyles.brand} style={headingStyle}>
            Brand
          </div>
          <div style={defaultStyle}>
            <div className={heroStyles.link}>Pricing</div>
            <div className={heroStyles.link}>Blog</div>
            <div className={heroStyles.link}>Contact</div>
          </div>
        </div>
        <div className="flex items-center h-full p-16">
          <div className="max-w-lg">
            <div className={heroStyles.h1} style={headingStyle}>
              Lorem ipsum dolor sit amet
            </div>
            <div className={heroStyles.lead} style={defaultStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={heroStyles.button} style={defaultStyle}>
              Try it now
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  headingStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
}

export default Hero
