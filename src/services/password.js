import bcrypt from 'bcrypt';

class PasswordService {
  /** hash Password
   *
   * @param {string} password
   * @returns {string}
   */
  hashPassword = (password) => {
    const salt = 10;
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  /** compare password
   *
   * @param {string} plain
   * @param {string} hash
   * @returns {boolean}
   */
  compareHash = (plain, hash) => bcrypt.compareSync(plain, hash);
}

export default new PasswordService();
