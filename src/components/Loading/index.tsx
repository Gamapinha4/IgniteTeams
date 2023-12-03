import { StatusBar, View } from "react-native";
import theme from "../../theme";
import { ActivityIndicator } from "react-native";

export function Loading() {

  return(
    <View style={{flex: 1, alignItems: 'center' , justifyContent: 'center', backgroundColor: theme.COLORS.GRAY_600}}>
      <ActivityIndicator color={theme.COLORS.GREEN_700}/>
    </View>
  )
}