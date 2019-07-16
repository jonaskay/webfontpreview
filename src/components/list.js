import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import WebFont from "./web-font"
import Category from "./category"
import Family from "./family"
import listStyles from "./list.module.css"

const INITIAL_BUFFER = 20

const loadWebFonts = families => {
  if (typeof window !== "undefined" && families.length > 0) {
    WebFont.load({
      google: {
        families,
      },
    })
  }
}

const List = ({ data, title, disabled, selected, onSelect, onClose }) => {
  const categories = [
    {
      name: "Serif",
      value: "serif",
    },
    {
      name: "Sans Serif",
      value: "sans-serif",
    },
    {
      name: "Display",
      value: "display",
    },
    {
      name: "Handwriting",
      value: "handwriting",
    },
    {
      name: "Monospace",
      value: "monospace",
    },
  ]

  const [selectedCategories, setSelectedCategories] = useState(
    categories.map(category => category.value)
  )
  const [buffer, setBuffer] = useState(INITIAL_BUFFER)
  const availableFamilies = data
    .filter(item => selectedCategories.includes(item.category))
    .slice(0, buffer)
    .map(item => item.family)

  useEffect(() => {
    loadWebFonts([selected])
  }, [selected])

  useEffect(() => {
    loadWebFonts(availableFamilies)
  }, [availableFamilies])

  const handleCategoryClick = value => {
    let newSelectedCategories
    if (selectedCategories.find(category => category === value)) {
      newSelectedCategories = selectedCategories.filter(
        category => category !== value
      )
    } else {
      newSelectedCategories = [...selectedCategories, value]
    }
    setSelectedCategories(newSelectedCategories)
  }

  const handleScroll = event => {
    const { target } = event
    const { scrollHeight, scrollTop, clientHeight } = target

    const atBottom = () => scrollHeight - scrollTop === clientHeight

    if (atBottom()) {
      setBuffer(buffer + 10)
    }
  }

  const defaultClassName = "absolute top-0 bottom-0 right-0"

  return (
    <div
      className={
        disabled
          ? `${defaultClassName} w-0`
          : `${defaultClassName} w-full ${listStyles.active}`
      }
      onScroll={handleScroll}
    >
      <div className="flex items-center justify-between md:hidden absolute md:relative top-0 w-full h-12 overflow-hidden px-2 border-l border-b bg-white font-bold">
        <div>{title}</div>
        <div className="cursor-pointer font-normal" onClick={onClose}>
          Done
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-full overflow-y-scroll mt-12 md:mt-0 flex flex-col">
        <div className="border-l border-b px-1 pt-1 pb-4 bg-white">
          {categories.map(category => (
            <Category
              key={category.value}
              name={category.name}
              value={category.value}
              active={selectedCategories.includes(category.value)}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        {availableFamilies.length > 0 ? (
          <ol className="flex-grow">
            {availableFamilies.map(family => (
              <Family
                key={family}
                name={family}
                active={family === selected}
                onClick={onSelect}
              />
            ))}
          </ol>
        ) : (
          <div className="flex-grow border-l p-4 bg-white text-center text-gray-600">
            No fonts found.
          </div>
        )}
      </div>
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default List
