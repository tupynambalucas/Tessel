# @tessel/api - API & Authoritative Server

Authoritative server for the Tessel game, developed with Fastify 5 and Mongoose. It manages the game state, physics validation, and real-time room orchestration.

## 🛠 Technology Stack

- **Runtime**: Node.js v20+
- **Framework**: [Fastify v5](https://www.fastify.io/)
- **Database**: MongoDB (Mongoose)
- **Cache**: Redis (IORedis)
- **Physics**: Rapier (Server-side validation)
- **Queues**: BullMQ
- **Validation**: Zod (Type Provider integration)

## 📂 Architecture

Following **Domain-Driven Design (DDD)** and the **Controller-Service-Repository** pattern:

- `src/config/`: Global configurations (Env, Database, Fastify).
- `src/domains/`: Business logic modules (Auth, Rooms, Players).
- `src/models/`: Persistence schemas.
- `src/plugins/`: Fastify ecosystem integration (Security, Sessions, Sentry).
- `src/scripts/`: Automation and maintenance tools.

## 🚀 Key Features

- **Authoritative Rooms**: Centralized state management for multiplayer synchronization.
- **Server-side Physics**: Physics validation to prevent cheating.
- **Spatial Voice Orchestration**: Management of voice chat instances.
- **Scalable Infrastructure**: Ready for multi-instance scaling via Redis.

## 🚦 Operation

- `npm run dev`: Start server in development mode.
- `npm run build`: Transpile TypeScript to `dist/`.
- `npm run start`: Execute compiled server.
- `npm run seed`: Populate database with initial data.

---
*Game Server & Logic Hub - Tessel*
