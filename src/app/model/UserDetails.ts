export interface UserDetails {
    UserName: string;
    Email: string;
    Password: string;
    UserRole: string;
    CreateBy?: string;
    UpdateBy?: string;
    CreateDate?: Date;
    UpdateDate?: Date;
    Name: string;
    Age?: number;
    PhoneNo: number;
    DateOfBirth?: Date;
    MaritalStatus?: string;
    State?: string;
    Address?: string;
    AltPhoneNo?: number;
    ProofPath?: string;
    Sex?: string;
    HostelDetails?: {
        HostelName: string;
        HostalAddress: string;
        NoOfRooms: number;
        MinimumRent: number;
        MaximunRent: number;
        ContactNumber: number;
        OwnerName?: string;
        HostalPhotosPath?: string;
    };
}

export interface Payment {
    hostelId: number;
    userId: number;
    paymentDate: string;
    amount: number;
    paymentMethod: string;
    transactionId: string;
    paymentStatus: string;
    isAdvancePayment: boolean;
    advanceAmount: number;
    remainingBalance: number;
    remarks: string;
    createdAt: string;
    updatedAt: string;
}

export interface HostelRequest {
    requestType: string;
    hostelId: number;
    userId: number;
    requestDate: string;
    status: string;
    description: string;
    assignedTo: string;
    response: string;
    contactDetails: string;
    isResolved: boolean;
    lastUpdated: string;
    payment: Payment;
}