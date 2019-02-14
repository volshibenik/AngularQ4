const { Observable } = require('rxjs');
/*
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

const listen = obr => {
  obr.next(1);
  obr.next(11);
  obr.next(111);
};

const kk = new Observable(listen);
kk.subscribe(d => console.log(d));

/* function evH(el, event) {
  return new Observable(obr => {
    const handler = e => obr.next(e);
    el.addEventListener(event, handler);

    return {
      unsubscribe() {
        // el.removeEventLis
      },
    };
  });
}

const key = 25;
const handler = evH('btn', 'kaydown');
handler.subscribe(e => {
  if ((e.keyKode = 25)) {
    'BAM';
  }
});
 */

function delayed(obr) {
  obr.next(1);
  setTimeout(() => {
    obr.next(2);
  }, 1000);
  setTimeout(() => {
    obr.next(3);
  }, 2000);
}
new Observable(delayed).subscribe(e => console.log(`${new Date()} ` + e));
