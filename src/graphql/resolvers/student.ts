import { Resolver, Query, Mutation, Arg, InputType, Field, Args, ArgsType } from 'type-graphql';
import { StudentModel, Student } from '../../entities/student';

@InputType()
class StudentInput {
    @Field({ description: '姓名', nullable: false })
    public name!: string;

    @Field({ description: '性别', nullable: false })
    public sex!: string; // 考虑用enum

    @Field({ description: '年龄', nullable: false })
    public age!: number;

    @Field({ description: 'infoid', nullable: false })
    public info!: string;
}

@ArgsType()
class StudentArgs {
    @Field({ description: '姓名', nullable: true })
    public name?: string;

    @Field({ description: '性别', nullable: true })
    public sex?: string; // 考虑用enum

    @Field({ description: '年龄', nullable: true })
    public age?: number;

    @Field({ description: 'infoid', nullable: true })
    public info?: string;
}

@Resolver(Student)
export class StudentResolver {
    @Query(() => [Student], { nullable: true, description: '查询学生列表' })
    async students(@Args() args: StudentArgs) {
        // TODO args have to be required?
        return await StudentModel.find(args);
    }

    @Query(() => [Student], { nullable: true, description: '查询学生列表(带Info)' })
    async studentsWithInfo() {
        return await StudentModel.find({})
            .populate('info', 'hobby height weight')
            .exec();
    }

    @Mutation(() => Student)
    async saveStudent(@Arg('data') newStudent: StudentInput) {
        const student = new StudentModel(newStudent);
        const res = await student.save();
        return res;
    }
}
