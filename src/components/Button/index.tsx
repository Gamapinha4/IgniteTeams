import { Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'

type props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
}

export function Button( {title, type = 'PRIMARY', ...rest} : props ) {
  return(
    <TouchableOpacity {...rest} style={{ flex: 1, minHeight: 56, maxHeight: 56, backgroundColor: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK, borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginLeft: 35, marginRight: 35, marginBottom: 25}}>
      <Text style={{fontSize: theme.FONT_SIZE.MD, color: theme.COLORS.WHITE, fontFamily: theme.FONT_FAMILY.BOLD}}>{title}</Text>
    </TouchableOpacity>
  )
}