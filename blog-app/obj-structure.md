blog-app/
├── index.html               # HTML入口文件
├── package.json             # 项目依赖和脚本配置
├── vite.config.js           # Vite 配置文件
├── node_modules/            # 项目依赖
├── public/                  # 公共静态资源（如图标、favicon等）
│   └── favicon.ico
├── src/                     # 源码目录
│   ├── assets/              # 存放静态资源（图片、字体、样式等）
│   │   └── logo.png
│   ├── components/          # 公共组件（可以根据功能划分子目录）
│   │   ├── BaseButton.vue   # 通用按钮组件
│   │   └── Navbar.vue       # 导航栏组件
│   ├── views/               # 页面视图组件（视图通常对应路由）
│   │   ├── Home.vue         # 首页视图
│   │   ├── Login.vue        # 登录页面
│   │   ├── Dashboard.vue    # 控制面板页面
│   │   └── ArticleEditor.vue # 文章编辑页面
│   ├── store/               # Vuex 状态管理文件（如果使用 Vuex）
│   │   ├── index.js         # Vuex store 入口
│   │   └── modules/         # Vuex 模块化管理状态
│   ├── router/              # 路由管理
│   │   ├── index.js         # Vue Router 配置文件
│   ├── services/            # 后端接口调用
│   │   ├── api.js           # API 接口配置
│   ├── utils/               # 工具函数和帮助方法
│   │   └── auth.js          # 用于认证的工具函数（如 JWT 存取、登录验证等）
│   ├── App.vue              # 根组件
│   ├── main.js              # 项目入口文件
│   └── assets.css           # 全局样式
└── .gitignore               # Git 忽略文件
