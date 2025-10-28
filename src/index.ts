import * as core from "@actions/core";

async function run(): Promise<void> {
  core.info("This is a template action");
  const nameToGreet = core.getInput("who-to-greet");
  core.info(`Hello, ${nameToGreet}!`);

  const message1 = globalThis.BROADCAST_MESSAGE ?? "{}";
  const message2 = (globalThis as any).BROADCAST_MESSAGE ?? "{}";

  console.log("Message 1:", message1);
  console.log("Message 2:", message2);
}

run().catch((err) => {
  console.error(err);
  core.setFailed(err);
});
