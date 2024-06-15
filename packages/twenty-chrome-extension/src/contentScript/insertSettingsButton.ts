import { isDefined } from '~/utils/isDefined';

const btn = document.getElementById('twenty-settings-btn');
if (!isDefined(btn)) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src ="/packages/twenty-website/public/images/core/logo-mini.png";
  img.height = 20;
  img.width = 20;
  img.alt = 'Korby logo';

  // Write universal styles for the button
  const divStyles = {
    border: '1px solid black',
    borderRadius: '50%',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    justifyContent: 'center',
    padding: '0 1rem',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    zIndex: '9999999999999999999999999',
  };

  div.addEventListener('mouseenter', () => {
    const hoverStyles = {
      //eslint-disable-next-line @nx/workspace-no-hardcoded-colors
      backgroundColor: '#5e5e5e',
      //eslint-disable-next-line @nx/workspace-no-hardcoded-colors
      borderColor: '#5e5e5e',
    };
    Object.assign(div.style, hoverStyles);
  });

  div.addEventListener('mouseleave', () => {
    Object.assign(div.style, divStyles);
  });

  div.onclick = async () => {
    chrome.runtime.sendMessage({ action: 'openSidepanel' });
    chrome.storage.local.set({ navigateSidepanel: 'settings' });
  };

  div.appendChild(img);

  Object.assign(div.style, divStyles);

  document.body.appendChild(div);
}
