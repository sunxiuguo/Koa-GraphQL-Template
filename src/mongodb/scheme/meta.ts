import { prop } from '@typegoose/typegoose';

export class Meta {
    @prop({ default: Date.now() })
    public createdAt!: Date;

    @prop({ default: Date.now() })
    public updatedAt!: Date;
}
