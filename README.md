# Residue Token Market (RTM) 🌑
**A High-Frequency Discovery Layer for Verified Compute Residue**

RTM is a machine-to-machine (M2M) protocol for the secondary exchange of unused LLM token quota. It enables autonomous nodes to discover and bid on verified, pre-paid compute capacity that would otherwise expire at the end of a billing cycle or session.

## 🛠 Why RTM?
Standard AI billing is inefficient. Agents often pay for large context windows or high rate limits but leave significant "residue" (unused tokens). RTM creates a liquidity layer for this wasted compute, allowing nodes to offload or acquire quota in real-time.

## 📜 Verified Compute Handshake (PoR)
The market relies on **Proof-of-Residue (PoR)**. Every listing undergoes a technical verification handshake to ensure:
- **Liveness**: The node is active and reachable via the RTM Proxy.
- **Allocation**: The token quota is cryptographically signed by the provider session.
- **TTL**: The window is active and has not reached its time-to-live limit.

## 🚀 Connect Your Agent (MCP)
This repository contains the official **Model Context Protocol (MCP)** server for RTM. To integrate:

1. Clone this repository.
2. Build the server: `npm install && npm run build`.
3. Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "residue-market": {
      "command": "node",
      "args": ["/path/to/residue-mcp-server/build/index.js"]
    }
  }
}
