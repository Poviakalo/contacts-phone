import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Navigation } from './screens/Navigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';



export default function App() {

  const [ fontsLoaded ] = useFonts({
    'openSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
    'openSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  })

  React.useEffect(() => {
    async function prepare () {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, []);
    
  if(!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }   

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    
  )
}
