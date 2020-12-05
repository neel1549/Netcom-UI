// React & Chartjs Imports
import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

// Resources:
// https://rapidapi.com/blog/axios-react-api-tutorial/
// https://react.semantic-ui.com/views/card/#types-card
// https://medium.com/wolox/creating-a-chart-assembly-line-with-react-chartjs-2-7f0b07fd53e5
// https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js:77-92
// https://github.com/jerairrest/react-chartjs-2/blob/react16/example/src/charts/HorizontalBar.js

// Chart Aesthetic Options
const options = {
    legend: {
        display: false,
    },
    scales: {
        pointLabels: {
            fontStyle: "bold",
        },
        xAxes: [
            {
                ticks: {
                    fontSize: 20,
                    fontFamily: "Cambria"
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    fontSize: 20,
                    fontFamily: "Cambria",
                    fontStyle: "bold",
                },
            },
        ],
    },
}

const titleStyle = {
    "textAlign" : "center"
};

const HorizontalBarChart = ({title, data}) => (
    <>
        <div className='header'>
            <h5 className='title' style={titleStyle}>{title}</h5>
        </div>
        <HorizontalBar data={data} options={options} />
    </>
)

export default HorizontalBarChart