function downloadResume() {
    var link = document.createElement('a');
    link.href = './assets/GABRIEL-CV.pdf';
    link.download = 'Gabriel-CV.pdf'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openLink(link) {
    window.open(link, '_blank');
}
