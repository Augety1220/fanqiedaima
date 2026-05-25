#范切岱玛移动到页面上的下一个交互# 🍅 番茄小说真实ID提取器

自动获取番茄小说分享链接的真实书籍ID（数字ID）。

##自动获取番茄小说分享链接的真实书籍 ID(自动获取番茄小说分享链接的真实书籍 livedoID)

-功能特点
-自动获取跳转后的真实书籍 ID
-✅ 一键复制功能
-✅ 手机端适配
-✅ 无需手动跳转浏览器

##✅ 免费部署，永久使用

####部署到 Vercel

1.方法一：一键部署（最简单）
2.叉子本项目到你的 GitHub

[![点击下面的一键部署按钮：](https://vercel.com/button)](https://vercel.com/new)

3.用 Vercel
4.选择你叉，你要部署

###等待部署完成，即可获得在线访问链接

1.方法二：手动部署
    ```安装 Vercel CLI：
猛敲
    ```

2.npm i -g vercel
    ```登录 Vercel：
猛敲
    ```

3.vercel登录
    ```进入项目目录并部署：
猛敲
cd fanqie-id-提取器
    ```

4.使用你怎么看

##按照提示完成部署

```
fanqie-id-extractor/
项目结构
├── api/
-提取. js#you walloyou API(提取)
-索引
-Vercel. json#Vercel配置文件
```

##-README. md#说明文档

###API接口

GET /api/extract

**提取番茄小说真实 ID**

|##自动获取番茄小说分享链接的真实书籍 ID(livedoID)|参数|类型|必填|
|------|------|------|------|
|说明|统一资源定位系统|线|是|

**番茄小说分享链接**

```返回示例：
{
json
“成功”：没错，
"shortCode": "NL1SzCKYnH0",
"realBookId": "7610650094458637337",
}
```

##"finalUrl": "https://changdunovel.com/ug/pages/book-share?book_id=..."

使用示例
```
https://changdunovel.com/t/NL1SzCKYnH0/
```

输入链接：
```
7610650094458637337
```

##输出真实 ID:

- `https://changdunovel.com/t/xxxxx/`
- `https://fanqienovel.com/page/xxxxx`
- `https://fanqienovel.com/reader/xxxxx`

##支持的链接格式

-技术栈
-前端:HTML mayodo+CSS+JavaScript
-后端：you you（Node.js）

##部署：Vercel

许可
