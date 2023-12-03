import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <>
    <StatusBar barStyle={'light-content'} translucent backgroundColor={"transparent"}/>
    {fontsLoaded ? <Routes/> : <Loading/>}
    </>
  );
}
