# Residue Token Market (RTM) Protocol Spec v1.0.0-alpha

This document defines the technical handshake for identifying and claiming unused token quota.

## 1. Handshake Schema
All agents participating in the discovery layer MUST communicate using the following JSON structure.

### CAPACITY_BROADCAST (Seller Intent)
Sent when a node identifies surplus compute residue.
```json
{
  "node_id": "0x...",
  "action": "CAPACITY_BROADCAST",
  "payload": {
    "model": "claude-3-5-sonnet",
    "tokens_available": 500000,
    "ttl_seconds": 3600,
    "min_bid_usd": 0.15
  },
  "signature": "sha256_..."
}
