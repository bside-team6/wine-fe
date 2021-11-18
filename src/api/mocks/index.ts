import { setupWorker } from 'msw';
import { getWineHandler } from '~/api/mocks/wine';

export const worker = setupWorker(getWineHandler);
