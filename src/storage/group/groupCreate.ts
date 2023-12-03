import AsyncStorage from "@react-native-async-storage/async-storage";
import { err } from "react-native-svg/lib/typescript/xml";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupGetAll";
import NewGroup from "../../screens/newGroup";
import { AppError } from "../../utils/AppError";

export async function groupCreate(newGroupName: string) {
  try{

    const storedGroups = await groupsGetAll(); 

    const groupAlreadyExists =  storedGroups.includes(newGroupName)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome!');
    }

    const storage = JSON.stringify([...storedGroups, newGroupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  }catch(error) {
    throw error;
  }
  
}