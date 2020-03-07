import { prop } from '@typegoose/typegoose';

export class Meta {
    @prop({ default: Date.now() })
    public createdAt!: number;

    @prop({ default: Date.now() })
    public updatedAt!: number;
}
