function delay(ms: number, race?: boolean): Promise<void> {
  return new Promise((resolve, reject): void => {
    setTimeout((): void => {
      !race ? resolve() : reject({ status: 408, statusCode: 408 });
    }, ms);
  });
}

export default delay;
