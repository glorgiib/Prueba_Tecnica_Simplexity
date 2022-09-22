import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const Cookies = new cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
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
    iniciarSesion=async()=>{

        await axios.get(`${baseUrl}/username/${this.state.form.username}/password/${md5(this.state.form.password)}`)
        .then(Response=>{
            console.log(Response)
            return Response.data;
        })
        .then(Response=>{
            if(Response.length>0){
            var respuesta=Response[0];
            Cookies.set('id', respuesta.id, {path: "/"});
            Cookies.set('apellido', respuesta.apellido, {path: "/"});
            Cookies.set('email', respuesta.email, {path: "/"});
            Cookies.set('nombre', respuesta.nombre, {path: "/"});
            Cookies.set('telefono', respuesta.telefono, {path: "/"});
            Cookies.set('username', respuesta.username, {path: "/"});
            alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
            window.location.href="./menu";
            }else{
                alert('El usuario o la contrasena no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    registrarse(){        
        window.location.href="./menu";
    }
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
            <div className="form-group">
                <label>Usuario: </label>
                <br/>
                <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
                />
                <br/>
                <label>Contrasena:</label>
                <br/>
                <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                />
                <br/>
                <button className="btn btn-primary" onClick={()=>this.iniciarSesion()}>Iniciar Sesion</button>
                <button className="btn btn-primary" onClick={()=>this.registrarse()}>Registrarse</button>
            </div>
        </div>
      </div>
    );
  }
}

export default  Login;