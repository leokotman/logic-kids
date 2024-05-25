export type Tag =
  | 'Головоломки'
  | 'Шахматы'
  | 'Логика и мышление'
  | 'Окружающий мир'
  | 'Загадки'
  | 'Страны и столицы';

export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: Array<Tag>;
}
