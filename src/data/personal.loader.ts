let data: typeof import('./personal.defaults').personalData;

try {
  // @ts-ignore - personal.ts may not exist (ignored by Git)
  data = (await import('./personal')).personalData;
} catch {
  data = (await import('./personal.defaults')).personalData;
}

export const personalData = data;
