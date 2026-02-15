use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .append_invoke_initialization_script(include_str!("index.js"))
        .setup(|app| {
            let webview = app.webview_windows().into_values().next().unwrap();
            webview.eval("window.location.replace('https://www.fknc.top')")?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
