import type { DtoId } from 'common/types/brandedId';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({
    status: 200,
    body: [
      {
        id: '1' as DtoId['fireFlower'],
        name: 'Fire Flower',
        createdAt: 0,
        updatedAt: undefined,
        structure: [['#f00']],
        creator: {
          id: '1' as DtoId['user'],
          signInName: 'teat',
        },
      },
    ],
  }),
}));