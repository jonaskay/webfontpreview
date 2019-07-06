import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import WebFont from "./web-font"
import Family from "./family"
import listStyles from "./list.module.css"

const INITIAL_BUFFER = 20

const List = ({ disabled, selected, onSelect }) => {
  const [families, setFamilies] = useState([])
  const [buffer, setBuffer] = useState(null)

  useEffect(() => {
    ;(async () => {
      const result = await axios(
        `https://www.googleapis.com/webfonts/v1/webfonts`,
        {
          params: {
            key: process.env.GATSBY_GOOGLE_API_KEY,
            sort: "popularity",
          },
        }
      )

      const {
        data: { items },
      } = result

      setFamilies(items.map(item => item.family))
      setBuffer(INITIAL_BUFFER)
    })()
  }, [])

  useEffect(() => {
    if (families.length > 0 && typeof window !== "undefined") {
      WebFont.load({
        google: {
          families: families.slice(0, buffer),
        },
      })
    }
  }, [buffer])

  const handleScroll = event => {
    const { target } = event
    const { scrollHeight, scrollTop, clientHeight } = target

    const atBottom = () => scrollHeight - scrollTop === clientHeight

    if (atBottom()) {
      setBuffer(buffer + 10)
    }
  }

  const loadedFamilies = () => families.slice(0, buffer)
  const defaultClassName = "absolute top-0 bottom-0 right-0 overflow-y-scroll"

  return (
    <ol
      className={
        disabled
          ? `${defaultClassName} w-0`
          : `${defaultClassName} w-full ${listStyles.active}`
      }
      onScroll={handleScroll}
    >
      {loadedFamilies().map(family => (
        <Family
          key={family}
          name={family}
          active={family === selected}
          onClick={onSelect}
        />
      ))}
    </ol>
  )
}

List.propTypes = {
  disabled: PropTypes.bool,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

export default List
