import Image from 'next/image';
import styles from './card.module.scss';

interface ICardProps {
  title: string;
  src: string;
  alt: string;
}

export const Card = (props: ICardProps) => {
  const { title, src, alt } = props;
  return (
    <article className={styles.article}>
      <Image src={src} alt={alt} width={40} height={40} />
      <h2>{title}</h2>
    </article>
  );
};
