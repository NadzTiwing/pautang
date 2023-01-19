import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUserDebts } from "../../../../redux/view/view.actions";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../../../../redux/request/request.actions";
import { SafeAreaView } from "react-native";
import { Box, FormControl, VStack, Text, Flex, Input, Button } from "native-base";

const UserHome = (props) => {
    const dispatch = useDispatch();
    const debts =  props.data.data;
    const totalDebt = props.totalDebt;
    const [amount, setAmount] = useState(0);
    const sessionToken = useSelector(state => state.login.sessionToken);
    const isLoading = useSelector(state => state.request.isLoading);

    const handleSubmit = async () => {
        if(amount <= 0 ) alert("Invalid input.");
        const response = dispatch(request(sessionToken, amount));
        if(response) alert("Successfully requested!");
        setAmount(0);
    }

    useEffect(()=>{
        props.fetchUserDebts(props.userId);
    },[props.userId, debts.length]);


    return(
        <SafeAreaView>
            <Box alignItems="flex-start" m="5" my="20">
                <Text fontSize="2xl">Total amount you owe: </Text>
                <Text fontSize="2xl">{totalDebt}</Text>
            </Box>
            <Box alignItems="center" mx="1">
                <FormControl required>
                    <VStack mx="4">
                        <FormControl.Label>Enter an amount you want to borrow</FormControl.Label>
                        <Flex direction="row">
                            <Input w="70%" keyboardType="numeric" onChangeText={amt => setAmount(amt)} value={amount}/>
                            <Button
                                bgColor="info.900"
                                onPress={handleSubmit}
                                isLoading={isLoading}
                                spinnerPlacement="end" 
                                isLoadingText="Requesting"
                            >REQUEST</Button>
                        </Flex>
                    </VStack>
                </FormControl>
            </Box>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.view,
        totalDebt: state.view.totalDebt,
        userId: state.login.sessionToken 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDebts: (userId) => dispatch(getUserDebts(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);