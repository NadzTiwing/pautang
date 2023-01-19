import { SafeAreaView, Text, StyleSheet } from "react-native";

export default Settings = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>This is Admin Settings page</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});