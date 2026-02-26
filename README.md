# 🔵 Base Ecosystem Resource Hub (Nigeria)
> **Status:** Mainnet Live | **Project Type:** Public Good / Developer Education

This hub is a streamlined technical resource designed to reduce onboarding friction for developers in emerging markets. We focus on high-utility integrations for the **Base Smart Wallet** and **Gasless UX**.

[🚀 View Live Documentation](https://goodie5049.github.io/base-mainnet-docs/)

### 🛠 Core Focus
* **Smart Wallet Adoption:** Moving beyond seed phrases with Passkeys.
* **Paymaster Integration:** Templates for sponsored (0-gas) transactions.
* **Local Context:** Optimized guides for high-latency mobile environments.

### 🚀 Quick Start
```javascript
import { Coinbase } from '@coinbase/coinbase-sdk';

const cdp = new Coinbase({ 
  apiKeyName: 'YOUR_NAME', 
  privateKey: 'YOUR_KEY' 
});

const wallet = await cdp.createWallet({ 
  networkId: 'base-mainnet' 
});
```
> ⚠️ Security Note: Never hardcode your real API keys or Private Keys in your source code. Use environment variables (.env) to keep your credentials secure.
