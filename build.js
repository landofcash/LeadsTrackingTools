import vuePlugin  from 'esbuild-plugin-vue3';
import esbuild from 'esbuild';

const config = {
  entryPoints: ['js/src/app.jsx'],
  bundle: true,
  outfile: 'js/dst/app.js',
  plugins: [vuePlugin()],
  external: ["vue", "_"],
  sourcemap: 'inline',
  minify: process.argv.includes("-m"),
  platform: 'browser'
}
let ctx = await esbuild.context(config);
if (process.argv.includes("-w")) {
	await ctx.watch();
} else if(process.argv.includes("-s")){
	let { host, port } = await ctx.serve({
	  servedir: '.',
	});
	console.log(host+":"+port);
}
else {
	// Build once and exit if not in watch mode
	await context.rebuild();
}
