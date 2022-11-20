function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const effects = importAll(require.context('../effects', false, /\.(png|jpe?g|svg|gif)$/));