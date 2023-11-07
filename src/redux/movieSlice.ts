import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import IPerson from '../types/IPerson';
import IMovieState from '../types/IMovieState';

const initialMovieState: IMovieState = {
  count: 0,
  results: [],
  page: 1,
  totalPage: 0,
  firstPerson: 1,
  lastPerson: 10,
  loading: true,
  fans: {
    male: [],
    female: [],
    others: [],
  },
};

export const movieFetch = createAsyncThunk(
  'auth/login',
  async (pageNumber: number) => {
    try {
      const url = 'https://swapi.dev/api/people/?page=' + pageNumber;
      const responce = await fetch(url);
      const {count, results} = await responce.json();
      const formattedResults = results.map((person: IPerson) => ({
        ...person,
        selected: false,
      }));

      const totalPage = Math.ceil(count / 10);

      const firstPerson = (pageNumber - 1) * 10 + 1;
      const lastPerson = pageNumber === 9 ? count : pageNumber * 10;

      return {
        count,
        results: formattedResults,
        page: pageNumber,
        totalPage,
        firstPerson,
        lastPerson,
        loading: false,
      };
    } catch (error) {
      console.log(error);
      return {loading: false};
    }
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialMovieState,
  reducers: {
    clearMovie: state => {
      state.count = 0;
      state.results = [];
      state.page = 1;
      state.totalPage = 0;
      state.firstPerson = 1;
      state.lastPerson = 10;
      state.loading = true;
    },
    addFans: (state, action) => {
      // find the person;
      state.results = state.results.map(person => {
        if (person.name === action.payload.name) {
          return {
            ...person,
            selected: !person.selected,
          };
        }
        return person;
      });

      let {
        gender,
        name,
      }: {
        gender: string;
        name: string;
      } = action.payload;

      const param =
        gender !== 'male' && gender !== 'female' ? 'others' : gender;

      const fanCategory = state.fans[param];

      if (fanCategory.includes(name)) {
        state.fans[param] = fanCategory.filter(fanName => fanName !== name);
      } else {
        fanCategory.push(name);
      }
    },
    clearFans: state => {
      state.fans.male = [];
      state.fans.female = [];
      state.fans.others = [];
    },
  },

  extraReducers: builder => {
    builder.addCase(movieFetch.pending, state => {
      state.loading = true;
    });
    builder.addCase(movieFetch.fulfilled, (state, action) => {
      const {
        count,
        results,
        page,
        totalPage,
        firstPerson,
        lastPerson,
        loading,
      } = action.payload as IMovieState;
      state.count = count;
      state.results = results;
      state.page = page;
      state.totalPage = totalPage;
      state.firstPerson = firstPerson;
      state.lastPerson = lastPerson;
      state.loading = loading;
    });
    builder.addCase(movieFetch.rejected, state => {
      state.loading = false;
    });
  },
});

export const movieSliceActions = movieSlice.actions;

export default movieSlice.reducer;
