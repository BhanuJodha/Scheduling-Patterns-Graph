import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

    const addToDayChart = (nextState, event) => {
        // setting clicked data to day-wise chart
        const newArr = [
            {
                slot_time: "9AM to 12AM",
                lunch: [],
                dinner: []
            },
            {
                slot_time: "12AM to 3PM",
                lunch: [],
                dinner: []
            },
            {
                slot_time: "3PM to 6PM",
                lunch: [],
                dinner: []
            },
            {
                slot_time: "6PM to 9PM",
                lunch: [],
                dinner: []
            },
        ]
        
        nextState.activePayload[0].payload.schedule.every((value) => {
            // creating time slot categories
            const time = moment(value.schedule_time).format("H");
            if (time >= 9 && time < 12)
                value.slot === 'L' ? newArr[0].lunch.push(value) : newArr[0].dinner.push(value);
            else if (time >= 12 && time < 15)
                value.slot === 'L' ? newArr[1].lunch.push(value) : newArr[1].dinner.push(value);
            else if (time >= 15 && time < 18)
                value.slot === 'L' ? newArr[2].lunch.push(value) : newArr[2].dinner.push(value);
            else
                value.slot === 'L' ? newArr[3].lunch.push(value) : newArr[3].dinner.push(value);
            
            return value;
        })

        dispatch(actions.setDayData(newArr));
    }

    return <ResponsiveContainer width="40%" height={300}>
        <AreaChart
            width={500}
            height={300}
            data={state.processedData}
            margin={{
                top: 5,
                // right: 30,
                // left: 20,
                // bottom: 5,
            }}
            onClick={addToDayChart}
        >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="schedule_date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" name="Schedules day wise" dataKey="schedule.length" stroke="#82ca9d" fill="#82ca9d" />
            {/* <Line type="monotone" name="Schedules" dataKey="schedule.length" stroke="#82ca9d" activeDot={{ r: 8 }} /> */}
        </AreaChart>
    </ResponsiveContainer>
}

export default ScheduleChart;