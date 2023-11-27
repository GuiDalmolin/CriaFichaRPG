import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';
import { Ficha, getData, setData} from '../components/funcoes'
import { useNavigation } from '@react-navigation/native';
import { AlterFicha } from './AlterFicha'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const ListaFichas = ({route, navigation}) => {
  const [lista, setLista] = useState([]);
  //const navigation = useNavigation();

  // pega do storage e joga na lista
  useEffect(() => {
    const getaStorage = async () => {
      const result = await getData();
      if(!result){
        return;
      } else {
        setLista(result);
      }
      console.log("IMPORTADO")
    };
    getaStorage();
  }, []);

  // pega da lista e joga no storage
  useEffect(() => {
    setData(lista)
  }, [lista]);

  const goToDetalhes = (item) => {
    navigation.navigate('AlterFicha', {
      item: item
    });
  };

  const criaNovaFicha = () => {
    let vnovaFicha: Ficha = {id: 0,nome: "Nome",classe: "Classe"};
    let vlista = [...lista];

    if (!vlista || vlista.length === 0){
      vnovaFicha.id = 1;
    } else {
      vnovaFicha.id = Math.max(...vlista.map(e => e.id))+1;
    }
    
    vlista.push(vnovaFicha);
    setLista(vlista);
  };

  const deletaFicha = (itemId) => {
    const novaLista = lista.filter(e => e.id !== itemId);
    setLista(novaLista);
  };

  const renderFichas = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text >{index+1}</Text>
      <View>
        <Text style={styles.meuText}>{item.nome}</Text>
        <Text style={styles.meuTextClasse}>{item.classe}</Text>
      </View>
      <TouchableOpacity onPress={() => goToDetalhes(item)}>
        <Text style={styles.greenButton}><MaterialCommunityIcons name="fountain-pen" size={30} /></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletaFicha(item.id)}>
        <Text style={styles.redButton}><MaterialCommunityIcons name="trash-can-outline" size={30} /></Text>
      </TouchableOpacity>
    </View>
  );

  // nao achei nenhuma outra maneira de atualizar a tela ao dar o goBack, pq nao da trigger em nada
  // stackoverflow instruiu a dar extends e usar uns callback feito a mao mas parecia muito errado
  // se tiver algum metodo correto de atualizar a tela anterior ao dar goback eu gostaria de saber
  // guilhermedalmolin@hotmail.com
  const refresh = async () => {
    await getData().then((e) => {
      setLista(e);
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={lista}
        renderItem={renderFichas}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.meuBotao} onPress={() => refresh()}>
        <MaterialCommunityIcons name="refresh" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.meuBotao} onPress={() => criaNovaFicha()}>
        <MaterialCommunityIcons name="newspaper-plus" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
     backgroundColor: '#DFCCFB'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF8C9',
    padding: 20,
    borderRadius: 10,
  },
  redButton:{
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'red',
    color: 'white'
  },
  greenButton:{
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'green',
    color: 'white'
  },
  meuText:{
    fontSize: 20
  },
  meuTextClasse:{
    fontSize: 15,
    color: '#aaa'
  },
  meuBotao: {
          backgroundColor: '#FFF8C9',
          padding: 15,
          alignItems: 'center',
          margin: 10,
          borderRadius: 10
        }

});

export default ListaFichas;