# Ncryptor

Ncryptor is a simple frontend used to invoke the GNU Privacy Guard.
It is an easy way to encrypt confidential messages to others, decrypt messages to you, and manage your private and public RSA keypairs.
Plain text can be near-instantly encrypted and copied to the clipboard for quickly sending private messages through any instant messaging platform.
The only way to ensure true end-to-end encryption is by encrypting the text on your device before its sent over the wire, and Ncryptor streamlines this process while looking stylish.

![Ncryptor screenshot](public/media/screencap.png "Screenshot of Ncryptor")

## Features

- Quickly encrypt plain text messages or text files to anyone with a public PGP key
- Near-instantly decrypt messages encrypted for you
- Browse the details of the private and public RSA keys in your GPG keyring
- Generate new RSA keypairs for encryption
- Easily import public PGP keys into your keyring
- Delete RSA keys (with clear confirmation required)

## Requirements

- [GNU Privacy Guard (gpg)](https://www.gnupg.org/index.html) >= v2.3.4
- [Node.js](https://nodejs.org/en/) >= v16.6.0
- A modern web browser

## Installation and Running

1. Clone this repository to a directory of your choice.
2. Navigate to this directory in a terminal and enter "npm install" or simply run **install.sh** in the root directory.
3. Enter "npm run build" in the terminal or run **build.sh**.
4. Enter "npm run start" or run **run.sh**. The application should now be running; use Ctrl-C in the terminal to stop it.
5. Open your browser and go to [http://localhost:3000/](http://localhost:3000/).

Only steps 4-5 are required to run the application again after 1-3 have been run once.

## Security

Although Ncryptor runs in a web browser, it is designed to be a local application disconnected from the Internet. A web connection is not required to use it, and hosting it on a web server would be antithetical to its design, as Ncryptor is a tool for end-to-end encryption.
