import { useSelector } from "react-redux";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DayChart = () => {
    const state = useSelector(state => state.day);

    return <ResponsiveContainer width="50%" height={500}>
        <BarChart
            width={500}
            height={300}
            data={state.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="slot_time" allowDuplicatedCategory={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="lunch.length" name="Lunch slot" stackId="a" fill="#8884d8"/>
            <Bar dataKey="dinner.length" name="Dinner slot" stackId="a" fill="#82ca9d"/>
        </BarChart>
    </ResponsiveContainer>
}

export default DayChart;