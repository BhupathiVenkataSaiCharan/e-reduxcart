import React, { useState } from 'react';

export default function Button() {

        const [show, setShow] = useState(true);
        const [count, setCount] = useState(0);

        
  // const [count, setCount] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  return (
    <div>
      {/* <button className="btn btn-primary" style={{width:"100px",fontSize:"10px"}} 
                onClick={decrementCount}>Click to decrease by 1</button>
      <button className="btn btn-primary" style={{width:"100px",fontSize:"10px"}} 
                onClick={incrementCount} >Click to increase by 1</button>
      <button className="btn btn-primary" style={{width:"100px",fontSize:"10px"}} 
                onClick={toggleVisibility}>
        {isVisible ? 'Hide number' : 'Show number'}
      </button>
      {isVisible && (
        <input
          type="number"
          name="clicks"
          value={count}
          onChange={event => {
            setCount(event.target.value);
          }}
        />
      )} */}
      {show?
        <>
            <button className="btn btn-primary"
                onClick={incrementCount}
                style={{width:"100px", fontSize:"10px"}}>+</button>
                <p onChange={e=>setCount(e.target.value)}>{count}</p>
            <button className="btn btn-primary"
                onClick={decrementCount}
                style={{width:"100px", fontSize:"10px"}}>-</button>
        </>
        :null}
      <button className="btn btn-primary"
                style={{width:"100px", fontSize:"10px"}} 
                onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  );
}
