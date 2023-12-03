import { Text, View } from "react-native";
import theme from "../../theme";

type props = {
  title: string;
  subtitle: string;
}

export function HighLight( { title, subtitle } : props) {
  return(
    <View style={{width: '100%', marginTop: 32, marginBottom: 32 }}>
      <Text style={{textAlign: 'center', fontSize: theme.FONT_SIZE.XL, fontFamily: theme.FONT_FAMILY.BOLD, color: theme.COLORS.WHITE}}>{title}</Text>
      <Text style={{textAlign: 'center', fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.REGULAR, color: theme.COLORS.GRAY_300}}>{subtitle}</Text>
    </View>
  )
}