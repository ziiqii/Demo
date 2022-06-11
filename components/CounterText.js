import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Countertext(props) {
    console.log(props)

    return (
        <Text style={
            [styles.text,
                {
                    color: props.color,
                    fontSize: props.fontSize,
                    marginBottom: props.bottomMargin,
                }
            ]
        }>
        {props.children}
        </Text>
    )

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },
})