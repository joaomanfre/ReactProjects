// Estilo.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    marginLeft: 10,
    fontSize: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

// Remova a seguinte linha, pois já está exportando styles corretamente:
// export default Estilo;
