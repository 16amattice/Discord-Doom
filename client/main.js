import { DiscordSDK } from "@discord/embedded-app-sdk";

// Instantiate the SDK
// Uncomment this once your work is done on browser, it will ONLY work on Discord Activities
/* const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
}).catch((error) => {
  console.log(error);
});
async function setupDiscordSdk() {
  await discordSdk.ready();
} */

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'jsdos',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

new Phaser.Game(config);