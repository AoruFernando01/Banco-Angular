import { Component } from '@angular/core';
import { TransferenciaService } from './extrato/services/transferencia.service';

/*
░░░░░░░███████████]▄▄▄▄▄▄▄▄▄▄▄▃
    ▂▄▅███𝕱𝔢𝔯𝔫𝔫𝔡███▅▄▃▂
I█████████████████████████].
◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  transferir($event) {
    this.service.adicionar($event);
  }
}
