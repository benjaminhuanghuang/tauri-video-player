# Read json file

In Tauri 2, the core API packages like fs, path, etc. have been moved into individual plugins.

```sh
npm install @tauri-apps/plugin-fs @tauri-apps/plugin-fs-extra
```

Add tauri-plugin-fs to src-tauri/Cargo.toml

```toml
[dependencies]
tauri = "2"
tauri-plugin-fs = "2"
```

```ts
import { readTextFile } from '@tauri-apps/plugin-fs';
import { appDir } from '@tauri-apps/plugin-fs/path'; // Different from Tauri v1


async function readJsonFile(file: string) {
  const dir = await appDir();
  const path = `${dir}${file}`;
  const text = await readTextFile(path);
  const json = JSON.parse(text);
  console.log(json);
  return json;
}
```

 Allow file access in tauri.conf.json

```json
{
  "plugins": {
    "fs": {
      "scope": ["$APPDIR/config"]
    }
  }
}
```
