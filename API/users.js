const express = require("express");
const userRouter = express.Router();
const{ getUserById, getUser, getUsers, getUserByEmail, createUser, } = require ("../db");
const jwt = require("jsonwebtoken");

const { requireUser } = require("./utils");


userRouter.get("/", async (req, res) => {
    try {
        
        const results = await getUsers();
        res.send(results);
    } catch (err) {
        res.send({ err, message: "No bueno" });
    }
});

userRouter.get("/me", requireUser, (req, res)=>{
   
    res.send ("here is your account");
});




userRouter.post("/register", async (req, res, next)=> {
//     const result = await createUser (req.body);
// console.log("REQUEST BODY", req.body);
// res.send("user registered sucess");
// });

    const { firstname, lastname, email, password } = req.body;
    if (!email) {
        next({ name: "PasswordRequiredError", message: "Email not provided" });
        return;
    }
    if (!password) {
        next ({name: "Password Required Error", message: "Password not provided" });
        return;
    }
    //     res.send("email not provided");
    //     return;
    // }
    // if (!password) {
    //     res.send("Password Wrong");
    //     return;
    // }
    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            next({
                name: "ExistingUserError",
                message: "user already has registered with that email",
            });
            return;
        
          
            // res.send("user already registered");
            // return;
            // requestAnimationFrame;
        }
        const result = await createUser(req.body);
    if (result) {
        const token=jwt.sign({ id:result.id, email }, process.env.JWT_SECRET,{
            expiresIn:"1w",
    });
        console.log(token);
        res.send({

        message:"registration sucessful", token, 

        user: { id: result.id, firstname: result.firstname, lastname: result.lastname, email: result.email, 
    }, 

    
    });

    return;
} else { 
    next({
        name: "RegistrationError",
        message: "error registering, try later",
});
return;
}
} catch (err) {
    next(err);
}
});


// const JWT = require("jsonwebtoken");
//     console.log(result);
//     res.send("success");
//     } catch (err) {
//         res.send(err);
//       


    userRouter.post("/login", async (req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) {
            next({
                name: "MissingCredentialsError",
                message: "Please supply both email and password",
            });
        }
       
        try {
            const result = await getUser(req.body);
            if(result){
               const token = jwt.sign({ id: result.id, email },process.env.JWT_SECRET, {
                exiresIn: "1w",
               });
               res.send({message: "Login successful", token });
               
             } else {
                next({
                    name: "IncorrectCredentialsError",
                    message: "Username or password are incorrect",

                });
                // message: "error registering, try later",
            }
        } catch(err) {
            next(err);
        }
    });
            
  
            
    //         console.log(result);
    // res.send("You logged in successfully");
    //     } catch (err) {
    //         res.send("something went horribly wrong");
    //     }
    // });

    userRouter.get("/test", async (req, res, next)=> {
        try {
            resjson();
        } catch(err) {
            next(err);
        }
    });
    
    // userRouter.get ("/:id", async (req, res)=> {
    //     try{
    //         const { id } = req.params;
    //         const result = await getUserById(id);
    //         res.send(result);
    //     } catch(err){
    //         res.send({err, message:"something not good"});
    //     }
    //     });

  

   

module.exports = userRouter;

