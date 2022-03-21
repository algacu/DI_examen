import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export class ElTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: this.props.lista,
            total: 0,
        }
    }

    calculaDatos = () => {
        {
            let unTotal = 0;
            this.state.datos.map((item) => {
                unTotal += item.price * item.quantity
            })
            this.setState({total: unTotal})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button color="#0390fc" mode="contained" onPress={this.calculaDatos}>
                    CALCULA TOTAL
                </Button>
                <Text style={styles.total}>TOTAL:</Text>
                <Text style={styles.resultado}>{this.state.total}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    total: {
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 10,
    },
    resultado: {
        marginLeft: 10,
        color: 'black',
    },
});

