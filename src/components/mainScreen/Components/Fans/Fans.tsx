import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IMovieState from '../../../../types/IMovieState';
import {movieSliceActions} from '../../../../redux/movieSlice';

const Fans = () => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.text}>Fans</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(movieSliceActions.clearFans());
          }}>
          <Text style={styles.text}>Clear Fans</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fans_container}>
        <View style={styles.block}>
          <Text style={styles.text}>{movieData.fans.female.length}</Text>
          <Text style={styles.text}>Female</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.text}>{movieData.fans.male.length}</Text>
          <Text style={styles.text}>Male</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.text}>{movieData.fans.others.length}</Text>
          <Text style={styles.text}>Others</Text>
        </View>
      </View>
    </View>
  );
};

export default Fans;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
  },
  fans_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
  block: {
    borderRadius: 10,
    padding: 10,
    width: '30%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
