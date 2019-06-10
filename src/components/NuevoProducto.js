import React, { Component } from "react";

//redux
import { connect } from "react-redux";
import { agregarProducto } from "../actions/productosActions";

class NuevoProducto extends Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };

  nombreProducto = e => {
    this.setState({ nombre: e.target.value });
  };

  precioProducto = e => {
    this.setState({ precio: e.target.value });
  };

  nuevoProducto = e => {
    e.preventDefault();

    const { nombre, precio } = this.state;

    if (nombre === "" || precio === "") {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });

    //crear el objeto

    const infoProducto = {
      nombre,
      precio
    };

    //crear el nuevo producto
    this.props.agregarProducto(infoProducto);

    //Redireccionar
    this.props.history.push('/');
  };

  render() {
    const { error } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Agregar Nuevo Producto</h2>
              <form onSubmit={this.nuevoProducto}>
                <div className="form-group">
                  <label>Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    onChange={this.nombreProducto}
                  />
                </div>
                <div className="form-group">
                  <label>Precio del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Precio"
                    onChange={this.precioProducto}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Agregar
                </button>
              </form>

              {error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  Todos los campos son obligatorios
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { agregarProducto }
)(NuevoProducto);
