import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Output() ready = new EventEmitter<void>();

  private fallbackTimerId: any;

  ngOnInit() {
    // Optional: Auto-dismiss after 3 seconds for testing purposes.
    // In production, you should emit 'ready' when your actual API calls finish.
    this.fallbackTimerId = setTimeout(() => {
      this.ready.emit();
    }, 3000);
  }

  ngOnDestroy() {
    if (this.fallbackTimerId) {
      clearTimeout(this.fallbackTimerId);
    }
  }
}
