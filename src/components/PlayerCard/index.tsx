import { Text, View } from "react-native";
import theme from "../../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonIcon } from "../ButtonIcon";


type props = {
  nome: string;
  onRemove: () => void
}

export function PlayerCard( {nome, onRemove} : props) {

  return(
    <View style={{width: '100%', height: 56, backgroundColor: theme.COLORS.GRAY_500, flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderRadius: 6}}>
      <MaterialIcons name="person" size={24} color={theme.COLORS.GRAY_200} style={{marginLeft: 16, marginRight: 4}}/>
      <Text style={{flex: 1, fontSize: theme.FONT_SIZE.MD, color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.REGULAR}}>{nome}</Text>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove}/>
    </View>
  )
}