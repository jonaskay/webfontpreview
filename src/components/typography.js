import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import List from "./list"
import typogprahyStyles from "./typography.module.css"

const Typography = ({ options, selected, onClose }) => {
  const [data, setData] = useState([])

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
      setData(items)
    })()
  }, [])

  const renderList = option => {
    const handleFamilySelect = family => {
      option.onChange(family)
    }

    return (
      <List
        key={option.name}
        data={data}
        title={`Choose ${option.name.toLowerCase()}`}
        disabled={selected && option.name !== selected}
        selected={option.value}
        onSelect={family => handleFamilySelect(family)}
        onClose={onClose}
      />
    )
  }

  const defaultClassName = `flex-none w-64 relative h-full ${typogprahyStyles.transition}`

  return (
    <div
      className={
        selected
          ? `-ml-64 md:ml-0 ${defaultClassName}`
          : `ml-0 ${defaultClassName}`
      }
    >
      {data.length > 0 && options.map(option => renderList(option))}
    </div>
  )
}

Typography.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default Typography
