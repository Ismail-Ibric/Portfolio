# Portfolio [(source)](https://github.com/sonnysangha/Resume-Portfolio-Starter-pack)

![Imgur](https://i.imgur.com/qVLyvos.png)

A live Demo can be found here: [https://izzys.work](https://izzys.work)

## Details

Frameworks/Libraries used are

React.js
  -
  - Fetch used to get JSON data to populate all sections
  - useState() hook used for states
  - useEffect() hook used for loading data

GitHub Actions
  -
  - On every `git push` an [Action](https://github.com/Ismail-Ibric/Portfolio/blob/main/.github/workflows/rebuild-on-izzys-work.yml) calls an api, runs `git clone` CLI with a already setup private key, redeloying this Portfolio.
  - Project Source: [https://github.com/Ismail-Ibric/reAction](https://github.com/Ismail-Ibric/reAction)