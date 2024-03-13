import { useState, useEffect } from 'react'

const RenderComponent = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    const addCount = () => {
        setCount(count + 1)
    }

    const Substract = () => {

        setCount(count - 1)
    }
    useEffect(() => {

        document.title = `Count: ${count} ${color}`
        console.log("use effect running")
    }, [color])


    const changeColor = () => {
        setColor(color => color === 'yellow' ? 'blue' : 'green')
    }

    return (

        <>

            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount} >Add </button>
            <button onClick={Substract} >Substract </button>
            <button onClick={changeColor} >Change Color </button>
        </>
    )

}

export default RenderComponent