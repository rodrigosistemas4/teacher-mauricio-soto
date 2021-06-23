import React, { useEffect } from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import { UsersClient } from './src/services/api.service'

const App = () => {
  const serviceTest = new UsersClient()
  useEffect(async () => {
   try {
     const response = await serviceTest.get()
     console.log(response)
   } catch (error) {
     console.log(error)
   }
  }, [])

  return (
      <SafeAreaView>
        <Text>Teste</Text>
      </SafeAreaView>
  );
};

export default App;
