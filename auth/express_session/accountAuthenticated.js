const accountAuthenticated = async (req, res, next) => {
    try {
      if (req.session.account || req.session.user) {
        // console.log("account exists")
        next();
      } else {
        res
          .status(401)
          .send({ success: false, message: "ACCOUNT NOT AUTHENTICATED" });
      }
    } catch (error) {
      res
        .status(500)
        .send({
          success: false,
          message: "ACCOUNT NOT AUTHENTICATED",
          error: error,
        });
    }
  };
  //checks whether the session contains account or not.
  //if present , continues to go to the next middleware
  module.exports = accountAuthenticated;