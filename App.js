import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{getCurrentDate()}</Text>
      <TouchableOpacity style={styles.searchIconContainer}>
        <MaterialIcons name="search" size={30} color="#333" style={styles.searchIcon} />
      </TouchableOpacity>

      <View style={styles.titleMain}>
        <Text style={styles.titleOne}>Title </Text>
        <Text style={styles.subtitleOne}>Lorem ipsum dolor sit</Text>
      </View>

      <View style={[styles.cardOne, styles.card]}>
        <Text style={styles.title}>Title 1</Text>
        <Text style={styles.subtitle}>Subtitle 1</Text>
      </View>

      <View style={[styles.cardTwo, styles.card]}>
        <Text style={styles.title}>Title 2</Text>
        <Text style={styles.subtitle}>Subtitle 2</Text>
      </View>

      <View style={[styles.cardTry, styles.card]}>
        <Text style={styles.title}>Title 3</Text>
        <Text style={styles.subtitle}>Subtitle 3</Text>
      </View>

      <View style={[styles.cardFor, styles.card]}>
        <Text style={styles.title}>Title 4</Text>
        <Text style={styles.subtitle}>Subtitle 4</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },


  searchIcon: {
    opacity: 0.3,
    marginTop: 60,
    marginBottom: 40,
    marginLeft: 150,
  },
  dateText: {
    color: '#cdcfd1',
    marginTop: 60,
    marginBottom: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardOne: {
    backgroundColor: '#eb7662',
  },
  cardTwo: {
    backgroundColor: '#8dc5bc',
  },
  cardTry: {
    backgroundColor: '#f39631',
  },
  cardFor: {
    backgroundColor: '#327389',
  },
  card: {
    width: 300,
    height: 100,
    padding: 25,
    marginBottom: 16,
    borderRadius: 20,
    elevation: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#cdcfd1',
  },
  titleMain: {
    marginBottom: 36,
    marginEnd: 100,
  },
  titleOne: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitleOne: {
    fontSize: 20,
  },
});
