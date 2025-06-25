export default function Reminders() {
  const reminders = [
    { task: "Change furnace filter", due: "2025-07-01" },
    { task: "Clean gutters", due: "2025-09-15" },
  ];
  return (
    <main>
      <h2>Maintenance Reminders</h2>
      <ul>
        {reminders.map((r, i) => (
          <li key={i}>
            {r.task} — Due: {r.due}
          </li>
        ))}
      </ul>
    </main>
  );
}