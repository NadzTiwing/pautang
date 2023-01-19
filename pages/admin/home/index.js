import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllDebts, getUserDetails } from "../../../redux/view/view.actions";
import { logout } from "../../../redux/auth/auth.actions";
import { approve, deny } from "../../../redux/admin/process.actions";
import { SafeAreaView, Text, StyleSheet, Alert} from "react-native";
import { VStack, HStack, Button, ScrollView } from 'native-base';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { fontSize } from "../../../const";


const AdminHome = (props) => {
    const [list, setList] = useState([]);
    const data = props.debts.data.data || 0;
    
    const handleLogout = () => {
        props.exit();
        props.navigation.navigate("Login");
    }

    const handleApprove = (id) => {
        Alert.alert("Message", "Are you sure you want to approve this request?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "YES",
                onPress: () => {
                    props.accept(parseInt(id));
                    alert("Successfully Approved!");
                    setList(list => {
                        const updateItem = list.find(item => item.id === id);
                        updateItem.status = "approved";
                        return [...list];
                    })
                }
            }
        ]);
    }

    const handleDeny = (id) => {
        Alert.alert("Message", "Are you sure you want to deny this request?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "YES",
                onPress: () => {
                    props.reject(parseInt(id));
                    alert("Successfully Rejected!");
                    setList(list => {
                        const updateItem = list.find(item => item.id === id);
                        updateItem.status = "denied";
                        return [...list];
                    })
                }
            }
        ]);
    }

    const getName = (userId) => {
        const users = props.debts.users.data;
        let user = users?.find(user => user.id === userId);
        return  user.name || userId;
    }

    useEffect(()=>{
        props.fetchDebts();
        props.fetchUsers();
        setList(list => list = data);
    },[data.length])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.user}>Administrator</Text>
            <Text style={styles.listTitle}>List of Requests:</Text>
            <ScrollView>
                <VStack space={1}>
                    {list ? list.map( item => (
                        <HStack key={`item-${item.id}`} alignItems="flex-start" justifyContent="space-between" style={styles.row} >
                            <Text style={styles.desc}>{getName(item.userId)} wants to borrow Php {item.amount}</Text>
                            { item.status === "pending" ? 
                            <React.Fragment key={`request-${item.id}`}>
                                <Button size="sm" variant="ghost" onPress={()=>handleApprove(item.id)}>
                                    <FontAwesome name="check-circle" size={fontSize.h6} color="green" />
                                </Button>
                                <Button size="sm" variant="ghost" colorScheme="secondary" onPress={()=>handleDeny(item.id)}>
                                    <MaterialIcons name="cancel" size={fontSize.h6} color="red" />
                                </Button>
                            </React.Fragment>
                            :
                            <Text style={styles.status}>{item.status}</Text> 
                            }
                        </HStack>
                    ))
                    : <Text>Nothing to see here</Text> 
                }
                </VStack>
            </ScrollView>
            <Button size="sm" colorScheme="secondary" style={styles.logoutBtn} onPress={handleLogout}>
                LOGOUT
            </Button>
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        debts: state.view,
        process: state.process
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDebts: () => dispatch(getAllDebts()),
        fetchUsers: () => dispatch(getUserDetails()),
        exit: () => dispatch(logout()),
        accept: (debtId) => dispatch(approve(debtId)),
        reject: (debtId) => dispatch(deny(debtId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        margin: 10
    },
    user: {
        color: "gray",
        paddingBottom: 10
    },
    listTitle: {
        fontSize: fontSize.h6,
        marginBottom: 5
    },
    row: {
        backgroundColor: "white",
        padding: 10,
    },
    desc: {
        paddingTop: 10,
        paddingBottom: 10,
        flexWrap: "wrap",
        width: "75%"
    },
    logoutBtn: {
        marginTop: 10
    },
    status: {
        padding: 8
    }
});