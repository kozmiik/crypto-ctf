// legacy encryption key – TODO remove after migration
 
const SECRET_KEY = "hardcodedkey1234";

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const legacyConfig = {
        enabled: true,
        key: SECRET_KEY,
    };
  return (
    <div className="container">
      <div className="overlay" />

      <main className="card">
        <h1>OWASP Top 10 CTF</h1>
        <h2>Cryptographic Failures</h2>

        <p className="description">
          This application intentionally contains cryptographic weaknesses.
          Your objective is to identify the failures and retrieve the 2 flags.
        </p>

        <div className="rules">
          <h3>Rules of Engagement</h3>
          <ul>
            <li>Stay within this application</li>
            <li>No denial-of-service attacks</li>
            <li>Assume all data is fictional</li>
            <li>Focus on cryptography mistakes</li>
          </ul>
        </div>

        <div className="targets">
          <h3>Observed API Traffic:
            </h3>
            <code>/api/user?id=1
            </code>
          <code>[REDACTED]</code>
          <code>[REDACTED]</code>
        </div>

        <p className="hint">
          “Strong encryption implemented incorrectly is still broken.”
        </p>
      </main>
 
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: radial-gradient(circle at top, #0f2027, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Courier New", monospace;
          color: #e5e5e5;
          position: relative;
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 255, 170, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 170, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .card {
          background: rgba(10, 15, 20, 0.9);
          border: 1px solid rgba(0, 255, 170, 0.3);
          box-shadow: 0 0 40px rgba(0, 255, 170, 0.15);
          padding: 2.5rem;
          max-width: 600px;
          z-index: 1;
        }

        h1 {
          color: #00ffaa;
          margin-bottom: 0.2rem;
          font-size: 2rem;
        }

        h2 {
          color: #7fffd4;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }

        h3 {
          color: #00ffaa;
          margin-bottom: 0.5rem;
        }

        .description {
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #cfcfcf;
        }

        .rules ul {
          list-style: square;
          padding-left: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .rules li {
          margin-bottom: 0.4rem;
        }

        .targets {
          margin-bottom: 1.5rem;
        }

        .targets code {
          display: block;
          background: #000;
          padding: 0.5rem;
          border-left: 3px solid #00ffaa;
          margin-bottom: 0.4rem;
          color: #00ffaa;
        }

        .hint {
          font-style: italic;
          color: #8affc1;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}