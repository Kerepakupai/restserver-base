
class CheckController {
  status (req, res) {
    res.json({
      statusCode: 200,
      data: [],
      message: 'server ok'
    })
  }
}

module.exports = CheckController
