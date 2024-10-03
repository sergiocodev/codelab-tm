import {Component, inject, Input} from '@angular/core';
import {TitleCasePipe} from "@angular/common";
import {MercadoPagoService} from "../../../../core/services/mercado-pago/mercado-pago.service";
import {IPaymentModel} from "../../../../core/models/mercado-pago/payment.model";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export default class InfoComponent {
  @Input() course: string = ''

  private _mercadoPagoService: MercadoPagoService = inject(MercadoPagoService)
  private _domSanitizer: DomSanitizer = inject(DomSanitizer)
  private _router: Router = inject(Router)

  public buyCourse() {
    const reqPayment: IPaymentModel = {course: this.course, quantity: 1, unit_price: 500}
    this._mercadoPagoService.getPaymentCourse(reqPayment).subscribe({
      next: (payment) => {
        const srcMercadoPago = this._domSanitizer.bypassSecurityTrustResourceUrl(payment.init_point)
        this._mercadoPagoService.setUrlMercadoPago(srcMercadoPago)
        this._router.navigate(['/courses/payment/', payment.id])
      }
    })
  }
}
