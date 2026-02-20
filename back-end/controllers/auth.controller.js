import db from "../models/index.js"
const User = db.User


// signup 

export const signup = async (req, res) => {
    try {
        const { username, email, passwordHash } = req.body;
        const user = await User.create({ username, email, passwordHash });

        res.status(201).json({ message: 'Usuario creado', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// login

export const login = async (req, res) => {
    try {
        const { email, passwordHash } = req.body;
        const user = await User.find({ email, passwordHash });

        if (!user) {

      res.json({ message: 'email or password incorrect' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// logout

export const logout = (req, res) => {
    try {
        res.redirect("/login")
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};