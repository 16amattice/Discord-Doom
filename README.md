# Discord Doom
Welcome to **Discord Doom**, a groundbreaking integration that brings the iconic **DOOM** game into Discord through a unique fusion of the Phaser discord activity template and JS-DOS. This project is designed for both nostalgic retro gamers and modern Discord users looking to add an exciting twist to their server activities.

This initiative was inspired by and built upon knowledge from the following tutorials:
- [Creating Discord Games with Phaser](https://phaser.io/tutorials/creating-discord-games-with-phaser)
- [Running DOS games in the browser with JS-DOS](https://www.npmjs.com/package/js-dos)

## Features
- Play DOOM directly within Discord.
- Engage in nostalgic gameplay with your Discord friends.
- Easy setup for both local and Discord server environments.

## Getting Started

### Running Locally in Your Browser
To enjoy Discord Doom in a local testing environment:
1. Inside `client/main.js`, comment out the section initializing the Discord SDK.
2. Open your terminal and navigate to the client directory: `cd client`
3. Run the following commands: `npm install` `npm run dev`

4. Visit the local server URL provided in the terminal to start playing.

### Running in Discord
To launch Discord Doom within a Discord server:
1. Ensure the section for initializing the Discord SDK is not commented out in `client/main.js`.
2. Create a Discord app in the [Developer Portal](https://discord.com/developers/applications), rename `example.env` to `.env`, and replace your `CLIENT_ID` and `SECRET` with those provided by Discord.
3. Follow the Phaser tutorial to install `cloudflared`. Then, execute `npm run dev` inside both the `server` and `client` directories. Use a third terminal to run the tunnel command provided by `cloudflared`.
4. Add the URL from `cloudflared` to the Activity URL Mappings in the Discord Developer Portal.
5. Join a voice channel in a Discord server with fewer than 25 members and start the Doom activity.

## Contributing
We welcome contributions and suggestions! Feel free to fork the repository, create your feature branch, and submit a pull request. Or open an issue if you have ideas for improvements or have encountered bugs.

Thank you for being a part of this project. Let's make our Discord experiences more exciting with a touch of retro gaming nostalgia!

