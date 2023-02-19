import { useSelector } from "react-redux";
import moment from "moment";

import DayChart from "./DayChart";
import PatternsChart from "./PatternsChart";
import ScheduleChart from "./ScheduleChart";
import "../styles/styles.css";

function App() {
  const state = useSelector(state => state.patterns);

  return (
    <>
      <nav>Mini Assignment<span>@For mealful incorporation</span></nav>
      <div className="master-chart">
        <h3 className="heading">Scheduling Patterns Graph</h3>
        <p className="discription">In this graph all schedules from <b>{state.processedData.length && moment(state.processedData[0].item_date).format("MMM Do YYYY")}</b> to <b>{state.processedData.length && moment(state.processedData[state.processedData.length - 1].item_date).format("MMM Do YYYY")}</b> are aggregated in a sorted manner. And this graph is formed on the basis of the number of aggregated schedules on a particular item date. Click on any date data which you want to know more about. The second graph shows the different schedules of the different dates on the particular item dates which you have selected. And the last graph shows a day-wise analysis of time slots and the type of slots like (<i>lunch or dinner</i>).</p>
        <PatternsChart />
      </div>
      <div className="sub-charts">
        <ScheduleChart />
        <DayChart />
      </div>
    </>
  );
}

export default App;
