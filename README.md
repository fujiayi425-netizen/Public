# 制作页预览与下载修补包

下载 `maker-preview-download-fix.zip`。解压后用 `make.html` 替换原 `website/make.html`，保留最新的 `website/index.html`。

在 Netlify 站点列表打开 **sparkling-beijinho-3629da**，进入 **Deploys（部署）**，上传更新后的整个 `website` 文件夹。

继续使用 https://sparkling-beijinho-3629da.netlify.app/make.html ，沿用同一手机浏览器，以读取原站点上成功保存的草稿。保留旧标签页，确认新页面内容后再继续。

修复托管平台附加脚本/样式导致“预览完整礼物”和“下载完整礼物”禁用的误判。已验证：有托管附加脚本时两个按钮可用、图文与三首音乐随导出保留、导出不带托管工具栏或附加脚本；旧版同域草稿更新后完整保留。

本分支只交付文件，Netlify 站点仍需所有者上传更新。
