import { Router } from 'express';
import { getUsers, getUser, createNewUser, updateUserInfo, removeUser,loginUser } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createNewUser);
router.put('/users/:id', updateUserInfo);
router.delete('/users/:id', removeUser);
router.post('/login', loginUser);
export default router;
