"use client";

export default function Loader() {
  const values = ["01", "02", "03", "04", "05"];

  return (
    <div className="loader-overlay">
      <div className="loader-numbers" aria-label="Loading">
        {values.map((value) => (
          <span key={value}>{value}</span>
        ))}
      </div>
    </div>
  );
}
