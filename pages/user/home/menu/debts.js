import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUserDebts } from "../../../../redux/view/view.actions";
import { pay } from "../../../../redux/pay/pay.actions";
import { StyleSheet, ScrollView, Alert  } from "react-native";
import { VStack, Text, Container, Flex, Center, Button  } from "native-base";
import { color } from "../../../../const";

const Debts = (props) => {
    const columns = ["Amount", "Status"];
    const [rows, setRows] = useState([]);
    const debts =  props.data.data;

    const handlePay = (id) => {
        Alert.alert("Message", "Are you sure you want to fully pay this amount?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "YES",
                onPress: () => {
                    props.settlePayment(parseInt(id));
                    alert("Successfully PAID!");
                    setRows(row => {
                        const updateItem = row.find(item => item.id === id);
                        updateItem.status = "paid";
                        return [...row];
                    })
                }
            }
        ]);
    }

    useEffect(()=>{
        props.fetchUserDebts(props.userId);
        setRows(rows => {
            return rows = debts;
        });
    },[props.userId, debts.length]);

    return(
        <ScrollView>
            <Container m="4">
                <Text fontSize="lg" mb="2"> List of your Debts </Text>
                <VStack alignItems="flex-start" w="100%">
                    <Flex direction="row">
                        {columns.map( (label, num) => (
                            <React.Fragment key={`${label}-${num}`}>
                                <Center size="16" bg="info.900" 
                                _text={{ color: "white" }}
                                w={label === "Amount" ? "80%":"35%"}
                                style={styles.boxBorder}
                                >{label}</Center>
                            </React.Fragment>
                            
                        ))}
                    </Flex>
                        {rows && rows.map( (row, index) => (
                        <Flex direction="row" key={"row"+index}>
                            <Center size="16" bg="info.900"
                                w="80%"
                                style={styles.boxRow}
                            >{row.amount}</Center>
                            {row.status === "approved" ? 
                            <Center size="16" bg="info.900"
                            w="35%"
                            style={styles.boxRow}
                            >
                                <Button size="sm" onPress={()=>handlePay(row.id)}>
                                    PAY
                                </Button>
                            </Center>
                            :
                            <Center size="16" bg="info.900"
                                w="35%"
                                style={styles.boxRow}
                            >{row.status}</Center>
                            }
                            
                        </Flex>
                        ))}
                </VStack>
            </Container>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return { 
        data: state.view,
        userId: state.login.sessionToken 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDebts: (userId) => dispatch(getUserDebts(userId)),
        settlePayment: (debtId) => dispatch(pay(debtId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debts);

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    boxBorder: {
        borderColor: color.light,
        borderWidth: 1,
    },
    boxRow: {
        borderColor: color.light,
        borderWidth: 1,
        backgroundColor: "white"
    },
});