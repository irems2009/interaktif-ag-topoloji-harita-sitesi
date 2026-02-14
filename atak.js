<script>
function mitigateAttack() {
    const map = document.querySelector('.network-map');
    const alertBox = document.querySelector('.attack-alert');
    map.classList.toggle('mitigated');
    
    
    if (map.classList.contains('mitigated')) {
        alertBox.style.display = 'none';
        alertBox.innerHTML = "<h1>DEFENSE ACTIVE</h1><p>FILTERING MALICIOUS TRAFFIC</p>";
    } else {
        alertBox.innerHTML = "<h1>ATTACK DETECTED </h1><p>HIGH VOLUME TRAFFIC FROM CLOUD SOURCE</p>";
    }
}
</script>