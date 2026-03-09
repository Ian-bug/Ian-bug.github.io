# Ian's Portfolio Website

A modern, dark-themed personal portfolio website built with Next.js and shadcn/ui.

![Portfolio Website](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=flat-square&logo=shadcnui)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript)

## ✨ Features

- 🌙 **Dark Theme** - Beautiful dark theme by default with light mode toggle
- 📱 **Responsive Design** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Next.js 16 and Turbopack
- 🎨 **Modern UI** - Clean interface using shadcn/ui components
- 🔗 **Project Showcase** - Featured GitHub projects with descriptions
- 🛠️ **Skills Display** - Highlights technical expertise
- 📧 **Contact Section** - Easy GitHub profile linking

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS 4.1.18
- **Icons:** Lucide React
- **Theming:** next-themes
- **Language:** TypeScript 5.9.3
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Ian-bug/Ian-bug.github.io.git
cd Ian-bug.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## 🎨 Customization

### Adding shadcn/ui Components

To add new UI components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add badge
```

### Theme Colors

The website uses CSS custom properties for theming. You can modify the color scheme in `app/globals.css`:

```css
:root {
  --primary: ...
  --secondary: ...
  /* etc */
}

.dark {
  --primary: ...
  --secondary: ...
  /* etc */
}
```

## 📄 Sections

- **Hero** - Eye-catching introduction with gradient text
- **About** - Short bio and background
- **Skills** - Technical expertise display
- **Projects** - Featured GitHub projects grid
- **Contact** - GitHub profile link

## 🔗 Live Site

Visit the live website: [https://ian-bug.github.io](https://ian-bug.github.io)

## 👤 Author

**Ian** - [GitHub](https://github.com/Ian-bug)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
