import React from "react"
import PropTypes from "prop-types"

import HeroBackground from "./hero-background"
import heroStyles from "./hero.module.css"

const Hero = ({
  headingFamily,
  headingFontStyle,
  headingFontWeight,
  bodyFamily,
  bodyFontStyle,
  bodyFontWeight,
}) => {
  const headingStyle = {
    fontFamily: headingFamily,
    fontStyle: headingFontStyle,
    fontWeight: headingFontWeight,
  }
  const bodyStyle = {
    fontFamily: bodyFamily,
    fontStyle: bodyFontStyle,
    fontWeight: bodyFontWeight,
  }

  return (
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
            <div style={bodyStyle}>
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
              <div className={heroStyles.lead} style={bodyStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={heroStyles.button} style={bodyStyle}>
                Try it now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  headingFamily: PropTypes.string,
  headingFontStyle: PropTypes.string,
  headingFontWeight: PropTypes.string,
  bodyFamily: PropTypes.string,
  bodyFontStyle: PropTypes.string,
  bodyFontWeight: PropTypes.string,
}

export default Hero
