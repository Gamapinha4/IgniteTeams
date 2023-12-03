import { Text, View } from "react-native";
import theme from "../../theme";

type props = {
  message: string;
}

export function ListEmpty( {message} : props ) {

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: theme.FONT_SIZE.SM, fontFamily: theme.FONT_FAMILY.REGULAR, color: theme.COLORS.GRAY_300}}>{message}</Text>
    </View>
  )

}