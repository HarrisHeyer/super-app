export default function WorkHistory() {
  const history = [
    { date: "2024-01-15", provider: "Plumber Pro", service: "Fixed leaking sink" },
    { date: "2024-05-10", provider: "Electric Express", service: "Replaced outlets" },
  ];
  return (
    <main>
      <h2>Work History</h2>
      <ul>
        {history.map((item, i) => (
          <li key={i}>
            {item.date}: {item.provider} - {item.service}
          </li>
        ))}
      </ul>
    </main>
  );
}