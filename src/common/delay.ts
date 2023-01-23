/**
 * Delays executions of a specified piece of code.
 *
 * @returns Promise Object.
 * @throws \{ status: 408, statusCode: 408 \}.
 */
async function delay(ms: number, race?: boolean): Promise<void> {
  return new Promise((resolve, reject): void => {
    setTimeout((): void => {
      /** {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 | 408 Request Timeout} */
      !race ? resolve() : reject({ status: 408, statusCode: 408 });
    }, ms);
  });
}

export default delay;
