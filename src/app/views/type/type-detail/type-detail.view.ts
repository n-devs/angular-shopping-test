import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-type-detail-view',
  templateUrl: './type-detail.view.html',
  styleUrls: ['./type-detail.view.css']
})
export class TypeDetailView implements OnInit, OnDestroy {
  productId: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }
}
