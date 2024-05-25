import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Tag } from './types';

const COURSES_URL = 'https://logiclike.com/docs/courses.json';

interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: Array<Tag>;
}

export const getCourses = async (): Promise<Array<ICourse>> => {
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
