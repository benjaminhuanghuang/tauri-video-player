# Makefile for building and bundling a Tauri application

# Variables
FRONTEND_BUILD_CMD = npm run build
TAURI_BUILD_CMD = npm run tauri build
BIN_DIR = bin

# Default target
all: build copy

# Build the frontend and the tauri application
build:
	@echo "Building frontend..."
	$(FRONTEND_BUILD_CMD)
	@echo "Building Tauri app..."
	$(TAURI_BUILD_CMD)

# Copy output to bin/ directory
copy:
	@echo "Copying output to $(BIN_DIR)/..."
	mkdir -p $(BIN_DIR)

	# Copy macOS .app bundle
	cp -R src-tauri/target/release/bundle/macos/*.app $(BIN_DIR)/ || true

	# Copy entire config folder
	cp -R config $(BIN_DIR)/ || true

	# (Optional) Copy DMG if needed
	# cp src-tauri/target/release/bundle/dmg/*.dmg $(BIN_DIR)/ || true

# Clean bu
