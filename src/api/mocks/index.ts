import { setupWorker } from 'msw';
import { getWineNotesHandler } from '~/api/mocks/wine-note';

export const worker = setupWorker(getWineNotesHandler);
