import { Component, OnInit } from '@angular/core';
import {UserAccount} from '../user.account.provider';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.page.html',
  styleUrls: ['./deal.page.scss'],
})
export class DealPage implements OnInit {
  public viewMode: ViewMode = ViewMode.DealView;

  public deal;

  constructor(private account: UserAccount) {
    this.deal = {};
  }

  async ngOnInit() {
    await this.account.getDealToView();
    this.deal = this.account.dealToView;
    console.log("deal to view", this.deal);
  }

  async sign() {
    // TODO: PUT /deal/accept/{deal.contract_id}
    this.viewMode = ViewMode.ModalProposalSigned;
  }
}

enum ViewMode {
  DealView = 1,
  ModalProposalSigned,
  ModalProposalDeclined,
  CounterView,
  ModalCounterSent
}
