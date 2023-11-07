import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from '@reduxjs/toolkit';
import IPerson from '../types/IPerson';
import IMovieState from '../types/IMovieState';
import {movieFetch, movieSliceActions} from '../redux/movieSlice';

interface props {
  navigation: {
    navigate: (name: string, params?: object | undefined) => void;
  };
}
const UseData = ({navigation}: props) => {
  const dispatch = useDispatch<ThunkDispatch<IMovieState, number, any>>();

  const fetchData = (pageNumber: number) => {
    dispatch(movieFetch(pageNumber));
  };

  const addFansHandler = (person: IPerson) => {
    dispatch(movieSliceActions.addFans(person));
  };

  const navigationHandler = (person: IPerson) => {
    navigation.navigate('DetailScreen', {person});
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return {fetchData, addFansHandler, navigationHandler};
};

export default UseData;
