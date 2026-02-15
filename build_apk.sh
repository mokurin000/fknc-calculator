#!/usr/bin/env bash

cargo tauri android build \
    --apk \
    --split-per-abi \
    --target armv7 \
    --target aarch64
mv src-tauri/gen/android/app/build/outputs/apk/*/release/*-release.apk .
