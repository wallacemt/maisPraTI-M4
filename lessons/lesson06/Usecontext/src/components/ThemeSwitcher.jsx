import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div>
            <p>O Tema atual é: {theme}</p>
            <button onClick={toggleTheme}>Trocar Tema</button>
        </div>
    )
}

export default ThemeSwitcher;

