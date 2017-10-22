## Dictionary-learner

### Desctiption
You opened up a dictionary to a page in the "middle" and started flipping through, looking for words you didn't know. You just put each word that you didn't know at increasing indices in a huge list. When you reached the end of the dictionary, you started from the beginning and did the same thing until you reached the page that you started at.

Well. Right now you have a list of words that are mostly alphabetical, except they start somewhere in the "middle" of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered list that has been "rotated". 

### TASK 
Write a function for finding the index of the "rotation point", which is where I started working from the beginning of the dictionary. This list is huge (there are lots of words you don't know) so we want to be EFFICIENT here.

### For example:

```js
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

findRotationPoint(words); // return 5
```

#### Write your code in `src/index.js`
#### Run test locally `npm test`
