import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMercadoPago} from "../../models/mercado-pago/mercado-pago.model";
import {IPaymentModel} from "../../models/mercado-pago/payment.model";
import {SafeResourceUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private _url = 'https://codelab-engine.onrender.com/create-order'

  private _urlMercadoPago: SafeResourceUrl = "";

  private _http: HttpClient = inject(HttpClient)

  public getPaymentCourse(request: IPaymentModel): Observable<IMercadoPago>{
    return this._http.post<IMercadoPago>(this._url, request)
  }

  public setUrlMercadoPago(url: SafeResourceUrl) {
    this._urlMercadoPago = url
  }

  public get srcMercadoPago() {
    return this._urlMercadoPago
  }
}
