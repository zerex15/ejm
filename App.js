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
  };
}  

//ahora vamos a crear la vista para ver los componentes
//que deseamos ver
render()
{
    return(
      <View style= {estilos.Container}>
        <Text>estamos probando los estados de las variables</Text>
        <TextInput value= {this.state.nombre}
        onChangeText={(textonuevo)=>{
        this.setState(
          {
          nombre: textonuevo
        }
        )
      }
    }
        ></TextInput>

<TextInput value= {this.state.apellido}
        onChangeText={(textonuevo)=>{
        this.setState(
          {
          apellido: textnuevo
        }
        )
      }
    }
        ></TextInput>

      </View>
    )
}

}

const estilos = StyleSheet.create(
  {
    Container:
    {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  
    }
  }
)
