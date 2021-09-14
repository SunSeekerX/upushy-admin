# 📌 更新日志（CHANGELOG）

**新版本模板**

```
### next（未发布分支）
**计划时间（Plan）**

- 开始时间 -

- 预计发布 -

**功能（Features）**

**Bug 修复 （Bug Fixes）**

**技术预研（Research）**
```

**用到的符号**

- ☑️ 开发完成
- ✅ 自测完成

### next（未发布分支）

**计划时间（Plan）**

- 开始时间 -

- 预计发布 -

**功能（Features）**

1. 升级依赖

2. 完成图表功能

3. 增加修改密码功能

4. 其他

   > - 系统监控
   > - 项目列表显示最新版本和最新 wgt 版本
   > - 应用图片 logo 上传
   > - 大文件上传
   > - 用户
   >   - 修改用户信息
   >   - 修改密码
   >   - 数据导出数据导入
   > - 检查更新接口缓存
   >   - 定时任务检查所有应用查询每个资源最大的原生版本号和最大的 wgt 版本号，存入 redis。一但有新上传的资源就更新 redis，保证大压力接口数据都来源 redis 减轻数据库压力。
   > - Dashboard
   >   1：统计我的应用数量
   >   2：统计每个应用检查更新次数
   >   3：统计每个应用总检查更新次数
   >   4：统计每个应用资源总数
   >   5：统计该账号下资源总数
   >   6：统计每个应用每个资源检索次数
   >   7：统计趋势
   > - 画出流程图

**Bug 修复 （Bug Fixes）**

**技术预研（Research）**

### 0.2.0 - 未发布

**计划时间（Plan）**

- 开始时间 -

- 预计发布 -

**功能（Features）**

1. 【重要】同步 `uni-pushy-server` `0.2.0` 的修改
2. 【重要】更新日志文件拆分
3. 【重要】环境变量配置 `VUE_APP_API_RSA_PUBLIC_KEY` 变更为 `VUE_APP_API_SIGN_RSA_PUBLIC_KEY_BASE64`
4. 代码结构优化
5. 注释优化

**Bug 修复 （Bug Fixes）**

**技术预研（Research）**

### 0.0.3 - 2021-04-26

**功能（Features）**

- 增加 `VUE_APP_WEB_OSS` 环境变量，用来标识由前端直接访问 oss，不通过后台生成临时访问凭据。❗ 该方式有泄露阿里云账号 `ACCESS_KEY_ID` 和 `KEY_SECRET` 的风险
- 增加 `VUE_APP_ALIYUN_OSS_REGION` 环境变量
- 增加 `VUE_APP_ALIYUN_OSS_BUCKET` 环境变量
- 增加 `VUE_APP_ALIYUN_ACCESS_KEY_ID` 环境变量
- 增加 `VUE_APP_ALIYUN_ACCESS_KEY_SECRET` 环境变量

### 0.0.2 - 2021-04-23

- 优化代码

### 0.0.1 - 2021-02-12

**功能（Features）**

- 优化路由
- 添加 wgt 资源，原生资源版本号默认填充对应的最新原生版本号

### 0.0.1 - 2021-02-12

**功能（Features）**

- 切换资源类型为原生类型不显示原生版本号
- 增加文件上传 oss 临时账号过期校验
- 更新日志和备注输入默认增大
- 资源详情优化排版
- 编辑只有 wgt 资源显示原生版本号

### 0.0.1 - 2020-11-01

**功能（Features）**

- 增加 refresh token 刷新 token 机制，提升体验
- id 去除 “-”

### 0.0.1 - 2020-08-25

**Bug 修复 （Bug Fixes）**

- 【重要】修复增加新的资源在同一 `tab` 下下载地址不拼接的错误

**功能（Features）**

- 新增资源切换资源类型需要上传资源的类型不删除已经上传的文件

### 0.0.1 - 2020-08-24

- 【重要】文件上传直接上传到 `OSS` ，通过后台的 `STS` 授权
- 【重要】文件上传接入阿里的 `SDK` 启用分片上传

### 0.0.1 - 2020-08-19

- 增加资源排序

### 0.0.1 - 2020-08-18

- 【重要】增加 `Api sign` 接口加密
- 优化表格显示
- 优化项目新增输入

### 0.0.1 - 2020-08-17

**Bug 修复 （Bug Fixes）**

- 【重要】修复 `token` 失效退出登录重新登录页面空白的问题

**功能（Features）**

- 更好的 `token` 过期提示

### 0.0.1 - 2020-08-15

**Bug 修复 （Bug Fixes）**

- 资源 `bug`：修复新增资源切换类型已经上传的文件未清除

**功能（Features）**

- 【重要】资源：增加更新日志字段

### 0.0.1 - 2020-08-10

**功能（Features）**

- 【重要】增加登录注册 `md5` 加密
- 【重要】项目新增 `appid` 唯一属性，原来为 `name（项目名）` 为唯一属性
- 【重要】增加了 `wgt` 资源分类，分为`wgt-android` 和 `wgt-ios`
- 【重要】增加了 `wgt` 资源原生版本依赖
- 修改默认语言为中文
- 代码逻辑优化