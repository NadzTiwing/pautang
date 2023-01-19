import React from "react";
import { StyleSheet, View, Text } from "react-native";



export default function Table({tableStyles, columnData, rowData}) {
    const styles = StyleSheet.create({
        container: {
            ...tableStyles,
            margin: 10,
            flex: 1, 
        }
    });

    return(
        <View style={styles.container}>
            
        </View>
    );
}

