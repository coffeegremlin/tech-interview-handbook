"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8655],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Summing Root To Leaf Numbers",slug:"summing-root-to-leaf-numbers",author:"Raivat Shah",author_title:"Student at NUS Computing",author_url:"https://github.com/raivatshah",author_image_url:"https://github.com/raivatshah.png",tags:["leetcode","trees","problem-solving"],hide_table_of_contents:!0},s=void 0,p={permalink:"/blog/summing-root-to-leaf-numbers",source:"@site/blog/2020-05-28-summing-root-to-leaf-numbers.md",title:"Summing Root To Leaf Numbers",description:"Sum Root to Leaf Numbers is an interesting problem from LeetCode. The problem is of medium difficulty and is about binary trees. This post is an explains the solution to the problem.",date:"2020-05-28T00:00:00.000Z",formattedDate:"May 28, 2020",tags:[{label:"leetcode",permalink:"/blog/tags/leetcode"},{label:"trees",permalink:"/blog/tags/trees"},{label:"problem-solving",permalink:"/blog/tags/problem-solving"}],readingTime:5.595,truncated:!0,authors:[{name:"Raivat Shah",title:"Student at NUS Computing",url:"https://github.com/raivatshah",imageURL:"https://github.com/raivatshah.png"}],prevItem:{title:"Importance of Communicating Effectively as Engineers",permalink:"/blog/importance-of-communicating-effectively-as-engineers"},nextItem:{title:"Are Front End Development Skills Enough for a Career?",permalink:"/blog/are-front-end-development-skills-enough-for-a-career"}},u={authorsImageUrls:[void 0]},m=[{value:"The Problem",id:"the-problem",children:[],level:2},{value:"The Observations and Insights",id:"the-observations-and-insights",children:[],level:2},{value:"The Solution",id:"the-solution",children:[],level:2},{value:"The Algorithmic Complexity",id:"the-algorithmic-complexity",children:[],level:2},{value:"The Conclusion",id:"the-conclusion",children:[],level:2},{value:"Acknowledgements",id:"acknowledgements",children:[],level:2}],h={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sum Root to Leaf Numbers is an ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sum-root-to-leaf-numbers/"},"interesting problem from LeetCode"),". The problem is of medium difficulty and is about binary trees. This post is an explains the solution to the problem."),(0,a.kt)("p",null,"I assume that you're familiar with Python and the concept of binary trees. If you're not, you can read ",(0,a.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/python_data_structure/python_binary_tree.htm"},"this article")," to get started."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29497717/82636662-b01b4b80-9c35-11ea-9ffa-e84b1e13c599.jpeg",alt:"leetcode1"})),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"Given a binary tree whose nodes contain values ",(0,a.kt)("inlineCode",{parentName:"p"},"0-9"),", we have to find the sum of all numbers formed by root-to-leaf paths. A leaf is a node that doesn't have any child nodes. ",(0,a.kt)("strong",{parentName:"p"},"In a binary tree, a root-to-leaf path is always unique"),". Here below is the expected behavior of the solution required:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29497717/82636816-0be5d480-9c36-11ea-8b2d-78bb36c865ee.jpeg",alt:"leetcode2"})),(0,a.kt)("p",null,"In the tree on the left, the output is ",(0,a.kt)("inlineCode",{parentName:"p"},"25"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"25")," is the sum of ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"13"),", which are the two numbers formed when starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," and visiting every leaf. In the tree on the right, the output is ",(0,a.kt)("inlineCode",{parentName:"p"},"1026")," as it is the sum of the three numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"495"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"491")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"40"),"."),(0,a.kt)("h2",{id:"the-observations-and-insights"},"The Observations and Insights"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To construct a number, we traverse the tree from the root to the leaf, appending digits where the most significant digit is at the root, and the least significant digit is at the leaf. We visit some leaves before other nodes that are closer to the root. This suggests that a depth-first search will be useful.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("em",{parentName:"p"},"construction")," of numbers is incremental and similar of sorts: the only difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"495")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"491")," (from the tree on the right) is the last digit. If we remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," and insert a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," in its place, we have the next required number. A number essentially comprises of the leaf's digit appended to all the digits in ancestor nodes. Thus, numbers within the same subtree have common digits.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, notice that this problem involves a tree, so a recursive solution is helpful."))),(0,a.kt)("h2",{id:"the-solution"},"The Solution"),(0,a.kt)("p",null,"We can do a ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-order")," traversal of the tree where we incrementally construct a number and exploit the fact that numbers formed by nodes in the same sub-tree have common digits. When we're done forming numbers in a sub-tree, we can backtrack and go to another sub-tree."),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Solution")," class to encompass our solution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n  def sum_numbers(self, root: TreeNode) -> int:\n")),(0,a.kt)("p",null,"The method signature given to us in the problem has one argument: root, which is of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeNode")," . A ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeNode")," class is as follows (from LeetCode):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class TreeNode:\n  def __init__(self, val=0, left=None, right=None):\n    self.val = val\n    self.left = left\n    self.right = right\n")),(0,a.kt)("p",null,"From observation #2, notice that appending a node's digit to its ancestors can be achieved by ",(0,a.kt)("em",{parentName:"p"},"moving")," all the digits of the number formed by ancestors to the right by 1 place and adding the current node's digit. The digits can be ",(0,a.kt)("em",{parentName:"p"},"moved")," by multiplying the number formed by ancestors by 10 (since we're in base-10). For example:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"495 = 49 x 10 + 5")),(0,a.kt)("p",null,"Thus, we can keep track of the ",(0,a.kt)("em",{parentName:"p"},"current")," digits in an integer. This is important because we won't incur extra storage space for higher input sizes. We can pass around this value in the function parameter itself. Since the method signature given can only have one parameter, let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method."),(0,a.kt)("p",null,"We can think of the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method recursively and process each node differently based on whether or not it is a leaf."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the node is a leaf, we want to add its digit to our current digits by moving all the other digits to the right. We also want to return this value (since we'll backtrack from here).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If it is not a leaf, we want to add the digit to our current digits by moving all the other digits to the right. We also want to continue constructing the number by traversing down this node's left and right subtrees."))),(0,a.kt)("p",null,"If the current node is a ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),", we can simply return 0 because it doesn't count."),(0,a.kt)("p",null,"Thus, our ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method will be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"def sum_root_to_leaf_helper(node, partial_sum=0):\n  if not node:\n    return 0\n  partial_sum = partial_sum * 10 + node.val\n  # Leaf\n  if not node.left and not node.right:\n    return partial_sum\n  # Non Leaf\n  return (sum_root_to_leaf_helper(node.left, partial_sum) + \\\n    sum_root_to_leaf_helper(node.right, partial_sum))\n")),(0,a.kt)("p",null,"We use a default value for the partial sum to be 0."),(0,a.kt)("p",null,"In our main method, we want to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," method as a nested method and simply pass on the node parameter. Finally, this is how our solution looks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n  def sumNumbers(self, root: TreeNode) -> int:\n    def sum_root_to_leaf_helper(node, partial_sum=0):\n      if not node:\n        return 0\n      partial_sum = partial_sum * 10 + node.val\n      # Leaf\n      if not node.left and not node.right:\n        return partial_sum\n      # Non Leaf\n      return (sum_root_to_leaf_helper(node.left, partial_sum) + \\\n        sum_root_to_leaf_helper(node.right, partial_sum))\n\n    return sum_root_to_leaf_helper(root)\n")),(0,a.kt)("h2",{id:"the-algorithmic-complexity"},"The Algorithmic Complexity"),(0,a.kt)("p",null,"When we come up with a solution, it is important to analyze its algorithmic complexity not only to estimate its performance but also to identify areas for improvement and reflect on our problem-solving skills. We should always ask the question: ",(0,a.kt)("em",{parentName:"p"},"can we do better than X?")," Where X is the current complexity of our solution."),(0,a.kt)("p",null,"Time:"),(0,a.kt)("p",null,"Our solution is a modification of the depth-first-search pre-order traversal where we visit all nodes exactly once and perform a trivial computation (moving digits by integer multiplication). Thus, our runtime is simply ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," represents the number of nodes in the given tree. A solution better than ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)")," doesn't seem possible because to construct a number from digits, we need to know all the digits (and thus visit all nodes)."),(0,a.kt)("p",null,"Space:"),(0,a.kt)("p",null,"In terms of storage, we incur a high cost in the recursion call stack that builds up as our ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_root_to_leaf_helper")," calls itself. These calls ",(0,a.kt)("em",{parentName:"p"},"build-up")," as one waits for another to finish."),(0,a.kt)("p",null,"The maximum call stack is dependent upon the height of the binary tree (since we start backtracking after we visit a leaf), giving a complexity of ",(0,a.kt)("inlineCode",{parentName:"p"},"O(H)")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," is the height of the binary tree. In the worst case, the binary tree is skewed in either direction and thus ",(0,a.kt)("inlineCode",{parentName:"p"},"H = N"),". Therefore, the worst-case space complexity is ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)"),"."),(0,a.kt)("p",null,"You can read ",(0,a.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/"},"this article")," to know more about recursion call stacks."),(0,a.kt)("p",null,"It is possible to do better than ",(0,a.kt)("inlineCode",{parentName:"p"},"O(N)")," by using a Morris Preorder Traversal. The basic idea is to link a node and its predecessor temporarily. You can read more about it ",(0,a.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/abs/pii/0020019079900681"},"here"),"."),(0,a.kt)("h2",{id:"the-conclusion"},"The Conclusion"),(0,a.kt)("p",null,"I hope this post helped! Please do let me know if you have any feedback, comments or suggestions by responding to this post."),(0,a.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,a.kt)("p",null,"Advay, Kevin, Louie for reviewing this post and Yangshun for the idea of adding it as a blog post."))}c.isMDXComponent=!0}}]);