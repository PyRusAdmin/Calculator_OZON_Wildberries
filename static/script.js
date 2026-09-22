document.addEventListener('DOMContentLoaded', () => {
    const excelFileInput = document.getElementById('excelFile');
    const fileTextLabel = document.querySelector('.file-text');

    if (excelFileInput && fileTextLabel) {
        excelFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileTextLabel.textContent = `Выбран файл: ${e.target.files[0].name}`;
            } else {
                fileTextLabel.textContent = 'Выберите файл Excel (.xlsx)';
            }
        });
    }

    const marketplaceSelect = document.getElementById('marketplace');
    const handlingGroup = document.getElementById('handlingGroup');

    if (marketplaceSelect && handlingGroup) {
        marketplaceSelect.addEventListener('change', (e) => {
            if (e.target.value === 'wb') {
                handlingGroup.style.opacity = '0.5';
            } else {
                handlingGroup.style.opacity = '1';
            }
        });
    }
});
