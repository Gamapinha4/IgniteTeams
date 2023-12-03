import {FlatList, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import theme from '../../theme';
import { Header } from '../../components/Header';
import { HighLight } from '../../components/HighLight';
import { GrupoCard } from '../../components/GroupCard';
import { useState, useCallback } from 'react';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import { groupsGetAll } from '../../storage/group/groupGetAll';

export default function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroups')
  }

  async function feactGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data)
    }catch(error) {
      throw error
    }
  }

  function HandleOpenGroup(group: string) {
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    feactGroups()
  }, []));


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.GRAY_700}}>
      <Header/>
      <HighLight title='Turmas' subtitle='Jogue com sua turma'/>

      <FlatList
      data={groups}
      keyExtractor={item => item}
      renderItem={({item}) => <GrupoCard title={item} onPress={() => HandleOpenGroup(item)}/>}
      contentContainerStyle={groups.length === 0 && {flex: 1}}
      ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
      />
      <Button title='Criar nova turma' onPress={handleNewGroup}/>
    </SafeAreaView>
  );
}