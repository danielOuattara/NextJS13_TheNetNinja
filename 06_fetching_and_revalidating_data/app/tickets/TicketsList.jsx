async function fetchTickets() {
  const response = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 10 },
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
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 150)}...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
    </>
  );
}
