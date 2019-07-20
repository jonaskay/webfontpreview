import React from "react"
import PropTypes from "prop-types"
import { PieChart, Pie, Cell } from "recharts"

const colors = ["#EDF2F7", "#CBD5E0", "#718096"]

const DashboardPieChart = ({ data, headingStyle, defaultStyle }) => (
  <div className="text-center">
    <PieChart width={250} height={250}>
      <Pie data={data} innerRadius={80} paddingAngle={2} dataKey="value">
        {data.map((_, index) => (
          <Cell key={index} fill={colors[index]} stroke="transparent" />
        ))}
      </Pie>
    </PieChart>
    <div className="-mt-2 mb-2 text-gray-500" style={headingStyle}>
      Lorem ipsum
    </div>
    <ol className="inline-block text-left" style={defaultStyle}>
      {data.map((item, index) => (
        <li key={index}>
          <div
            className="inline-block w-3 h-3 mr-2 rounded"
            style={{ background: colors[index] }}
          ></div>
          {item.value}
        </li>
      ))}
    </ol>
  </div>
)

DashboardPieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.number })),
  headingStyle: PropTypes.object.isRequired,
  defaultStyle: PropTypes.object.isRequired,
}

export default DashboardPieChart
