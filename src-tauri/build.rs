fn main() {
    println!("cargo::rerun-if-changed=src/index.js");
    tauri_build::build()
}
