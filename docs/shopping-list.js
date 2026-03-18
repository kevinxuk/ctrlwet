// 购物清单数据（基于一周食谱汇总）
const shoppingList = {
    "谷物主食": [
        "全麦吐司 1包",
        "小花卷 10个",
        "包子（素馅） 7个",
        "米饭（少量）",
        "燕麦片 1袋"
    ],
    "蛋白质": [
        "鸡蛋 15-20个",
        "牛奶/酸奶 1L（多盒）",
        "瘦牛肉/牛肉饼 300g",
        "鸡胸肉 200g",
        "虾仁/虾 200g",
        "鸭腿 1只",
        "猪肉（瘦肉）200g",
        "鱼块（清蒸）200g",
        "豆腐 2块",
        "茶叶蛋 可外购"
    ],
    "蔬菜": [
        "青菜（各类） 大量",
        "黄瓜 1-2根",
        "西兰花 1颗",
        "番茄 2个",
        "冬瓜/玉米 适量",
        "白菜/生菜/莴笋 适量",
        "香菇/菇类 适量"
    ],
    "水果": [
        "苹果 2-3个",
        "香蕉 3-5根",
        "葡萄/草莓 少量",
        "车厘子（可选）"
    ],
    "饮品/调料": [
        "轻轻茉莉（奶茶） 外购或自制",
        "红茶/咖啡 适量",
        "薏米水 可自制",
        "豆浆/椰子水 适量",
        "坚果（核桃/杏仁） 小袋",
        "蛋白粉（可选）"
    ],
    "其他": [
        "馄饨/饺子 速冻备用",
        "紫菜/虾皮 做汤",
        "蕃茄酱/盐 少量"
    ]
};

// 渲染购物清单
function renderShoppingList() {
    const container = document.getElementById('shopping-list');
    if (!container) return;

    container.innerHTML = '';

    for (const [category, items] of Object.entries(shoppingList)) {
        const section = document.createElement('div');
        section.className = 'list-section';

        let itemsHtml = items.map(item => `
            <div class="list-item">
                <input type="checkbox" id="item-${item.replace(/\s/g, '-')}">
                <label for="item-${item.replace(/\s/g, '-')}">${item}</label>
            </div>
        `).join('');

        section.innerHTML = `
            <h4 class="list-category">${category}</h4>
            <div class="list-items">
                ${itemsHtml}
            </div>
        `;
        container.appendChild(section);
    }
}

// 页面加载时渲染清单
document.addEventListener('DOMContentLoaded', () => {
    renderShoppingList();
});
