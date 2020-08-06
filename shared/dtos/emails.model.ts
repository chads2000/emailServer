import { DTO } from './base.model';
import { Emails } from '../models/emails.models';

export namespace EmailsDTO {
  export namespace GET {
    export interface Response extends DTO.Response {
      data?: Emails;
    }

    export namespace Response {
      export const Status = DTO.GET.Response.Status;
    }
  }
}

export namespace EmailDTO {
  export namespace GET {
    export interface Response extends DTO.Response {
      data?: Emails;
    }

    export namespace Response {
      export const Status = DTO.GET.Response.Status;
    }
  }

  export namespace DELETE {
    export interface Response extends DTO.Response {
      data?: Emails;
    }

    export namespace Response {
      export const Status = DTO.DELETE.Response.Status;
    }
  }
}

