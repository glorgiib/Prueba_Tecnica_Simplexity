import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();



 class perfil extends Component {
    state={
        form:{
            nombre: cookies.get('nombre') || '',
            apellido: cookies.get('apellido') || '',
            correo: cookies.get('correo') || '',
            telefono: cookies.get('telefono') || '',
            username: cookies.get('username') || '',
           
        }
    }
    
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
  render() {
    return (
        <div className="containerPrincipal">
        <div className="containerSecundario">
            <div className="form-group">
                <label>Nombre: </label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="nombre"
                value={this.state.form.nombre}
                onChange={this.handleChange}
                />
                <br/>
                <label>Apellido:</label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="apellido"
                value={this.state.form.apellido}
                onChange={this.handleChange}
                />
                <label>Correo: </label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="correo"
                value={this.state.form.correo}
                onChange={this.handleChange}
                />
                <br/>
                <label>Telefono:</label>
                <br/>
                <input
                type="number"
                className="form-control"
                name="telefono"
                value={this.state.form.telefono}
                onChange={this.handleChange}
                />
                <label>Usuario: </label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.form.username}
                onChange={this.handleChange}
                />
                <br/>
                {!cookies.get('username') && <button className="btn btn-primary" onClick={()=>this.iniciarSesion()}>Registrar</button>}
                {cookies.get('username') && <div>
                    <button className="btn btn-primary" onClick={()=>this.iniciarSesion()}>Actualizar</button>
                    <button className="btn btn-primary" onClick={()=>this.iniciarSesion()}>Eliminar</button>
                </div>}
            </div>
        </div>
        </div>
    );
  }
}

export default perfil;