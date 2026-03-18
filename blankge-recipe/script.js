// 饮食记录数据（基于抓取的22篇笔记）
const dietRecords = [
    { date: "2026-03-17", title: "173 82斤 今天吃什么", meals: [{time: "9:00", food: "红茶玛奇朵"}, {time: "12:30", food: "虾5个"}, {time: "19:30", food: "牛肉一盘 面包一片"}], steps: 300, water: 2000 },
    { date: "2026-03-16", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "轻轻茉莉"}, {time: "12:30", food: "咖啡 干果"}, {time: "19:00", food: "豆芽半盘 披萨一块 蓝莓5个"}], steps: 4000, water: 2500 },
    { date: "2026-03-14", title: "173 82斤 今天吃什么", meals: [{time: "8:00", food: "轻轻茉莉"}, {time: "11:30", food: "鸭腿炒饭半份"}, {time: "19:00", food: "牛奶 燕窝 蔬菜 鸡蛋 坚果"}], steps: 300, water: 2000 },
    { date: "2026-03-13", title: "173 82斤 今天吃什么", meals: [{time: "9:00", food: "薏米水"}, {time: "12:00", food: "咖啡 坚果"}, {time: "18:00", food: "汉堡"}], steps: 100, water: 1800 },
    { date: "2026-03-11", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "抹茶"}, {time: "12:00", food: "两盘小咸菜 馄饨半碗"}, {time: "18:00", food: "一袋玉米片"}], steps: 1500, water: 2000 },
    { date: "2026-03-09", title: "173 82斤 今天吃什么", meals: [{time: "7:30", food: "轻轻茉莉"}, {time: "12:00", food: "鸡蛋饼 黄瓜 牛奶"}, {time: "18:30", food: "蒸蛋一份 白菜半盘"}], steps: 400, water: 1800 },
    { date: "2026-03-08", title: "173 82斤 今天吃什么", meals: [{time: "8:00", food: "薏米水"}, {time: "12:00", food: "鸡蛋汤一碗 炒菜一半"}, {time: "18:00", food: "泡芙两个"}], steps: 1200, water: 2000 },
    { date: "2026-03-06", title: "173 82斤 今天吃什么", meals: [{time: "7:00", food: "美式"}, {time: "11:00", food: "虾10个"}, {time: "18:00", food: "油菜半盘 虾1个 土豆2块 红烧肉1块 菇2根"}], steps: 2000, water: 2300 },
    { date: "2026-03-05", title: "173 82斤 今天吃什么", meals: [{time: "8:00", food: "轻轻茉莉"}, {time: "12:00", food: "牛肉汤 饼一块"}, {time: "19:00", food: "小米粥 鸡蛋 红薯"}], steps: 200, water: 2000 },
    { date: "2026-03-04", title: "173 82斤 今天吃什么", meals: [{time: "7:00", food: "美式"}, {time: "11:30", food: "虾滑3个 米饭一半"}, {time: "19:00", food: "椰子水 干果"}], steps: 1500, water: 2300 },
    { date: "2026-03-03", title: "173 82斤 今天吃什么", meals: [{time: "8:00", food: "轻轻茉莉"}, {time: "12:00", food: "饺子4个"}, {time: "18:00", food: "牛奶 汤圆2个"}], steps: 200, water: 1800 },
    { date: "2026-03-02", title: "172 82斤 今天吃什么", meals: [{time: "8:30", food: "红茶玛奇朵"}, {time: "12:00", food: "山药粥 莴笋半盘"}, {time: "18:30", food: "车厘子一盘"}], steps: 1200, water: 2000 },
    { date: "2026-02-27", title: "173 82斤 今天吃什么", meals: [{time: "7:30", food: "轻轻茉莉"}, {time: "12:00", food: "鸡肉一盘 面包2粒"}, {time: "18:30", food: "牛奶 蔬菜 肠"}], steps: 1100, water: 2000 },
    { date: "2026-02-25", title: "173 82斤 今天吃什么", meals: [{time: "7:00", food: "薏米水"}, {time: "12:00", food: "蛋糕"}, {time: "18:00", food: "牛肉一盘 饭团2个"}], steps: 300, water: 2200 },
    { date: "2026-02-23", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "美式"}, {time: "12:00", food: "蒸蛋一份 青菜一份"}, {time: "18:00", food: "粥一碗 包子2个 鸡蛋1个"}], steps: 500, water: 1800 },
    { date: "2026-02-22", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "美式"}, {time: "12:00", food: "干果 牛奶"}, {time: "18:00", food: "面包 扁豆炒腊肠 牛奶"}], steps: 3000, water: 2200 },
    { date: "2026-02-21", title: "173 82斤 今天吃什么", meals: [{time: "8:00", food: "轻轻茉莉"}, {time: "11:30", food: "汉堡"}, {time: "18:30", food: "粥 蒸蛋 蒸菜 各半份"}], steps: 2300, water: 1800 },
    { date: "2026-02-20", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "红茶玛奇朵"}, {time: "12:00", food: "大拌菜一盘"}, {time: "18:00", food: "包菜 蜂蜜柚子茶"}], steps: 1800, water: 2000 },
    { date: "2026-02-16", title: "173 82斤 今天吃什么", meals: [{time: "8:30", food: "轻轻茉莉"}, {time: "11:30", food: "酸奶 蛋挞 沙拉一半"}, {time: "18:00", food: "意面一份"}], steps: 2000, water: 2300 }
];

