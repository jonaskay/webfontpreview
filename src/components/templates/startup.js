import React from "react"
import PropTypes from "prop-types"

import Template from "./template"
import drawing from "../../images/drawing.svg"
import styles from "./startup.module.css"

const Startup = ({ headingStyle, defaultStyle }) => (
  <Template width={1024} height={640}>
    <div className="relative h-full cursor-default">
      <div className={styles.background}></div>
      <div className="absolute top-0 left-0 right-0 mx-8 my-6 flex items-center justify-between">
        <div className="text-xl" style={headingStyle}>
          Your Brand
        </div>
        <div>
          <div className={styles.navItem} style={defaultStyle}>
            Docs
          </div>
          <div className={styles.navItem} style={defaultStyle}>
            Pricing
          </div>
          <div className={styles.navItem} style={defaultStyle}>
            About
          </div>
          <div className={styles.navItem} style={defaultStyle}>
            Contact
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className={styles.separator}></div>
        <div className="bg-gray-300 h-16"></div>
      </div>
      <div className="flex relative z-10 h-full">
        <div className="self-center w-1/2 ml-12">
          <div className="text-4xl leading-tight mb-2" style={headingStyle}>
            Keep shipping meaningful work
          </div>
          <div className="text-xl mb-6" style={defaultStyle}>
            Details matter. We're here to help you move fast and look good.
          </div>
          <div
            className={`rounded-full shadow-md px-6 py-2 bg-gray-900 text-white ${styles.button}`}
            style={defaultStyle}
          >
            Contact sales
          </div>
          <div className={`ml-6 ${styles.button}`} style={defaultStyle}>
            <span className="border-b-2 border-gray-900">Try it free</span>
          </div>
        </div>
        <div className="self-end w-1/2">
          <img src={drawing} alt="A person drawing" />
        </div>
      </div>
    </div>
  </Template>
)

Startup.propTypes = {
  headingStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
}

export default Startup
