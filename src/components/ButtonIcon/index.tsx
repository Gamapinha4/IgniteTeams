import { TouchableOpacityProps, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import theme from "../../theme";


export type ButtonIconTypeStylesProps = 'PRIMARY' | 'SECONDARY';

type props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStylesProps;
}

export function ButtonIcon( {icon, type = 'PRIMARY', ...rest } : props) {
  return(
    <View style={{width: 56, height: 56, justifyContent: 'center', alignItems: 'center', marginLeft: 12}}>
      <MaterialIcons name={icon} color={type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED} size={32} {...rest}/>

    </View>
  )
}