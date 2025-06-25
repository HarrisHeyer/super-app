export default function Appliances() {
  const appliances = [
    { name: "Washer", model: "LG1234", year: 2022 },
    { name: "Furnace", model: "HeatKing 9000", year: 2020 },
  ];
  return (
    <main>
      <h2>Appliances & Systems</h2>
      <ul>
        {appliances.map((a, i) => (
          <li key={i}>
            {a.name} — {a.model} ({a.year})
          </li>
        ))}
      </ul>
    </main>
  );
}