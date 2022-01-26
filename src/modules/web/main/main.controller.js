class MainController {
  static async index(req, res, next) {
    return res.render('main/index.pug');
  }
}

module.exports = { MainController }