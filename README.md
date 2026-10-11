# 🎬 YT Video Downloader

<p align="center">
  <strong>A lightweight Chrome Extension for quick YouTube video downloading.</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-settings">Settings</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## ✨ Overview

**YT Video Downloader** is a lightweight and easy-to-use Chrome Extension that provides quick access to external YouTube downloading services directly from your browser.

Instead of manually copying and pasting a YouTube URL, the extension can detect the current YouTube video and open it with your selected downloader service.

Built with a simple, fast and privacy-friendly architecture using **Chrome Manifest V3**.

> ⚡ Fast. Simple. Lightweight.

---

## 🚀 Features

### 🎥 Quick Video Access
Open the current YouTube video directly in your preferred downloader service with a single click.

### 🔗 Multiple Downloader Services

Choose between multiple external services:

- **Yout.com** — Fast & Clean
- **SaveFrom** — Classic
- **VDYouTube** — Alternative

### 🌐 Multi-Language Support

The extension currently supports:

- 🇬🇧 English
- 🇮🇳 हिन्दी
- 🇱🇰 සිංහල
- 🇮🇳 தமிழ்

### ⚙️ Custom Settings

Configure the extension according to your preference:

- Enable/disable the popup download button
- Enable/disable the button displayed under YouTube videos
- Change application language
- Save preferences automatically using Chrome Storage

### 🎨 Clean UI

The extension includes a lightweight popup interface designed for quick access without unnecessary complexity.

### 🧩 Manifest V3

Built using the modern **Chrome Extension Manifest V3** architecture.

---

## 📸 Preview

<p align="center">
  <img src="icon.png" width="120" alt="YT Video Downloader Icon">
</p>

> Add screenshots/GIFs of the extension here when publishing the project on GitHub.

Example:

```md
![Extension Preview](screenshots/preview.png)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Extension UI |
| CSS3 | Styling & responsive popup design |
| JavaScript | Extension functionality |
| Chrome Extensions API | Browser integration |
| Manifest V3 | Extension architecture |
| Chrome Storage API | Saving user preferences |

No framework or build system is required.

---

# 📦 Installation

Since this project is currently distributed as an unpacked Chrome Extension, you can install it manually using Chrome Developer Mode.

### 1. Clone the repository

```bash
git clone https://github.com/ashbornofficial/YT-Video-Downloader.git
```

Or download the repository as a ZIP file.

### 2. Open Chrome Extensions

Open:

```text
chrome://extensions/
```

### 3. Enable Developer Mode

Turn on:

**Developer mode**

from the top-right corner.

### 4. Load the Extension

Click:

**Load unpacked**

and select the project folder containing:

```text
manifest.json
```

### 5. Pin the Extension

Click the puzzle-piece icon in Chrome and pin:

**YT Video Downloader**

to your toolbar.

---

# 🎯 Usage

Using the extension is simple.

### Step 1

Open a YouTube video.

### Step 2

Click the **YT Video Downloader** extension icon.

### Step 3

Select your preferred downloader service.

### Step 4

Click:

```text
DOWNLOAD VIDEO
```

The extension will open the selected external downloader service for the current video.

---

# ⚙️ Settings

The extension includes a built-in settings screen.

### 🌐 Language

Change the extension language from the settings menu.

Available languages:

```text
English
हिन्दी
සිංහල
தமிழ்
```

### 🔘 Popup Button

Enable or disable the main download button.

### 🎬 Video Button

Configure whether the download button should appear directly under YouTube videos.

Your settings are stored locally using Chrome's Storage API.

---

# 📁 Project Structure

```text
YT-Video-Downloader/
│
├── manifest.json          # Chrome extension configuration
│
├── popup.html             # Extension popup UI
├── popup.js               # Popup functionality & settings
├── style.css              # Popup styling
│
├── content.js             # YouTube page integration
├── content.css            # YouTube page styling
│
├── icon.png               # Extension icon
├── banner-tooltip.gif     # Extension visual asset
│
└── README.md              # Project documentation
```

---

# 🔐 Permissions

The extension requests only the permissions required for its functionality.

### `activeTab`

Used to access information about the currently active browser tab when the user interacts with the extension.

### `storage`

Used to save user preferences such as:

- Selected language
- Download button preference
- In-video button preference

The extension does not require access to your entire browsing history.

---

# 🧠 How It Works

The extension checks whether the current browser tab contains a supported YouTube video URL.

Supported formats include:

```text
youtube.com/watch
youtube.com/shorts
youtube.com/embed
youtu.be/...
```

When the user selects a downloader service, the extension converts the current YouTube URL into the corresponding external downloader URL and opens it in a new tab.

### Simplified Flow

```text
YouTube Video
      │
      ▼
YT Video Downloader
      │
      ▼
Select Downloader
      │
      ├── Yout.com
      │
      ├── SaveFrom
      │
      └── VDYouTube
      │
      ▼
External Downloader
```

---

# 🧪 Development

No build process is currently required.

You can modify the source files directly and reload the extension from:

```text
chrome://extensions/
```

After making changes:

1. Save your files.
2. Open `chrome://extensions/`.
3. Find **YT Video Downloader**.
4. Click **Reload**.
5. Test the changes on YouTube.

---

# 🗺️ Roadmap

Potential future improvements:

- [ ] Modernized downloader architecture
- [ ] Improved YouTube UI integration
- [ ] Better error handling
- [ ] More language support
- [ ] Dark/light theme support
- [ ] Download history
- [ ] Improved Shorts support
- [ ] Better service availability detection
- [ ] Chrome Web Store release
- [ ] Firefox support
- [ ] Microsoft Edge support
- [ ] Improved accessibility
- [ ] Automated extension testing

---

# 🤝 Contributing

Contributions, suggestions and improvements are welcome!

### Fork the repository

```bash
git fork
```

Or use the **Fork** button on GitHub.

### Create a branch

```bash
git checkout -b feature/your-feature
```

### Commit your changes

```bash
git add .
git commit -m "feat: add your feature"
```

### Push the branch

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

# 🐛 Bug Reports & Feature Requests

Found a bug or have an idea?

Please open a **GitHub Issue** with:

- A clear title
- Description of the issue
- Steps to reproduce
- Expected behaviour
- Actual behaviour
- Chrome version
- Screenshots, if applicable

---

# ⚠️ Disclaimer

This project is intended as a browser utility for accessing external video-download services.

Users are responsible for ensuring that their use of any downloader service complies with:

- YouTube's Terms of Service
- Applicable copyright laws
- The rights of the content creator
- The terms and policies of third-party services

This extension does **not** host, store, or distribute YouTube videos.

Third-party downloader services are independent from this project and may change their availability, functionality, or policies at any time.

---

# 🔒 Privacy

YT Video Downloader is designed to keep the extension lightweight and simple.

The extension stores user preferences locally through Chrome's Storage API.

It does not need an account or backend server to operate.

External downloader services may have their own privacy policies and data practices. Review their policies before using them.

---

# 📄 License

Add your preferred open-source license before publishing this repository.

For example:

```text
MIT License
```

If you choose MIT, add a `LICENSE` file containing the official MIT License text.

---

# 👨‍💻 Developer

**Ashborn**

GitHub:

https://github.com/ashbornofficial

---

<p align="center">
  Made with ❤️ by <strong>Ashborn</strong>
</p>

<p align="center">
  ⭐ If you find this project useful, consider giving it a star!
</p>
