export default function ServiceProviders() {
  const providers = [
    { name: "Plumber Pro", phone: "555-1234" },
    { name: "Electric Express", phone: "555-5678" },
  ];
  return (
    <main>
      <h2>Service Providers</h2>
      <ul>
        {providers.map((p, i) => (
          <li key={i}>
            {p.name} — {p.phone}
          </li>
        ))}
      </ul>
    </main>
  );
}