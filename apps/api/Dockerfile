# Estágio 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de configuração de dependências
COPY package.json package-lock.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/core/package.json ./packages/core/

# Instala dependências (incluindo dotenv e tsx que você adicionou)
RUN npm ci

# Copia o código fonte
COPY packages/core ./packages/core
COPY apps/api ./apps/api

# Build do core (dependência)
WORKDIR /app/packages/core
RUN npm run build

# Build do api
WORKDIR /app/apps/api
RUN npm run build

# Estágio 2: Runner (Produção)
FROM node:20-alpine AS runner

# Instala apenas dependências de produção se necessário, 
# mas aqui estamos copiando do builder para manter consistência.
ENV NODE_ENV=production

# --- MUDANÇA 1: Mantemos a estrutura, mas mudaremos o WORKDIR final ---
WORKDIR /app

USER node

# Copia node_modules da raiz (onde estão instalados)
COPY --from=builder --chown=node:node /app/node_modules ./node_modules

# Copia os pacotes construídos
COPY --from=builder --chown=node:node /app/packages/core/dist ./packages/core/dist
COPY --from=builder --chown=node:node /app/packages/core/package.json ./packages/core/

COPY --from=builder --chown=node:node /app/apps/api/dist ./apps/api/dist
COPY --from=builder --chown=node:node /app/apps/api/package.json ./apps/api/
# Precisamos da pasta scripts também se ela foi compilada para dist/scripts
# O tsc geralmente mantém a estrutura src/scripts -> dist/scripts, então já deve estar em dist.

# --- MUDANÇA 2: Definimos o diretório de trabalho para a pasta do api ---
# Isso permite que o 'npm start' encontre o package.json correto
WORKDIR /app/apps/api

# Variável para o Node encontrar módulos na raiz (/app/node_modules)
ENV NODE_PATH=../../node_modules

EXPOSE 3000

# --- MUDANÇA 3: Usamos npm start para rodar o seed:prod + server ---
CMD ["npm", "start"]