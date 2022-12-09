import React, { useState } from 'react';
import BudgetInput from './../components/BudgetInput';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ACEEE0',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
  

export default () => {
    const [budget, setBudget] = useState(0);

    return(
        <View style={styles.container}>
            <BudgetInput label="Total Budget:"
            value={budget}
            onChangeText={(num) => setBudget(num)}
            keyboardType="numeric"
            //onButtonPress={() => }
            />
        </View>
    );
}