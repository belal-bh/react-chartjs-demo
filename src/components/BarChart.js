import React, {useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import {faker} from '@faker-js/faker'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  maintainAspectRatio: false,
  responsive: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 1',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 2',
    },
  ],
}


const BarChart = () => {
  const [val, setVal] = useState([30, 40])
  const [leftVal, setLeftVal] = useState(0)
  const [rightVal, setRightVal] = useState(11)
  const months = ['January','February','March', 'April', 'May', 'June', 'July','August','September','October','November','December']
  
  

  const handleChange = (e, data) => {
    console.log(data)
    setVal(data)
  }

  const handleSelectChange = (e, data, selectType) => {
    if(selectType==1){
      setLeftVal(data)
    }
    else if(selectType==2){
      setRightVal(data)
    }
    console.log(data)
  }

	return (<div>
    <label>Select Month Range: </label>
    <select defaultValue={0} onChange={(event) => handleSelectChange(event, event.target.value, 1)}>
      {months.map((v, i) =><option key={i} value={i}>{v}</option>)}
    </select>

    <label> to </label>
    <select defaultValue={11} onChange={(event) => handleSelectChange(event, event.target.value, 2)}>
      {months.map((v, i) =><option key={i} value={i}>{v}</option>)}
    </select>

    
		<Bar 
      data={data}
      options={options}
      height={400}
      width={600}
    />
	</div>)
}

export default BarChart