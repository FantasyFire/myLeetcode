function generateBTreeFromArray(a) {
    var root = {val: a[0], left: null, right: null}
    var queue = [root]
    var idx = 1
    while (queue.length && idx < a.length) {
        var head = queue.splice(0, 1)[0]
        if (a[idx] != undefined) {
            head.left = {val: a[idx], left: null, right: null}
            queue.push(head.left)
        }
        idx++
        if (a[idx] != undefined) {
            head.right = {val: a[idx], left: null, right: null}
            queue.push(head.right)
        }
        idx++
    }
    return root
}