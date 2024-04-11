# Discord Doom
A merge of the phaser discord activity template and JS-Dos running doom.
Made using the following tutorials:

- https://phaser.io/tutorials/creating-discord-games-with-phaser
- https://www.npmjs.com/package/js-dos

## Running locally in your browser.
- Comment out the section that initializes the discord SDK inside client/main.js.
- Run `cd client`, `npm install`, and `npm run dev`
- Visit the local server.

## Running in discord.
- Make sure the section for initializing the discord SDK is not commented out inside client/main.js
- Make sure you have created a discord app in the developer portal, and renamed example.env to .env, and replace your clientID and Secret.
- Following the phaser tutorial, install cloudflared, and `npm run dev` from inside server and client folders, and use a third terminal to run the tunnel. Make sure to add the resulting URL from cloudflared to the Activity URL Mappings within the discord developer portal.
- Join a voice channel in a server with under 25 members, and run the Doom activity.

