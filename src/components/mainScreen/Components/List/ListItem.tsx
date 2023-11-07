import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Eye, Heart} from 'react-native-feather';

import {useSelector} from 'react-redux';
import IPerson from '../../../../types/IPerson';
import IMovieState from '../../../../types/IMovieState';

type Props = {
  item: IPerson;
  handler: (item: IPerson) => void;
  navigate: (item: IPerson) => void;
};

const Item = ({item, handler, navigate}: Props) => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);

  const [exist, setExist] = useState(false);

  useEffect(() => {
    const gender =
      item.gender === 'male'
        ? 'male'
        : item.gender === 'female'
        ? 'female'
        : 'others';
    if (movieData.fans[gender].includes(item.name)) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [item.gender, item.name, movieData]);

  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <TouchableOpacity
          onPress={() => {
            handler(item);
          }}>
          <Heart
            stroke="red"
            fill={exist ? 'red' : 'white'}
            width={28}
            height={28}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.name_container}>
        <Text style={styles.text} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
      <View style={styles.birth_container}>
        <Text style={styles.text} numberOfLines={1}>
          {item.birth_year}
        </Text>
      </View>
      <View style={styles.gender_container}>
        <Text style={styles.text} numberOfLines={1}>
          {item.gender}
        </Text>
      </View>

      <View style={styles.watch_container}>
        <TouchableOpacity
          onPress={() => {
            navigate(item);
          }}>
          <Eye stroke="black" width={28} height={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomColor: '#E0E0E0',
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
