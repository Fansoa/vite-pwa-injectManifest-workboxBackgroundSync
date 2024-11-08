
### Contexte
En ce moment, je travaille sur un projet de création de PWA, avec l'environnement VITE PWA. (ReactTS)

Pour le build j'ai opté pour la méthode [injectManifest](https://vite-pwa-org.netlify.app/workbox/inject-manifest.html), et je me sers de [Workbox](https://developer.chrome.com/docs/workbox) pour m'aider à gérer les service workers.

### But
Je souhaite pouvoir stocker les requêtes envoyées par l'utilisateur car celui-ci sera mobile et n'aura pas toujours accès au réseau.

### Mon problème

fichier important du repo à regarder: `App.tsx`, `sw.ts`

Lorsque je coupe le Wifi de mon ordinateur pour simuler l'envoi de requête HTTP de type POST hors-ligne, la requête est bien stocké dans l'indexedDB mais celle-ci n'est pas rappelé une fois le réseau à nouveau disponible

Voila pourquoi j'ai hébergé mon serveur express: DO NOT USE CHROME DEVTOOLS OFFLINE. The offline checkbox in DevTools only affects requests from the page. Service Worker requests will continue to go through.

### Liens utiles
Je me suis basé sur cette documentation: https://developer.chrome.com/docs/workbox/retrying-requests-when-back-online?hl=fr


### Pour Tester: 
- `npm run build`
- `npm run preview`

### Code de mon serveur express hébergé

```javascript
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({allowedHeaders: ['Content-Type']}));

// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.json(req.body)
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
