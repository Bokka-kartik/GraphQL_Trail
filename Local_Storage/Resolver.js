const Data = [
  {
    id: "1",
    name: "kartik",
    rollno: 25,
    student: false,
  }
];


const what = {
  Query: {
    Display: () => Data,
  },
  Mutation:{
    AddEmployee:(parent ,{id,name,rollno,student})=>{
        if(!id)
            {
            return "plz enter a id ";
        }
        const person ={id,name,rollno,student};
        Data.push(person);
        return "data has being added"; 
    }
  }
};


module.exports={what}