import { Router } from 'express';
import { prisma } from '../index';
const router = Router();
router.post('/', async (req, res) => {
  try {
    const { donorId, itemType, quantity, location, availableTime } = req.body;
    const donation = await prisma.donation.create({ data: { donorId, itemType, quantity, location, availableTime } });
    res.status(201).json(donation);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
router.put('/:donationId/select-ngo', async (req, res) => {
  try {
    const { donationId } = req.params;
    const { ngoId } = req.body;
    await prisma.response.updateMany({ where: { donationId, NOT: { ngoId } }, data: { status: "Rejected" } });
    await prisma.response.updateMany({ where: { donationId, ngoId }, data: { status: "Accepted" } });
    const updated = await prisma.donation.update({ where: { id: donationId }, data: { status: "Accepted" } });
    res.json(updated);
  } catch (error) { res.status(500).json({ error: 'Failed' }); }
});
export default router;
