import { prop, getModelForClass, Ref, pre } from '@typegoose/typegoose';
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
export class Student {
    @prop()
    public name!: string;

    @prop()
    public sex!: string; // 考虑用enum

    @prop()
    public age!: number;

    @prop({ ref: Info })
    public info!: Ref<Info>;

    @prop({ _id: false })
    public meta!: Meta;
}

export const StudentModel = getModelForClass(Student);
