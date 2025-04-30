// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::ActivationPolicy;

mod tray;


fn main() {
    tauri::Builder::default()
    .plugin(tauri_plugin_fs::init()) // Initialize the fs plugin
    .setup(|app| {
        #[cfg(target_os = "macos")]
        {
            tray::init_macos_menu_extra(app.handle())?;
            // Make the Dock icon invisible
            app.set_activation_policy(ActivationPolicy::Accessory);
        }
        Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

    video_player_lib::run()
}
