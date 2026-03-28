import { Router } from 'express';
import { prisma } from '../index';
const router = Router();
router.get('/:userId', async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({ where: { userId: req.params.userId }, orderBy: { createdAt: 'desc' } });
    res.json(notifications);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.post('/:notificationId/read', async (req, res) => {
  try {
    const { notificationId } = req.params;
    const updated = await prisma.notification.update({ where: { id: notificationId }, data: { isRead: true } });
    res.json(updated);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
export default router;
