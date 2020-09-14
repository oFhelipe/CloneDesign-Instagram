import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native'

import * as Font from 'expo-font'
import { AppLoading  } from 'expo'

import TabBottom from './src/Routes/TabBottom'

const App = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(()=>{
      const componentDidMount = async () =>{
        await Font.loadAsync({
            'Roboto' : require('./assets/fonts/Roboto.ttf'),
            'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium' : require('./assets/fonts/Roboto-Medium.ttf'),
        });
        setFontLoaded(true);
    }
    componentDidMount();
  },[]);

  if(fontLoaded){
    return (
      <>
        <StatusBar backgroundColor="#eee" barStyle="dark-content"/>
        <TabBottom/>
      </>
  );
  }
  else {
    return (
      <AppLoading />
    );
  }
  
}

export default App;