import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const API_BASE = "https://rtm-ai.lovable.app";

const server = new Server({ name: "residue-market", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_market_residue",
      description: "Lists all verified token quota currently available for bidding.",
      inputSchema: { type: "object", properties: {} }
    },
    {
      name: "submit_bid",
      description: "Places a formal bid on a specific residue lot.",
      inputSchema: {
        type: "object",
        properties: {
          node_id: { type: "string" },
          lot_id: { type: "string" },
          bid_usd: { type: "number" }
        },
        required: ["node_id", "lot_id", "bid_usd"]
      }
    }
  ]
}));

const transport = new StdioServerTransport();
await server.connect(transport);
