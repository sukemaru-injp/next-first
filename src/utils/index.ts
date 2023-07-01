export type Brand<K, T> = K & { __brand: T };

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type ResourceStatus = 'pending' | 'fulfilled' | 'rejected';
export type Resource<T> = {
  read: () => T;
};
export function resource<T>(promise: Promise<T>): Resource<T> {
  let status: ResourceStatus = 'pending';
  let res: T;
  let err: Error;

  const suspender = promise.then(
    (r) => {
      status = 'fulfilled';
      res = r;
    },
    (e) => {
      status = 'rejected';
      if (!(e instanceof Error)) {
        err = new Error(JSON.stringify(e));
      }
      err = e;
    },
  );

  const read = () => {
    switch (status) {
      case 'fulfilled':
        return res;
      case 'pending':
        throw suspender;
      case 'rejected':
        throw err;
    }
  };

  return { read };
}
