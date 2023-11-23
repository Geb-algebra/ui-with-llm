import esbuild from 'esbuild';

console.log();
console.log('building...');

esbuild
  .build({
    entryPoints: ['./server/index.ts'],
    outdir: './server-build',
    target: ['node18'],
    platform: 'node',
    sourcemap: true,
    format: 'esm',
    logLevel: 'info',
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
