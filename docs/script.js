// 极简低卡食谱（<800 kcal/天）
const weeklyMenu = {
    "周一": [
        "早餐 (8:00): 轻轻茉莉（无糖）+ 水煮蛋1个 + 全麦吐司½片 (~200 kcal)",
        "午餐 (12:00): 馄饨8个（素馅，少汤）+ 蔬菜沙拉（少油） (~300 kcal)",
        "晚餐 (18:30): 小米粥½碗 + 蒸蛋1份 + 清蒸鱼块50g (~250 kcal)"
    ],
    "周二": [
        "早餐: 薏米水 + 茶叶蛋1个 + 小花卷1个 (~200 kcal)",
        "午餐: 牛肉汤面（牛肉50g，面½碗）+ 青菜 (~300 kcal)",
        "晚餐: 番茄鸡蛋面（鸡蛋1个，番茄1个，面½碗） (~250 kcal)"
    ],
    "周三": [
        "早餐: 美式 + 燕麦2勺 + 脱脂奶100ml (~200 kcal)",
        "午餐: 虾仁炒饭（虾5个，米饭½碗）+ 冬瓜 (~300 kcal)",
        "晚餐: 山药粥½碗 + 蒸鸡胸肉50g + 西兰花 (~250 kcal)"
    ],
    "周四": [
        "早餐: 轻轻茉莉 + 蒸蛋1份 (~200 kcal)",
        "午餐: 鸭腿饭（去皮鸭腿½只，米饭½碗）+ 青菜 (~300 kcal)",
        "晚餐: 豆腐汤（豆腐½块）+ 黄瓜½根 (~250 kcal)"
    ],
    "周五": [
        "早餐: 红茶玛奇朵（少糖）+ 酸奶½杯 (~200 kcal)",
        "午餐: 猪肉白菜饺8个 + 紫菜汤 (~300 kcal)",
        "晚餐: 牛奶200ml + 燕麦片2勺 + 茶叶蛋1个 (~250 kcal)"
    ],
    "周六": [
        "早餐: 鸡蛋饼（蛋1个，无油）+ 豆浆（无糖） (~200 kcal)",
        "午餐: 外食选择 - 蒸菜+蔬菜+米饭½碗 (~300 kcal)",
        "晚餐: 饺子6个（素馅）+ 凉拌黄瓜 (~250 kcal)"
    ],
    "周日": [
        "早餐: 美式 + 全麦三明治（蛋1个，生菜） (~200 kcal)",
        "午餐: 奶茶（无糖）+ 包子1个（素） (~300 kcal)",
        "晚餐: 粥½碗 + 蒸蛋1份 + 青菜 (~250 kcal)"
    ]
};

function renderMenu() {
    const container = document.getElementById('menu-grid');
    container.innerHTML = '';

    for (const [day, meals] of Object.entries(weeklyMenu)) {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <div class="day-header">${day}</div>
            <div class="day-meals">
                ${meals.map(m => `<div class="meal-item">${m}</div>`).join('')}
            </div>
        `;
        container.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
