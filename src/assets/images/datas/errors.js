function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const errors = importAll(require.context('../errors', false, /\.(png|jpe?g|svg|gif)$/));