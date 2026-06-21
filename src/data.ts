import type {Booking,Customer,Service,Staff} from './types';
export const services:Service[]=[
 {id:'s1',name:'Signature Facial',category:'Skincare',duration:60,price:120,color:'#da7d64',description:'A restorative, glow-boosting treatment tailored to your skin.',popular:true,featured:true,active:true},
 {id:'s2',name:'Deep Tissue Massage',category:'Wellness',duration:75,price:145,color:'#6d8299',description:'Focused pressure work to release tension and restore movement.',popular:true,active:true},
 {id:'s3',name:'Cut & Finish',category:'Hair',duration:45,price:85,color:'#9b7091',description:'A considered consultation, precision cut and polished finish.',featured:true,active:true},
 {id:'s4',name:'Brow Architecture',category:'Beauty',duration:30,price:55,color:'#c29a5c',description:'Mapping, shaping and finishing for naturally defined brows.',active:true},
 {id:'s5',name:'Mindful Reset',category:'Wellness',duration:45,price:75,color:'#648a78',description:'Breathwork and guided meditation for a calmer nervous system.',active:true},
 {id:'s6',name:'Bridal Consultation',category:'Events',duration:90,price:180,color:'#b76e79',description:'A complete beauty plan and trial for your celebration.',active:true}
];
export const staff:Staff[]=[
 {id:'t1',name:'Maya Patel',role:'Senior Esthetician',email:'maya@bookeasy.app',avatar:'MP',color:'#6e3d57',rating:4.9,bookings:148,utilization:86,services:['s1','s4'],workingToday:true},
 {id:'t2',name:'Olivia Chen',role:'Massage Therapist',email:'olivia@bookeasy.app',avatar:'OC',color:'#536d79',rating:4.8,bookings:121,utilization:78,services:['s2','s5'],workingToday:true},
 {id:'t3',name:'Theo Bennett',role:'Master Stylist',email:'theo@bookeasy.app',avatar:'TB',color:'#a06152',rating:5,bookings:175,utilization:92,services:['s3','s6'],workingToday:true},
 {id:'t4',name:'Amara Okafor',role:'Beauty Specialist',email:'amara@bookeasy.app',avatar:'AO',color:'#8a6d4e',rating:4.9,bookings:96,utilization:74,services:['s1','s4','s6'],workingToday:false}
];
export const customers:Customer[]=[
 {id:'c1',name:'Sophia Williams',email:'sophia.w@example.com',phone:'+1 415 555 0182',avatar:'SW',visits:12,spent:1240,lastVisit:'Jun 18, 2026',favorite:'Signature Facial',notes:'Prefers quiet appointments.'},
 {id:'c2',name:'James Anderson',email:'james.a@example.com',phone:'+1 415 555 0136',avatar:'JA',visits:8,spent:920,lastVisit:'Jun 17, 2026',favorite:'Deep Tissue Massage',notes:'Focus on shoulder tension.'},
 {id:'c3',name:'Isabella Martinez',email:'isabella.m@example.com',phone:'+1 415 555 0194',avatar:'IM',visits:17,spent:1865,lastVisit:'Jun 16, 2026',favorite:'Cut & Finish',notes:'Usually books with Theo.'},
 {id:'c4',name:'Noah Thompson',email:'noah.t@example.com',phone:'+1 415 555 0171',avatar:'NT',visits:5,spent:475,lastVisit:'Jun 12, 2026',favorite:'Mindful Reset',notes:'Evening appointments.'},
 {id:'c5',name:'Ava Robinson',email:'ava.r@example.com',phone:'+1 415 555 0122',avatar:'AR',visits:9,spent:805,lastVisit:'Jun 10, 2026',favorite:'Brow Architecture',notes:'Sensitive skin.'}
];
export const bookings:Booking[]=[
 {id:'BK-1048',customer:'Sophia Williams',customerId:'c1',service:'Signature Facial',serviceId:'s1',staff:'Maya Patel',staffId:'t1',date:'2026-06-21',time:'09:00',duration:60,price:120,status:'Confirmed',payment:'Paid'},
 {id:'BK-1049',customer:'James Anderson',customerId:'c2',service:'Deep Tissue Massage',serviceId:'s2',staff:'Olivia Chen',staffId:'t2',date:'2026-06-21',time:'10:30',duration:75,price:145,status:'Confirmed',payment:'Paid'},
 {id:'BK-1050',customer:'Isabella Martinez',customerId:'c3',service:'Cut & Finish',serviceId:'s3',staff:'Theo Bennett',staffId:'t3',date:'2026-06-21',time:'11:00',duration:45,price:85,status:'Pending',payment:'Pending'},
 {id:'BK-1051',customer:'Ava Robinson',customerId:'c5',service:'Brow Architecture',serviceId:'s4',staff:'Maya Patel',staffId:'t1',date:'2026-06-21',time:'13:30',duration:30,price:55,status:'Confirmed',payment:'Paid'},
 {id:'BK-1052',customer:'Noah Thompson',customerId:'c4',service:'Mindful Reset',serviceId:'s5',staff:'Olivia Chen',staffId:'t2',date:'2026-06-21',time:'15:00',duration:45,price:75,status:'Confirmed',payment:'Pending'},
 {id:'BK-1053',customer:'Emma Davis',customerId:'c6',service:'Bridal Consultation',serviceId:'s6',staff:'Theo Bennett',staffId:'t3',date:'2026-06-22',time:'10:00',duration:90,price:180,status:'Confirmed',payment:'Paid'},
 {id:'BK-1054',customer:'Liam Wilson',customerId:'c7',service:'Signature Facial',serviceId:'s1',staff:'Amara Okafor',staffId:'t4',date:'2026-06-23',time:'14:00',duration:60,price:120,status:'Completed',payment:'Paid'}
];
export const revenue=[{m:'Jan',v:8200,b:98},{m:'Feb',v:9400,b:112},{m:'Mar',v:8800,b:106},{m:'Apr',v:11200,b:128},{m:'May',v:12500,b:142},{m:'Jun',v:14840,b:164}];
