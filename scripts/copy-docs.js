// scripts/copy-docs.js
const fs = require('fs-extra');
const path = require('path');

const copyDocs = async () => {
  const docsDir = path.join(__dirname, '../public/docs');
  const buildDocsDir = path.join(__dirname, '../build/static/docs');
  
  await fs.ensureDir(buildDocsDir);
  await fs.copy(docsDir, buildDocsDir);
  console.log('Documentation files copied successfully');
};

copyDocs();
