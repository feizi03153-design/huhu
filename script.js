// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 复制到剪贴板功能
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const text = element.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // 显示成功提示
            const success = document.createElement('div');
            success.className = 'success';
            success.textContent = '已复制到剪贴板！';
            element.parentNode.appendChild(success);
            
            // 3秒后移除提示
            setTimeout(() => {
                success.remove();
            }, 3000);
        });
    }
}

// 文案生成器核心逻辑
class CopywriterGenerator {
    // 亚马逊产品标题生成器
    static generateAmazonTitle(productName, features, targetAudience) {
        const templates = [
            `${productName} ${features} - ${targetAudience} 必备`,
            `${productName} ${features} - 高品质 ${targetAudience} 用品`,
            `${productName} ${features} - 为 ${targetAudience} 设计的专业选择`,
            `${productName} ${features} - ${targetAudience} 的理想解决方案`,
            `${productName} ${features} - 提升 ${targetAudience} 体验的必备工具`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // Facebook广告文案生成器
    static generateFacebookAd(productName, benefit, callToAction) {
        const templates = [
            `🌟 想要 ${benefit}？试试 ${productName}吧！\n\n${callToAction}`,
            `💥 ${productName} 让 ${benefit} 变得简单！\n\n立即行动：${callToAction}`,
            `✨ 发现 ${productName} 的神奇效果！${benefit} \n\n${callToAction}`,
            `🔥 ${productName} - ${benefit} 的最佳选择！\n\n${callToAction}`,
            `🎯 ${productName} 助你实现 ${benefit}！\n\n${callToAction}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // Instagram文案生成器
    static generateInstagramCaption(productName, vibe, hashtags) {
        const templates = [
            `📸 今天推荐：${productName} \n\n${vibe} \n\n${hashtags}`,
            `✨ ${productName} - 我的新宠！\n\n${vibe} \n\n${hashtags}`,
            `😍 不能没有 ${productName}！\n\n${vibe} \n\n${hashtags}`,
            `💖 ${productName} 让生活更美好！\n\n${vibe} \n\n${hashtags}`,
            `🌟 必备单品：${productName} \n\n${vibe} \n\n${hashtags}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // YouTube视频标题生成器
    static generateYouTubeTitle(topic, keyword, format) {
        const templates = [
            `${topic} ${keyword} - ${format}`,
            `${format}：${topic} ${keyword}`,
            `${topic} ${keyword} | ${format}`,
            `${keyword} ${topic} - 完整${format}`,
            `${format}：如何${topic} ${keyword}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // TikTok文案生成器
    static generateTikTokCaption(productName, trend, callToAction) {
        const templates = [
            `🔥 ${productName} 太绝了！#${trend} \n\n${callToAction}`,
            `✨ 发现宝藏：${productName} #${trend} \n\n${callToAction}`,
            `🎵 ${productName} 搭配这个BGM太合适了！#${trend} \n\n${callToAction}`,
            `💥 ${productName} 挑战 #${trend} \n\n${callToAction}`,
            `🌟 ${productName} #${trend} 必备单品！\n\n${callToAction}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // Google广告文案生成器
    static generateGoogleAd(headline, description, keyword) {
        const templates = [
            `标题：${headline}\n描述：${description} ${keyword}\n号召性用语：立即了解`,
            `标题：${headline} ${keyword}\n描述：${description}\n号召性用语：立即购买`,
            `标题：${keyword} - ${headline}\n描述：${description}\n号召性用语：免费咨询`,
            `标题：${headline}\n描述：${keyword} ${description}\n号召性用语：立即行动`,
            `标题：${headline} ${keyword}\n描述：${description} - 专业服务\n号召性用语：了解更多`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 产品描述生成器
    static generateProductDescription(productName, features, benefits) {
        const templates = [
            `【${productName}】\n\n${features}\n\n${benefits}\n\n高品质保证，值得信赖！`,
            `【产品介绍】\n${productName}\n\n特点：${features}\n\n优势：${benefits}\n\n为您的生活增添便利！`,
            `${productName} - 您的理想选择\n\n${features}\n\n${benefits}\n\n立即拥有，享受品质生活！`,
            `【${productName}】\n\n精心设计，${features}\n\n让您 ${benefits}\n\n品质之选，值得拥有！`,
            `${productName}\n\n${features}\n\n${benefits}\n\n专业品质，用心打造！`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 邮件标题生成器
    static generateEmailTitle(purpose, recipient, urgency) {
        const templates = [
            `${purpose} - ${recipient} 必看`,
            `【${urgency}】${purpose}`,
            `${recipient}，关于 ${purpose} 的重要信息`,
            `${purpose} - 为 ${recipient} 准备的专属内容`,
            `【${urgency}】${recipient}，${purpose} 不容错过`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 促销文案生成器
    static generatePromotion(productName, discount, deadline) {
        const templates = [
            `🎉 ${productName} 限时特惠！${discount} \n\n${deadline} 截止，立即抢购！`,
            `🔥 ${productName} 大促销！${discount} \n\n${deadline} 前下单，享受优惠！`,
            `✨ ${productName} 特价活动！${discount} \n\n${deadline} 结束，错过再等一年！`,
            `💥 ${productName} 折扣来袭！${discount} \n\n${deadline} 前购买，省到就是赚到！`,
            `🎯 ${productName} 限时折扣！${discount} \n\n${deadline} 截止，机会难得！`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 品牌口号生成器
    static generateBrandSlogan(brandName, value, audience) {
        const templates = [
            `${brandName} - ${value} 为 ${audience}`,
            `${brandName} - ${audience} 的 ${value} 选择`,
            `${value}，尽在 ${brandName}`,
            `${brandName} - 用 ${value} 连接 ${audience}`,
            `${brandName} - ${value} 引领 ${audience} 生活`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // SEO 标题生成器
    static generateSeoTitle(keyword, benefit, brand) {
        const templates = [
            `${keyword} - ${benefit} | ${brand}`,
            `${benefit} - ${keyword} | ${brand}`,
            `${keyword}：${benefit} | ${brand}`,
            `${benefit} ${keyword} | ${brand}`,
            `${keyword} ${benefit} 指南 | ${brand}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // SEO Meta描述生成器
    static generateSeoMeta(keyword, content, brand) {
        const templates = [
            `了解 ${keyword} 的 ${content}。${brand} 提供专业的 ${keyword} 解决方案，帮助您实现目标。`,
            `${content} ${keyword} 相关信息尽在 ${brand}。我们提供详细的 ${keyword} 指南，助您轻松掌握。`,
            `${brand} 为您带来 ${keyword} 的 ${content}。专业、全面的 ${keyword} 资源，满足您的需求。`,
            `寻找 ${keyword} 的 ${content}？${brand} 为您提供最权威的 ${keyword} 信息和解决方案。`,
            `${keyword} ${content} - ${brand} 为您提供专业的 ${keyword} 服务，助您取得成功。`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 博客标题生成器
    static generateBlogTitle(topic, format, angle) {
        const templates = [
            `${format}：${topic} ${angle}`,
            `${topic} ${angle} - ${format}`,
            `${format} | ${topic} ${angle}`,
            `${topic} ${angle}：完整${format}`,
            `${format}：如何${topic} ${angle}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 问答文案生成器
    static generateQAContent(question, answer, context) {
        const templates = [
            `问：${question}\n\n答：${answer}\n\n${context}`,
            `问题：${question}\n\n回答：${answer}\n\n${context}`,
            `${question}\n\n${answer}\n\n${context}`,
            `问：${question}\n\n${answer}\n\n${context}`,
            `Q: ${question}\n\nA: ${answer}\n\n${context}`
        ];
        return templates[Math.floor(Math.random() * templates.length)];
    }

    // 关键词提取工具
    static extractKeywords(text) {
        // 简单的关键词提取逻辑，实际项目中可以使用更复杂的算法
        const stopWords = ['的', '了', '是', '在', '我', '有', '和', '就', '不', '人', '都', '一', '一个', '上', '也', '很', '到', '说', '要', '去', '你', '会', '着', '没有', '看', '好', '自己', '这', 'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'from', 'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being'];
        
        // 分词并过滤停用词
        const words = text.toLowerCase().match(/\b\w+\b/g) || [];
        const filteredWords = words.filter(word => !stopWords.includes(word) && word.length > 2);
        
        // 统计词频
        const wordCount = {};
        filteredWords.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
        
        // 按词频排序并返回前10个关键词
        return Object.entries(wordCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([word, count]) => `${word} (${count})`)
            .join('\n');
    }
}

// 表单提交处理
function handleFormSubmit(formId, generatorFunction, resultId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // 生成文案
            let result;
            switch (generatorFunction) {
                case 'amazonTitle':
                    result = CopywriterGenerator.generateAmazonTitle(data.productName, data.features, data.targetAudience);
                    break;
                case 'facebookAd':
                    result = CopywriterGenerator.generateFacebookAd(data.productName, data.benefit, data.callToAction);
                    break;
                case 'instagram':
                    result = CopywriterGenerator.generateInstagramCaption(data.productName, data.vibe, data.hashtags);
                    break;
                case 'youtubeTitle':
                    result = CopywriterGenerator.generateYouTubeTitle(data.topic, data.keyword, data.format);
                    break;
                case 'tiktok':
                    result = CopywriterGenerator.generateTikTokCaption(data.productName, data.trend, data.callToAction);
                    break;
                case 'googleAd':
                    result = CopywriterGenerator.generateGoogleAd(data.headline, data.description, data.keyword);
                    break;
                case 'productDescription':
                    result = CopywriterGenerator.generateProductDescription(data.productName, data.features, data.benefits);
                    break;
                case 'emailTitle':
                    result = CopywriterGenerator.generateEmailTitle(data.purpose, data.recipient, data.urgency);
                    break;
                case 'promotion':
                    result = CopywriterGenerator.generatePromotion(data.productName, data.discount, data.deadline);
                    break;
                case 'brandSlogan':
                    result = CopywriterGenerator.generateBrandSlogan(data.brandName, data.value, data.audience);
                    break;
                case 'seoTitle':
                    result = CopywriterGenerator.generateSeoTitle(data.keyword, data.benefit, data.brand);
                    break;
                case 'seoMeta':
                    result = CopywriterGenerator.generateSeoMeta(data.keyword, data.content, data.brand);
                    break;
                case 'blogTitle':
                    result = CopywriterGenerator.generateBlogTitle(data.topic, data.format, data.angle);
                    break;
                case 'qaContent':
                    result = CopywriterGenerator.generateQAContent(data.question, data.answer, data.context);
                    break;
                case 'keywordExtractor':
                    result = CopywriterGenerator.extractKeywords(data.text);
                    break;
                default:
                    result = '请选择正确的生成器';
            }
            
            // 显示结果
            const resultElement = document.getElementById(resultId);
            if (resultElement) {
                resultElement.textContent = result;
            }
        });
    }
}

// 初始化所有表单处理
function initFormHandlers() {
    handleFormSubmit('amazon-form', 'amazonTitle', 'amazon-result');
    handleFormSubmit('facebook-form', 'facebookAd', 'facebook-result');
    handleFormSubmit('instagram-form', 'instagram', 'instagram-result');
    handleFormSubmit('youtube-form', 'youtubeTitle', 'youtube-result');
    handleFormSubmit('tiktok-form', 'tiktok', 'tiktok-result');
    handleFormSubmit('google-form', 'googleAd', 'google-result');
    handleFormSubmit('product-form', 'productDescription', 'product-result');
    handleFormSubmit('email-form', 'emailTitle', 'email-result');
    handleFormSubmit('promotion-form', 'promotion', 'promotion-result');
    handleFormSubmit('brand-form', 'brandSlogan', 'brand-result');
    handleFormSubmit('seo-title-form', 'seoTitle', 'seo-title-result');
    handleFormSubmit('seo-meta-form', 'seoMeta', 'seo-meta-result');
    handleFormSubmit('blog-form', 'blogTitle', 'blog-result');
    handleFormSubmit('qa-form', 'qaContent', 'qa-result');
    handleFormSubmit('keyword-form', 'keywordExtractor', 'keyword-result');
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormHandlers);
} else {
    initFormHandlers();
}