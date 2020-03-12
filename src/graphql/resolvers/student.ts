import { Resolver, Query } from 'type-graphql';
import { StudentModel, Student } from '../../entities/student';

@Resolver(Student)
export class StudentResolver {
    @Query(() => [Student], { nullable: true, description: '查询学生列表' })
    async students() {
        return await StudentModel.find({});
    }
}
