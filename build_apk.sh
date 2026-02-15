#!/usr/bin/env bash

cargo tauri android build --apk --split-per-abi
mv src-tauri/gen/android/app/build/outputs/apk/*/release/*-release.apk .
