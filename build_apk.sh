#!/usr/bin/env bash

cargo tauri android build \
    --apk \
    --target aarch64 \
    --target x86_64 \
    --split-per-abi
mv src-tauri/gen/android/app/build/outputs/apk/*/release/*-release.apk .
