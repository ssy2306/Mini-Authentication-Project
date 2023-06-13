const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if(!email || !password){
      res.status(401).send({
        success: false,
        message: "Enter Valid Inputs"
      });
      return;
    }
    const user = await prisma.lu_user.findFirst({
      where: {
        email: email, 
        password: password
      },
    });

    if (!user) {
      res.status(401).send({
        success: false,
        message: "CREDENTIALS DON'T EXIST",
        data: req.body,
      });
      return;
    }else{
      //for creating a session into the memory storage
      req.session.user=user;
      console.log(req.session.user);
      res.status(200).send({
        success: true,
        message: "hewwo",
    });
  }
    
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal error ",
      data: error,
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = loginUser;
