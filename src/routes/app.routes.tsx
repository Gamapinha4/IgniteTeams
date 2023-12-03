import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Groups from '../screens/Groups'
import newGroups from '../screens/newGroup'
import Players from '../screens/Players'

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {

  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="groups" component={Groups}/>
      <Screen name="newGroups" component={newGroups}/>
      <Screen name="players" component={Players}/>
    </Navigator>
  )
}

