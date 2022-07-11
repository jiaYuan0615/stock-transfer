import moment from 'moment';
import fs from 'fs';
import csv from 'csvtojson';
import { parse } from 'json2csv';
import path from 'path';

class StockService {
  /** retrun JSON object
   *
   * @returns {Object}
   */
  transferCsvToJson = async (time = moment().format('yyyy-MM-dd')) => {
    const targetPath = fs.readdirSync(path.resolve(__dirname, `../storage/unTransfer/${time}.csv`))
    const target = fs.readFileSync(targetPath);
    const data = csv().fromFile(target);
    return data
  }

  /** return csv
   *
   * @param {Array} data
   * @returns {string}
   */
  transferJsonToCsv = async (data) => {
    const file = parse(data)
    const time = moment().format('yyyy-MM-dd');
    const storePath = path.resolve(__dirname, `../storage/transfer/${time}.csv`)
    fs.writeFileSync(storePath, file);
    return storePath;
  }
}

export default new StockService();
