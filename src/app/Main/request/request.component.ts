import { Component, OnInit } from '@angular/core';
import { RequestService } from './service/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  selectedTopIndex: number = 0;
  topToggle: any[] = ['Booking Request', 'Payment Details']
  label: string = this.topToggle[0];
  PaymentcolumnDefs: any = [
    { field: 'hostelName', headerName: 'HostelName', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'userName', headerName: 'UserName', sortable: true, filter: 'agTextColumnFilter' },
    {
      field: 'paymentStatus',
      headerName: 'PaymentStatus',
      sortable: true,
      filter: 'agTextColumnFilter',
      cellRenderer: (params: any) => {
        const status = params.value;
        let backgroundColor = '';
        let textColor = 'white';

        switch (status) {
          case 'Completed':
            backgroundColor = 'green';
            break;
          case 'Pending':
            backgroundColor = 'red';
            break;
          default:
            backgroundColor = 'gray';
            break;
        }

        return `<span style="background-color: ${backgroundColor}; color: ${textColor}; 
                    padding: 5px 10px 5px 10px; border-radius: 15px; cursor: pointer;">
                    ${status}
                </span>`;
      }
    },
    { 
      field: 'updatedAt', 
      headerName: 'Updatedat', 
      sortable: true, 
      filter: 'agDateColumnFilter',
      cellRenderer: (params: any) => {
        return params.value.split('T')[0];
      } 
    },
    { field: 'amount', headerName: 'Amount', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'paymentMethod', headerName: 'PaymentMethod', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'transactionId', headerName: 'TransactionId', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'advanceAmount', headerName: 'AdvanceAmount', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'remainingAmount', headerName: 'RemainingAmount', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'remarks', headerName: 'Remarks', sortable: true, filter: 'agTextColumnFilter' },
  ];
  BookingcolumnDefs: any = [
    { field: 'hostelName', headerName: 'HostelName', sortable: true, filter: 'agNumberColumnFilter' },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      filter: 'agTextColumnFilter',
      cellRenderer: (params: any) => {
        const status = params.value;
        let backgroundColor = '';
        let textColor = 'white';

        switch (status) {
          case 'Completed':
            backgroundColor = 'green';
            break;
          case 'Pending':
            backgroundColor = 'red';
            break;
          case 'Resolved':
            backgroundColor = 'orange';
            break;
          case 'InProgress':
            backgroundColor = 'blue';
            break;
          default:
            backgroundColor = 'gray';
            break;
        }

        return `<span style="background-color: ${backgroundColor}; color: ${textColor}; 
                    padding: 5px 10px 5px 10px; border-radius: 15px; cursor: pointer;">
                    ${status}
                </span>`;
      },
      editable: (params: any) => {
        return params.data.status !== 'Completed';
      },
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Completed', 'Pending', 'Resolved', 'New', 'Cancelled', 'InProgress']
      }
    },
    { field: 'userName', headerName: 'UserName', sortable: true, filter: 'agTextColumnFilter' },
    {
      field: 'requestDate',
      headerName: 'RequestDate',
      sortable: true,
      filter: 'agDateColumnFilter',
      cellRenderer: (params: any) => {
        return params.value.split('T')[0];
      }
    },
    {
      field: 'requestType',
      headerName: 'RequestType',
      sortable: true,
      filter: 'agTextColumnFilter',
      cellRenderer: (params: any) => {
        const requestType = params.value;
        let color = '';

        switch (requestType) {
          case 'Booking':
            color = 'green';
            break;
          case 'Maintenance':
            color = 'red';
            break;
          case 'Inquiry':
            color = 'blue';
            break;
          default:
            color = 'black';
            break;
        }
        return `<span style="color: ${color}; font-weight: bold;">${requestType}</span>`;
      }
    },
    { field: 'description', headerName: 'Description', sortable: true, filter: 'agTextColumnFilter', tooltipField: 'description' },
    { field: 'assignedTo', headerName: 'AssignedTo', sortable: true, filter: 'agTextColumnFilter' },
    { field: 'response', headerName: 'Response', sortable: true, filter: 'agTextColumnFilter', tooltipField: 'response' },
    { field: 'contactDetails', headerName: 'ContactDetails', sortable: true, filter: 'agTextColumnFilter' },
    {
      field: 'lastUpdated',
      headerName: 'LastUpdated',
      sortable: true,
      filter: 'agDateColumnFilter',
      cellRenderer: (params: any) => {
        return params.value.split('T')[0];
      }
    }
  ];



  DetailsrowData: any = [];
  PaymentrowData: any = [];

  gridOptions: any = {};

  constructor(private reqService: RequestService) { }
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId !== null) {
      const numericUserId = parseInt(userId, 10);
      this.GetHostelRequest(numericUserId);
    }
  }

  GetHostelRequest(UserID: number) {
    this.reqService.GetHostelRequest(UserID).subscribe((res: any) => {
      this.DetailsrowData = res.content.details;
      this.PaymentrowData = res.content.payment;
    });
  }

  onTopClick(index: number) {
    this.selectedTopIndex = index;
    this.label = index == 0 ? this.topToggle[index] : this.topToggle[index]
  }

}
