import React,{useState,useEffect} from 'react'

// Example of a data array that
// you might receive from an API
// const data = [
//     { name: "Anom", age: 19, gender: "Male" },
//     { name: "Megha", age: 19, gender: "Female" },
//     { name: "Subham", age: 25, gender: "Male"},
//   ]



export default function HistoryTable() {
  const[data,setData] = useState([]);

  const fetchData = () =>{
  fetch("https://technoithub.in/api/view_data.php")
  .then((response)=>response.json())
  .then((json)=>{
    setData(json.ALL)
  })
  };

 useEffect(()=>{
  const interval = setInterval(() => {
    fetchData();
  }, 3000);
  return () => clearInterval(interval);
 },[])
  return (
    <div className='tab'>
      
       <table className='historyTable'>
         
        <tr className='row2'>
          <th id="tcol">IR_VALUE</th>
          <th id="tcol">PIR_VALUE</th>
          <th id="tcol">GAS_VALUE</th>
          <th id="tcol">TEMPERATURE_VALUE</th>
          <th id="tcol">HUMIDITY_VALUE</th>
        </tr>
        
        <tbody>
        {data.map((val) => {
          return (
            <tr>
              <td id="tcol">{val.IR_VALUE}</td>
              <td id="tcol">{val.PIR_VALUE}</td>
              <td id="tcol">{val.GAS_VALUE}</td>
              <td id="tcol">{val.TEMPERATURE_VALUE}</td>
              <td id="tcol">{val.HUMIDITY_VALUE}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}
