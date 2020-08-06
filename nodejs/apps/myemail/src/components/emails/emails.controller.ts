import { Controller, Delete, Get, Logger, NotFoundException, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EmailsAPIService } from './emails.service';
import { EmailDTO, EmailsDTO } from '@rootShared/dtos/emails.model';
import { Emails } from '@rootShared/models/emails.models';

const logger = new Logger('EmailsAPIController');

/**
 * API Route /emails
 */
@Controller('emails')
export class EmailsAPIController {
  constructor(private readonly apiService: EmailsAPIService) {}

  /**
   * Get all emails
   *
   * @returns {Observable<EmailsDTO.GET.Response>} Observable of Products
   */
  // @UseGuards(JwtAuthGuard)
  @Get()
  all(): Observable<EmailsDTO.GET.Response> {
    return this.apiService.all().pipe(
      map((categories: Emails) => {
        return Object.assign(EmailsDTO.GET.Response.Status, {
          data: categories,
        });
      })
    );
  }

  /**
   * Get all deleted emails
   *
   * @returns {Observable<EmailsDTO.GET.Response>} Observable of Products
   */
  // @UseGuards(JwtAuthGuard)
  @Get('deleted')
  allDeleted(): Observable<EmailsDTO.GET.Response> {
    return this.apiService.allDeleted().pipe(
      map((categories: Emails) => {
        return Object.assign(EmailsDTO.GET.Response.Status, {
          data: categories,
        });
      })
    );
  }

  /**
   * Get an email by id
   *
   * @returns {Observable<EmailDTO.GET.Response>} Observable of Products
   */
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  get(
    @Param()
    params: {
      id: number;
    }
  ): Observable<EmailDTO.GET.Response> {
    if (!params.id) {
      throw new NotFoundException('Email not found');
    }

    const id: number = parseInt(params.id.toString(), 10);
    if (isNaN(id)) {
      throw new NotFoundException('Email not found');
    }

    return this.apiService.get(id).pipe(
      map((emails: Emails) => {
        return Object.assign(EmailDTO.GET.Response.Status, {
          data: emails,
        });
      })
    );
  }

  /**
   * Get an email by id
   *
   * @returns {Observable<EmailDTO.DELETE.Response>} Observable of Products
   */
  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(
    @Param()
    params: {
      id: number;
    }
  ): Observable<EmailDTO.GET.Response> {
    if (!params.id) {
      throw new NotFoundException('Email not found');
    }

    const id: number = parseInt(params.id.toString(), 10);
    if (isNaN(id)) {
      throw new NotFoundException('Email not found');
    }

    return this.apiService.delete(id).pipe(
      map((emails: Emails) => {
        return Object.assign(EmailDTO.DELETE.Response.Status, {
          data: emails,
        });
      })
    );
  }
}
