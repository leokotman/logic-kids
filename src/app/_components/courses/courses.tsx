import { ICourse } from '@/app/_lib/types';
import { Card } from '../card/card';

interface ICoursesProps {
  courses: ICourse[];
}

export const Courses = (props: ICoursesProps) => {
  const { courses } = props;

  return (
    <section>
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
