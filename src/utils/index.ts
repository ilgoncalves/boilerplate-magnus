/* eslint-disable consistent-this */
const addAlpha = (color: string, opacity: number): string => {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

const debounce = (func: any) => {
  let timer: NodeJS.Timeout;
  return function () {
    // @ts-ignore
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(self, args), 600);
  };
};

const timeFormat = (value: any) => {
  if (value === null) {
    return '--:--';
  }

  value = value.toFixed();

  const second =
    (Math.floor(value % 60) < 10 ? '0' : '') + Math.floor(value % 60);

  let minutes: number = Math.floor(value / 60);

  let hours: number | string = '00';

  if (minutes < 10) {
    // @ts-ignore
    minutes = '0' + minutes;
  }

  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (minutes < 10) {
      // @ts-ignore
      minutes = '0' + minutes;
    }
  }

  return `${hours !== '00' ? hours + ':' : ''}${minutes}:${second}`;
};

export { addAlpha, timeFormat, debounce };
