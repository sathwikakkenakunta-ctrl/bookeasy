export type Role='Owner'|'Staff'|'Reception';
export type Status='Confirmed'|'Pending'|'Completed'|'Cancelled';
export interface Service {id:string;name:string;category:string;duration:number;price:number;color:string;description:string;popular?:boolean;featured?:boolean;active:boolean}
export interface Staff {id:string;name:string;role:string;email:string;avatar:string;color:string;rating:number;bookings:number;utilization:number;services:string[];workingToday:boolean}
export interface Customer {id:string;name:string;email:string;phone:string;avatar:string;visits:number;spent:number;lastVisit:string;favorite:string;notes:string}
export interface Booking {id:string;customer:string;customerId:string;service:string;serviceId:string;staff:string;staffId:string;date:string;time:string;duration:number;price:number;status:Status;payment:'Paid'|'Pending'|'Refunded';notes?:string}
