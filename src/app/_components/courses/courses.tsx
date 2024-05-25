import { ICourse } from '@/app/_lib/types';
import { Card } from '../card/card';
import styles from './courses.module.scss';
interface ICoursesProps {
  courses: ICourse[];
}

export const Courses = (props: ICoursesProps) => {
  const { courses } = props;

  return (
    <section className={styles.section}>
      {courses.map((course) => {
        return (
          <Card
            key={course.id}
            src={course.image}
            alt={course.name}
            title={course.name}
          />
        );
      })}
    </section>
  );
};
