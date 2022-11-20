function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const headers = importAll(require.context('../headers', false, /\.(png|jpe?g|svg|gif)$/));