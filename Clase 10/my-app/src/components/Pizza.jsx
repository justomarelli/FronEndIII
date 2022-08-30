import React from "react";
import Pedido from "./Pedido";


class Pizza extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            order:"",
            tamano:""
        };

        this.cancelar = this.cancelar.bind(this);

    }

    cancelar() { 
        this.setState({
            order: "",
            tamano: ""
        });
        
    }

    componentDidMount () {
        console.log("Me monté");
        setTimeout(() => {
            this.setState({
                order: this.props.order,
                tamano: this.props.tamano
            });
            console.log("Cargue las propiedades");  
        }, 2000)

    }

    componentDidUpdate (prevProps) {
        if (prevProps.order !== this.props.order) {
            this.setState({
                order: this.props.order
            });
        }
        if (prevProps.tamano !== this.props.tamano) {
            this.setState({
                tamano: this.props.tamano
            });
        }

        console.log("Me actualicé", this.state);
    }
    

    render () {
        return (
            <div>
                <h1>PEDIDO</h1>
                {this.state.order? <Pedido order={this.state.order} tamano={this.state.tamano} />: ""}
                <button onClick={this.cancelar}>Cancelar Pedido</button>
            </div>

        );
    }
}

export default Pizza;

