"use client"
import Button from "./Buttons"

const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)
    const reset    = () =>  {setCounter (0)}


    return (
        <div className="flex items-center gap-3">
            <Button onClick={decrease} className= "bg-yellow-500 hover:bg-red-900">-</Button>
            <p>{counter}</p>
            <Button onClick={increase} className="bg-green-500 hover:bg-green-700 ">+</Button>
            <Button onClick={reset} className="bg-gray-600">Reset</Button>
        </div>
    )
}

export default Counter