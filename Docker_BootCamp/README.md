# hello-docker

The sample app for the **From Code to Container** workshop — a tiny Node.js + Express API that responds with a single message. Perfect for learning Docker.

## Files

- `index.js` — the app (one endpoint)
- `package.json` — the dependency list
- `Dockerfile` — the recipe for building the image
- `.dockerignore` — keeps `node_modules` out of the image

## Run it locally

```bash
npm install      # downloads Express into node_modules
node index.js    # starts the server → "Running on port 3000"
```

Then open http://localhost:3000 — you should see `Hello from a container! 🐳`

## Run it with Docker

```bash
docker build -t myapp .            # build the image from the Dockerfile
docker run -p 3000:3000 myapp      # run a container (host:container ports)
```

Open http://localhost:3000 again — same app, now running inside a container.

## Publish to Docker Hub

```bash
docker login
docker tag myapp username/myapp:v1     # replace "username" with your Docker Hub username
docker push username/myapp:v1
```

Anyone, anywhere can then run it:

```bash
docker pull username/myapp:v1
docker run -p 3000:3000 username/myapp:v1
```
