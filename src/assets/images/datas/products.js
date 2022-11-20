function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const products = importAll(require.context('../products', false, /\.(png|jpe?g|svg|gif)$/));