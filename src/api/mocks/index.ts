import { setupWorker } from 'msw';
import {
  getRelatedWineNotesSuccessHandler,
  getWineNotesHandler,
} from '~/api/mocks/wine-note';

export const worker = setupWorker(
  getWineNotesHandler,
  getRelatedWineNotesSuccessHandler,
);
