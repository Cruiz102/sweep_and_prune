function sortParticles(values, objects){
    if (values.length > 1){
        var mid = Math.floor(values.length / 2);
        var left = values.slice(0, mid);
        var right = values.slice(mid);
        var leftObjects = objects.slice(0, mid);
        var rightObjects = objects.slice(mid);
        var ml = sortParticles(left, leftObjects);
        var mr = sortParticles(right, rightObjects);
        right = mr[0];
        left = ml[0];
        rightObjects = mr[1];
        leftObjects = ml[1];
    
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            values[k] = left[i];
            objects[k] = leftObjects[i];
            i++;
        } else {
            values[k] = right[j];
            objects[k] = rightObjects[j];
            j++;
        }
        k++;
    }
    while (i < left.length){
        values[k] = left[i];
        objects[k] = leftObjects[i];
        i++;
        k++;
    }
    while (j < right.length){
        values[k] = right[j];
        objects[k] = rightObjects[j];
        j++;
        k++;
    }
}
return [values, objects];
}
