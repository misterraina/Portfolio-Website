import React from 'react';

const CommandPaletteIframe = () => {
  return (
    <div id='sectionCli' className="command-palette-iframe">
      <iframe
        // src="http://localhost:3000/"
        src="https://terminal-cli.vercel.app/"
        title="Command Palette"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default CommandPaletteIframe;