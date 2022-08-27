import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, BarChart, Bar, Cell, PieChart, Pie, Sector } from 'recharts'

const Chart = () => {
    const pdata = [
        {
            Date: "20 sept",
            student: "280",
            Order: "100"
        },
        {
            Date: "25 sept",
            student: "80",
            Order: "300"
        },
        {
            Date: "30 sept",
            student: "105",
            Order: "150"
        },
        {
            Date: "35 sept",
            student: "230",
            Order: "200"
        },
        {
            Date: "react",
            student: "05",
            Order: "150"
        },
    ]
    return (
        <>
            <h1>Line chart</h1>
            <ResponsiveContainer width="90%" aspect="3">
                <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey={"Date"} interval={"preserveStartEnd"} />
                    <YAxis />
                    {/* <Legend /> */}
                    <Line dataKey={"Order"} stroke="red" />

                    {/* <Line dataKey={"student"} /> */}

                </LineChart>


            </ResponsiveContainer>
            <h2>Curvechart</h2>
            <ResponsiveContainer width="90%" aspect="3">
                <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey={"Date"} interval={"preserveStartEnd"} />
                    <YAxis />
                    <Legend />
                    <Line dataKey={"Order"} stroke="red" type={"monotone"} />

                    {/* <Line dataKey={"student"} type={"monotone"} /> */}

                </LineChart>


            </ResponsiveContainer>

            <h2>Bar chart</h2>

            <ResponsiveContainer width="90%" aspect="3">
                <BarChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey={"Date"} interval={"preserveStartEnd"} />
                    <YAxis />
                    <Legend />
                    <Bar dataKey={"Order"} stroke="red" type={"monotone"} />

                    <Bar dataKey={"student"} type={"monotone"} />

                </BarChart>


            </ResponsiveContainer>


        </>
    )
}

export default Chart