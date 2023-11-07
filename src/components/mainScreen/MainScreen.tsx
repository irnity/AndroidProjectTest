import {StyleSheet, View} from 'react-native';
import React from 'react';
import Fans from './Components/Fans/Fans';
import UseData from '../../hooks/useData';
import List from './Components/List/List';
import PageButtons from './Components/PageButtons/PageButtons';

import {useSelector} from 'react-redux';
import IMovieState from '../../types/IMovieState';

interface props {
  navigation: {
    navigate: (name: string, params?: object | undefined) => void;
  };
}

const MainScreen = ({navigation}: props) => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);
  const {fetchData, addFansHandler, navigationHandler} = UseData({navigation});
  return (
    <View style={styles.container}>
      <Fans />
      <List
        addFansHandler={addFansHandler}
        navigationHandler={navigationHandler}
      />
      {movieData.results.length > 0 && <PageButtons fetchData={fetchData} />}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});
