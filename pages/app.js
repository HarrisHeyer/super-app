import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24, maxWidth: 700, margin: "0 auto" }}>
      <nav style={{ marginBottom: 32 }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/work-history">Work History</Link> |{" "}
        <Link href="/service-providers">Service Providers</Link> |{" "}
        <Link href="/service-tickets">Service Tickets</Link> |{" "}
        <Link href="/appliances">Appliances</Link> |{" "}
        <Link href="/warranties">Warranties</Link> |{" "}
        <Link href="/reminders">Reminders</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}