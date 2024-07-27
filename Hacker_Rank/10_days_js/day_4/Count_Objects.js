
function countObjects(objects) {
    return objects.filter(obj => obj.x === obj.y).length;
}