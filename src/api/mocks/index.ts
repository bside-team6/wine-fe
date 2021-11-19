import { setupWorker } from 'msw';
import { getWineHandler, getWinesHandler } from '~/api/mocks/wine';

export const worker = setupWorker(getWineHandler, getWinesHandler);
