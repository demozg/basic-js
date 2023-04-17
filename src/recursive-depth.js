/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depthCalc = 0) {
    if (!Array.isArray(arr)) return depthCalc;
    arr.forEach(item => {
      depthCalc = Math.max(depthCalc, this.calculateDepth(item))
    })
        
    return depthCalc + 1;
  }
}

module.exports = {
  DepthCalculator
};