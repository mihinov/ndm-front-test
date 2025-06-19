import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

type UIDataCell = string | number | Date;

@Component({
  selector: 'ui-table',
  imports: [],
  templateUrl: './ui-table.html',
  styleUrl: './ui-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UITable {
  headers = input.required<string[]>();
  data = input.required<UIDataCell[][]>();

 	readonly sortColumn = signal<number | null>(null);
  readonly sortDirection = signal<'asc' | 'desc'>('asc');

  readonly sortedData = computed(() => {
    const rows = this.data();
    const col = this.sortColumn();
    const dir = this.sortDirection();

    if (col === null) return rows;

    return [...rows].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      let cmp = 0;

      if (typeof valA === 'number' && typeof valB === 'number') {
        cmp = valA - valB;
      } else if (valA instanceof Date && valB instanceof Date) {
        cmp = valA.getTime() - valB.getTime();
      } else {
        cmp = String(valA).localeCompare(String(valB));
      }

      return dir === 'asc' ? cmp : -cmp;
    });
  });

  onSort(index: number): void {
    if (this.sortColumn() === index) {
      this.sortDirection.set(this.sortDirection() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumn.set(index);
      this.sortDirection.set('asc');
    }
  }
}
