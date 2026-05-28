# 📝 Todo Application

A modern, feature-rich todo list application built with React and Redux. Organize your tasks efficiently with an intuitive interface and powerful state management.

---

## 🚀 Live Demo

### **[View Live Application](https://todo-client-site.netlify.app/)**

Try the application live at: https://todo-client-site.netlify.app/

---

## 📋 Overview

This Todo Application is a single-page application (SPA) designed to help users manage their tasks effectively. With a clean, responsive interface and robust state management using Redux, it provides a seamless experience for creating, managing, and organizing todos.

---

## ✨ Features

- ✅ **Create & Manage Todos** - Add new tasks and manage your to-do list
- 🎯 **Filter Todos** - Filter tasks by completion status (All, Active, Completed)
- ✏️ **Edit Tasks** - Update existing todos with ease
- 🗑️ **Delete Todos** - Remove completed or unwanted tasks
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface with smooth interactions
- 🗂️ **State Management** - Centralized state management with Redux
- 📊 **Real-time Updates** - Instant feedback on all actions

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI Library |
| **Redux** | 4.2.1 | State Management |
| **React-Redux** | 8.0.5 | React-Redux Bindings |
| **React Scripts** | 5.0.1 | Build & Development Tools |
| **React Testing Library** | 13.4.0 | Testing Utilities |
| **Jest** | Latest | Testing Framework |

---

## 📦 Installation

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** (v6 or higher) or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎯 Available Scripts

### Development

**`npm start`**
- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) automatically
- The page reloads on code changes
- Displays lint errors in the console

### Testing

**`npm test`**
- Launches the test runner in interactive watch mode
- Tests are run using Jest and React Testing Library
- [Learn more about testing](https://facebook.github.io/create-react-app/docs/running-tests)

### Production Build

**`npm run build`**
- Builds the app for production in the `build` folder
- Optimizes and minifies the bundle for best performance
- Filenames include content hashes for cache busting
- App is ready for deployment

### Advanced Configuration

**`npm run eject`**
- **⚠️ Warning: This is a one-way operation!**
- Removes Create React App build dependency
- Copies configuration files for full control over webpack, Babel, ESLint, etc.
- Use only if you need advanced customization
- [Learn more about ejecting](https://facebook.github.io/create-react-app/docs/advanced-configuration)

---

## 📁 Project Structure

```
todo/
├── public/                          # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/                  # React Components
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Todo.js
│   │   └── TodoList.js
│   ├── redux/                       # Redux Store & Logic
│   │   ├── store.js
│   │   ├── rootReducer.js
│   │   ├── todos/
│   │   │   ├── action.js
│   │   │   ├── actionTypes.js
│   │   │   ├── initialState.js
│   │   │   └── todosReducer.js
│   │   └── filter/
│   │       ├── action.js
│   │       ├── actionTypes.js
│   │       ├── initialState.js
│   │       └── filterReducer.js
│   ├── assests/                     # Static Assets
│   │   └── images/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── App.test.js
│   ├── setupTests.js
│   └── reportWebVitals.js
├── package.json
└── README.md
```

---

## 🚀 Deployment

This application is configured for easy deployment to various platforms:

### Deploy to Netlify
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `build`
- Automatic deployments on push to main branch

### Deploy to Vercel
- Link your repository to Vercel
- Configuration is automatically detected
- Deployments trigger automatically on commits

### Deploy to GitHub Pages
See the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment)

---

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/)
- [Redux Documentation](https://redux.js.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Testing Library Guide](https://testing-library.com/docs/react-testing-library/intro/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.



## 💡 Tips & Troubleshooting

### Common Issues

**Port 3000 is already in use?**
```bash
# On macOS/Linux
sudo lsof -i :3000
sudo kill -9 <PID>

# Or set a custom port
PORT=3001 npm start
```

**Build fails or crashes?**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`
- Delete build folder: `rm -rf build`

**Tests not running?**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version compatibility

---

**Made with ❤️ - Happy coding! 🎉**
