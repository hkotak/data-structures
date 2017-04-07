# JavaScript Data Structures and Algorithms

I put this repo together to get ready for technical interviews. I hope it helps you get ready for your next big technical interview. IF you like what you see plz give it a star. Also, feel free to contribute :D

## What is an algorithm?

```
Informally, an algorithm is any well-defined computational procedure that takes
some value, or set of values, as input and produces some value, or set of values, as
output. An algorithm is thus a sequence of computational steps that transform the
input into the output.

Source: Thomas H. Cormen, Chales E. Leiserson (2009), Introduction to Algorithms 3rd edition.
```

In simple terms, it is possible to say that an algorithm is a sequence of steps which allow to solve a certain task ( Yes, not just computers use algorithms, humans also use them). Now, an algorithm should have three important characteristics to be considered valid:

1. **It should be finite:** If your algorithm never ends trying to solve the problem it was designed to solve then it is useless

1. **It should have well defined instructions:** Each step of the algorithm has to be precisely defined; the instructions should be unambiguously specified for each case.

1. **It should be effective:** The algorithm should solve the problem it was designed to solve. And it should be possible to demonstrate that the algorithm converges with just a paper and pencil.

## Getting Started

1. Run `npm install`
1. Run `npm test` to run all of the algorithms

This repo is a collection of common data structures, and alogirthims you might encounter in an interview. This repo covers the following topics:

* [Array](https://github.com/JoeKarlsson/data-structures/tree/master/array)
* [Binary Heap](https://github.com/JoeKarlsson/data-structures/tree/master/binary-heap)
* [Binary Search Trees](https://github.com/JoeKarlsson/data-structures/tree/master/binary-search-tree)
* [Bitwise](https://github.com/JoeKarlsson/data-structures/tree/master/bitwise)
* [Graph Traversing](https://github.com/JoeKarlsson/data-structures/tree/master/graph-traversing)
  * [Breadth First Search](https://github.com/JoeKarlsson/data-structures/blob/master/graph-traversing/breadth-first-search.js)
  * [Depth First Search](https://github.com/JoeKarlsson/data-structures/blob/master/graph-traversing/depth-first-search.js)
* [Graph Node](https://github.com/JoeKarlsson/data-structures/tree/master/graph)
* [Hash Table](https://github.com/JoeKarlsson/data-structures/tree/master/hash-table)
* [Linked Lists](https://github.com/JoeKarlsson/data-structures/tree/master/linked-list)
* [Memoization](https://github.com/JoeKarlsson/data-structures/tree/master/memoization)
* [Queue](https://github.com/JoeKarlsson/data-structures/tree/master/queue)
  * [Prioroty Queue](https://github.com/JoeKarlsson/data-structures/blob/master/queue/priorityQueue.js)
  * [Queue](https://github.com/JoeKarlsson/data-structures/blob/master/queue/queue.js)
* [Shortest Path](https://github.com/JoeKarlsson/data-structures/tree/master/queue)
  * [A*](https://github.com/JoeKarlsson/data-structures/blob/master/shortest-path/aStar.js)
  * [Dijkstra](https://github.com/JoeKarlsson/data-structures/blob/master/shortest-path/dijkstra.js)
* [Sorting](https://github.com/JoeKarlsson/data-structures/tree/master/sorting-algorithms)
  * [Bubble Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting-algorithms/bubblesort.js)
  * [Insertion Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting-algorithms/insertionsort.js)
  * [Merge Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting-algorithms/mergesort.js)
  * [Quick Sort (duh)](https://github.com/JoeKarlsson/data-structures/blob/master/sorting-algorithms/quicksort.js)
  * [Selection Sort](https://github.com/JoeKarlsson/data-structures/blob/master/sorting-algorithms/selectionsort.js)
* [Stack](https://github.com/JoeKarlsson/data-structures/tree/master/stack)
* [Tree Node](https://github.com/JoeKarlsson/data-structures/tree/master/tree)
* [Trie](https://github.com/JoeKarlsson/data-structures/tree/master/trie)


An algorithm is a self-contained step-by-step set of operations to be performed. Algorithms perform calculation, data processing, and/or automated reasoning tasks.

"Elegant" (compact) programs, "good" (fast) programs : The notion of "simplicity and elegance" appears informally in Knuth and precisely in Chaitin:

Knuth: ". . .we want good algorithms in some loosely defined aesthetic sense. One criterion . . . is the length of time taken to perform the algorithm . . .. Other criteria are adaptability of the algorithm to computers, its simplicity and elegance, etc"

Chaitin: " . . . a program is 'elegant,' by which I mean that it's the smallest possible program for producing the output that it does"

### TODO:
- Floyd-Warshall
- Traveling Salesman
- bloom filter
- binary search
- k-way merge
- Tries
- Plagiarism detection, using Rabin Karp String matching
  - String matching algorithms are pervasive in software. One particularly fun one, is Rabin Karp, which is used in Plagiarism detection. As a student in CS (or in any major), plagiarism detection should be of interest ;-)
Rabin Karp is relatively easy to implement. See this: Rabin–Karp algorithm - Wikipedia
Rabin Karp has also inspired a string matching routine in Zlib (one of the most popular un/zip libraries ever). See this, directly into the source code.
- Matching users to servers, using Gayle-Shapely Algorithm for Stable Marriage problem
  -This is a beautiful algorithm for fair matching. Simple, elegant and effective. In its core form, it’s also straightforward to implement. Has numerous applications. See: Stable marriage problem - Wikipedia
- A toy implementation of Viterbi algorithm
  - Ubiquitous in cell phone technology, and many other applications, Viterbi algorithm is a Dynamic Programming based algorithm that finds the most likely sequence of states. See this toy implementation: http://homepages.ulb.ac.be/~dgon...
- Music Search using Fast Fourier Transforms (FFT)
  - Music recognition is done by converting it into frequency domain using FFT. FFT has implementations in number of languages. See this article for a great start: Shazam It! Music Recognition Algorithms, Fingerprinting, and Processing.
- Implement RSA algorithm
  - SSL transport, is the bane of safe existence on Internet these days. One of the most well-known algorithms in secure transport, is RSA, named by the first initials of its inventors. Implementing RSA is fun and instructive e.g. C code to implement RSA Algorithm(Encryption and Decryption)
- Safe Browsing (or similar) using Bloom filters
  - Bloom filters found very rare usage until the world got more online and we hit scale. But these days, we see new applications very frequently.Chrome browser uses Bloom filters to make preliminary decision on safe browsing. See some novel applications here.
- Implement an LALR parser
  - As a CS student, you may have already implemented it as part of your compiler’s class. But if not, then you should. LALR parsing makes syntactic sense of source code, whichever language you use. Many implementations of LALR exist. e.g. Where can I find a _simple_, easy to understand implementation of an LR(1) parser generator? Also, use YACC to understand LALR parsing better.
- Treemap using Red Black Trees!
  - RB Trees are not algorithms, but they are famed enough, that no discussion of tantalizing DS/Algorithms is complete without discussing them. The smoothest way to see/implement RB Trees, is to look at Treemap implementation in Java.
- Circle Drawing using Bresenham’s algorithm
Ever wondered, how circles are drawn on the screen, with minimal jaggedness (aliasing)? Bresenham’s elegant algorithm is at play here. See a version here: Circle Generation Algorithm . A refreshing use of a similar algorithm, is to make properly sized tabs in Chrome. Something we see almost every day. Such hidden gems!
- Implement PageRank
  - Can’t miss this. This transformed our lives in ways we never thought possible. Get started here: Pagerank Explained Correctly with Examples

## Contributing
1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D
