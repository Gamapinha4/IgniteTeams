import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../../theme'
import { Header } from '../../components/Header'
import { UsersThree } from 'phosphor-react-native'
import { HighLight } from '../../components/HighLight'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '../../storage/group/groupCreate'

export default function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {

      if (group.trim().length === 0) {
        return console.log("Digite um nome para a turma.")
      }

      await groupCreate(group)
      navigation.navigate('players', { group })
    }catch(error) {
      throw error
    }
    
  }

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600, padding: 24}}>
      <Header showBackButton/>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <UsersThree size={56} color={theme.COLORS.GREEN_700} style={{alignSelf: 'center'}}/>
        <HighLight title='Nova turma' subtitle='Crie a turma para adicionar as pessoas'/>
        <Input onChangeText={setGroup}/>
        <Button title='Criar' onPress={handleNewGroup}/>
      </View>
    </SafeAreaView>
  )
}