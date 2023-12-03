import { Image, View } from "react-native";
import logoImg from '../../assets/logo.png'
import { CaretLeft } from "phosphor-react-native";
import theme from "../../theme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

type props = {
  showBackButton?: boolean
}


export function Header({ showBackButton = false} : props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return(
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      { showBackButton && <TouchableOpacity style={{flex: 1}} onPress={handleGoBack}><CaretLeft color={theme.COLORS.WHITE} size={32}/></TouchableOpacity>}
      <Image style={{width: 46, height: 56}} source={logoImg}/>
    </View>
  )
}