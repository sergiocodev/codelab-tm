import {Component, inject, Input, OnInit} from '@angular/core';
import {SafeResourceUrl} from "@angular/platform-browser";
import {MercadoPagoService} from "../../../../core/services/mercado-pago/mercado-pago.service";
import {UserService} from "../../../../core/services/fire/user.service";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export default class PaymentComponent implements OnInit {
  public srcMercadoPago: SafeResourceUrl = ""
  public isLogged: boolean = false;

  private _mercadoPagoService: MercadoPagoService = inject(MercadoPagoService)
  private _userService: UserService = inject(UserService)

  ngOnInit() {
    this.srcMercadoPago = this._mercadoPagoService.srcMercadoPago
  }

  public loginWithGoogle() {
    this._userService.loginWithGoogle().then(r => this.isLogged = true)
  }
}
