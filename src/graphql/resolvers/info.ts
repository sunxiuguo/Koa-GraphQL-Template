import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';
import { InfoModal, Info } from '../../entities/info';

@InputType()
class InfoInput {
    @Field(() => [String], { description: '爱好' })
    public hobby!: string[];

    @Field({ description: '身高' })
    public height!: string;

    @Field({ description: '体重' })
    public weight!: number;
}

@Resolver(Info)
export class InfoResolver {
    @Query(() => [Info], { nullable: true, description: '查询信息列表' })
    async infos() {
        return await InfoModal.find({}).sort('-meta.createdAt');
    }

    @Mutation(() => Info)
    async saveInfo(@Arg('data') newInfo: InfoInput) {
        const info = new InfoModal(newInfo);
        return await info.save();
    }

    @Mutation(() => Number, { nullable: true })
    async removeAllInfo() {
        const res = await InfoModal.deleteMany({ weight: { $gte: 0 } });
        return res.deletedCount || 0;
    }
}
