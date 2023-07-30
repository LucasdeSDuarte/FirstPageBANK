import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../componets/Header'
import Balance from '../../componets/Balance';
import Moviments from '../../componets/moviments';
import Actions from '../../componets/Action';

const list = [
  {
    id: 1,
    label: 'BOLETO CONTA DE LUZ ENEL',
    value: '200,44',
    date: '29/07/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'TRASFERENCIA PIX REM: FABRICA PÂO DE MEL',
    value: '150,00',
    date: '26/07/2023',
    type: 0 //receita despesas
  },
  {
    id: 3,
    label: 'SALARIO CONTA/CC',
    value: '2.350,00',
    date: '25/07/2023',
    type: 1 //receita entradas
  },
  {
    id: 4,
    label: 'TRASFERENCIA PIX REM: ARTIGOS DE FESTA',
    value: '50,00',
    date: '25/07/2023',
    type: 1 //receita despesas
  },
  {
    id: 5,
    label: 'DEBITO EM CONTA',
    value: '20,00',
    date: '24/08/2023',
    type: 0 //receita despesas
  },
  {
    id: 2,
    label: 'TRASFERENCIA PIX REM: LUFFY REI DOS PIRATAS',
    value: '650,00',
    date: '26/07/2023',
    type: 1 //receita entrata
  },
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Duarte"/>
      
      <Balance saldo="1.712,77" gastos="-527,09"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>  
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14

  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
