import { prop, arrayProp, getModelForClass, Ref } from '@typegoose/typegoose';
import { Meta } from './meta';
import { updateTime } from '../utils/preSave';

export class Info {
    @arrayProp({ items: String })
    public hobby!: string[];

    @prop()
    public height!: string;

    @prop()
    public weight!: number;

    @prop({ ref: Meta })
    public meta!: Ref<Meta>;
}

export const InfoModal = getModelForClass(Info);

InfoModal.schema.pre('save', updateTime);
