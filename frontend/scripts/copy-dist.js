import { cp } from 'fs/promises';
import { join } from 'path';

const sourceDir = join(process.cwd(), 'dist');
const targetDir = join(process.cwd(), 'build');

async function copyDist() {
  try {
    await cp(sourceDir, targetDir, { recursive: true });
    console.log('Successfully copied dist to build directory');
  } catch (error) {
    console.error('Error copying dist to build:', error);
    process.exit(1);
  }
}

copyDist(); 