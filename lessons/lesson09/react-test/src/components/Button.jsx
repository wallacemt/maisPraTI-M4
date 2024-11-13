const Button = ({onclick, children}) => {
    return (
        <button onClick={onclick} data-tastid="button">
            {children}
        </button>
    )
}

export default Button