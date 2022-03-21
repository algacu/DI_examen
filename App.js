/**
 * Código base App.js para el examen
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MiElemento } from './components/MiElemento';
import { ElTotal } from './components/ElTotal';
import { Autor } from './components/Autor';

const ejercicio1 = {
  name: 'Cereales con chocolate',
  description: 'Cereales rellenos de chocolate',
  quantity: 2,
  category: 'Cereales',
  price: 5,
}

const listaItems = [{
  name: 'Cereales con chocolate',
  description: 'Cereales rellenos de chocolate',
  quantity: 2,
  category: 'Cereales',
  price: 2,
},
{
  name: 'Hamburguesa de pavo',
  description: 'Hamburguesa buena y saludable',
  quantity: 4,
  category: 'Carne',
  price: 3,
},
{
  name: 'Agua mineral',
  description: 'Agua de un manantial del Himalaya',
  quantity: 3,
  category: 'Bebidas',
  price: 3,
}]

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View>
        <Text style={styles.seccionTitulo}>Listado:</Text>
        </View>

        {/* <MiElemento item={ejercicio1}></MiElemento> */}

        <ScrollView>
          {listaItems.map((item, pos) => {
            return (
              <View key={pos}>
                <MiElemento item={item}></MiElemento>
              </View>
            );
          })}
        </ScrollView>

        <View>
          <ElTotal lista={listaItems}></ElTotal>
        </View>

        <View style={styles.componenteAutor}>
          <Autor color='white' nombre='Alejandro García Cuesta'></Autor>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'green',
  },
  seccionTitulo: {
    color: 'black',
  },
  componenteMiElemento: {
  },
  componenteElTotal: {
  },
  componenteAutor: {
    flexDirection: 'row',
    marginBottom: 200,
    marginTop: 10,
    justifyContent: 'flex-end',
  }
});

export default App;