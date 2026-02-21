#!/usr/bin/env bash
cargo tauri build -b nsis
cargo tauri android build `
    --apk `
    --target aarch64 `
    --target x86_64 `
    --split-per-abi
Move-Item src-tauri/gen/android/app/build/outputs/apk/*/release/*-release.apk .
Move-Item src-tauri/target/release/bundle/nsis/*-setup.exe .