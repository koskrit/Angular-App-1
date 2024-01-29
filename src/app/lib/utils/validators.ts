export const validators = {
  min: (input: HTMLTextAreaElement, min: number) => input.value.length >= min,
  max: (input: HTMLTextAreaElement, max: number) => input.value.length <= max,
};

export const validateLength = (value: number, min: number, max: number) =>
  value >= min && value <= max;

export const inputValidators = {
  inputLength: (input: HTMLTextAreaElement, min: number, max: number) =>
    validateLength(input.value.length, min, max)
      ? input.classList.remove('input-error')
      : input.classList.add('input-error'),
};
