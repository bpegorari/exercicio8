import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anúncios</Text>
      <View style={styles.mainContainer}>
        <View style={styles.window}>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={[styles.ad, { width: 150, marginRight: 20 }]}>

              <Text style={styles.descriptionTitle}>Título 1</Text>
              <Text style={styles.descriptionText}>
                Descrição 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={[styles.ad, { width: 150, marginRight: 20 }]}>
              <Text style={styles.descriptionTitle}>Título 2</Text>
              <Text style={styles.descriptionText}>
                Descrição 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
            <View style={[styles.ad, { width: 150 }]}>
              <Text style={styles.descriptionTitle}>Título 3</Text>
              <Text style={styles.descriptionText}>
                Descrição 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    alignSelf: 'center',
    position: 'absolute',
    top: 50,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 32,
    marginTop: 10,
  },
  window: {
    borderWidth: 2,
    borderColor: 'gray',
    width: 350,
    padding: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  ad: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
