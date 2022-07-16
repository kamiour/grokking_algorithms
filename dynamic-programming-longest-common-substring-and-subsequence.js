function initGrid(word1Length, word2Length) {
  const resultGrid = [];

  for (let i = 0; i < word1Length; i++) {
    resultGrid[i] = Array(word2Length).fill(0);
  }

  return resultGrid;
}

function findLongestCommonSubstring(word1, word2) {
  let longestSubstring = '';

  const resGrid = initGrid(word1.length, word2.length);

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        const prevDiagonalValue = (resGrid[i - 1] && resGrid[i - 1][j - 1]) || 0;

        resGrid[i][j] = prevDiagonalValue + 1;

        if (resGrid[i][j] === 1) {
          // new substring marker
          longestSubstring += '|';
        }

        longestSubstring += word1[i];
      }
    }
  }

  return longestSubstring
    .split('|')
    .sort((a, b) => a.length - b.length)
    .pop();
}

function findLongestSubsequence(word1, word2) {
  let longestSubsequence = '';

  const resGrid = initGrid(word1.length, word2.length);

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        const prevDiagonalValue = (resGrid[i - 1] && resGrid[i - 1][j - 1]) || 0;

        resGrid[i][j] = prevDiagonalValue + 1;
        longestSubsequence += word1[i];
      } else {
        const valueOnTheLeft = (resGrid[i - 1] && resGrid[i - 1][j]) || 0;
        const valueOnTheTop = (resGrid[i] && resGrid[i][j - 1]) || 0;

        resGrid[i][j] = Math.max(valueOnTheLeft, valueOnTheTop);
      }
    }
  }

  return longestSubsequence;
}

findLongestCommonSubstring('blue', 'clues'); // lue
findLongestCommonSubstring('fish', 'fosh'); // sh

findLongestSubsequence('blue', 'clues'); // lue
findLongestSubsequence('fish', 'fosh'); // fsh
