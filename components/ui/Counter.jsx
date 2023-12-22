"use client"
import Button from "./Buttons"

const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)
    const reset    = () =>  {setCounter (0)}


    return (
        <div className="flex items-center gap-3">
            <Button onClick={decrease} className= "bg-gray-800 text-gray-300">-</Button>
            <p className="text-black">{counter}</p>
            <Button onClick={increase} className="bg-gray-700 text-gray-100 ">+</Button>
            <Button onClick={reset} className="bg-gray-500">Reset</Button>
        </div>
    )
}

export default Counter