// App.js
import React from 'react';
import { SectionList, StatusBar, View, Text, Image } from 'react-native';
import { styles } from './Estilo'; // Importe styles corretamente

const DATA = [
  {
    title: 'J',
    data: [
      { id: '1', name: 'João', img: require('./assets/perfil.png') },
      { id: '2', name: 'Joana' },
    ],
  },
  {
    title: 'M',
    data: [
      { id: '3', name: 'Maria' },
      { id: '4', name: 'Mariana' },
      { id: '5', name: 'Marcos' },
    ],
  },
  {
    title: 'O',
    data: [
      { id: '6', name: 'Otavio' },
    ],
  },
  // ... Adicione mais seções conforme necessário
];

const Item = ({ name }) => (
  <View style={styles.contactItem}>
    {/* <Image
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }} // URL da imagem de espaço reservado
      style={styles.profileImage}
    /> */}
    <Text style={styles.contactName}>{name}</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item name={item.name} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
