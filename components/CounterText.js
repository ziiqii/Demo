import React from 'react';
import { StyleSheet, Text } from 'react-native';

// can add own props easily, reduces need to repeat some code
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