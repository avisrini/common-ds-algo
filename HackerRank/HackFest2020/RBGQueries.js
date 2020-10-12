const colors = [
  [1, 3, 5],
  [5, 3, 1],
];
const queries = [
  [5, 3, 5],
  [3, 3, 3],
];

function mixColors(colors, queries) {
  let res = [];
  const numC = colors.length;
  const numQ = queries.length;
  const colorsJSON = JSON.stringify(colors);

  // console.log(JSON.stringify(colors));
  // console.log(JSON.stringify(queries));
  let sortedColors = [...colors];
  sortedColors.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < numQ; i++) {
    let query = queries[i];
    console.log("Query: " + i);
    console.log(query);
    // Check if query is an existing color
    if (colorsJSON.includes(JSON.stringify(query))) {
      res.push("YES");
    } else {
      // Check if query r, b, g values exist in any color
      let rFlag = false;
      let bFlag = false;
      let gFlag = false;
      let querySum = query.reduce((a, b) => a + b);
      for (let color of sortedColors) {
        // Check color rgb sum > query rgb sum
        let colorSum = color.reduce((a, b) => a + b);
        if (colorSum > querySum) {
          continue;
        }
        if (color[0] === query[0]) rFlag = true;
        if (color[1] === query[1]) bFlag = true;
        if (color[2] === query[2]) gFlag = true;
      }
      if (rFlag && bFlag && gFlag) {
        // Check if filtering through r -> b -> g has atleast one color
        let cr = [];
        for (let i = 0; i < sortedColors.length; i++) {
          if (sortedColors[i][0] <= query[0]) {
            cr.push(sortedColors[i]);
          } else {
            break;
          }
        }
        console.log(cr);
        cr.sort((a, b) => a[1] - b[1]);
        let cb = [];
        for (let i = 0; i < cr.length; i++) {
          if (cr[i][1] <= query[1]) {
            cb.push(cr[i]);
          } else {
            break;
          }
        }
        console.log(cb);
        cb.sort((a, b) => a[2] - b[2]);
        let cg = [];
        for (let i = 0; i < cb.length; i++) {
          if (cb[i][2] <= query[2]) {
            cg.push(cb[i]);
          } else {
            break;
          }
        }
        console.log(cg);
        cg.length ? res.push("YES") : res.push("NO");
      } else {
        console.log("flag check failed");
        res.push("NO");
      }
    }
  }
  return res;
}

console.log(mixColors(colors, queries));
