import { defineConfig } from "vitepress";

export default defineConfig({
  title: "yr-ui",
  description: "yr-ui 微信小程序组件库文档",
  base: "/Yr-ui-weixin/",

  // 国际化配置
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
          { text: "指南", link: "/guide/" },
          { text: "组件", link: "/components/basic/button" },
          {
            text: "相关链接",
            items: [
              { text: "官网", link: "https://www.yr-ui.cn" },
              {
                text: "GitHub",
                link: "https://github.com/YouRen1320/Yr-ui-weixin",
              },
            ],
          },
        ],

        sidebar: {
          "/guide/": [
            {
              text: "开始",
              items: [
                { text: "介绍", link: "/guide/" },
                { text: "安装", link: "/guide/installation" },
                { text: "快速上手", link: "/guide/quickstart" },
                { text: "全局配置", link: "/guide/config" },
              ],
            },
          ],
          "/components/": [
            {
              text: "基础组件",
              collapsed: false,
              items: [
                { text: "Button 按钮", link: "/components/basic/button" },
                { text: "Icon 图标", link: "/components/basic/icon" },
                { text: "Text 文本", link: "/components/basic/text" },
                { text: "Badge 徽章", link: "/components/basic/badge" },
                { text: "Tag 标签", link: "/components/basic/tag" },
                { text: "Avatar 头像", link: "/components/basic/avatar" },
                { text: "Footer 页脚", link: "/components/basic/footer" },
                {
                  text: "WhiteSpace 上下间距",
                  link: "/components/basic/white-space",
                },
                {
                  text: "WingBlank 左右间距",
                  link: "/components/basic/wing-blank",
                },
                { text: "Color 颜色", link: "/components/basic/color" },
                { text: "Number 数字", link: "/components/basic/number" },
              ],
            },
            {
              text: "表单组件",
              collapsed: false,
              items: [
                { text: "Input 输入框", link: "/components/form/input" },
                {
                  text: "Textarea 多行输入框",
                  link: "/components/form/textarea",
                },
                { text: "Checkbox 复选框", link: "/components/form/checkbox" },
                { text: "Radio 单选框", link: "/components/form/radio" },
                { text: "Switch 开关", link: "/components/form/switch" },
                { text: "Picker 选择器", link: "/components/form/picker" },
                {
                  text: "DatePicker 日期选择器",
                  link: "/components/form/datepicker",
                },
                { text: "Upload 图片上传", link: "/components/form/upload" },
                {
                  text: "SearchBar 搜索栏",
                  link: "/components/form/searchbar",
                },
                { text: "Rate 评分", link: "/components/form/rate" },
                {
                  text: "Cascader 级联选择",
                  link: "/components/form/cascader",
                },
                { text: "Form 表单校验", link: "/components/form/form" },
                { text: "FormItem 表单项", link: "/components/form/form-item" },
                {
                  text: "FormField 表单域",
                  link: "/components/form/form-field",
                },
                {
                  text: "InputNumber 数字输入框",
                  link: "/components/form/input-number",
                },
                { text: "Label 标签", link: "/components/form/label" },
                { text: "Select 选择菜单", link: "/components/form/select" },
                { text: "Slider 滑块", link: "/components/form/slider" },
                {
                  text: "SliderCaptcha 滑块验证码",
                  link: "/components/form/slider-captcha",
                },
                {
                  text: "Validator 表单验证",
                  link: "/components/form/validator",
                },
              ],
            },
            {
              text: "布局组件",
              collapsed: false,
              items: [
                { text: "Grid 宫格", link: "/components/layout/grid" },
                { text: "List 列表", link: "/components/layout/list" },
                { text: "Card 卡片", link: "/components/layout/card" },
                { text: "Panel 面板", link: "/components/layout/panel" },
                {
                  text: "Collapse 折叠面板",
                  link: "/components/layout/collapse",
                },
                { text: "Divider 分割线", link: "/components/layout/divider" },
                {
                  text: "BannerArc 圆弧背景",
                  link: "/components/layout/banner-arc",
                },
                { text: "Col 栅格列", link: "/components/layout/col" },
                { text: "Row 栅格行", link: "/components/layout/row" },
                { text: "Layout 栅格布局", link: "/components/layout/layout" },
                { text: "Section 标题栏", link: "/components/layout/section" },
                {
                  text: "Skeleton 骨架屏",
                  link: "/components/layout/skeleton",
                },
                {
                  text: "SafeArea 安全区",
                  link: "/components/layout/safe-area",
                },
              ],
            },
            {
              text: "导航组件",
              collapsed: false,
              items: [
                { text: "Tabs 标签页", link: "/components/navigation/tabs" },
                {
                  text: "NavBar 导航栏",
                  link: "/components/navigation/navbar",
                },
                {
                  text: "Tabbar 标签栏",
                  link: "/components/navigation/tabbar",
                },
                { text: "Steps 步骤条", link: "/components/navigation/steps" },
                {
                  text: "Pagination 分页器",
                  link: "/components/navigation/pagination",
                },
                {
                  text: "BottomNavbar 底部导航栏",
                  link: "/components/navigation/bottom-navbar",
                },
                {
                  text: "DropdownMenu 下拉菜单",
                  link: "/components/navigation/dropdown-menu",
                },
                {
                  text: "DropdownList 下拉列表",
                  link: "/components/navigation/dropdown-list",
                },
                {
                  text: "IndexList 索引列表",
                  link: "/components/navigation/index-list",
                },
                {
                  text: "SegmentedControl 分段器",
                  link: "/components/navigation/segmented-control",
                },
                {
                  text: "VTabs 纵向选项卡",
                  link: "/components/navigation/vtabs",
                },
                { text: "Drawer 抽屉", link: "/components/navigation/drawer" },
              ],
            },
            {
              text: "反馈组件",
              collapsed: false,
              items: [
                { text: "Toast 轻提示", link: "/components/feedback/toast" },
                { text: "Modal 模态框", link: "/components/feedback/modal" },
                { text: "Dialog 对话框", link: "/components/feedback/dialog" },
                { text: "Loading 加载", link: "/components/feedback/loading" },
                {
                  text: "Message 消息提示",
                  link: "/components/feedback/message",
                },
                {
                  text: "ActionSheet 上拉菜单",
                  link: "/components/feedback/actionsheet",
                },
                {
                  text: "BottomPopup 底部弹出层",
                  link: "/components/feedback/bottom-popup",
                },
                {
                  text: "TopPopup 顶部弹出层",
                  link: "/components/feedback/top-popup",
                },
                {
                  text: "SwipeAction 滑动菜单",
                  link: "/components/feedback/swipeaction",
                },
                { text: "Alert 警告提示", link: "/components/feedback/alert" },
                {
                  text: "Backdrop 遮罩层",
                  link: "/components/feedback/backdrop",
                },
                {
                  text: "BubbleBox 气泡框",
                  link: "/components/feedback/bubble-box",
                },
                { text: "Drag 拖拽", link: "/components/feedback/drag" },
                { text: "Fab 悬浮按钮", link: "/components/feedback/fab" },
                {
                  text: "LoadAni 加载动画",
                  link: "/components/feedback/load-ani",
                },
                {
                  text: "LoadMore 加载更多",
                  link: "/components/feedback/loadmore",
                },
                {
                  text: "Result 操作结果",
                  link: "/components/feedback/result",
                },
                {
                  text: "ShareSheet 分享面板",
                  link: "/components/feedback/share-sheet",
                },
                { text: "Gallery 画廊", link: "/components/feedback/gallery" },
                {
                  text: "Landscape 压屏窗",
                  link: "/components/feedback/landscape",
                },
                { text: "Spin 加载中", link: "/components/feedback/spin" },
              ],
            },
            {
              text: "数据组件",
              collapsed: false,
              items: [
                { text: "Table 表格", link: "/components/data/table" },
                { text: "Progress 进度条", link: "/components/data/progress" },
                { text: "Empty 空状态", link: "/components/data/empty" },
                {
                  text: "Waterfall 瀑布流",
                  link: "/components/data/waterfall",
                },
                { text: "Calendar 日历", link: "/components/data/calendar" },
                {
                  text: "NoticeBar 通告栏",
                  link: "/components/data/noticebar",
                },
                { text: "Animation 动画", link: "/components/data/animation" },
                { text: "Circle 进度环", link: "/components/data/circle" },
                {
                  text: "CountDown 倒计时",
                  link: "/components/data/count-down",
                },
                {
                  text: "DigitalRoller 数字滚轮",
                  link: "/components/data/digital-roller",
                },
                {
                  text: "LicensePlate 车牌号",
                  link: "/components/data/license-plate",
                },
                { text: "Lottie 动画", link: "/components/data/lottie" },
                { text: "Preview图片预览", link: "/components/data/preview" },
                {
                  text: "SwiperDot 轮播图指示点",
                  link: "/components/data/swiper-dot",
                },
                { text: "TimeAxis 时间轴", link: "/components/data/timeaxis" },
                { text: "Timer 计时器", link: "/components/data/timer" },
              ],
            },
            {
              text: "扩展组件",
              collapsed: false,
              items: [
                {
                  text: "Autograph 手写签名",
                  link: "/components/expand/autograph",
                },
                {
                  text: "BackgroundImage 背景图",
                  link: "/components/expand/background-image",
                },
                { text: "Barcode 条形码", link: "/components/expand/barcode" },
                {
                  text: "Clipboard 复制文本",
                  link: "/components/expand/clipboard",
                },
                {
                  text: "CopyText 长按复制",
                  link: "/components/expand/copy-text",
                },
                {
                  text: "CubicBezier 贝塞尔曲线",
                  link: "/components/expand/cubic-bezier",
                },
                {
                  text: "DataTag 数据标签",
                  link: "/components/expand/data-tag",
                },
                {
                  text: "ImageCropper 图片裁剪",
                  link: "/components/expand/image-cropper",
                },
                {
                  text: "Lazyload 图片懒加载",
                  link: "/components/expand/lazyload",
                },
                {
                  text: "MovableView 可移动视图",
                  link: "/components/expand/movable-view",
                },
                {
                  text: "OverflowHidden 内容超出隐藏",
                  link: "/components/expand/overflow-hidden",
                },
                { text: "Parse 富文本解析", link: "/components/expand/parse" },
                { text: "Poster 海报生成", link: "/components/expand/poster" },
                {
                  text: "PuzzleVerify 拼图验证",
                  link: "/components/expand/puzzle-verify",
                },
                { text: "Qrcode 二维码", link: "/components/expand/qrcode" },
                {
                  text: "RotateVerify 旋转验证",
                  link: "/components/expand/rotate-verify",
                },
                {
                  text: "SlideVerify 滑动验证",
                  link: "/components/expand/slide-verify",
                },
                { text: "Sticky 吸顶容器", link: "/components/expand/sticky" },
                {
                  text: "UploadVideo 视频上传",
                  link: "/components/expand/upload-video",
                },
              ],
            },
            {
              text: "JS工具库",
              collapsed: false,
              items: [
                { text: "Config 配置", link: "/components/js/config" },
                { text: "Css 常用样式", link: "/components/js/css" },
                { text: "Request 网络请求", link: "/components/js/request" },
                { text: "Theme 主题", link: "/components/js/theme" },
                { text: "Utils 工具类", link: "/components/js/utils" },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      description: "yr-ui WeChat Mini Program Component Library Documentation",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/" },
          { text: "Components", link: "/en/components/basic/button" },
          {
            text: "Links",
            items: [
              { text: "Official Website", link: "https://www.yr-ui.cn" },
              {
                text: "GitHub",
                link: "https://github.com/YouRen1320/Yr-ui-weixin",
              },
            ],
          },
        ],
        sidebar: {
          "/en/guide/": [
            {
              text: "Get Started",
              items: [
                { text: "Introduction", link: "/en/guide/" },
                { text: "Installation", link: "/en/guide/installation" },
                { text: "Quick Start", link: "/en/guide/quickstart" },
                { text: "Global Config", link: "/en/guide/config" },
              ],
            },
          ],
          "/en/components/": [
            {
              text: "Basic Components",
              collapsed: false,
              items: [
                { text: "Button", link: "/en/components/basic/button" },
                // Add more components here as they are translated
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: "/logo.png",

    // Shared parts
    socialLinks: [
      { icon: "github", link: "https://github.com/YouRen1320/Yr-ui-weixin" },
    ],

    footer: {
      message: "yr-ui WeChat Mini Program Component Library",
      copyright: "Copyright © 2024 yr-ui",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search Docs",
                buttonAriaLabel: "Search Docs",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Reset search",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                },
              },
            },
          },
        },
      },
    },
  },
});
