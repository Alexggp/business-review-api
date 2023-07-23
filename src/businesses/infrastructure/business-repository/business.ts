import { BusinessOnline, BusinessPhysical } from "../../domain/business";

export const BUSINESSES: (BusinessPhysical | BusinessOnline)[] = [
  {
    id: "1",
    name: "Andamios Paco",
    website: "www.andamiospaco.com",
    email: "andamiosPaco@mail.com",
    numberOfReviews: 123,
  },
  {
    id: "2",
    name: "Aspiradoras Nati",
    website: "www.natipelusas.com",
    email: "nati@mail.com",
    numberOfReviews: 13,
  },
  {
    id: "3",
    name: "Churros tres hermanos",
    website: "www.treshermanoschurreria.com",
    email: "churros3hermanos@mail.com",
    numberOfReviews: 3,
  },
  {
    id: "4",
    name: "Churros tres hermanos",
    address: "Plaza de la Paja, 2",
    phone: 90812321,
    email: "churros3hermanos@mail.com",
    numberOfReviews: 3,
  },
  {
    id: "5",
    name: "Andamios Paco",
    address: "Calle Jesús, 23 Madrid",
    phone: 912312389,
    email: "churros3hermanos@mail.com",
    numberOfReviews: 3,
  },
];
