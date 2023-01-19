import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import UserHomeMenu from "../../pages/user/home/menu";
import Debts from "../../pages/user/home/menu/debts";

const LogoutNavigator = (props) => {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        dispatch(logout());
        props.navigation.navigate('Login');
    }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label="Logout" onPress={handleLogout}/>
        </DrawerContentScrollView>
    );
}


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <LogoutNavigator {...props}/> }
    >
        <Drawer.Screen name="UserHomeMenu" component={ UserHomeMenu } options={{ title: "Home" }}  />
        <Drawer.Screen name="Debt" component={ Debts } options={{ title: "List of Debts" }}  />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;