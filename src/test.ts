type objectNumberOrStringField = {
  [key: number]: string;
};

let statusInformation: objectNumberOrStringField = {
  200: "success",
  400: "bad data",
  404: "not found",
  500: "internal server error",
};

console.log(statusInformation[400]);
