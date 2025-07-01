import React from 'react';

export default function Store() {
  const purchase = async (booster, price) => {
    const res = await fetch('/api/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ booster, price }),
    });
    const data = await res.json();
    if (data.success) alert(`Bought ${data.booster}!`);
  };
  return (
    <div>
      <h3>Booster Shop</h3>
      <button onClick={() => purchase('hammer', 0.5)}>Hammer – 0.5 Pi</button>
      <button onClick={() => purchase('colorBomb', 1)}>Color Bomb – 1 Pi</button>
    </div>
  );
}