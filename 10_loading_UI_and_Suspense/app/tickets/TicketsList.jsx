import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function fetchTickets() {
  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //---
  const response = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 0 },
  });
  return response.json();
}

export default async function TicketsList() {
  const tickets = await fetchTickets();
  return (
    <>
      {tickets.length === 0 && (
        <p className="text-center">There is non open tickets</p>
      )}

      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 150)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
