import passport from 'passport';
import localStrategy from 'passport-local';
import {
    Strategy as JWTStrategy,
    ExtractJwt
} from 'passport-jwt';
import Status from 'http-status';

import User from '../models/user/user.model';
import config from '../config/config';

//! Local Strategy
const localStrat = new localStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({
            email
        });

        if (!user) {
            return done(null, false);
        } else if (!user._authenticate(password)) {
            return done(null, false)
        }

        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

//! JWT Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET
};

const jwtStrat = new JWTStrategy(jwtOptions, async (payload, done) => {
    try {
        if (!payload._id) {
            return done(null, false);
        }

        const user = await getUserFromPayload(payload);

        if (!user) {
            return done(null, false);
        }

        if (user)

            return done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

//! Admin JWT Strategy

const adminJwtStrat = new JWTStrategy(jwtOptions, async (payload, done) => {
    try {
        if (!payload._id) {
            return done(null, false);
        }

        const user = await getUserFromPayload(payload);

        if (!user) {
            return done(null, false);
        }

        const isAdmin = await user._isAdmin();

        if (!isAdmin) {
            return done(null, false)
        };

        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

passport.use(localStrat);
passport.use(jwtStrat);
passport.use('adminJwt', adminJwtStrat);

export const authLocal = passport.authenticate('local', {
    session: false
});
export const authJWT = passport.authenticate('jwt', {
    session: false
});
export const isAdmin = passport.authenticate('adminJwt', {
    session: false
});



async function getUserFromPayload(payload) {
    return await User.findById(payload._id, 'username email roles');
}