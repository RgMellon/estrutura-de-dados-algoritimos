export function defaultString(value) {
  if (value === undefined) {
    return "UNDEFINED";
  }

  if (value === null) {
    return "NULL";
  }

  if (typeof value === "string" || value instanceof String) {
    return value;
  }

  return value.toString();
}
