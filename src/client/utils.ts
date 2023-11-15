export function flattenObject(obj: any, parentKey = ""): any {
  let result: any = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;

      if (key === "file") {
        result[newKey] = obj[key];
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        const keys = newKey.split(".");
        result[keys[keys.length - 1]] = obj[key];
      }
    }
  }

  return result;
}

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}
