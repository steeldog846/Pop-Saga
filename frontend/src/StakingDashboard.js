import React, { useEffect, useState } from 'react';

export default function StakingDashboard() {
  const [staked, setStaked] = useState(0);
  useEffect(() => {
    fetch('/api/balance').then(r => r.json()).then(d => setStaked(d.staked));
  }, []);
  return <div>Staked Pi: {staked}</div>;
}