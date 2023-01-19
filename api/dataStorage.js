import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

const readData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        console.log(error);
    }
}

const updateData = async (key, value) => {
    try {
        await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

export { saveData, removeData, updateData, readData };