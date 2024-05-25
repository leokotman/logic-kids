'use client';

import styles from './page.module.css';
import { useCoursesQuery } from './_lib/hooks';

export default function Home() {
  const { data: courses = [] } = useCoursesQuery();
  console.log('data', courses);

  return <main className={styles.main}></main>;
}
