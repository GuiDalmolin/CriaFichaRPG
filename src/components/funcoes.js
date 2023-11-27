//funcoes
// https://react-native-async-storage.github.io/async-storage/docs/usage
import AsyncStorage from '@react-native-async-storage/async-storage';

// "classe" da minha ficha
type Ficha = {
  id: number,
  nome: string,
  classe: string,
  idade: string,
  aparencia: string,
  pericia: string,
  ataque1: string,
  ataque2: string,
  ataque4: string,
  ataque5: string,
  pv: string,
  pe: string,
  forc: string,
  des: string,
  con: string,
  int: string,
  sab: string,
  car: string,
}

// seta storage
export const setData = async (value) => {
  try {
    if(value === null || value === undefined){
      return;
    } else {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('fichasdb', jsonValue);
      console.log('setData>>',jsonValue);
    }
  } catch (e) {
    console.log(e)
  }
};

// geta storage
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('fichasdb');
    console.log('getData>>',jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    //return jsonValue != null ? jsonValue : null;
  } catch (e) {
    console.log(e)
  }
};


