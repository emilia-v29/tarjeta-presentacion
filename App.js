import { StyleSheet, ScrollView } from 'react-native';
import Emi from './components/Presentacion.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
  return(
    <SafeAreaProvider>
      <ScrollView>
        <Emi/>
      </ScrollView>
    </SafeAreaProvider>
  );
}