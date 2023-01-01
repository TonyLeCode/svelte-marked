---
title: Video 112. Building a Responsive Nav
---
You might have an issue where the unordered list is not spacing evenly.

Colt does indeed make a mistake here, we suggest you look at the code and try to fix it yourself before looking at the answer.


___

The issue has to do with the `cascade`. 

```css
ul { 
	border: 1px solid black;
	flex: 1;
	max-width: 50%;
	display: flex;
	justify-content: space-evenly;
} 

ul, li { 
	display: inline;
	margin: 0; 
	padding: 0; 
}
```
Since `display: inline` is placed after `display: flex`, inline wins because of the cascade. Since the unordered list is inline instead of flex, `justify-content` will not take effect. To fix this, you simply have to move the rules up.
```css
ul, li { 
	display: inline;
	margin: 0; 
	padding: 0; 
}

ul { 
	border: 1px solid black; 
	flex: 1; max-width: 50%; 
	display: flex; 
	justify-content: space-evenly; 
} 
```