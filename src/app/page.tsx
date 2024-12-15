"use client"

import { Button } from "@/components/atoms/Button";
import CardTitle from "@/components/atoms/CardTitle";
import { decrement, increment, reset } from "@/redux/feature/counter/counterSlice";
import { RootState } from "@/redux/redux-store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  const {value} = useSelector((state:RootState)=>state.counter)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      test
      <div>
      <CardTitle className="text-3xl font-bold text-green-500">Counter: {value}</CardTitle>
      <Button variant="addToCartBtn" onClick={()=>dispatch(increment())}>Increment</Button>
      <Button variant="giftBtn" onClick={()=>dispatch(decrement())}>Decrement</Button>

      <Button variant="subscribeBtn" onClick={()=>dispatch(reset())}>Reset</Button>
    </div>
    </div>
  );
}
