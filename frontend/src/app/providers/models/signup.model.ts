export class Signup {
    name: string;
    email: string;
    password: string;
    userType: ClientType;
}

export enum ClientType {
    DOCTOR = "DOC",
    PATIENT = "PATIENT"
}