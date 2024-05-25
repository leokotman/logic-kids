import { ICourse } from '@/app/_lib/types';
import { useMemo } from 'react';
import { flatten } from 'lodash';

interface IFilterProps {
  courses: ICourse[];
}

export const Filter = (props: IFilterProps) => {
  const { courses } = props;
  const topics = useMemo(() => {
    const allTopics = flatten(
      courses.map((course) => course.tags.map((tag) => tag))
    );
    return [...new Set(allTopics)];
  }, [courses]);
  console.log('topics: ', topics);

  return (
    <nav>
      {topics.map((topic, index) => (
        <p key={index}>{topic}</p>
      ))}
    </nav>
  );
};
