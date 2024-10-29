import { Component } from "react";
import "./Contador.css"
class LifeCycleClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0};
    }

    componentDidMount(){
        console.log("Component Montado!")
    }

    componentDidUpdate(prevProps, prevState){
        console.log(`Componente atualizado! Propriedades e estados anteriores: ${prevProps}, ${prevState}`)
    }

    componentWillUnmountpo() {
        console.log("Componente será desmontado")
    }

    incrementCount = () => {
        if(this.state.count < 10){
            this.setState({count: this.state.count + 1});
            document.buttons[1].disabled = true
        }else{
            document.buttons[1].disabled = false
        }
    }

    descrementCount = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }

    }
    reset = () => {
        this.setState({count: this.state.count = 0})
    }

    render(){
        return(
            <div className="contador-container">
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
                <button onClick={this.descrementCount}>Decrementar</button>
                <button onClick={this.reset}>Resetar</button>
            </div>
        )
    }
}

export default LifeCycleClassComponent