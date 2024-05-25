'use client';

import { useMemo, useState } from 'react';
import { flatten } from 'lodash';

import styles from './page.module.css';
import { useCoursesQuery } from './_lib/hooks';
import { Filter } from './_components/filter/filter';
import { Courses } from './_components/courses/courses';
import { ALL_TOPICS } from './_lib/constants';

export default function Home() {
  const { data: courses = [] } = useCoursesQuery();
  const [chosenTag, setChosenTag] = useState(ALL_TOPICS);

  const topics = useMemo(() => {
    const allTopics = flatten(
      courses.map((course) => course.tags.map((tag) => tag))
    );
    return [ALL_TOPICS, ...new Set(allTopics)];
  }, [courses]);

  return (
    <main className={styles.main}>
      <Filter
        topics={topics}
        chosenTag={chosenTag}
        setChosenTag={setChosenTag}
      />
      <Courses courses={courses} chosenTopic={chosenTag} />
    </main>
  );
}
