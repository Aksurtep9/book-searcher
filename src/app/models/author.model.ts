export interface Author {
    name: string,
    key: string,
    birth_date: string,
    photos: number[],
    bio: {
        type: string;
        value: string;
      };
}
