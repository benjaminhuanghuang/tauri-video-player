# Read json file

In Tauri 2, the core API packages like fs, path, etc. have been moved into individual plugins.

```sh
import { readDir, BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";

```

```ts
import { readTextFile } from '@tauri-apps/plugin-fs';

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

## Reference

How to Build a Simple File Browser with Tauri 1.x
<https://www.youtube.com/watch?v=Azcw1-leCkQ>
<https://github.com/akoskm/file-browser-tauri>

Files, Filesystem, OPFS and Tauri v2
<https://www.youtube.com/watch?v=UrlIqYJbsWc>
