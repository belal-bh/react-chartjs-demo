import React, {useState, useEffect} from 'react'
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
// import {faker} from '@faker-js/faker'


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


const BarChart = () => {
  const [leftVal, setLeftVal] = useState(0)
  const [rightVal, setRightVal] = useState(11)

  const months = ['January','February','March', 'April', 'May', 'June', 'July','August','September','October','November','December']
  const [labels, setLabels] = useState(months.slice(leftVal, rightVal+1))
  const [dataset1, setDataset1] = useState([867, 238, 234, 838, 565, 967, 605, 300, 125, 521, 112, 181])
  const [dataset2, setDataset2] = useState([665, 27, 801, 306, 854, 255, 231, 116, 719, 386, 486, 469])
  const [dataset3, setDataset3] = useState([947, 789, 479, 908, 72, 688, 373, 676, 483, 172, 872, 832])
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 1',
      },
      {
        label: 'Dataset 3',
        data: [],
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 2',
      },
    ],
  })

  useEffect(() => {
    setLabels(months.slice(leftVal, rightVal+1))
    console.log(labels)
    var newData = {
      labels: months.slice(leftVal, rightVal+1),
      datasets: [
        {
          label: 'Dataset 1',
          data: dataset1.slice(leftVal, rightVal+1),
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: dataset2.slice(leftVal, rightVal+1),
          backgroundColor: 'rgb(75, 192, 192)',
          stack: 'Stack 1',
        },
        {
          label: 'Dataset 3',
          data: dataset3.slice(leftVal, rightVal+1),
          backgroundColor: 'rgb(53, 162, 235)',
          stack: 'Stack 2',
        },
      ],
    }
    setData(newData)
    console.log("setted data", data)
    // console.log("newData", newData)
  }, [dataset1, dataset2, dataset3, leftVal, rightVal])


  const handleSelectChange = async(e, val, selectType) => {
    let left = leftVal
    let right = rightVal

    if(selectType===1){
      setLeftVal(val)
      console.log("left=>", val, selectType, leftVal)
      left = val
    }
    else if(selectType===2){
      setRightVal(val)
      console.log("right=>", val, selectType, rightVal)
      right = val
    }
    // left = Math.min(left, right)
    // right = Math.max(left, right)
    // setLabels(months.slice(left, right+1))
    console.log(left, right, labels, data)
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