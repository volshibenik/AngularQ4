/* const { Observable } = require("rxjs")

function inter(v) {
  return new Observable(obr => {
    let n = 0;
    const interval = setInterval(() => {
      n++
    }, v)

    return {
      unsubscribe() {
        clearInterval(interval)
      }
    }
  }
  )
}


 */
