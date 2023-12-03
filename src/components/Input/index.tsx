import { TextInput, TextInputProps } from "react-native";
import theme from "../../theme";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input( {inputRef, ...rest} : Props ) {

  return(
    <TextInput ref={inputRef} placeholder="Nome da turma" placeholderTextColor={theme.COLORS.GRAY_300} style={{flex: 1, minHeight: 56, maxHeight: 56, backgroundColor: theme.COLORS.GRAY_700, color: theme.COLORS.WHITE, borderRadius: 6, padding: 16, marginBottom: 10, fontFamily: theme.FONT_FAMILY.REGULAR, fontSize:theme.FONT_SIZE.MD}} {...rest}>

    </TextInput>
  )
}