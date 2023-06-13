const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signUp = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone_number = req.body.phone_number;
  try {

    if(!email || !password || !name){
        res.status(401).send({
          success: false,
          message: "Enter Required Fields"
        });
        return;
      }

    const user = await prisma.lu_user.findFirst({
      where: {
        email: email, 
        password: password
      },
    });

    if (user) {
      res.status(401).send({
        success: false,
        message: "User Exits, Try Logging In",
        data: req.body,
        
      });
      return;
    }else{
     
        const created_user= await prisma.lu_user.create({
            data: {
                name : name,
                email: email,
                password: password,
                phone_number: phone_number
            }
        });
        req.session.user=created_user;
        res.status(200).send({
            success: true,
            message: "Signed Up successfully"
        });
  }
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal error ",
      data: error,
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = signUp;
