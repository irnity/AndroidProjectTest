import IPerson from './IPerson';

export default interface IMovieState {
  count: number;
  results: IPerson[];
  page: number;
  totalPage: number;
  firstPerson: number;
  lastPerson: number;
  loading: boolean;
  fans: {
    male: string[];
    female: string[];
    others: string[];
  };
}
