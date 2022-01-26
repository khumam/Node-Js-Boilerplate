class HelloController {
  static async index(req, res, next) {
    var response = {
      'status': 200,
      'message': 'Hello World',
    }

    return res.status(200).json(response);
  }
}

module.exports = { HelloController }