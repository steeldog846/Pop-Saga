// server.js
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { verifyPiSignature } from './auth/piAuth';

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'YOUR_SECRET', resave: false, saveUninitialized: true }));

// 1. Pi Network Login
app.post('/auth/pi-login', async (req, res) => {
  const { piUser, signature } = req.body;
  if (verifyPiSignature(piUser, signature)) {
    req.session.user = piUser;
    return res.json({ success: true, piUser });
  }
  res.status(401).json({ success: false });
});

// 2. Get staked Pi (demo)
app.get('/api/balance', (req, res) => {
  // Replace with real Pi Platform call
  const staked = 3.14;
  res.json({ staked });
});

// 3. Purchase Booster
app.post('/api/purchase', (req, res) => {
  const { booster, price } = req.body;
  // Simulate payment logic
  console.log(`User purchased ${booster} for 🟣${price}`);
  res.json({ success: true, booster });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));