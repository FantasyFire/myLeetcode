/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 *
 * https://leetcode-cn.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (40.69%)
 * Total Accepted:    2.5K
 * Total Submissions: 6.1K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * ⁠ ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * 输出: 6
 * 
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    var i, j, max, count;
    var row = matrix.length, col = matrix.length != 0 && matrix[0] != undefined ? matrix[0].length : 0;
    for (i = 0; i < row; i++) {
        count = 0;
        for (j = 0; j < col; j++) {
            if (matrix[i][j] == 1) matrix[i][j] = matrix[i][j] * 1 + count++;
            else count = 0;
        }
    }
    console.log(matrix.map(i=>i.map(j=>j*1)));
    max = 0;
    for (j = col-1; j >= 0; j--) {
        for (i = row-1; i >= 0; i--) {
            var oldi = i, w = matrix[i][j], h = 1;
            if (w * h > max) max = w * h;
            if (w != 0) {
                while (i > 0 && matrix[i-1][j] != 0) {
                    if (w >= matrix[i-1][j]) {
                        w = matrix[i-1][j];
                    }
                    i--;
                    h++;
                    if (w * h > max) max = w * h;
                }
                if (w * h > max) max = w * h;
            }
            i = oldi;
        }
    }
    return max;
};

