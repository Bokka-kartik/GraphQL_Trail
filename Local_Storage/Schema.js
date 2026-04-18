const Database=`#graphql

type Employee{
 id:ID!
 name:String!
 rollno:Int
 student:Boolean}
 
 type Query {
  Display:[Employee!]!}

  type Mutation {
   AddEmployee(
   id:ID!
   name:String
   rollno:Int
   student:Boolean):String
  }
 `
 module.exports={Database};