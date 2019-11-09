import React from "react"
import PropTypes from "prop-types"

import articleStyles from "./article.module.css"

const Article = ({
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
    <div className="p-6" style={{ width: 768 }}>
      <div className="border p-16 bg-white">
        <div className={articleStyles.h1} style={headingStyle}>
          Lorem ipsum dolor sit amet
        </div>
        <div className={articleStyles.lead} style={bodyStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit
          libero volutpat sed cras ornare arcu. Tincidunt eget nullam non nisi
          est sit.
        </div>
        <div className={articleStyles.p} style={bodyStyle}>
          Semper viverra nam libero justo laoreet sit amet cursus sit. Mattis
          rhoncus urna neque viverra justo nec. Morbi tristique senectus et
          netus et. Mauris augue neque gravida in fermentum et sollicitudin ac
          orci. Integer quis auctor elit sed vulputate mi sit amet. Interdum
          varius sit amet mattis vulputate enim nulla aliquet. Ultricies mi quis
          hendrerit dolor magna eget est lorem. Aliquam sem et tortor consequat
          id porta nibh. Ipsum consequat nisl vel pretium. Pretium viverra
          suspendisse potenti nullam ac tortor. Pellentesque habitant morbi
          tristique senectus et.
        </div>
        <div className={articleStyles.h2} style={headingStyle}>
          Volutpat blandit aliquam etiam erat velit scelerisque
        </div>
        <div className={articleStyles.p} style={bodyStyle}>
          Mauris rhoncus aenean vel elit scelerisque mauris. Nisl tincidunt eget
          nullam non nisi est sit. Leo a diam sollicitudin tempor id eu. At
          auctor urna nunc id. Viverra aliquet eget sit amet tellus cras
          adipiscing enim. Ullamcorper eget nulla facilisi etiam dignissim diam
          quis. Sit amet porttitor eget dolor morbi non. Est lorem ipsum dolor
          sit amet consectetur adipiscing elit pellentesque. Vel turpis nunc
          eget lorem.
        </div>
        <div className={articleStyles.p} style={bodyStyle}>
          Urna et pharetra pharetra massa massa ultricies mi quis. Pulvinar
          etiam non quam lacus suspendisse. Euismod quis viverra nibh cras.
          Dictumst quisque sagittis purus sit amet volutpat consequat. Lacus vel
          facilisis volutpat est velit egestas dui id ornare. Porta lorem mollis
          aliquam ut porttitor leo. Donec pretium vulputate sapien nec sagittis
          aliquam malesuada bibendum arcu. Nec nam aliquam sem et tortor
          consequat. Accumsan sit amet nulla facilisi morbi tempus iaculis. At
          in tellus integer feugiat scelerisque. Posuere ac ut consequat semper.
          Ridiculus mus mauris vitae ultricies leo integer. Pellentesque eu
          tincidunt tortor aliquam nulla. Mauris a diam maecenas sed enim ut sem
          viverra. Tincidunt dui ut ornare lectus sit amet est placerat in. Arcu
          cursus vitae congue mauris rhoncus aenean.
        </div>
        <div className={articleStyles.p} style={bodyStyle}>
          Mattis rhoncus urna neque viverra. Sollicitudin nibh sit amet commodo
          nulla facilisi nullam. Blandit aliquam etiam erat velit scelerisque in
          dictum. Volutpat ac tincidunt vitae semper. Feugiat pretium nibh ipsum
          consequat nisl vel pretium. Enim lobortis scelerisque fermentum dui
          faucibus in.
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  headingFamily: PropTypes.string,
  headingFontStyle: PropTypes.string,
  headingFontWeight: PropTypes.string,
  bodyFamily: PropTypes.string,
  bodyFontStyle: PropTypes.string,
  bodyFontWeight: PropTypes.string,
}

export default Article
