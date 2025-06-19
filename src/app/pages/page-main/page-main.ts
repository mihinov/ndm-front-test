import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutingTable } from '../../features/routing-table/ui/routing-table/routing-table';

@Component({
  selector: 'app-page-main',
  imports: [
    RoutingTable
  ],
  templateUrl: './page-main.html',
  styleUrl: './page-main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMain {

}
