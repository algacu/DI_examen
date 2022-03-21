import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class MiElemento extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{this.props.item.name}</Text>
                <View style={styles.container2}>
                    <Text style={styles.texto}>{this.props.item.description}</Text>
                    <Text style={styles.precio}>Precio: {this.props.item.price}</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    texto: {
        color: 'black',
    },
    precio: {
        color: 'black',
        fontWeight: 'bold',
    },
});

