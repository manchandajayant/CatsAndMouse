//Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.



function catAndMouse(x, y, z) {
   if (y - x === z) {
    return "Mouse C";
  } else if (y - z > x - z) {
    return "Cat B";
  } else if (x - z > y - z) {
    return "Cat A";
  }

}