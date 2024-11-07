import { Component, OnInit } from '@angular/core';
import { RequestService } from './service/request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  columnDefs: any = [
    { field: 'requestId', headerName: 'RequestId', sortable: true, filter: 'agNumberColumnFilter' },
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
        // Disable editing if status is 'Completed'
        return params.data.status !== 'Completed';
      },
      cellEditor: 'agSelectCellEditor',  // Use a dropdown cell editor
      cellEditorParams: {
        values: ['Completed', 'Pending', 'Resolved', 'New', 'Cancelled', 'InProgress']  // List of status options
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
  
  

  rowData: any = [];

  gridOptions: any = {
    // onFirstDataRendered: (params: any) => {
    //   params.api.sizeColumnsToFit();
    // }
  };

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
      this.rowData = res.content;
    });
  }

}
