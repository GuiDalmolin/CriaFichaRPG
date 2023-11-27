import React, { useState, useEffect } from 'react';
import { View, ScrollView ,  TextInput, Button, StyleSheet, FlatList ,Text } from 'react-native';
import { Ficha, getData, setData} from '../components/funcoes'

const AlterFicha = ({ route , navigation }) => {
  const [nome, setNome] = useState(route.params.item.nome);
  const [classe, setClasse] = useState(route.params.item.classe);
  const [idade, setIdade] = useState(route.params.item.idade);
  const [aparencia, setAparencia] = useState(route.params.item.aparencia);
  const [pericia, setPericia] = useState(route.params.item.pericia);
  const [ataque1, setAtaque1] = useState(route.params.item.ataque1);
  const [ataque2, setAtaque2] = useState(route.params.item.ataque2);
  const [ataque3, setAtaque3] = useState(route.params.item.ataque3);
  const [ataque4, setAtaque4] = useState(route.params.item.ataque4);
  const [ataque5, setAtaque5] = useState(route.params.item.ataque5);
  const [pv, setPv] = useState(route.params.item.pv);
  const [pe, setPe] = useState(route.params.item.pe);
  const [forc, setForc] = useState(route.params.item.forc);
  const [des, setDes] = useState(route.params.item.des);
  const [con, setCon] = useState(route.params.item.con);
  const [int, setInt] = useState(route.params.item.int);
  const [sab, setSab] = useState(route.params.item.sab);
  const [car, setCar] = useState(route.params.item.car);
  
  useEffect(() => {
    const fetchData = async () => { 
      await getData().then((lista) =>{
        const idBusca = route.params.item.id;
        const listaMod = lista.map(e => {
          if (e.id === idBusca) {
            return { ...e, 
                  'nome': nome , 
                  'classe': classe,
                  'idade': idade,
                  'aparencia': aparencia,
                  'pericia': pericia,
                  'ataque1': ataque1,
                  'ataque2': ataque2,
                  'ataque3': ataque3,
                  'ataque4': ataque4,
                  'ataque5': ataque5,
                  'pv': pv,
                  'pe': pe,
                  'forc': forc,
                  'des': des,
                  'con': con,
                  'int': int,
                  'sab': sab,
                  'car': car};
          }
          return e;
        });

        setData(listaMod);
      })
    }
    fetchData();
  }, [route.params,
      nome,
      classe,
      idade,
      aparencia,
      pericia,
      ataque1,
      ataque2,
      ataque3,
      ataque4,
      ataque5,
      pv,
      pe,
      forc,
      des,
      con,
      int,
      sab,
      car]);
  
  return (
    <ScrollView  style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onFocus= {() => setNome('')}
        onChangeText={(text) => setNome(text)}
      />
      <Text style={styles.label}>Classe:</Text>
      <TextInput
        style={styles.input}
        value={classe}
        onFocus= {() => setClasse('')}
        onChangeText={(text) => setClasse(text)}
      />
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onFocus= {() => setIdade('')}
        onChangeText={(text) => setIdade(text)}
        multiline
      />
      <Text style={styles.label}>Aparencia:</Text>
      <TextInput
        style={styles.input}
        value={aparencia}
        onFocus= {() => setAparencia('')}
        onChangeText={(text) => setAparencia(text)}
        multiline
      />
      <Text style={styles.label}>Pericia:</Text>
      <TextInput
        style={styles.input}
        value={pericia}
        onFocus= {() => setPericia('')}
        onChangeText={(text) => setPericia(text)}
        multiline
      />
      <Text style={styles.label}>Ataque1:</Text>
      <TextInput
        style={styles.input}
        value={ataque1}
        onFocus= {() => setAtaque1('')}
        onChangeText={(text) => setAtaque1(text)}
        multiline
      />
      <Text style={styles.label}>Ataque2:</Text>
      <TextInput
        style={styles.input}
        value={ataque2}
        onFocus= {() => setAtaque2('')}
        onChangeText={(text) => setAtaque2(text)}
        multiline
      />
      <Text style={styles.label}>Ataque3:</Text>
      <TextInput
        style={styles.input}
        value={ataque3}
        onFocus= {() => setAtaque3('')}
        onChangeText={(text) => setAtaque3(text)}
        multiline
      />
      <Text style={styles.label}>Ataque4:</Text>
      <TextInput
        style={styles.input}
        value={ataque4}
        onFocus= {() => setAtaque4('')}
        onChangeText={(text) => setAtaque4(text)}
        multiline
      />
      <Text style={styles.label}>Ataque5:</Text>
      <TextInput
        style={styles.input}
        value={ataque5}
        onFocus= {() => setAtaque5('')}
        onChangeText={(text) => setAtaque5(text)}
        multiline
      />
      <Text style={styles.label}>Pts.Vida:</Text>
      <TextInput
        style={styles.input}
        value={pv}
        onFocus= {() => setPv('')}
        onChangeText={(text) => setPv(text)}
        multiline
      />
      <Text style={styles.label}>Pts.Energia:</Text>
      <TextInput
        style={styles.input}
        value={pe}
        onFocus= {() => setPe('')}
        onChangeText={(text) => setPe(text)}
        multiline
      />
      <Text style={styles.label}>Força:</Text>
      <TextInput
        style={styles.input}
        value={forc}
        onFocus= {() => setForc('')}
        onChangeText={(text) => setForc(text)}
        multiline
      />
      <Text style={styles.label}>Destreza:</Text>
      <TextInput
        style={styles.input}
        value={des}
        onFocus= {() => setDes('')}
        onChangeText={(text) => setDes(text)}
        multiline
      />
      <Text style={styles.label}>Constituição:</Text>
      <TextInput
        style={styles.input}
        value={con}
        onFocus= {() => setCon('')}
        onChangeText={(text) => setCon(text)}
        multiline
      />
      <Text style={styles.label}>Inteligência:</Text>
      <TextInput
        style={styles.input}
        value={int}
        onFocus= {() => setInt('')}
        onChangeText={(text) => setInt(text)}
        multiline
      />
      <Text style={styles.label}>Sabedoria:</Text>
      <TextInput
        style={styles.input}
        value={sab}
        onFocus= {() => setSab('')}
        onChangeText={(text) => setSab(text)}
        multiline
      />
      <Text style={styles.label}>Carisma:</Text>
      <TextInput
        style={styles.input}
        value={car}
        onFocus= {() => setCar('')}
        onChangeText={(text) => setCar(text)}
        multiline
      />
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DFCCFB'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 10
  },
});

export default AlterFicha;