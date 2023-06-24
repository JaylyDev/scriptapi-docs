const blockHit = entity.getBlockFromViewDirection();

if (blockHit) {
  console.log("Block Hit:");
  console.log("Block:", blockHit.block);
  console.log("Face:", blockHit.face);
  console.log("Face Location:", JSON.stringify(blockHit.faceLocation));
} else {
  console.log("No block in view direction.");
}
