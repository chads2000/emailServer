export namespace DTO {
  export interface Response {
    statusCode: number;
    message: string;
    error: string;
  }

  export namespace GET {
    export namespace Response {
      export const Status: DTO.Response = {
        statusCode: 200,
        message: null,
        error: null,
      };
    }
  }

  export namespace POST {
    export namespace Response {
      export const Status: DTO.Response = {
        statusCode: 201,
        message: null,
        error: null,
      };
    }
  }

  export namespace PUT {
    export namespace Response {
      export const Status: DTO.Response = GET.Response.Status;
    }
  }

  export namespace DELETE {
    export namespace Response {
      export const Status: DTO.Response = GET.Response.Status;
    }
  }
}
