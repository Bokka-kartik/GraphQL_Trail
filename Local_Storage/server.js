const {ApolloServer}=require("@apollo/server")
const {what} =require("./Resolver")
const {Database}=require("./Schema");
const {startStandaloneServer} =require("@apollo/server/standalone")


const Trail=async()=>{
const server = new ApolloServer({
  typeDefs: Database,
  resolvers: what
});
    const {url}=await startStandaloneServer(server,{listen:{port:4000}})

    console.log(`what up man !!!! server is running on ${url}`);

}


Trail();