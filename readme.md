# 🚫 YouTube Shorts Blocker

![YouTube Shorts Blocker Banner](icons/icon128.png)

A Chrome extension designed to help users maintain productivity by preventing mindless YouTube Shorts consumption. Instead of getting caught in an endless scroll of short videos, this extension provides a friendly reminder and the option to return to regular YouTube content.

## ✨ Features

-  Detects YouTube Shorts automatically
-  Shows a friendly reminder overlay when accessing Shorts
-  Option to redirect to regular YouTube
-  Helps maintain focus and productivity
-  Lightweight and fast
-  Privacy-focused (no data collection)

##  Purpose

YouTube Shorts, while entertaining, can be highly addictive and lead to unproductive time consumption. This extension aims to:
- Help users make conscious decisions about their viewing habits
- Reduce mindless scrolling
- Promote more intentional YouTube usage
- Save time and increase productivity

## 📥 Installation

### Method 1: Manual Installation (Recommended)

1. **Download the Extension**
   - Click the green "Code" button above
   - Select "Download ZIP"
   - Extract the ZIP file to a location on your computer

2. **Install in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the extracted extension folder

### Method 2: Clone Repository
```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-shorts-blocker.git

# Then follow steps 2 from Method 1 to install in Chrome
```

##  How to Use

1. Once installed, the extension automatically monitors YouTube navigation
2. When you try to access YouTube Shorts, you'll see an overlay with two options:
   - "Go to Regular YouTube": Redirects you to the main YouTube page
   - "Continue to Shorts": Allows you to proceed if you choose


## 📁 Project Structure
```
youtube-shorts-blocker/
├── manifest.json          # Extension configuration
├── background.js         # Background service worker
├── content.js           # Content script for overlay
├── icons/              # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md          # Documentation
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request


## 👥 Authors

- [Shadman Ahmed] - *Initial work* - [GitHub Profile]


## 🔄 Version History

- 1.0.0 (2024-XX-XX)
  - Initial release
  - Basic Shorts detection and blocking
  - Overlay implementation


