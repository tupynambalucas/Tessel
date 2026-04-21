# 📖 Plano Mestre do Tessel

## 1. Resumo Executivo
O Tessel é uma plataforma social espacial 3D de alta performance. Nosso objetivo é preencher a lacuna entre chats 2D simples e jogos 3D pesados, fornecendo um ambiente web-first de alta fidelidade para interação social.

## 2. Estratégia Técnica
### 2.1. Performance Web-First
Utilizamos **WebGPU** para trazer gráficos de nível desktop para o navegador. Ao usar **Three Shading Language (TSL)**, garantimos uma renderização preparada para o futuro que pode escalar entre dispositivos.

### 2.2. Arquitetura Autoritativa
Ao contrário de muitos jogos web, o Tessel utiliza um modelo de servidor autoritativo. O `@tessel/api` valida toda a física e mudanças de estado, garantindo uma experiência segura e sincronizada.

### 2.3. Assets Modulares
Nosso pacote `studio/` atua como um pipeline especializado, transformando assets de alta qualidade em recursos otimizados para web sem perder a fidelidade visual.

## 3. Fases de Implementação
### Fase 1: A Experiência do Personagem
Foco na sensação de movimento. Se mover-se for agradável, a base é sólida.
- Sincronização de movimento.
- Mistura de animações.
- Detecção de colisão.

### Fase 2: A Experiência Social
Foco na comunicação.
- Áudio espacial.
- Indicadores de presença.
- Descoberta de salas.

### Fase 3: A Experiência Criativa
Foco na retenção.
- Customização de salas.
- Objetos persistentes.
- Recursos sociais (Amigos, Perfis).

## 4. Métricas Chave
- **Latência**: Round-trip inferior a 50ms para movimento.
- **Performance**: 60fps constantes em dispositivos de médio porte via WebGPU.
- **Retenção**: Tempo médio de sessão para interação social.
