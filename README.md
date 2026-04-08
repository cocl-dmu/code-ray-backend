# code-ray-server

NestJS monorepo skeleton for the Code Ray backend.

## Commands

```bash
npm install
npm run build
npm run start:api:dev
npm run start:worker:dev
npm run test
npm run test:e2e
npm run test:integration
```

## Local Infra

```bash
docker compose up -d
```

Required services: PostgreSQL, Redis, RabbitMQ.
