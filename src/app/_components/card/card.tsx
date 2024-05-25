import Image from 'next/image';

interface ICardProps {
  title: string;
  src: string;
  alt: string;
}

export const Card = (props: ICardProps) => {
  const { title, src, alt } = props;
  return (
    <article>
      <Image src={src} alt={alt} width={40} height={40} />
      <h2>{title}</h2>
    </article>
  );
};
