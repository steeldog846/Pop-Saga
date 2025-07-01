export async function piLogin() {
  const piUser = await window.Pi.authenticate();
  const signature = await window.Pi.getSignature();
  const resp = await fetch('/auth/pi-login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ piUser, signature }),
  });
  return resp.json();
}