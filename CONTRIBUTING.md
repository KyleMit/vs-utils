# Extension Development

If you're here, it means you're me or looking to help me - in either case - a warm hello 👋

This project was initially generated with `yo code` so look to there for some of the layout conventions

## File Structure

```none
vt-utils
├── .vscode/              # vs code editor configs
├── out/                  # typescript output
├── node_modules/         # created by npm install
├── images/               # images for reference in readme
├── src
│   └── extension.ts      # entry point for extension
├── package.json          # manifest for extension
├── tsconfig.json         # compiler rules for typescript
├── .eslintrc.json        # style rules for js
├── .vscodeignore         # ignored files when packaging extension
├── .gitignore            # ignored files in git
├── LICENSE               # MIT license info
├── CHANGELOG.md          # release history
├── CONTRIBUTING.md       # info for local development
└── README.md             # overview of extension during installation
```

## Project Setup

Install node & npm, and setup project locally

```npm
npm install
```

## Run Project

* Press <kbd>F5</kbd> to open a new window with your extension loaded.
* Reload with <kbd>Ctrl</kbd> + <kbd>R</kbd> to reload your changes.


## Publishing

```bash
npm install -g vsce
```

```bash
vsce login
vsce package
vsce publish minor
vsce publish
```

### Github Workflows

* Create Release -> AutoPublish

