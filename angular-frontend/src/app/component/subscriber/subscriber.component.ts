import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscriber } from '../../subscriber.model';
import { SubscriberService } from '../../services/subscriber-service/subscriber.service';
import { MatDialog } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  displayedColumns: string[] = ['MSISDN', 'subcriberPin', 'accountStatus'];
  dataSource: any = [];
  errorMsg!: string;

  constructor(
    public dialog: MatDialog, 
    private subscriberservice: SubscriberService,
  ) { }

  @ViewChild(MatTable) table!: MatTable<any>;
  
  ngOnInit(): void {
    this.fetchSubscriber();
  }

  //Method for fetch the list of academy items
  fetchSubscriber(){
    this.subscriberservice.getSubscriber().subscribe(
      (res) => {
        this.dataSource = res;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}
