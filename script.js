async function fetchSukunaStats() {
    try {
        // رابط الـ Raw الخاص بك على جيثب المحدث
        const response = await fetch('https://raw.githubusercontent.com/alaarag75-ops/sukuna/main/sukuna-stats.json');
        
        if (!response.ok) throw new Error('تعذر جلب الإحصائيات');

        const data = await response.json();

        // ربط البيانات بالعناصر الموجودة في تصميم موقعك (تأكد أن الـ IDs دي مطابقة عندك في الـ HTML)
        document.getElementById('ram-usage').innerText = `${data.ram} MB`;
        document.getElementById('total-commands').innerText = data.totalCommands;
        document.getElementById('total-users').innerText = data.totalUsers;
        document.getElementById('uptime').innerText = data.uptime;
        document.getElementById('top-user').innerText = data.topUser;
        document.getElementById('top-exp').innerText = `XP ${data.topExp}`;

    } catch (error) {
        console.error('خطأ في الاتصال باللوحة:', error);
    }
}

// تحديث اللوحة تلقائياً كل 10 ثواني
setInterval(fetchSukunaStats, 10000);
fetchSukunaStats();
