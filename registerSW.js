if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/bill-split/sw.js', { scope: '/bill-split/' })})}