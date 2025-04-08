# 🌐 Portal Techgel Frontend

<p>
  <a href="https://vitejs.dev">
    <img src="https://img.shields.io/badge/Vite-6.x-purple.svg?logo=vite" alt="vite" />
  </a>
  &nbsp;&nbsp;
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19-blue.svg?logo=react" alt="react" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.7-blue.svg?logo=typescript" alt="typescript" />
  </a>
  &nbsp;&nbsp;
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwindcss&logoColor=white" alt="tailwindcss" />
  </a>
</p>



This is the frontend codebase for the **Techgel Portal**, built using modern web tools like **React**, **Vite**, **TypeScript**, and **TailwindCSS**. The app is also powered by **Redux Toolkit**, **Apollo Client**, and **React Query** to handle state and data fetching efficiently.

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally:

---

### 📦 Prerequisites

You’ll need the following installed on your computer beforehand:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js, run npm --version in terminal to check if it has been installed on your PC).

### ⚙️ Setting Up Environment Variables (If `node` or `npm` is not recognized)
---

If you get an error like:

```bash
'node' is not recognized as an internal or external command
```

or 

```bash
'npm' is not recognized as an internal or external command
```

It means your Node.js installation path is not added to your system’s `PATH` environment variable.

#### 🖥️ Windows
---

1. Open **Start Menu**, search for `Environment Variables`, and click **"Edit the system environment variables"**.
2. In the **System Properties** window, click **Environment Variables...** at the bottom.
3. Under **System variables**, find and select the variable named `Path`, then click **Edit**.
4. Click **New** and add the path to your Node.js installation. Common paths:
```bash
C:\Program Files\nodejs\
```
5. Click **OK** to close all windows.
6. Open a new terminal and test:
```bash
node -v
npm -v
```
#### 🍏 macOS / 🐧 Linux
---
1. Open your terminal.
2. Add Node.js to your PATH by editing your shell config:

For bash:

```bash
nano ~/.bashrc
```
For zsh:

```bash
nano ~/.zshrc
```
3. Add the following line (adjust the path if needed):

```bash
export PATH=/usr/local/bin:$PATH
```
Or if using nvm:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
4. Reload the shell:

```bash
source ~/.bashrc   # or ~/.zshrc
```
Test it:

```bash
node -v
npm -v
```5. 
---

### 📁 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/portal-techgel-frontend.git
cd portal-techgel-frontend
```

### 📥 Install Dependencies

```bash
npm install
```

### 🧪  Run the Development Server

```bash
npm run dev
```

## 🔧 Mocking with MSW
This project uses MSW (Mock Service Worker) for API mocking in development. You can find the MSW setup in the public directory. 

MSW intercepts requests and allows local development without a live backend. All mock date will be refreshed when the user press refresh the page.

## 📄  License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this software.