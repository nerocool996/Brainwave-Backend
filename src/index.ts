require('source-map-support').install();
import app from './App'


const port = 3000

 app.listen(port, (err:any) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
}) 