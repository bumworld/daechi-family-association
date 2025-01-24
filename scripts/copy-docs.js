// scripts/copy-docs.js
const fs = require('fs-extra');
const path = require('path');

const copyDocs = async () => {
  const docsDir = path.join(__dirname, '../docs');
  const buildDocsDir = path.join(__dirname, '../build/docs');
  
  await fs.ensureDir(buildDocsDir);
  await fs.copy(docsDir, buildDocsDir);
  console.log('Documentation files copied successfully');
};

copyDocs();
