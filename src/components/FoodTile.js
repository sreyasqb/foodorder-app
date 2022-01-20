import React,{useState} from "react";

const FoodTile = (props) => {
    const [count,setCount]=useState(0);
    const incrementHandler=()=>{
        setCount(count+1);
    }
    const decrementHandler=()=>{
        if (count>0){
            setCount(count-1);
        }
        
    }
    
  return (
    <div className="my-[2vh] mx-[10%]">
        <hr className='pt-[2vh]'/>
      <img
        src={require(`../assets/${props.item.image}`)}
        className="rounded-[20px] mx-auto h-[30vh] w-[100%]"
      />
     
      <div className="flex mt-[1vh] justify-between">
        <div className="flex flex-col justify-start">
          <span className="text-[20px] font-medium">{props.item.dish}</span>
          <span className="text-[20px] text-left">&#8377; {props.item.price}</span>
        </div>
        <div className="self-center flex w-[50%] justify-end text-[25px]">
            <button className='bg-red-50 w-[30%]' onClick={decrementHandler}>-</button>
          <div className='border-solid border-[1px] w-[30%] border-gray-200'>{count}</div>
          <button className='w-[30%] bg-emerald-50' onClick={incrementHandler}>+</button>
        </div>
      </div>
    </div>
  );
};
export default FoodTile;
