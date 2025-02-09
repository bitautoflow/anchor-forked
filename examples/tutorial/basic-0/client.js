// client.js is used to introduce the reader to generating clients from IDLs.
// It is not expected users directly test with this example. For a more
// ergonomic example, see `tests/basic-0.js` in this workspace.

const anchor = require("@coral-xyz/anchor");

// Configure the cluster.
anchor.setProvider(anchor.AnchorProvider.env());

async function main() {
  // #region main
  // Read the generated IDL.
  const idl = JSON.parse(
    require("fs").readFileSync("./target/idl/basic_0.json", "utf8")
  );

  // Address of the deployed program.
  const programId = new anchor.web3.PublicKey("DzVuV6qMC2oJJEwerpYrenPDhTQuHQRfMe4LdCmMZJYK");

  // Generate the program client from IDL.
  const program = new anchor.Program(idl, programId);

  // Execute the RPC.
  await program.methods.initialize();
  // #endregion main
}

console.log("Running client.");
main().then(() => console.log("Success"));
