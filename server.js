const fs = require("node:fs");
const path = require("node:path");

const serverPath = path.join(__dirname, ".next", "standalone", "server.js");
const standaloneRoot = path.join(__dirname, ".next", "standalone");
const standaloneNextDir = path.join(standaloneRoot, ".next");
const standaloneStaticDir = path.join(standaloneNextDir, "static");
const standalonePublicDir = path.join(standaloneRoot, "public");
const sourceStaticDir = path.join(__dirname, ".next", "static");
const sourcePublicDir = path.join(__dirname, "public");

if (!fs.existsSync(serverPath)) {
  console.error(
    'Standalone sunucu bulunamadı. Önce "npm run build" komutunu çalıştırın.'
  );
  process.exit(1);
}

const ensureStandaloneAssets = () => {
  fs.mkdirSync(standaloneNextDir, { recursive: true });

  if (fs.existsSync(sourceStaticDir)) {
    fs.cpSync(sourceStaticDir, standaloneStaticDir, {
      recursive: true,
      force: true,
    });
  }

  if (fs.existsSync(sourcePublicDir)) {
    fs.cpSync(sourcePublicDir, standalonePublicDir, {
      recursive: true,
      force: true,
    });
  }
};

ensureStandaloneAssets();
require(serverPath);
