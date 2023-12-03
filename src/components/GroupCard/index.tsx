import { Text, TouchableOpacity, View, TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import { UsersThree } from "phosphor-react-native";

type props = TouchableOpacityProps & {
  title: string;
}

export function GrupoCard({title, ...rest} : props) {
  return(
    <TouchableOpacity {...rest}>
      <View style={{width: '80%', height: 90, backgroundColor: theme.COLORS.GRAY_500, borderRadius: 6, flexDirection: 'row', alignItems: 'center', padding: 24, alignSelf: 'center', marginBottom: 12}}>
        <UsersThree size={32} color={theme.COLORS.GREEN_700} style={{marginRight: 20}} weight="fill"/>
        <Text style={{fontSize: theme.FONT_SIZE.MD, color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.REGULAR}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}