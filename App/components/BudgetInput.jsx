import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import colors from "../constant/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column"
    },
    labelText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    containerInput: {
        flexDirection: "row"
    },
    input: {
        width: 250,
        padding: 18,
        fontSize: 25,
        color: colors.text,
        borderColor: "#000000",
        backgroundColor: colors.white,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    button: {
        backgroundColor: colors.black,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    buttonText: {
        padding: 25,
        color: colors.white
    }
});

const BudgetInput = ({ label, ...props}) => {
    return(
        <View style={styles.container}>
            
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} {...props} />
                <TouchableOpacity onPress={()=>alert("todo!")} style={styles.button}>
                    <Text style={styles.buttonText}>PROCEED</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BudgetInput;