import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let num=0;
  const [num,setNumber]=useState(1);
  const [person,setPerson] = useState({
    name : "Sai Teja",
    age : 20
  })
  const [numberList,setNumberList] = useState([1]);
// to change a value of an object

  
  // const changeName = () =>{
  //     setPerson(previousValue =>{
  //       return { ...previousValue,name : "Charan"};
  //     })
  //   }
  const addValue = () =>{
      // setNumber(num+1);
      setNumberList(previousValue =>{
        // console.log(num);
        return [...previousValue,num];
      })
    }
    const increaseCount = ()=>{
      setNumber(num+1);
      addValue();
      console.log(num);
    } 
  
  return (
    <div>
      <h1>Hello</h1>
      <button onClick = {increaseCount}>Click to increase count - {num}</button>
      {/* <div>This is {person.name} and age is {person.age}</div> */}
      <div>This list contains {JSON.stringify(numberList)}</div>
    </div>
  )
}

export default App
