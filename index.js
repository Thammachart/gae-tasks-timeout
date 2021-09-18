const http = require('http');

const requestListener = (req, res) => {
  if (!req.url.startsWith('/lr'))
    return res.writeHead(403).end("not allowed")

  const [, , time] = req.url.split("/")
  const milli = (Number.parseInt(time, 10) || 60) * 1000
  console.log("*** START", milli, "milliseconds")

  setTimeout(() => {
    console.log("*** STOP ", milli, "milliseconds")
    res.writeHead(200).end(`waited ${milli}`)
  }, milli)
}

const main = async () => {
  const PORT = process.env.PORT || 8080;
  const server = http.createServer(requestListener);

  // Global Request Timeout
  // server.setTimeout(8.64e+7)

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
}

main()
