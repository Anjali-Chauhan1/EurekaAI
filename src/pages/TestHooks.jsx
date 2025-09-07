import React, { useState } from "react";

export default function TestHooks() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: 24 }}>
        Count: {count}
      </button>
    </div>
  );
}
