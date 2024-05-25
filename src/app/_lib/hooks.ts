import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ICourse } from './types';

const COURSES_URL = 'https://logiclike.com/docs/courses.json';

export const getCourses = async (): Promise<ICourse[]> => {
  const result = await axios({
    method: 'GET',
    url: COURSES_URL,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

export const useCoursesQuery = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => await getCourses(),
  });
};
