import { readDir, BaseDirectory, readTextFile } from "@tauri-apps/plugin-fs";

async function listFilesInFolder(folder: string): Promise<string[]> {
  try {
    // const entries = await readDir(folder, {
    //   baseDir: BaseDirectory.AppData,
    // });
    const entries = await readDir(folder, {
      baseDir: BaseDirectory.,
    });
    const files = entries.filter((e) => e.isFile).map((e) => e.name as string); // 'as string' because entry.name can be undefined

    return files;
  } catch (error) {
    console.error("Failed to read directory:", error);
    return [];
  }
}

async function readJson(
  folder: string,
  fileName: string
): Promise<Record<string, any> | null> {
  const raw = await readTextFile(`${folder}${fileName}`, {
    baseDir: BaseDirectory.Executable,
  });

  const config = JSON.parse(raw);
  console.log(config);
  return config;
}

export { listFilesInFolder, readJson };
