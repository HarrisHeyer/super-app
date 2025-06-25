export default function ServiceTickets() {
  const tickets = [
    { id: 1, issue: "Broken AC", status: "Open" },
    { id: 2, issue: "Leaky faucet", status: "Closed" },
  ];
  return (
    <main>
      <h2>Service Tickets</h2>
      <ul>
        {tickets.map((t) => (
          <li key={t.id}>
            #{t.id}: {t.issue} — {t.status}
          </li>
        ))}
      </ul>
    </main>
  );
}