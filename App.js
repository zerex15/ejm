import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput
 } from 'react-native';

export default class ejemplo1 extends Component 
{
constructor() // permite iniciar variables a nivel global de la clase
{
  super(); 
  //identidica esta clase como la principal
  //ahora vamos a definir state para almacenar los
  //contenidos de los componentes
  this.state=
  {
    nombre: "",
    apellido: ""
  }
}  

}