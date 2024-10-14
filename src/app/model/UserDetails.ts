export interface UserDetails{
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