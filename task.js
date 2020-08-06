import Todo from './models/task'

export default {
  create: (req, res) => {
    let todo = new Todo({
      name: req.body.name
    })

    todo.save((err, data) => {
      if(!err){
        return res.status(201).json({})
      }
      return res.status(500).json({
        status: false,
        data: {}
      })
    })
  }
}
