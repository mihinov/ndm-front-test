import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-main',
  imports: [RouterOutlet],
  templateUrl: './layout-main.html',
  styleUrl: './layout-main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMain {

}
