
# 🎧 PlayYourMood

**PlayYourMood** is a sleek, personalized music streaming web app designed to let users **play music that matches their mood**. It supports custom playlists, user profiles, a stylish audio player, and smooth transitions — all in one intuitive UI.

---

## 🌐 Live Preview

> 🚧 *[Coming Soon]* — Deployed version link will be added after hosting.

---

## 📂 Project Structure

```
PlayYourMood/
│
├── public/                  # Static public files (HTML, favicon, etc.)
│
├── src/
│   ├── assets/              # Images, icons, and media assets
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Common/          # Navbar, Sidebar, Footer, etc.
│   │   ├── Player/          # PlayingComponent, AudioComponent
│   │   └── Profile/         # ProfileComponent, MenuComponent, PlaylistComponent
│   │
│   ├── pages/               # Page-level components (Home, Explore, Profile)
│   ├── styles/              # Global and module CSS
│   ├── utils/               # Helper functions and constants
│   ├── App.jsx              # Main React component
│   ├── index.js             # Entry point
│   └── router.js            # React Router configuration
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## ✨ Features

- 🎵 **Mood-based music streaming**
- 🧑‍💼 **User profile customization**
- 📃 **Dynamic playlist handling**
- 🎚️ **Minimalist audio player**
- 🌙 **Dark mode by default**
- 📱 **Responsive design**
- ⚙️ Built with **React + Vite**

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/PlayYourMood.git
cd PlayYourMood
npm install
npm run dev
```

The app runs locally at `http://localhost:5173/`

---

## 🧩 Components Breakdown

### 📁 Profile Components

| Component | Description |
|----------|-------------|
| `ProfileComponent.jsx` | Displays user details, avatar, and mood stats |
| `MenuComponent.jsx`    | Sidebar menu within the profile page |
| `PlaylistComponent.jsx`| Lists and manages the user's playlists |
| `ProfilePage.jsx`      | Full page layout with all the above |

### 🔊 Player Components

| Component | Description |
|----------|-------------|
| `PlayingComponent.jsx` | Shows current song, album art, controls |
| `AudioComponent.jsx`   | Audio context and player logic |

### 🧱 Common Components

| Component | Description |
|----------|-------------|
| `Navbar.jsx` | Top navigation with app name/logo |
| `Sidebar.jsx`| Left side navigation for page routing |
| `Footer.jsx` | Bottom footer with copyright |

---

## 🎨 Styling

- 🎨 Pure **CSS Modules** used for each component
- 💠 Global styles in `styles/global.css`
- 🌌 Dark mode + glassmorphism for a modern UI
- ✨ Smooth transitions & hover animations

---

## 🔧 Future Improvements

- 🔐 User authentication (login/register)
- 🎧 AI-based mood detection
- 📈 Song stats dashboard
- 📲 PWA version for mobile

---

## 🙌 Contribution

Feel free to fork this repository, raise issues, or suggest features.

> PRs are welcome. Let’s build the vibe together!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> _“When words fail, music speaks.” — Hans Christian Andersen_
