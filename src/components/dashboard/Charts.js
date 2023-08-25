import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Charts = () => {

    const options = {
        responsive: true,
        plugins: {
          legend: true,
          maintainAspectRatio: false
      
        },
        
      };

      const labels = [
        'Jan', 'Feb', 'March', 'April', 'May', 'June',
        'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Details',
            data: [1, 12, 334, 56, 576],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            tension:0.4,
           
            
          },
          
        ],
      };

    
  return (
    <div  className=' d-flex flex-wrap ' style={{height:"40vh", width: "100%"}} >

    
        <div className='' style={{height:"40vh", width: "50%"}}>
        <Line  options={options} data={data} className='' />

        </div>

        <div className='' style={{height:"40vh", width: "50%"}}>
        <Line  options={options} data={data} className='' />

        </div>


      
    </div>
  )
}

export default Charts
