import Image from 'next/image';
import styles from './card.module.scss';

interface ICardProps {
  title: string;
  src: string;
  alt: string;
  bgColor: string;
}

export const Card = (props: ICardProps) => {
  const { title, src, alt, bgColor } = props;
  return (
    <article className={styles.article} style={{ backgroundColor: bgColor }}>
      <figure className={styles.figure}>
        <Image src={src} alt={alt} width={144} height={144} />
        <figcaption className={styles.figcaption}>
          <h2>{title}</h2>
        </figcaption>
      </figure>
    </article>
  );
};
