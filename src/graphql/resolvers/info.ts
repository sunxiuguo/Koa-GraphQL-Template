import { Resolver, Query } from 'type-graphql';
import { InfoModal, Info } from '../../entities/info';

@Resolver(Info)
export class InfoResolver {
    @Query(() => [Info], { nullable: true, description: '查询信息列表' })
    async infos() {
        return await InfoModal.find({});
    }
}
