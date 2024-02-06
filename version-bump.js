import { readFileSync, writeFileSync } from "fs";

const filename = "manifest.json";
const targetVersion = process.env.npm_package_version;
const manifest = JSON.parse(readFileSync(filename, "utf8"));

manifest.version = targetVersion;

writeFileSync(filename, JSON.stringify(manifest, null, 2));

