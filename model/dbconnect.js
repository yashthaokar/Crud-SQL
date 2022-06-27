const{DataTypes}=require("sequelize")
const Dbconnect=require("../sequelize")
let User;
const sequelize=Dbconnect("car","root","1234","localhost");
const asyncConnect=async()=>{
    try {await sequelize.authenticate();

        console.log("connected to my sql")
        
    } catch (error) {
        console.error("unable to conect my sql",error)
        
    }
}
asyncConnect()

User=sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
})
module.exports=User;