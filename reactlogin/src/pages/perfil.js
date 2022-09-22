import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import md5 from 'md5';

const cookies = new Cookies();
const baseUrl="http://localhost:3001/usuarios";



 class perfil extends Component {
    state={
        form:{
            nombre: cookies.get('nombre') || '',
            apellido: cookies.get('apellido') || '',
            email: cookies.get('email') || '',
            telefono: cookies.get('telefono') || '',
            username: cookies.get('username') || '',
            password: '',
           
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

    registrarUsuario=async()=>{

        await axios.post(baseUrl, {
            ...this.state.form,
            password: md5(this.state.form.password)

        })
        .then(Response=>{
            console.log(Response.data)
            return Response.data;
        })
        .then(Response=>{
            var respuesta=Response;
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('apellido', respuesta.apellido, {path: "/"});
            cookies.set('email', respuesta.email, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('telefono', respuesta.telefono, {path: "/"});
            cookies.set('username', respuesta.username, {path: "/"});
            alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
            window.location.href="./menu";
        })
        .catch(error=>{
            console.log(error);
        })
    }

    actualizarUsuario=async()=>{

        await axios.put(baseUrl+'/'+cookies.get('id'), {
            ...this.state.form,
            password: md5(this.state.form.password)

        })
        .then(Response=>{
            console.log(Response.data)
            return Response.data;
        })
        .then(Response=>{
            var respuesta=Response;
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('apellido', respuesta.apellido, {path: "/"});
            cookies.set('email', respuesta.email, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('telefono', respuesta.telefono, {path: "/"});
            cookies.set('username', respuesta.username, {path: "/"});
            alert(`Tus datos se han actualizado satisfactoriamente ${respuesta.nombre} ${respuesta.apellido}`);
            window.location.href="./menu";
        })
        .catch(error=>{
            console.log(error);
        })
    }

    eliminarUsuario=async()=>{

        await axios.delete(baseUrl+'/'+cookies.get('id'), {
            ...this.state.form,
            password: md5(this.state.form.password)

        })
        .then(Response=>{
            console.log(Response.data)
            return Response.data;
        })
        .then(Response=>{
            var respuesta=Response;
            cookies.remove('id', respuesta.id, {path: "/"});
            cookies.remove('apellido', respuesta.apellido, {path: "/"});
            cookies.remove('email', respuesta.email, {path: "/"});
            cookies.remove('nombre', respuesta.nombre, {path: "/"});
            cookies.remove('telefono', respuesta.telefono, {path: "/"});
            cookies.remove('username', respuesta.username, {path: "/"});
            alert(`Tus datos se han eliminado satisfactoriamente`);
            window.location.href="./";
        })
        .catch(error=>{
            console.log(error);
        })
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
                <label>email: </label>
                <br/>
                <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.form.email}
                onChange={this.handleChange}
                />
                <br/>
                <label>Telefono:</label>
                <br/>
                <input
                type="phone"
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
                 <label>Password: </label>
                <br/>
                <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.form.password}
                onChange={this.handleChange}
                />
                <br/>
                {!cookies.get('username') && <button className="btn btn-primary" onClick={()=>this.registrarUsuario()}>Registrar</button>}
                {cookies.get('username') && <div>
                    <button className="btn btn-primary" onClick={()=>this.actualizarUsuario()}>Actualizar</button>
                    <button className="btn btn-primary" onClick={()=>this.eliminarUsuario()}>Eliminar</button>
                </div>}
            </div>
        </div>
        </div>
    );
  }
}

export default perfil;