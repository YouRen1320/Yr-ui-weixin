# Installation

## Requirements

- WeChat DevTools: Upgrade to the latest stable version
- Mini Program Base Library: 2.20.0 or later

## Installation Methods

### Method 1: Install via npm

To install via npm, you need to install the npm package first, then build npm. [See WeChat Official Documentation](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html).

```bash
# Not yet published
npm install yr-ui-weixin
```

### Method 2: Download Source Code

Download the code via [GitHub](https://github.com/yr-ui/yr-ui-weixin) or [yr-ui Official Website](https://www.yr-ui.cn/), then copy the `components/yr-ui/` directory to your project.

```bash
# GitHub
git clone https://github.com/yr-ui/yr-ui-weixin.git

# Note: Please download the member code from the order in the personal center of the official website
```

### Method 3: Import Selectively

Download the yr-ui code, find the needed components in the `components/yr-ui/` directory, and copy them to your project.

## Directory Structure

```text
components/
└── yr-ui/
    ├── yr-ui-button/          # Button Component
    │   ├── yr-ui-button.js
    │   ├── yr-ui-button.json
    │   ├── yr-ui-button.wxml
    │   └── yr-ui-button.wxss
    ├── yr-ui-icon/            # Icon Component
    ├── yr-ui-config/          # Global Configuration
    └── ...                    # Other Components
```

## Important Notes

1. Adjust the component path according to the actual project structure.
2. Some components depend on other components, please ensure relevant dependent components are also imported.
3. It is recommended to copy the entire `yr-ui` directory to the project for use.
