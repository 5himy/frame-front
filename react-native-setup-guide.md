# React Native Development Environment Setup Guide

## 1. Essential Software Installation
```bash
# Install Node.js (LTS version)
# Download from https://nodejs.org/

# Install Watchman (for macOS users)
brew install watchman

# Install React Native CLI globally
npm install -g react-native-cli

# Install Expo CLI (optional but recommended for beginners)
npm install -g expo-cli
```

## 2. VSCode Setup

### Essential Extensions
1. React Native Tools
2. ES7+ React/Redux/React-Native snippets
3. Prettier - Code formatter
4. ESLint
5. Color Highlight
6. Auto Close Tag
7. Auto Rename Tag
8. Path Intellisense
9. Material Icon Theme

### Recommended VSCode Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.rulers": [80],
  "editor.wordWrap": "on",
  "files.trimTrailingWhitespace": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 3. Project Structure
```
my-react-native-app/
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── common/      # Shared components
│   │   └── screens/     # Screen-specific components
│   ├── navigation/      # Navigation configuration
│   ├── screens/         # Screen components
│   ├── services/        # API calls, external services
│   ├── store/           # State management
│   ├── styles/          # Global styles
│   ├── utils/           # Helper functions
│   └── constants/       # App constants
├── App.js
└── package.json
```

## 4. Essential Dependencies

### Project Setup
```bash
# Create new project
npx react-native init MyApp
# or with Expo
npx create-expo-app MyApp

cd MyApp
```

### Basic Dependencies
```bash
# Navigation
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context

# State Management
npm install @reduxjs/toolkit react-redux

# Forms
npm install formik yup

# Styling
npm install styled-components

# Icons
npm install react-native-vector-icons

# API Calls
npm install axios
```

## 5. Style Management Options

### 1. StyleSheet API (Built-in)
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
```

### 2. Styled Components
```javascript
const StyledView = styled.View`
  flex: 1;
  padding: 20px;
`;
```

### 3. React Native Extended StyleSheet
```bash
npm install react-native-extended-stylesheet
```

## 6. Development Tools Setup

### 1. React Native Debugger
```bash
# macOS
brew install --cask react-native-debugger

# Windows
# Download from GitHub releases
```

### 2. Configure ESLint
```bash
npm install --save-dev eslint @react-native-community/eslint-config
```

Create `.eslintrc.js`:
```javascript
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // Custom rules
  },
};
```

### 3. Configure Prettier
Create `.prettierrc.js`:
```javascript
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};
```

## 7. Testing Setup
```bash
# Install Testing Libraries
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
```

## 8. Git Setup
```bash
# Initialize Git
git init

# Create .gitignore
npx gitignore react-native
```

## 9. Performance Optimization Tools
```bash
# Install Flipper (for debugging)
# Download from https://fbflipper.com/

# Install Performance Monitor
npm install --save-dev react-native-performance-monitor
```
