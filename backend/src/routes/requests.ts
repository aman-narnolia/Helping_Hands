import { Router } from 'express';
import { prisma } from '../index';
const router = Router();
router.post('/', async (req, res) => {
  try {
    const { needyId, type, description, location } = req.body;
    const request = await prisma.request.create({ data: { needyId, type, description, location } });
    res.status(201).json(request);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.put('/:requestId/complete', async (req, res) => {
  try {
    const { requestId } = req.params;
    const updated = await prisma.request.update({ where: { id: requestId }, data: { status: "Completed" } });
    res.json(updated);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
export default router;
