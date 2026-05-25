// Vercel Serverless Function - 番茄小说真实ID提取API
 
export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
 
  const { url } = req.query;
 
  if (!url) {
    return res.status(400).json({
      success: false,
      error: '缺少url参数'
    });
  }
 
  // 验证URL格式
  if (!url.includes('changdunovel.com') && !url.includes('fanqienovel.com')) {
    return res.status(400).json({
      success: false,
      error: '无效的番茄小说链接'
    });
  }
 
  try {
    // 发送请求并跟随重定向
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
      }
    });
 
    const finalUrl = response.url;
 
    // 从最终URL中提取book_id
    let bookId = null;
    let shortCode = null;
 
    // 提取短码
    const shortCodeMatch = url.match(/\/(?:t|page|reader)\/(\w+)/);
    if (shortCodeMatch) {
      shortCode = shortCodeMatch[1];
    }
 
    // 方法1: 从URL参数中提取 book_id
    const bookIdMatch = finalUrl.match(/[?&]book_id=(\d+)/);
    if (bookIdMatch) {
      bookId = bookIdMatch[1];
    }
 
    // 方法2: 从report_params中提取content_id
    if (!bookId) {
      const reportMatch = finalUrl.match(/report_params=([^&]+)/);
      if (reportMatch) {
        try {
          const decoded = decodeURIComponent(reportMatch[1]);
          const params = JSON.parse(decoded);
          if (params.content_id) {
            bookId = params.content_id;
          }
        } catch (e) {
          // 解析失败，继续尝试其他方法
        }
      }
    }
 
    // 方法3: 从content_id参数直接提取
    if (!bookId) {
      const contentMatch = finalUrl.match(/content_id[=":]+(\d+)/);
      if (contentMatch) {
        bookId = contentMatch[1];
      }
    }
 
    if (!bookId) {
      return res.status(404).json({
        success: false,
        error: '无法提取书籍ID，请检查链接是否有效',
        finalUrl: finalUrl
      });
    }
 
    return res.status(200).json({
      success: true,
      shortCode: shortCode,
      realBookId: bookId,
      finalUrl: finalUrl
    });
 
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: '服务器错误: ' + error.message
    });
  }
}
