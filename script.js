function addLog(message) {
    const logContent = document.getElementById('logContent');
    const time = new Date().toLocaleTimeString(); 
    const newLog = document.createElement('div');
    newLog.innerHTML = `> [${time}] ${message}`;
    logContent.appendChild(newLog);
    logContent.scrollTop = logContent.scrollHeight;
}

function mitigateAttack() {
    const map = document.querySelector('.network-map');
    const alertBox = document.querySelector('.attack-alert');
    
    map.classList.toggle('mitigated');
    
    if (map.classList.contains('mitigated')) {
        alertBox.style.display = 'none'; 
        addLog("CRITICAL: Mitigation activated. Filtering malicious traffic."); 
    } else {
        addLog("WARNING: Defense deactivated. Network exposed!");
    }
}