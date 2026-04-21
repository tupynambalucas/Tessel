import fp from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';
import { Worker } from 'bullmq';
import { connection } from '../config/queueConfig.js';

interface QueuePluginOptions {}

const queuePlugin: FastifyPluginAsync<QueuePluginOptions> = async (server, opts) => {
  worker.on('completed', (job) => {
    server.log.info(`[Queue] Job ${job.id} completado.`);
  });

  worker.on('failed', (job, err) => {
    server.log.error(err, `[Queue] Job ${job?.id} falhou.`);
  });

  const scheduleJobs = async () => {};

  await scheduleJobs();

  server.addHook('onClose', async () => {
    await worker.close();
    await cycleQueue.close();
  });
};

export default fp(queuePlugin);
