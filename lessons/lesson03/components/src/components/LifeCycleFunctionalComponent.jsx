import { useState, useEffect } from "react";

function LifeCycleFunctionalComponent() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Component montado!")

        return() => {console.log("Component será desmontado")}
    }, [])

    useEffect(() => {
        console.log("Component atualizado!")
    }, [count])

    const increment= () => {
        setCount(count  + 1)
    }

    return(
        <div>
            <p>Contagem: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}


export default LifeCycleFunctionalComponent


