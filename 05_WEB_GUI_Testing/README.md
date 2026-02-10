# 05 Web GUI Testing

1. Käynnistä API.

```sh
cd 05_WEB_GUI_Testing/backend
npm install
npm start
```

2. Avaa käyttöliittymä.

Avaa `05_WEB_GUI_Testing/frontend/index.html` selaimessa.

## API

- `GET /api/rgb-to-hex?r=64&g=128&b=192`
- `GET /api/hex-to-rgb?hex=%23ff8800`

## Testaus

Manuaaliset testit löytyvät: `05_WEB_GUI_Testing/tests/manual_test_cases.md`.

Yksinkertainen API‑smoketestiskripti: `05_WEB_GUI_Testing/tests/api_smoke.sh`
