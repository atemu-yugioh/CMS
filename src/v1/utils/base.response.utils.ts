type objectNumberOrStringField = {
  [key: number]: string;
};

let statusInformation: objectNumberOrStringField = {
  200: "success",
  400: "bad data",
  404: "not found",
  500: "internal server error",
};

export class BaseResponse {
  private status: number;
  private message: string;
  private data: Object | null;

  constructor(status?: number, message?: string, data?: Object | null) {
    this.status = status ? +status : 200;
    this.message = message ? message : "success!";
    this.data = data ? data : null;
  }

  public getStatus(): number {
    return this.status;
  }

  public setStatus(status: number) {
    this.status = status;
  }

  public getMessage(): string {
    return this.message;
  }

  public setMessage(status: number, message: string) {
    if (message) {
      this.message = message;
    } else {
      this.message = statusInformation[status];
    }
  }

  public getData(): Object | null {
    return this.data;
  }

  public setData(data: Object) {
    this.data = data;
  }
}
