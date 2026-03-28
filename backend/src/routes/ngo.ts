import { Router } from 'express';
import { prisma } from '../index';
const router = Router();
router.get('/profile/:ngoId', async (req, res) => {
  try {
    const ngo = await prisma.nGO.findUnique({ where: { id: req.params.ngoId }, include: { user: { select: { name: true, email: true } } } });
    res.json(ngo);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.get('/requests', async (req, res) => {
  try {
    const requests = await prisma.request.findMany({ where: { status: 'Pending' }, include: { needy: { select: { name: true } } } });
    res.json(requests);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.post('/requests/:requestId/accept', async (req, res) => {
  try {
    const { requestId } = req.params;
    const { ngoId } = req.body;
    const response = await prisma.response.create({ data: { requestId, ngoId, reason: "Accepted", beneficiariesCount: 0, status: "Accepted" } });
    await prisma.request.update({ where: { id: requestId }, data: { status: "InProgress" } });
    res.json({ message: 'Request accepted', response });
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.post('/broadcast/:requestId', async (req, res) => {
  res.json({ message: "Broadcasted successfully" });
});
export default router;
