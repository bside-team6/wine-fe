import { context, createResponseComposition, rest } from 'msw';
import type { RestHandler } from 'msw';

export const createMswHandler = <T>(
  path: string,
  method: keyof typeof rest,
  response: T,
  delay?: 'real' | 'infinite',
): RestHandler => {
  return rest[method](path, (req, res, ctx) => {
    const transformers = [ctx.json<T>(response)];
    if (delay) {
      transformers.unshift(ctx.delay(delay));
    }
    return res(...transformers);
  });
};

export const createErrorHandler = (
  path: string,
  method: keyof typeof rest,
  status: number,
  delay?: 'real' | 'infinite',
): RestHandler => {
  return rest[method](path, (req, res, ctx) => {
    const transformers = [ctx.status(status)];
    if (delay) {
      transformers.unshift(ctx.delay(delay));
    }
    return res(...transformers);
  });
};

export const delayedResponse = createResponseComposition(undefined, [
  context.delay('real'),
]);
