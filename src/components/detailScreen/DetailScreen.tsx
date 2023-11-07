import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IPerson from '../../types/IPerson';
interface props {
  // navigation types
  navigation: {
    goBack: () => void;
  };
  route: any;
}

const DetailScreen = ({navigation, route}: props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = route.params.person as IPerson;
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>{name}</Text>
      </View>
      <View style={styles.details_container}>
        <View style={styles.details}>
          <Text style={styles.name}>Height </Text>
          <Text style={styles.value}>{height} CM</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Mass </Text>
          <Text style={styles.value}>{mass} kg</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Hair Color </Text>
          <Text style={styles.value}>{hair_color}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Skin </Text>
          <Text style={styles.value}>{skin_color}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Eye Color </Text>
          <Text style={styles.value}>{eye_color}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Birth Year </Text>
          <Text style={styles.value}>{birth_year}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>Gender </Text>
          <Text style={styles.value}>{gender}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}>
        <Text style={styles.title_text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    alignItems: 'center',
    padding: 10,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  details_container: {
    padding: 10,
    gap: 10,
  },
  details: {
    flexDirection: 'row',
  },
  name: {
    borderWidth: 1,
    borderRadius: 10,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: 'grey',
    padding: 10,
    width: '30%',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  value: {
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: 'grey',
    padding: 10,
    color: 'black',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
