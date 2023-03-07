import { Link } from "react-router-dom";
// import { productsData } from "./Product";
import { useState,useEffect } from "react";

// console.log(productsData);
export default function Main({addToCard}) {
  const [input, setInput] = useState('');
  const [shoes,setshoes] = useState([]);
useEffect(()=> {
  fetch("http://localhost:3000")
  .then(res =>res.json())
  .then (data=>setshoes(data))
} ,[])

  // const [buttonColors, setButtonColors] = useState({});

  // const handleClick = (id) => {
  //   const newButtonColors = { ...buttonColors };
  //   if (newButtonColors[id] === 'lightgray') {
  //     newButtonColors[id] = 'red';
  //   } else {
  //     newButtonColors[id] = 'lightgray';
  //   }
  //   setButtonColors(newButtonColors);
  // };

  return (
    <div className="main">
         <div className="inpp">
      <input className="inp" onChange={(e) => setInput(e.target.value)} />
          </div>  
      {shoes.filter((el) => el.name.toLowerCase().includes(input.toLowerCase())).map((el) => {
        return (
          <div key={el.id} className=''>
            <div className="card">
              <img src={el.image} alt="" className="images" />
              <div className="text_box">
                <Link to={`/product/${el.id}`}><h4>{el.name}</h4></Link>
                <p>{el.price}</p>
                <button onClick={() => {addToCard(el);
                // handleClick(el.id)
              }}
                  className="btn"  >Add</button>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}











   
  






// const test = 1
// "product" + test
// ==== "product1"
// `product${test}`


// export default function HookUseMemoe(){
//   const [count, setCount] = useState(0);
//   return(
//       <>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//       {value}
//       </>
//   )
// }