#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .append_invoke_initialization_script(include_str!("index.js"))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
