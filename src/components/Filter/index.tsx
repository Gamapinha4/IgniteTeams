import { Text, TouchableOpacity, View } from "react-native";
import theme from "../../theme";

export type FilterStyleProps = {
  title: string;
  isActive?: boolean;
  onPress: () => void
}

export function Filter( { title, isActive = false, onPress , ...rest } : FilterStyleProps) {

  return(
    <TouchableOpacity onPress={onPress} style={{borderWidth: 1, borderColor: isActive ? theme.COLORS.GREEN_700 : "transparent", borderRadius: 4, marginRight: 12, height: 38, width: 70, alignItems: 'center', justifyContent: 'center'}} {...rest}>
      <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.SM, color: theme.COLORS.WHITE, textTransform: 'uppercase'}}>{title}</Text>
    </TouchableOpacity>
  )
}