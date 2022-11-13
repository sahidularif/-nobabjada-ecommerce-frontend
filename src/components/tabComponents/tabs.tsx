import React, { ReactElement, useState } from "react"
import TabTitle from "./tabTitle"
import '../../styles/dashboard.css'
type Props = {
  children: ReactElement[];
  active?: 'string';
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="order-list">
      <nav className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-5 mt-4">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            active="active"
          />
        ))}
      </nav>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs