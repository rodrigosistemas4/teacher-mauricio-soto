import React, { useEffect } from 'react';
import {
  SafeAreaView, Text
} from 'react-native';

import { UsersClient, LocalesClient } from './src/services/api.service'

const App = () => {
  const usersService = new UsersClient()
  const localesService = new LocalesClient()

  useEffect(async () => {
   try {
     const response = await usersService.list()
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
