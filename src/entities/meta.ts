import { prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Meta {
    @Field({ description: '创建时间' })
    @prop({ default: Date.now() })
    public createdAt!: number;

    @Field({ description: '更新时间' })
    @prop({ default: Date.now() })
    public updatedAt!: number;
}
