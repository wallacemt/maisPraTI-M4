import { useState } from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
            <p>{isLoggedIn ? "Bem vindo(a)" : "Por favor, faça login."}</p>
        </div>
    )
}

export default Login;
