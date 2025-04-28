# Video Player

- Rust + Tauri 2
- React + Tailwind4 + Shadcn

## Setup

```sh
cargo install create-tauri-app

npm create tauri-app@latest

npm run tauri dev

npm run tauri build
```

## Setup Tailwind

```sh
npm install tailwindcss @tailwindcss/vite
```

## Setup sancn ui

setup alias

```js
resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
```

tsconfig.json

```js
 "baseUrl": ".", // Ensure this is set to the root directory
    "paths": {
      "@/*": ["src/*"] // Map '@/*' to 'src/*'
    }
```

```sh
npx shadcn@latest init 
```

## exe setup

Modify tauri.config.json to fix "failed to bundle project: error running bundle_dmg.sh on mac"

```json
 "bundle": {
    "targets": [
      "app"
    ],
 }
```

```sh
npm run tauri dev

npm run tauri build --verbose
```
