import transform from '../src/transform'

describe('netiam-contrib', () => {

  it('should transform res.body array', () => {
    const plugin = transform((req, res) => {
      res.body = res.body.map(n => n * n)
    })
    const req = {}
    const res = {
      body: [1, 2, 3]
    }
    plugin(req, res)

    res.body.should.eql([1, 4, 9])
  })

})
