import React from "react";

export default function BuyActionWindow({ uid }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        zIndex: 9999,
        minWidth: "320px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Buy Stock</h3>
      <p style={{ marginBottom: "15px" }}>Selected UID: {uid}</p>

      <button
        onClick={() => alert("Buy action triggered")}
        style={{
          backgroundColor: "#0f6fff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Buy
      </button>
    </div>
  );
}
