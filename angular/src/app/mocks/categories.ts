export type  Category = {
  name: string;
  count: number,
  id: number,
  children?: Categories
}

export type Categories = Category[];

export const categoriesMock: Categories = [
  {
    name: 'Alimentari',
    count: 100,
    id: 1,
    children: [
      { name: 'Panificati', count: 2, id: 2 },
      {
        name: 'Latticini',
        count: 98,
        id: 3,
        children: [
          { name: 'Latte', count: 70, id: 4 },
          {
            name: 'Formaggi',
            count: 20,
            id: 5,
            children: [
              { name: 'Stagionati', count: 18, id: 6 },
              { name: 'Freschi', count: 2, id: 7 },
            ],
          },
        ],
      },
    ],
  },
];
