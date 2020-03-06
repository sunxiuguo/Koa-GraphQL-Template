import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Info } from './info';
import { Meta } from './meta';
import { updateTime } from '../utils/preSave';

export class Student {
    @prop()
    public name!: string;

    @prop()
    public sex!: string; // 考虑用enum

    @prop()
    public age!: number;

    @prop({ ref: Info })
    public info!: Ref<Info>;

    @prop({ ref: Meta })
    public meta!: Ref<Meta>;
}

export const StudentModel = getModelForClass(Student);

StudentModel.schema.pre('save', updateTime);
