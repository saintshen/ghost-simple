# Ghost Theme Dogfood Checklist

> 目标：避免“改了但页面没变化”。每次样式修改都按此流程执行并留证据。

## 0) 任务记录
- 问题描述：
- 目标页面 URL：
- 目标元素选择器：
- 期望效果：

## 1) 修改前取证（Baseline）
- [ ] 记录当前 commit：`git rev-parse --short HEAD`
- [ ] 记录当前时间：`date`
- [ ] 打开目标页面并截图（菜单关闭）
- [ ] 打开菜单并截图（菜单打开）
- [ ] 在控制台记录关键 computed style（至少 3 个属性）
  - 例：`background-color`, `color`, `display`, `position`, `z-index`

## 2) 实施修改
- [ ] 修改源文件（`assets/css/*` / `*.hbs` / `partials/*`）
- [ ] 如果是菜单相关，确认 DOM 层级（按钮与容器是否在同一 flex 上下文）
- [ ] 避免 `style.display='none'` 持久化；关闭菜单仅移除 class

## 3) 构建与部署
- [ ] 构建：`npm run build`
- [ ] 确认输出文件时间更新：`assets/built/simple.css`
- [ ] 若容器挂载异常，执行手动 `docker cp` 同步必要文件（`.hbs` + `.css`）
- [ ] 必要时重启 Ghost 容器清模板缓存

## 4) 强制刷新与验证
- [ ] 硬刷新页面（Ctrl+Shift+R）
- [ ] 再次截图（菜单关闭/打开）
- [ ] 再次记录 computed style，对比是否变化
- [ ] 检查是否有更高优先级规则覆盖（specificity / `!important`）
- [ ] 检查 Console 是否报错

## 5) 失败时快速定位（必须）
- [ ] 注入可见版本标记（如 `menu-version: vYYYYMMDD-HHMM`）
- [ ] 验证页面上是否出现版本标记
  - 出现：说明模板已发布，继续查 CSS 优先级/DOM
  - 不出现：说明部署/缓存链路有问题
- [ ] 用最小可见改动做探针（例如明显背景色）确认样式路径是否通

## 6) 回报格式（给 Ming）
- [ ] 一句话结论：生效 / 未生效 + 根因
- [ ] 前后截图
- [ ] 关键选择器最终生效值（列 3~5 项）
- [ ] 下一步动作（如果未完全解决）

---

## 常用命令
```bash
cd /home/ming/Work/HSLabs/ghost-simple
npm run build
```

```bash
# 查看 gh-head 相关规则（排查 specificity）
grep -o '[^{}]*gh-head[^{}]*{[^}]*}' assets/built/simple.css
```

```bash
# 容器内主题路径（按需手动同步）
/var/lib/ghost/content/themes/simple/
```
