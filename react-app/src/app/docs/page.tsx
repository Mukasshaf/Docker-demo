import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Docs() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-black">Docker Intro Session</h1>
          <p className="text-lg text-zinc-600">A clean and minimal guide for juniors on how Docker works and how to use it.</p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 font-mono">1. What is Docker?</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup, so you can focus on the code.
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Standardized packaging (Containers)</li>
              <li>Runs consistently on any machine</li>
              <li>Eliminates &quot;It works on my machine&quot; syndrome</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-mono">2. How it Works</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Docker uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 font-mono text-sm overflow-x-auto text-zinc-800">
              <span className="text-zinc-400"># Creating an Image</span><br/>
              docker build -t my-app .
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-mono">3. Pushing to Docker Hub</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Share your containerized application with the world or your team using Docker Hub (a container registry).
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 font-mono text-sm overflow-x-auto text-zinc-800 space-y-2">
              <div><span className="text-zinc-400"># 1. Login</span><br/>docker login</div>
              <div><span className="text-zinc-400"># 2. Tag your image</span><br/>docker tag my-app username/my-app:1.0</div>
              <div><span className="text-zinc-400"># 3. Push to registry</span><br/>docker push username/my-app:1.0</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-mono">4. Running on Your System</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Anyone can run your app locally without installing Node.js, Python, or messing with environments!
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-5 font-mono text-sm overflow-x-auto text-zinc-800 space-y-2">
              <div><span className="text-zinc-400"># Run from GitHub Source</span><br/>git clone &lt;repo-url&gt;<br/>docker-compose up -d</div>
              <div><span className="text-zinc-400"># OR Run directly from Docker Hub</span><br/>docker run -d -p 3000:3000 username/my-app:1.0</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
