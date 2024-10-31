const { createServer } = require('https');
const http = require('http');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');

const hostname = 'localhost';
const port1 = 80;
const port2 = 443;
const app = next({ hostname, port: port2 });
const handle = app.getRequestHandler();

const httpsOptions = {
	key: readFileSync('/etc/letsencrypt/live/europa-bus.net/privkey.pem'),
	cert: readFileSync('/etc/letsencrypt/live/europa-bus.net/cert.pem'),
};

app.prepare().then(() => {
	createServer(httpsOptions, async (req, res) => {
		try {
			// Be sure to pass `true` as the second argument to `url.parse`.
			// This tells it to parse the query portion of the URL.
			const parsedUrl = parse(req.url, true);
			const { pathname, query } = parsedUrl;

			if (pathname === '/a') {
				await app.render(req, res, '/a', query);
			} else if (pathname === '/b') {
				await app.render(req, res, '/b', query);
			} else {
				await handle(req, res, parsedUrl);
			}
		} catch (err) {
			console.error('Error occurred handling', req.url, err);
			res.statusCode = 500;
			res.end('internal server error');
		}
	})
		.once('error', (err) => {
			console.error(err);
			process.exit(1);
		})
		.listen(port2, () => {
			console.log(`> Ready on https://${hostname}:${port2}`);
		});
});

// const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World');
//   //res.writeHead(301, { Location: `https://${hostname}:${port2}` });
//   //res.end();
//     res.writeHead(301, { Location: `https://auto-bus.net/` });
//   res.end();
// });

// server.listen(port1, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port1} -> https://auto-bus.net/`);
// });

const server = http.createServer((req, res) => {
	res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
	res.end();
});

server.listen(port1);
console.log(`http2https ==> 80:443`);
