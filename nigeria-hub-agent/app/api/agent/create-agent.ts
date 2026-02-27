import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { getLangChainTools } from "@coinbase/agentkit-langchain"; // Fixed Capital 'C'
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import * as kit from "@coinbase/agentkit"; // Standard stable import

export async function createAgent() {
  // Check if the tools are actually there
  if (!kit.CdpWalletProvider) {
    throw new Error("Wallet Provider not found in library");
  }

  // 1. Initialize the Provider
  const walletProvider = await kit.CdpWalletProvider.configureWithWallet({
    apiKeyName: process.env.CDP_API_KEY_NAME || "",
    apiKeyPrivateKey: (process.env.CDP_API_KEY_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    networkId: "base-sepolia",
  });

  // 2. Initialize AgentKit
  const agentKit = await kit.AgentKit.from({
    walletProvider,
    actionProviders: [], 
  });

  // 3. Get the Tools
  const tools = await getLangChainTools(agentKit);

  // 4. Setup Gemini
  const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
  });

  // 5. Create the Agent
  return createReactAgent({
    llm,
    tools,
    messageModifier: "You are the Superchain Nigeria Hub Assistant. Answer briefly.",
  });
}