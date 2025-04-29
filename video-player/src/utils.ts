import { readTextFile } from "@tauri-apps/plugin-fs";
import { appDir } from "@tauri-apps/plugin-fs-extra";

async function listFilesInFolder(folder: string): Promise<string[]> {
  try {
    const appDirectory: string = await appDir();
    const folderPath: string = `${appDirectory}${folder}`;

    const entries: FileEntry[] = await readDir(folderPath, {
      recursive: false,
    });

    const files: string[] = entries
      .filter((entry) => entry.name !== undefined && !entry.children) // ignore folders
      .map((entry) => entry.name as string); // 'as string' because entry.name can be undefined

    return files;
  } catch (error) {
    console.error("Failed to read directory:", error);
    return [];
  }
}

async function readJson() {
  const path = await appDir(); // Get app directory (like /home/user/.config/App)
  const filePath = `${path}data/myfile.json`; // Adjust path as needed
  const fileContent = await readTextFile(filePath);
  const data = JSON.parse(fileContent);
  console.log(data);
  return data;
}

export { listFilesInFolder, readJson };
