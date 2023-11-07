import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IMovieState, movieFetch, movieSliceActions} from '../redux/movieSlice';
import {ThunkDispatch} from '@reduxjs/toolkit';
import IPerson from '../types/IPerson';

interface props {
  navigation: {
    navigate: (name: string, params?: object | undefined) => void;
  };
}
const UseData = ({navigation}: props) => {
  const movieData = useSelector((state: {movie: IMovieState}) => state.movie);
  const dispatch = useDispatch<ThunkDispatch<IMovieState, number, any>>();

  const fetchData = (pageNumber: number) => {
    dispatch(movieFetch(pageNumber));
  };

  const addFansHandler = (person: IPerson) => {
    dispatch(movieSliceActions.addFans(person));
  };

  const navigationHandler = (person: IPerson) => {
    console.log(person);
    navigation.navigate('DetailScreen', {person});
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return {fetchData, addFansHandler, navigationHandler};
};

export default UseData;
