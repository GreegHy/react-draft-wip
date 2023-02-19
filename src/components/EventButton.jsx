import React from 'react'

function EventButton() {
 let [count, setCount] = useState(0);

 function incrementCount() {
   count = count + 1;
   setCount(count);
 }
 function decrementCount() {
   count = count - 1;
   setCount(count);
 }
 return (
   <div className="Counter">
     <div>{count}</div>
     <button onClick={incrementCount}>+</button>
     <button onClick={decrementCount}>-</button>
   </div>
 );
}

export default EventButton