import React from "react"
import PropTypes from "prop-types"

import DashboardPieChart from "./dashboard-pie-chart"
import DashboardLineChart from "./dashboard-line-chart"
import dashboardStyles from "./dashboard.module.css"

const areaDataSet = [
  [
    { value: 271 },
    { value: 39 },
    { value: 85 },
    { value: 607 },
    { value: 530 },
    { value: 752 },
    { value: 151 },
  ],
  [
    { value: 977 },
    { value: 982 },
    { value: 492 },
    { value: 679 },
    { value: 556 },
    { value: 209 },
    { value: 857 },
  ],
  [
    { value: 921 },
    { value: 556 },
    { value: 50 },
    { value: 803 },
    { value: 989 },
    { value: 143 },
    { value: 927 },
  ],
]
const pieDataSet = [
  [{ value: 79.9 }, { value: 10.2 }, { value: 58.9 }],
  [{ value: 478 }, { value: 365 }, { value: 323 }],
  [{ value: 83382 }, { value: 11420 }, { value: 92680 }],
]

const Dashboard = ({ headingFamily, bodyFamily }) => {
  const headingStyle = { fontFamily: headingFamily }
  const bodyStyle = { fontFamily: bodyFamily }

  return (
    <div className="p-6" style={{ width: 1024 }}>
      <div className="border p-16 bg-gray-900 text-white">
        <div className={dashboardStyles.h1} style={headingStyle}>
          Lorem ipsum
        </div>
        <div className="flex justify-between">
          {areaDataSet.map((data, index) => (
            <DashboardLineChart
              key={index}
              data={data}
              headingStyle={headingStyle}
              bodyStyle={bodyStyle}
            />
          ))}
        </div>
        <div className={dashboardStyles.h2} style={headingStyle}>
          Lorem ipsum
        </div>
        <div className="flex justify-between">
          {pieDataSet.map((data, index) => (
            <DashboardPieChart
              key={index}
              data={data}
              headingStyle={headingStyle}
              bodyStyle={bodyStyle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  headingFamily: PropTypes.string,
  bodyFamily: PropTypes.string,
}

export default Dashboard
