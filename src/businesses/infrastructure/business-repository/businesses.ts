import { BusinessOnline, BusinessPhysical } from "../../domain/business";

export const BUSINESSES: (BusinessPhysical | BusinessOnline)[] = [
  {
    id: "1",
    name: "Andamios Paco",
    website: "www.andamiospaco.com",
    email: "andamiosPaco@mail.com",
  },
  {
    id: "2",
    name: "Mercería Nati",
    website: "www.natipelusas.com",
    email: "nati@mail.com",
  },
  {
    id: "3",
    name: "Churros tres hermanos",
    website: "www.treshermanoschurreria.com",
    email: "churros3hermanos@mail.com",
  },
  {
    id: "4",
    name: "Churros tres hermanos",
    address: "www.treshermanoschurreria.com",
    phone: 90812321,
    email: "churros3hermanos@mail.com",
  },
  {
    id: "5",
    name: "Churros tres hermanos",
    address: "www.treshermanoschurreria.com",
    phone: 912312389,
    email: "churros3hermanos@mail.com",
  },
];
