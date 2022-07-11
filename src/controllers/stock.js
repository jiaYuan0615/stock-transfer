import _ from 'lodash';
import moment from 'moment';
import StockService from '../services/stock';

class StockController {
  getStock = async (req, res) => {
    const today = moment().format('yyyy-MM-dd');
    const { time, column } = req.query;
    let file;
    const payload = [];
    try {
      file = time ?
        StockService.transferCsvToJson(time) :
        StockService.transferCsvToJson();

      file.map((v, i) => {
        // filter column with target csv
        _.filter(Object.keys(v), column)
      })

      const data = StockService.transferJsonToCsv(payload);
      res.status(200).sendFile(data)

    } catch (error) {
      res.status(400).json({ message: '轉換檔案失敗', error })
    }
  }
}

export default new StockController();
