import { prop, getModelForClass, Ref, pre } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { Info } from './info';
import { Meta } from './meta';

@pre<Student>('save', function() {
    // 直接this.meta.xxx赋值会不生效
    this.meta = this.meta || {};
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now();
    } else {
        this.meta.updatedAt = Date.now();
    }
})
@ObjectType()
export class Student {
    @Field({ description: 'id' })
    public _id?: string;

    @Field({ description: '姓名' })
    @prop()
    public name!: string;

    @Field({ description: '性别' })
    @prop()
    public sex!: string; // 考虑用enum

    @Field({ description: '年龄' })
    @prop()
    public age!: number;

    @Field(() => Info, { description: 'infoid' })
    @prop({ ref: Info })
    public info!: Ref<Info>;

    @Field(() => Meta, { description: '时间' })
    @prop({ _id: false })
    public meta!: Meta;
}

export const StudentModel = getModelForClass(Student);
