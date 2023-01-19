import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../pages/login';
import UserHome from '../../pages/user/home';
import AdminHome from '../../pages/admin/home';
//import UserHomeMenu from "../../pages/user/home/menu/index";

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false
    }
  },
  {
    name: "User",
    component: UserHome,
    options: {
      headerShown: false
    }
  },
  {
    name: "Admin",
    component: AdminHome,
    options: {
      headerShown: false
    },
    
  },
];

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            {screens.map( screen => (
                <Stack.Screen
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                    key={screen.name}
                />
            ))}
        </Stack.Navigator>
    );
};

export { MainStackNavigator };