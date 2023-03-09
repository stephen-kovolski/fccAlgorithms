/*
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/


function findNeedle(haystack) {
    
    position = haystack.indexOf('needle')
    console.log(`found the needle at position ${position}`)

  }

  findNeedle(['needle', 'hay', 'junk', 'hay', 'hay', 'moreJunk',  'randomJunk'])
  findNeedle([ 'hay', 'needle','junk', 'hay', 'hay', 'moreJunk',  'randomJunk'])
  findNeedle(['hay', 'junk', 'hay', 'needle', 'hay', 'moreJunk',  'randomJunk'])
  findNeedle(['hay', 'junk', 'needle','hay', 'hay', 'moreJunk',  'randomJunk'])
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk',  'randomJunk','needle'])
  findNeedle(['hay', 'needle','junk', 'hay', 'hay', 'moreJunk',  'randomJunk'])
  findNeedle(['hay', 'junk', 'hay', 'hay', 'needle','moreJunk',  'randomJunk'])
