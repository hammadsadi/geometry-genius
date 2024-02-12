//  Triangle
function triangleCalculate() {
  //   Triangle Base
  let triangleBase = document.getElementById("triangleBase");
  let triangleBaseValue = triangleBase.value;
  let base = parseFloat(triangleBaseValue);

  //   Triangle height
  let triangleHeight = document.getElementById("triangleHeight");
  let triangleHeightValue = triangleHeight.value;
  let height = parseFloat(triangleHeightValue);
  let trinagle = 0.5 * base * height;
  //   Result Show
  let itemResult = document.getElementById("item-result");
  itemResult.innerText = trinagle;
}
