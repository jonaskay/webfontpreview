import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import loadWebFonts from "../utilities/load-web-fonts"
import Category from "./category"
import Family from "./family"
import listStyles from "./list.module.css"

const INITIAL_BUFFER = 20

const List = ({ title, disabled, selected, onSelect, onClose }) => {
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
  const sortings = [
    { name: "Trending now", value: "trending" },
    { name: "Most popular", value: "popularity" },
    { name: "Newest", value: "date" },
    { name: "Name", value: "alpha" },
  ]

  const [data, setData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map(category => category.value)
  )
  const [sort, setSort] = useState(sortings[0].value)
  const [search, setSearch] = useState("")
  const [buffer, setBuffer] = useState(INITIAL_BUFFER)
  const availableFonts = data
    .filter(item => selectedCategories.includes(item.category))
    .filter(item => item.family.toLowerCase().includes(search.toLowerCase()))
    .slice(0, buffer)
    .map(item => {
      return {
        family: item.family,
        variants: item.variants,
      }
    })

  useEffect(() => {
    ;(async () => {
      const result = await axios(
        `https://www.googleapis.com/webfonts/v1/webfonts`,
        {
          params: {
            key: process.env.GATSBY_GOOGLE_API_KEY,
            sort: sort,
          },
        }
      )

      const {
        data: { items },
      } = result
      setData(items)
    })()
  }, [sort])

  useEffect(() => {
    loadWebFonts([selected])
  }, [selected])

  useEffect(() => {
    loadWebFonts(availableFonts.map(item => item.family))
  }, [availableFonts])

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

  const handleSearchChange = event => setSearch(event.target.value)

  const handleSortChange = event => setSort(event.target.value)

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
        <div className="border-l border-b px-2 py-4 bg-white">
          <input
            type="text"
            className="border-b border-gray-400 focus:border-gray-900 outline-none w-full text-"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="border-l border-b px-2 py-4 bg-white">
          <span className="inline-block mr-2">Sort by:</span>
          <select value={sort} onChange={handleSortChange}>
            {sortings.map(sorting => (
              <option key={sorting.value} value={sorting.value}>
                {sorting.name}
              </option>
            ))}
          </select>
        </div>
        {availableFonts.length > 0 ? (
          <ol className="flex-grow border-l">
            {availableFonts.map(font => (
              <Family
                key={font.family}
                name={font.family}
                variants={font.variants}
                active={font.family === selected}
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
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default List
