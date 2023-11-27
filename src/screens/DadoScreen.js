import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

//import para icones
import { MaterialCommunityIcons } from '@expo/vector-icons'

//hook para fonte
import { useFonts } from 'expo-font';

//exportado para o App.js
const Dice = () => {

  //por estarmos fazendo esse projeto no Snack
  //tive que fazer essa gambiarra toda pra conseguir
  //utilizar uma fontFamily bonitinha
  const [loaded] = useFonts({
    'KdamThmorPro-Regular': require('../../assets/KdamThmorPro-Regular.ttf'),
  });

  const [number, setNumber] = useState(1) //numero que é apresentado na tela
  const [selectedValue, setSelectedValue] = useState(0); //utilizado na escolha dos dados

  //faz a randomizacao toda vez que o botao é pressionado
  //e depois seta no useState
  const randomNumber = () => {
    const newNumber = Math.floor(Math.random() * selectedValue) + 1;
    setNumber(newNumber);
  };

  //aguarda a selecao de algum dos dados e seta o respectivo valor do mapping
  const handleDiceSelection = (value) => {
    setSelectedValue(value);
  };

  //aguarda para que as fontes sejam devidamente carregadas
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.allDices}>
        {[4, 6, 8, 10, 12, 20].map((value) => (
          <TouchableOpacity
            key={value}
            style={[
              styles.dices,
              { backgroundColor: selectedValue === value ? '#BEADFA' : '#DFCCFB', borderRadius: 10},
            ]}
            onPress={() => handleDiceSelection(value)}
          >
            <MaterialCommunityIcons name={`dice-d${value}`} size={40} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.diceBox}>
        <Text style={styles.text}>{number}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={randomNumber}>
        <Text style={styles.buttonText}>ROLAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#DFCCFB'
  },
  buttonBox: {
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginTop: '35%',
    backgroundColor: '#FFF8C9',
    borderRadius: 80,
  },
  diceBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '35%',
    borderRadius: 20,
    backgroundColor: '#FFF8C9'
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'KdamThmorPro-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 80,
    color: 'Black',
    marginTop: 10,
  },
  allDices: {
    marginBottom: 10,
    width: '80%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dices: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
  },
});

export default Dice;