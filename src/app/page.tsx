'use client';

import styles from './page.module.css';
import { useCoursesQuery } from './_lib/hooks';
import { Filter } from './_components/filter/filter';
import { Courses } from './_components/courses/courses';

export default function Home() {
  const { data: courses = [] } = useCoursesQuery();

  return (
    <main className={styles.main}>
      <Filter courses={courses} />
      <Courses courses={courses} />
    </main>
  );
}
