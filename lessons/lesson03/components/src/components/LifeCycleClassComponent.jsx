import { Component } from "react";

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
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        )
    }
}

export default LifeCycleClassComponent