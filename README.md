# 🐳 Docker Intro Session

Welcome to the Docker Intro Session Demo App! This simple web application is designed to demonstrate how Docker works, how to containerize a modern React application, and how to distribute it.

## 🚀 Getting Started locally (Without Docker)

If you have Node.js installed, you can run this app locally:

```bash
cd react-app
npm install
npm run dev
```
Go to `http://localhost:3000` to view the app!

---

## 📦 Running with Docker Compose

You don't need Node.js installed to run this app if you use Docker!

```bash
# Build and run the container in detached mode
docker-compose up -d --build
```
Access the app at `http://localhost:3000`.

To stop the services:
```bash
docker-compose down
```

---

## ☁️ Uploading to Docker Hub

Want to share your app with the world? Follow these steps!

1. **Login to Docker Hub**
   ```bash
   docker login
   ```
2. **Tag your image with your Docker Hub username**
   ```bash
   # Make sure you built the image first and use its ID or existing tag
   docker tag docker-session-app-react-app <your-dockerhub-username>/react-docker-demo:1.0
   ```
3. **Push the image**
   ```bash
   docker push <your-dockerhub-username>/react-docker-demo:1.0
   ```

---

## 💡 About This App
This is a modern Next.js React application utilizing `shadcn/ui`, `Tailwind CSS`, and `tsparticles`. 
It serves as a breathtaking UI demonstration of Docker containerization.
