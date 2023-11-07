import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Eye, Heart} from 'react-native-feather';

const Description = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <Heart stroke="red" fill="red" width={28} height={28} />
      </View>
      <View style={styles.name_container}>
        <Text style={styles.text} numberOfLines={1}>
          Name
        </Text>
      </View>
      <View style={styles.birth_container}>
        <Text style={styles.text} numberOfLines={1}>
          Birth Year
        </Text>
      </View>
      <View style={styles.gender_container}>
        <Text style={styles.text} numberOfLines={1}>
          Gender
        </Text>
      </View>

      <View style={styles.watch_container}>
        <Eye stroke="black" width={28} height={28} />
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderColor: '#E0E0E0',
  },
  button_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '10%',
  },
  name_container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '35%',
  },
  birth_container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '22.5%',
  },
  gender_container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '22.5%',
  },
  watch_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '10%',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
