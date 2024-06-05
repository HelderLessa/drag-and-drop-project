// Validation
interface ValidatableNumber {
  type: "number";
  value: string;
  required?: boolean;
  min?: number;
  max?: number;
}
interface ValidatableString {
  type: "string";
  value: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}
export type Validatable = ValidatableNumber | ValidatableString;

export function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.trim().length !== 0;
  }
  if (validatableInput.type === "string") {
    if (validatableInput.minLength != null) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
  }
  if (validatableInput.type === "number") {
    if (validatableInput.min != null) {
      isValid = isValid && +validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null) {
      isValid = isValid && +validatableInput.value <= validatableInput.max;
    }
  }
  return isValid;
}
