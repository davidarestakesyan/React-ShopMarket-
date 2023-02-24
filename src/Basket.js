import React from 'react';

export default function Basketf({card}) {
  return (
    <div className='basket'>
      {card.map(element => {
        return (
          <div key={element.id} className = "basketob">
          <img className='basketimg' src={element.image}/>
          <p className='basketname'>{element.name}</p>
          <p className='basketprice'>{element.price}</p>
          </div>
        )
      })}
    </div>
  )
}


// function basket () {
// const [state,setState] = useState(false)  
// return 
// < onClick={() => setCount(true)}>>
        
//       </button>
// }
