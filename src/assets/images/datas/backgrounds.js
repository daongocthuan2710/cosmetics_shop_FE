function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const backgrounds = importAll(require.context('../backgrounds', false, /\.(png|jpe?g|svg|gif)$/));