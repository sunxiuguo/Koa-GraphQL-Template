import { Document } from 'mongoose';
import { HookNextFunction } from 'mongoose';

export function updateTime(this: Document, next: HookNextFunction) {
    if (this.isNew) {
        const now = Date.now();
        this.set({
            meta: {
                createdAt: now,
                updatedAt: now
            }
        });
    } else {
        this.set({
            meta: {
                updatedAt: Date.now()
            }
        });
    }
    next();
}