// 周菜单
const weeklyMenu = {
    "周一": [
        "早餐 (8:00): 轻轻茉莉 + 水煮蛋2个 + 全麦吐司1片 + 牛油果¼个",
        "午餐 (12:00): 馄饨12个（加蛋） + 蔬菜沙拉 + 牛奶200ml",
        "晚餐 (18:30): 小米粥1碗 + 蒸蛋2份 + 清蒸鱼块 + 青菜",
        "加餐 (21:00): 酸奶1杯 + 坚果10g"
    ],
    "周二": [
        "早餐 (8:00): 红茶玛奇朵（少糖）+ 酸奶1杯 + 燕麦2勺 + 鸡蛋1个",
        "午餐 (12:00): 牛肉汤面（加蛋+青菜） + 苹果半个",
        "晚餐 (18:30): 猪肉白菜饺8个 + 紫菜汤 + 凉拌黄瓜",
        "加餐 (21:00): 香蕉1根 + 牛奶200ml"
    ],
    "周三": [
        "早餐 (8:00): 美式咖啡 + 全麦三明治（蛋+生菜） + 牛奶200ml",
        "午餐 (12:00): 虾仁炒饭（虾8-10个） + 冬瓜汤",
        "晚餐 (18:30): 山药粥1碗 + 蒸鸡胸肉（小份） + 西兰花 + 蒸蛋1份",
        "加餐 (21:00): 酸奶1杯 + 蛋白粉1勺"
    ],
    "周四": [
        "早餐 (8:00): 薏米水 + 蒸蛋1份 + 小花卷1个 + 茶叶蛋",
        "午餐 (12:00): 鸭腿饭（去皮，1只） + 青菜2份 + 豆腐",
        "晚餐 (18:30): 番茄鸡蛋面（加肉末） + 凉拌豆腐 + 青菜",
        "加餐 (21:00): 牛奶250ml + 坚果15g"
    ],
    "周五": [
        "早餐 (8:00): 轻轻茉莉 + 茶叶蛋1个 + 包子1个（素馅） + 豆浆",
        "午餐 (12:00): 汉堡（去酱，牛肉饼） + 玉米半根 + 蔬菜沙拉 + 牛奶",
        "晚餐 (18:30): 牛肉火锅（瘦牛肉100g+蔬菜） + 米饭半碗",
        "加餐 (21:00): 水果 + 酸奶"
    ],
    "周六": [
        "早餐 (8:00): 随意（保持规律）",
        "午餐 (12:00): 家庭餐 - 选择清淡易消化（鱼/鸡肉+蔬菜+主食）",
        "晚餐 (18:30): 饺子/包子12-15个 + 汤 + 小菜",
        "加餐 (21:00): 高热量奶昔（牛奶+蛋白粉+香蕉）"
    ],
    "周日": [
        "早餐 (8:00): 燕麦粥+水果+坚果+牛奶",
        "午餐 (12:00): 外食 - 选择营养套餐",
        "晚餐 (18:30): 简单：粥+蒸菜+蛋白质",
        "加餐 (21:00): 坚果+酸奶"
    ]
};

// 渲染表格
function renderTable(records) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    records.forEach(rec => {
        const row = document.createElement('tr');
        const mealsHtml = rec.meals.map(m =>
            `<div><strong>${m.time}</strong> ${m.food}</div>`
        ).join('');

        row.innerHTML = `
            <td>${rec.date}</td>
            <td>${mealsHtml}</td>
            <td>${rec.steps ? rec.steps + '步' : '—'}</td>
            <td>${rec.water ? rec.water + 'ml' : '—'}</td>
        `;
        tbody.appendChild(row);
    });
}

// 渲染周菜单
function renderWeeklyMenu() {
    const container = document.getElementById('weekly-menu');
    container.innerHTML = '';

    for (const [day, meals] of Object.entries(weeklyMenu)) {
        const card = document.createElement('div');
        card.className = 'day-card';

        let mealsHtml = meals.map(m => `<div class="meal-item">${m}</div>`).join('');

        card.innerHTML = `
            <div class="day-header">${day}</div>
            <div class="day-meals">${mealsHtml}</div>
        `;
        container.appendChild(card);
    }
}

// 显示全部
function showAll() {
    renderTable(dietRecords);
}

// 显示最近10天
function showRecent() {
    renderTable(dietRecords.slice(0, 10));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    showAll();
    renderWeeklyMenu();
});
