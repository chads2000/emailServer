import { OnChanges, ChangeDetectorRef, Component, Input, Inject } from '@angular/core';
import { Email } from '@mono/root_shared/models';

import { EmailsService } from '../../services/email.service';

@Component({
  selector: 'app-email-view',
  templateUrl: './email_view.component.html',
  styleUrls: ['./email_view.component.scss'],
})
export class EmailViewComponent implements OnChanges {
  @Input() email: Email;

  isHtml = true;

  constructor(
    @Inject(EmailsService) private emailsService: EmailsService,
    private cd: ChangeDetectorRef
  ) {}

  get loaded(): boolean {
    return !!this.email && this.email?.deleted === false;
  }

  get id(): number {
    return this.email?.id ?? null;
  }

  get subject(): string {
    return this.email?.subject ?? null;
  }

  get to(): string {
    return this.emailsService.contactName(this.email?.from ?? null);
  }

  get toEmail(): string {
    return this.email?.from?.email ?? null;
  }

  get from(): string {
    return this.emailsService.contactName(this.email?.to ?? null);
  }

  get fromEmail(): string {
    return this.email?.to?.email ?? null;
  }

  get hasHtmlAndPlain(): boolean {
    return this.hasHtml && this.hasPlain;
  }

  get hasHtml(): boolean {
    return !!this.email?.html;
  }

  get html(): string {
    return this.email?.html ?? null;
  }

  get hasPlain(): boolean {
    return !!this.email?.plain;
  }

  get plain(): string {
    return this.email?.plain ?? null;
  }

  ngOnChanges(): void {
    this.isHtml = this.hasHtml;
    this.cd.detectChanges();
  }

  display(panel: string): void {
    if (panel === 'html') {
      this.isHtml = true;
    } else {
      this.isHtml = false;
    }
  }

  close(): void {
    this.emailsService.isViewOpen$.next(false);
  }

  delete(): void {
    this.emailsService.delete(this.id);
  }
}
