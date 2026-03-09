function initWidget(config) {
    const { waifuPath, cdnPath, tools } = config;
    
    // 创建 DOM
    const waifuHTML = `
        <div id="waifu">
            <div id="waifu-tips"></div>
            <canvas id="live2d" width="280" height="300"></canvas>
            <div id="waifu-tool">
                ${tools.includes('hitokoto') ? '<span class="tool-hitokoto" title="一言">💬</span>' : ''}
                ${tools.includes('asteroids') ? '<span class="tool-game" title="小飞机">🎮</span>' : ''}
                ${tools.includes('switch-model') ? '<span class="tool-switch" title="切换角色">🔄</span>' : ''}
                ${tools.includes('switch-texture') ? '<span class="tool-clothes" title="换装">👕</span>' : ''}
                ${tools.includes('photo') ? '<span class="tool-photo" title="拍照">📷</span>' : ''}
                ${tools.includes('info') ? '<span class="tool-info" title="关于">ℹ️</span>' : ''}
                ${tools.includes('quit') ? '<span class="tool-close" title="关闭">❌</span>' : ''}
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', waifuHTML);
    
    const waifu = document.getElementById
