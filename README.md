# Restaurant Reservations API (NestJS)

## Ejecutar
```bash
npm install
npm run start:dev
```
Servidor en http://localhost:3000

## Pruebas (curl)
```bash
# 1. Válido con API key
curl -X POST localhost:3000/reservations -H "Content-Type: application/json" -H "x-api-key: restaurant-secret" -d '{"customerName":"Cesar Vega","email":"Cesarvega@gmail.com","people":4}'

# 2. Sin API key -> 403
curl -X POST localhost:3000/reservations -H "Content-Type: application/json" -d '{"customerName":"Cesar Vega","email":"Cesarvega@gmail.co","people":4}'
# 3. Datos inválidos -> 400

curl -X POST localhost:3000/reservations -H "Content-Type: application/json" -H "x-api-key: restaurant-secret" -d '{"customerName":"","email":"esto-no-es-un-email","people":0}'
# 4. Excepción provocada -> error uniforme

curl localhost:3000/reservations/error-test
# GET público

curl localhost:3000/reservations
```
