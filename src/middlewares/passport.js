import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import env from '../config/env';
import GlobalService from '../services/global';
// import config from '../config';
// import PasswordService from '../services/password';

/**
 * Jwt Setting
 */
const options = {
  secretOrKey: env.AppKey,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

/**
 * For admin login
 */
passport.use('admin', new LocalStrategy(async (username, password, callback) => {
  const admin = { username: 'mock', password: 'password' };
  // const admin = await AdminService.getAdminByName(username);
  // if (!admin) return callback({ status: 404, message: '找不到此管理者' }, false);
  // const passwordCheck = PasswordService.compareHash(password, admin.password);
  // if (!passwordCheck) return callback({ status: 400, message: '輸入的密碼有誤' }, false);
  return callback(null, admin);
}));

/**
 * For admin authenticate
 */
passport.use('adminJWT', new JwtStrategy(options, async (payload, callback) => {
  const status = GlobalService.calculateTokenTime(payload);
  if (!status) return callback({ status: 401, message: '請重新登入' }, false);
  return callback(null, payload);
}));

/**
 * For user login
 */
passport.use(new LocalStrategy(async (username, password, callback) => {
  const admin = { username: 'mock', password: 'password' };
  // const admin = await AdminService.getAdminByName(username);
  // if (!admin) return callback({ status: 404, message: '找不到此管理者' }, false);
  // const passwordCheck = PasswordService.compareHash(password, admin.password);
  // if (!passwordCheck) return callback({ status: 400, message: '輸入的密碼有誤' }, false);
  return callback(null, admin);
}));

/**
 * For user authenticate
 */
passport.use(new JwtStrategy(options, async (payload, callback) => {
  const status = GlobalService.calculateTokenTime(payload);
  if (!status) return callback({ status: 401, message: '請重新登入' }, false);
  return callback(null, payload);
}));

export default passport;
