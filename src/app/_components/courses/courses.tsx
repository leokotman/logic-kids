import { useMemo } from 'react';
import { includes, isEqual } from 'lodash';

import { ICourse } from '@/app/_lib/types';
import styles from './courses.module.scss';
import { ALL_TOPICS } from '@/app/_lib/constants';
import { Card } from '../card/card';

interface ICoursesProps {
  courses: ICourse[];
  chosenTopic: string;
}

export const Courses = (props: ICoursesProps) => {
  const { courses, chosenTopic } = props;

  const filteredCourses = useMemo(() => {
    if (isEqual(chosenTopic, ALL_TOPICS)) {
      return courses;
    }
    return courses.filter((course) => includes(course.tags, chosenTopic));
  }, [courses, chosenTopic]);

  return (
    <section className={styles.section}>
      {filteredCourses.map((course) => {
        return (
          <Card
            key={course.id}
            src={course.image}
            alt={course.name}
            title={course.name}
            bgColor={course.bgColor}
          />
        );
      })}
    </section>
  );
};
