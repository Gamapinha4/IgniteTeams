import { Text, View, Alert } from "react-native";
import theme from "../../theme";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/HighLight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { FlatList, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroup } from "../../storage/player/playerGetByGroup";
import { playersGetByGroupAndByTeam } from "../../storage/player/playersGetByGroupAndByTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
}

export default function Players() {

  const [newPlayerName, setNewPlayerName] = useState('')
  const [team,setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]) 

  const route = useRoute();
  const { group } = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.')
  }

  const newPlayer = {
    name: newPlayerName,
    team
  }

  try {

    await playerAddByGroup(newPlayer, group)

    newPlayerNameInputRef.current?.blur();

    setNewPlayerName('')
    fetchPlayersByTeam();

  }catch(error) {
    Alert.alert("Erro ao adicionar", "Não foi possivel adicionar")
  }

  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndByTeam(group,team);
      setPlayers(playersByTeam)
    }catch(error) {
      throw error
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    }catch(error) {
      console.log(error)
    }
    
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    }catch(error) {
      throw error
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      {text: 'Não', style: 'cancel'}, {text: 'Sim', onPress: () => groupRemove()}
    ])
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600, padding: 24}}>
      <Header showBackButton/>
      <HighLight title={group} subtitle="adicione a galera e separe os times"/>

    <View style={{width: '100%', height: 56, backgroundColor: theme.COLORS.GRAY_700, flexDirection: 'row', justifyContent: 'center', borderRadius: 6}}>
      <Input placeholder="Nome da pessoa" autoCorrect={false} onChangeText={setNewPlayerName} value={newPlayerName} inputRef={newPlayerNameInputRef} onSubmitEditing={handleAddPlayer} returnKeyLabel="done"/>
      <ButtonIcon icon="add" onPress={handleAddPlayer}/>
    </View>

    <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 12}}>
    <FlatList
      data={['Time A', 'Time B']}
      keyExtractor={(item) => item}
      renderItem={({item}) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />}
      horizontal
    />

    <Text style={{color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.SM}}>{players.length}</Text>
    </View>

    <FlatList
    data={players}
    keyExtractor={item => item.name}
    renderItem={({item}) => (
      <PlayerCard nome={item.name} onRemove={() => {handleRemovePlayer(item.name)}}/>
    )}
    ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time."/>}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[{ paddingBottom: 25}, players.length === 0 && {flex: 1}]}
    style={{marginBottom: 20}}
    />

    <Button title="Remover Turma" type="SECUNDARY" onPress={handleGroupRemove}/>

    </SafeAreaView>
    
  )
}