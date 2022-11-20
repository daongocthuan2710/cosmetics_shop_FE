function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const status_code = importAll(require.context('../status_code', false, /\.(png|jpe?g|svg|gif)$/));