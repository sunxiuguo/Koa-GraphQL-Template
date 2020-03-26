<div align="center">
    <img src="https://github.com/sunxiuguo/Awesome-Koa-Graphql/blob/master/preview.jpeg" width="100%" alt="preview"/>
</div>

# TypeScript and Koa Graphql Server Template

This is a koa graphql template build with typescript

## Include

-   Koa2
-   apollo-server-koa v2
-   graphQL(use type-graphql)
-   mongodb (use mongoose + typegoose as orm)
-   eslint
-   nodemon
-   prettier

## Getting Started

1. **install all dependencies**

    `yarn`

2. **install mongodb**

    `brew tap mongodb/brew`

    `brew install mongodb-community@4.2`

3. **start mongo service**

    `brew services start mongodb-community@4.2`

4. **start server**

    `yarn serve`

5. **visit graphql**

    `http://localhost:4000/graphql`

    5.1 try to create a mutation

    ```
    mutation {
        saveInfo(data: { hobby:["唱","跳","rap","篮球"], height:"165", weight: 100}){
            hobby
            height
            weight
        }
    }
    ```

    then you will see

    ![](https://user-gold-cdn.xitu.io/2020/3/26/171157c890f8e5e9?w=2860&h=846&f=png&s=40442)

    5.2 try to query

    ```
    query {
        #   students(age:22){
        #     sex
        #     name
        #     age
        #   }

        #   studentsWithInfo {
        #     sex
        #     name
        #     age
        #   }

        infos {
            _id
            height
            weight
            hobby
        }
    }
    ```

    then you will see

    ![](https://user-gold-cdn.xitu.io/2020/3/26/171157666f5e2c69?w=2872&h=1478&f=png&s=86976)
