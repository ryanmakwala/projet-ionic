export interface UserInfo {
    id: number;
    firstName: string;
    lastName: string;
    role: 'doctor' | 'patient';
}