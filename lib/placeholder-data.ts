import { Invoice } from "./definitions";

const costumer = [{ id: "A1221" }, { id: "B1232" }];

export const invoices: Invoice[] = [
  {
    id: "HA6",
    customer_id: costumer[0].id,
    amount: 15796,
    date: "2022-12-06",
    status: "pago",
  },
  {
    id: "H46",
    customer_id: costumer[1].id,
    amount: 202148,
    date: "2022-11-14",
    status: "pendente",
  },
];
