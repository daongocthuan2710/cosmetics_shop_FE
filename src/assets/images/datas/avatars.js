function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  export const avatars = importAll(require.context('../avatars', false, /\.(png|jpe?g|svg|gif)$/));