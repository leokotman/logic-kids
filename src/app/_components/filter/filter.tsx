import { isEqual } from 'lodash';

import styles from './filter.module.scss';
import { Button } from '../button/button';
interface IFilterProps {
  topics: string[];
  chosenTag: string;
  setChosenTag: (tag: string) => void;
}

export const Filter = (props: IFilterProps) => {
  const { topics, chosenTag, setChosenTag } = props;

  return (
    <nav className={styles.nav}>
      {topics.map((topic, index) => {
        const isActive = isEqual(chosenTag, topic);
        return (
          <Button
            key={index}
            onTagClick={() => setChosenTag(topic)}
            isActive={isActive}
          >
            {topic}
          </Button>
        );
      })}
    </nav>
  );
};
