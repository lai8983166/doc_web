// src/types/express.d.ts
import { User } from '../models/User'; // 导入 User 模型，如果你没有导入，可以跳过

declare global {
  namespace Express {
    interface Request {
      user?: User; // 扩展 Request 类型，添加 user 属性，类型可以根据实际情况调整
    }
  }
}
