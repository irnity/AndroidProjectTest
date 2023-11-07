import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {IMovieState} from '../../../../redux/movieSlice';

type Props = {
  fetchData: (page: number) => void;
};

const PageButtons = ({fetchData}: Props) => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);

  return (
    <View style={styles.buttons}>
      {/* first page */}
      <TouchableOpacity
        style={movieData.page === 1 ? styles.currentPage : styles.page}
        disabled={movieData.page === 1}
        onPress={() => {
          fetchData(1);
        }}>
        <Text style={styles.text}>1</Text>
      </TouchableOpacity>

      {/* previous page */}
      {movieData.page > 2 && (
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            fetchData(movieData.page - 1);
          }}>
          <Text style={styles.text}>{movieData.page - 1}</Text>
        </TouchableOpacity>
      )}

      {/* current page */}
      {movieData.page > 1 && movieData.page < movieData.totalPage && (
        <View style={styles.currentPage}>
          <Text style={styles.text}>{movieData.page}</Text>
        </View>
      )}

      {/* next page */}
      {movieData.page + 1 < movieData.totalPage && (
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            fetchData(movieData.page + 1);
          }}>
          <Text style={styles.text}>{movieData.page + 1}</Text>
        </TouchableOpacity>
      )}

      {/* last page */}
      <TouchableOpacity
        style={
          movieData.page === movieData.totalPage
            ? styles.currentPage
            : styles.page
        }
        disabled={movieData.page === movieData.totalPage}
        onPress={() => {
          fetchData(movieData.totalPage);
        }}>
        <Text style={styles.text}>{movieData.totalPage}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageButtons;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  page: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  currentPage: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
