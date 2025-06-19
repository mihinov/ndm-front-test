import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routingEntriesMock } from '../../model/constants/routing-table-mock';
import { UITable } from '../../../../shared/ui/ui-table/ui-table';

@Component({
  selector: 'app-routing-table',
  imports: [
    UITable
  ],
  templateUrl: './routing-table.html',
  styleUrl: './routing-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutingTable {
  headers = ['Адрес назначения', 'Шлюз', 'Интерфейс'];
  data = routingEntriesMock.map(entry => [
    entry.address,
    entry.gateway,
    entry.interface
  ]);
}
