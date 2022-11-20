function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const sliders = importAll(require.context('../sliders', false, /\.(png|jpe?g|svg|gif)$/));