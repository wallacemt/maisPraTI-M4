import { useState, useEffect } from "react";

function RandomColor() {
    const [color, setColor] = useState('#000000')
    const [iniciar, setIniciar] = useState(false)

    useEffect(() => {
        if (iniciar) {
            const interval = setInterval(() => {
                setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
            }, 3000)
    
            return () => clearInterval(interval)
        }
    }, [iniciar])

    return (
        <div style={{ backgroundColor: color, height: '100vh', width: '100vw', position: 'fixed', transition: 'all 1s'}}>
            <p style={{position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '50px', color: 'white'}}>{color}</p>
            <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '15px', border:'none'}} onClick={() => setIniciar(!iniciar)}>{iniciar ? 'Parar' : 'Iniciar'}</button>
        </div>
    )
}

export default RandomColor;
