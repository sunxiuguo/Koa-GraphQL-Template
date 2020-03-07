import { prop, arrayProp, getModelForClass, pre } from '@typegoose/typegoose';
import { Meta } from './meta';

@pre<Info>('save', function() {
    // 直接this.meta.xxx赋值会不生效
    this.meta = this.meta || {};
    if (this.isNew) {
        this.meta.createdAt = Date.now();
        this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
})
export class Info {
    @arrayProp({ items: String })
    public hobby!: string[];

    @prop()
    public height!: string;

    @prop()
    public weight!: number;

    @prop({ _id: false })
    public meta!: Meta; // 不生成_id
}

export const InfoModal = getModelForClass(Info);
