import React from "react";
import Tab from "../tabComponents/tab";
import Tabs from "../tabComponents/tabs";
import AllOrder from "./allOrder";
const Order = () => {
    return (
      <div className="">
          <Tabs>
            <Tab title="All"><AllOrder/></Tab>
            <Tab title="Paid"><h1>how</h1></Tab>
            <Tab title="Pending"><h1>Are you?</h1></Tab>
            <Tab title="Cancelled"><h1>Are you?</h1></Tab>
        </Tabs>
      </div>
    )
}
export default Order