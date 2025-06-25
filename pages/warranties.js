export default function Warranties() {
  const warranties = [
    { item: "Washer", expires: "2025-01-01", manual: "washer-manual.pdf" },
    { item: "Furnace", expires: "2028-12-31", manual: "furnace-manual.pdf" },
  ];
  return (
    <main>
      <h2>Warranties & Manuals</h2>
      <ul>
        {warranties.map((w, i) => (
          <li key={i}>
            {w.item} — Warranty until {w.expires} — <a href="#">{w.manual}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}