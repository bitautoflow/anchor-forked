const anchor = require("@coral-xyz/anchor");

describe("basic-0", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());  // .env() にしていると自動で正しいチェーンを指定してくれるっぽい

  it("Uses the workspace to invoke the initialize instruction", async () => {
    // #region code
    // Read the deployed program from the workspace.
    const program = anchor.workspace.Basic0;

    // Execute the RPC.
    await program.methods.initialize().rpc();
    // #endregion code
  });
});
