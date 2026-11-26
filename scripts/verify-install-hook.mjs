import { appendFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const logPath =
	'/home/marko-og/Documents/wappa/portfolio/.cursor/debug-c70cf5.log';

function log(hypothesisId, message, data) {
	const line = JSON.stringify({
		sessionId: 'c70cf5',
		runId: 'post-fix-yarn',
		hypothesisId,
		location: 'scripts/verify-install-hook.mjs',
		message,
		data,
		timestamp: Date.now(),
	});
	appendFileSync(logPath, `${line}\n`);
}

const pkg = JSON.parse(
	await import('node:fs').then((fs) =>
		fs.readFileSync(
			new URL('../package.json', import.meta.url),
			'utf8',
		),
	),
);

log('H1', 'package.json scripts snapshot', {
	hasPostinstall: Boolean(pkg.scripts?.postinstall),
	postinstall: pkg.scripts?.postinstall ?? null,
	hasUpdateBrowserslistDb: Boolean(
		pkg.devDependencies?.['update-browserslist-db'],
	),
});

const yarn = spawnSync('yarn', ['install', '--frozen-lockfile'], {
	cwd: new URL('..', import.meta.url).pathname,
	encoding: 'utf8',
	timeout: 120000,
});

log('H1', 'yarn install result', {
	status: yarn.status,
	signal: yarn.signal,
	stderrTail: (yarn.stderr || '').slice(-800),
	stdoutTail: (yarn.stdout || '').slice(-800),
	postinstallMentioned: /postinstall|update-browserslist-db|pnpm up/.test(
		`${yarn.stdout}${yarn.stderr}`,
	),
});

process.exit(yarn.status === 0 ? 0 : 1);