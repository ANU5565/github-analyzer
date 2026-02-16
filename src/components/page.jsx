export default function Page({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#1f1c2c,#928dab)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </div>
  );
}
