import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { actions } from "../redux";

const ScheduleChart = () => {
    const state = useSelector(state => state.schedule);
    const dispatch = useDispatch();

    useEffect(() => {
        const data = state.data;
        // check if data is empty
        if (data.length === 0)
            return;

        let processedData = [];
        processedData.push({
            schedule_date: data[0]['schedule_time'].slice(0,10),
            schedule: [data[0]]
        })

        // processing and aggregates the data
        for (let i = 1; i < data.length; i++) {
            if (processedData[processedData.length - 1].schedule_date !== data[i].schedule_time.slice(0,10)) {
                processedData.push({
                    schedule_date: data[i]['schedule_time'].slice(0,10),
                    schedule: [data[i]]
                })
            }
            else
                processedData[processedData.length - 1].schedule.push(data[i]);
        }

        // setting redux state
        dispatch(actions.setScheduleProcessedData(processedData));
    }, [dispatch, state.data]);

    return <ResponsiveContainer width="50%" height={500}>
        <LineChart
            width={500}
            height={300}
            data={state.processedData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="schedule_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" name="Schedules" dataKey="schedule.length" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
}

export default ScheduleChart;