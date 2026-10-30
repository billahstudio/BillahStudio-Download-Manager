// BillahStudio Download Manager - Landing Page Scripts
document.addEventListener('DOMContentLoaded', () => {
  const DEFAULT_DOWNLOAD_URL = 'https://github.com/billahstudio/BillahStudio-Download-Manager/releases/download/v1.0.1/BillahStudio-Download-Manager.exe';
  const REPO = 'billahstudio/BillahStudio-Download-Manager';

  const downloadBtn = document.getElementById('mainDownloadBtn');
  const copyBtn = document.getElementById('copyChecksumBtn');
  const checksumText = document.getElementById('checksumVal')?.textContent || '';
  const toast = document.getElementById('toast');

  // Copy Checksum button
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(checksumText.trim());
        showToast('Checksum copied to clipboard!');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = checksumText.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Checksum copied to clipboard!');
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Fetch Latest Release Metadata dynamically from GitHub API
  async function fetchLatestRelease() {
    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`);
      if (!res.ok) return;
      const data = await res.json();

      if (data && data.assets && data.assets.length > 0) {
        const exeAsset = data.assets.find(a => a.name.endsWith('.exe')) || data.assets[0];
        if (exeAsset && exeAsset.browser_download_url) {
          if (downloadBtn) {
            downloadBtn.href = exeAsset.browser_download_url;
            const sizeMb = (exeAsset.size / (1024 * 1024)).toFixed(0);
            const metaInfo = downloadBtn.querySelector('.btn-meta-info');
            if (metaInfo) {
              metaInfo.textContent = `${exeAsset.name} • ${data.tag_name} (${sizeMb} MB)`;
            }
          }

          // Update nav CTA
          const navCta = document.querySelector('.nav-cta-btn');
          if (navCta) {
            navCta.href = exeAsset.browser_download_url;
          }

          // Update version tag text
          const versionText = document.querySelector('.version-text');
          if (versionText) {
            versionText.innerHTML = `Official Release <strong>${data.tag_name}</strong> for Windows`;
          }
        }
      }
    } catch (e) {
      console.warn('Could not fetch latest release info dynamically, using fallback', e);
    }
  }

  fetchLatestRelease();
});
