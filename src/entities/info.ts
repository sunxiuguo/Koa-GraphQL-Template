import { prop, arrayProp, getModelForClass, pre } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { Meta } from './meta';

@pre<Info>('save', function() {
    // 直接this.meta.xxx赋值会不生效
    this.meta = this.meta || {};
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
})
@ObjectType()
export class Info {
    @Field({ description: 'id' })
    public _id?: string;

    @Field(() => [String], { description: '爱好' })
    @arrayProp({ items: String })
    public hobby!: string[];

    @Field({ description: '身高' })
    @prop()
    public height!: string;

    @Field({ description: '体重' })
    @prop()
    public weight!: number;

    @Field(() => Meta, { description: '时间', nullable: true })
    @prop({ _id: false })
    public meta!: Meta; // 不生成_id
}

export const InfoModal = getModelForClass(Info);
