import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ContactsList } from './ContactsList';
import { CardContact } from './CardContact';
// import { ActionsFromContact } from "../components/ActionsFromContact";

const Stack = createNativeStackNavigator();

export const Navigation = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          
            <Stack.Screen name="ContactsList" component={ContactsList} options={{title: "Список контактів"}}/>
            <Stack.Screen name="CardContact" component={CardContact} options={{title: 'Контакт'}}/>
            {/* <Stack.Screen name="ActionsFromContact" component={ActionsFromContact} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}