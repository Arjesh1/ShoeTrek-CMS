import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Bar, Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
  

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const Charts = () => {
    const {product, orders} = useSelector(state => state.product)

    const options = {
        responsive: true,
        plugins: {
          legend: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Income',
          },
      
        },
       
        
      };

      const options1 = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Orders',
          },
        },
      };

      const labels = [
        'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
      ];
    
      

      const monthlyTotalIncomes = {};
      const totalRevenue = orders.reduce((acc, obj) => acc + +obj.totalPrice, 0)

      labels.forEach(month => {
        const filteredArray = orders.filter(obj => {
          const objDate = new Date(obj.orderDate);
          return objDate.getMonth() === labels.indexOf(month);
        });
      
        
        const totalIncome = filteredArray.reduce((acc, obj) => acc + +obj.totalPrice, 0);
        monthlyTotalIncomes[month] = totalIncome;
        
    })

  

    

    const data = {
        labels,
        datasets: [
          {
            label: 'Income',
            fill: true,
            data: [monthlyTotalIncomes.January,
                monthlyTotalIncomes.February, 
                monthlyTotalIncomes.March, 
                monthlyTotalIncomes.April, 
                monthlyTotalIncomes.May, 
                monthlyTotalIncomes.June, 
                monthlyTotalIncomes.July, 
                monthlyTotalIncomes.August, 
                monthlyTotalIncomes.September,
                monthlyTotalIncomes.October,
                monthlyTotalIncomes.November,
                monthlyTotalIncomes.December,],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension:0.4,
           
            
          },
          
        ],
      };

      const data1 = {
        labels,
        datasets: [
          {
            label: 'Orders',
            fill: true,
            data: [1, 12, 334, 56, 576, 44,45, 78, 89,8 ,9, 67],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension:0.4,
           
            
          },
          
        ],
      };
   
    
  return (
    <div  className=' d-flex flex-wrap ' style={{height:"40vh", width: "100%"}} >

    
        <div className='border-end border-dark pe-1' style={{height:"40vh", width: "50%"}}>
            <div className='d-flex align-items-center gap-2'>
            <h6 className=''> Total Sales:  </h6>
            <h5 className='p-2 bg-secondary-subtle text-success fw-bold rounded'>${totalRevenue}</h5>
            </div>
        
        <Line  options={options} data={data} className='' />

        </div>

        <div className='ps-2' style={{height:"40vh", width: "50%"}}>
        <h6 className=''> Total Orders </h6>
        <Bar options={options1} data={data1} />

        </div>


      
    </div>
  )
}

export default Charts
