import React from "react"
import PropTypes from "prop-types"
import { AreaChart, Area } from "recharts"

const difference = (first, second) => {
  const percentage = Math.floor(((first - second) / second) * 100)
  return `${percentage}%`
}

const DashboardLineChart = ({ data, headingStyle, defaultStyle }) => (
  <div className="bg-gray-800">
    <div className="p-4 pb-8">
      <div
        className="text-xs text-gray-500 uppercase tracking-widest"
        style={headingStyle}
      >
        Lorem ipsum
      </div>
      <div className="flex items-center">
        <div className="text-3xl" style={defaultStyle}>
          {data[data.length - 1].value}
        </div>
        <div className="text-sm ml-2" style={defaultStyle}>
          {difference(data[data.length - 1].value, data[data.length - 2].value)}
        </div>
      </div>
    </div>
    <div className="pt-2 border-t border-gray-700">
      <AreaChart
        width={250}
        height={100}
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Area
          dot={false}
          type="monotone"
          dataKey="value"
          stroke="#718096"
          fill="#4A5568"
          strokeWidth={2}
        />
      </AreaChart>
    </div>
  </div>
)

DashboardLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  headingStyle: PropTypes.object.isRequired,
  defaultStyle: PropTypes.object.isRequired,
}

export default DashboardLineChart
