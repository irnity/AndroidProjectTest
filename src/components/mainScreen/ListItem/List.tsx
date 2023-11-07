import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Item from './Item';
import {useSelector} from 'react-redux';
import {IMovieState} from '../../../redux/movieSlice';
import IPerson from '../../../types/IPerson';
import Description from './Description';

type Props = {
  addFansHandler: (item: IPerson) => void;
  navigationHandler: (item: IPerson) => void;
};

const List = ({addFansHandler, navigationHandler}: Props) => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);
  return (
    <View style={styles.data_container}>
      <Description />
      {movieData.loading === true ? (
        <ActivityIndicator size={'large'} style={styles.indicator} />
      ) : (
        <FlatList
          data={movieData.results}
          renderItem={({item}) => (
            <Item
              item={item}
              handler={addFansHandler}
              navigate={navigationHandler}
            />
          )}
          keyExtractor={item => item.name}
        />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  data_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  indicator: {
    flex: 1,
    margin: 10,
  },
});
