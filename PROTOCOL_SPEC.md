# Residue Token Market (RTM) Protocol Spec v1.0.0-alpha

## 1. Handshake Schema

### CAPACITY_BROADCAST (Seller Intent)
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

### BID_INTENT (Buyer Intent)
{
  "node_id": "0x...",
  "action": "BID_INTENT",
  "payload": {
    "target_node": "0x...",
    "bid_amount_usd": 0.20,
    "execution_window_ms": 500
  }
}
