import React, { useState } from 'react';
import { piLogin } from './PiAuth';
import StakingDashboard from './StakingDashboard';
import Store from './Store';

export default function App() {
  const [user, setUser] = useState(null);
  return !user ? (
    <button onClick={async () => {
      const resp = await piLogin();
      if (resp.success) setUser(resp.piUser);
    }}>Login with Pi</button>
  ) : (
    <>
      <h1>Welcome, {user.username}</h1>
      <StakingDashboard />
      <Store />
    </>
  );
}