import React from "react";

class Pedido extends React.Component {


    componentWillUnmount() {
        console.log("Me desmonté");
    }

    render() {
        return (
            <div className="pizza">
                <h2>Pizza</h2>
                <h3>Gusto: {this.props.order}</h3>
                <h3>Tamaño: {this.props.tamano}</h3>
            </div>
        );
    }

}

export default Pedido;