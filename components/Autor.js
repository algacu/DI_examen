import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Autor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: this.props.color }}>Realizado por: {this.props.nombre}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

