import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Perfil from './perfil';

const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellido', {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('telefono', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

  render() {
    return(
        <div>
        Menu Principal

        <br />
        {cookies.get('username') && <button onClick={()=>this.cerrarSesion()}>Cerrar Sesion</button>}
        <Perfil />
        </div>
    );
     
  }
}
export default Menu;
