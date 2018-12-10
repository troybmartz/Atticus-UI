import { Component, OnInit } from '@angular/core';
import {UserAccountModule} from '../user.account.module';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.page.html',
  styleUrls: ['./proposals.page.scss'],
})
export class ProposalsPage implements OnInit {
  public viewMode: ViewMode = ViewMode.List;

  public proposals;

  constructor(private account: UserAccountModule) { }

  async ngOnInit() {
    this.proposals = await this.account.loadProposals();
    console.log("viewMode", this.viewMode);
  }

  async viewDeal(index) {

  }
}

enum ViewMode {
  List = 1,
  View,
  Edit,
  New
}
