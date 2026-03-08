---
author: Jamie
date: 9 March 2026
paging: Page %d of %d
---

```
    __  ___      __        __  _           
   /  |/  /_  __/ /_____ _/ /_(_)___  ____ 
  / /|_/ / / / / __/ __ `/ __/ / __ \/ __ \
 / /  / / /_/ / /_/ /_/ / /_/ / /_/ / / / /
/_/  /_/\__,_/\__/\__,_/\__/_/\____/_/ /_/ 
  ______          __  _            
 /_  __/__  _____/ /_(_)___  ____ _
  / / / _ \/ ___/ __/ / __ \/ __ `/
 / / /  __(__  ) /_/ / / / / /_/ / 
/_/  \___/____/\__/_/_/ /_/\__, /  
                          /____/   
```

>"Quis custodiet ipsos custodes?"

— Decimus Junius Juvenalis

---

# The Problem

Traditional code coverage metrics (line, branch, statement coverage etc) tell you which lines of code your tests exercise, but they say nothing about whether the tests actually verify correct behaviour.

# How it Works

Mutation testing works via modifying parts of the AST of your code, then running your tests against the "mutated" code.

The idea is that if the existing tests are written comprehensively, then the tests *should* fail as the application code has been changed!

---

# Illustrated Example

```javascript
function lerp(from, to, percentage) {
	return from + (to - from) * percentage
}
```

```
     +                               +            
    / \                             / \           
from   *                        from   *          
      / \           transform         / \         
     -  percentage  =========>      [+] percentage
    / \                             / \           
   to from                         to from        
```

Then the tests are run on the modified AST. If our tests are comprehensive, then they should detect this change 🔎

---

# Naïve Test Coverage Pitfalls

```javascript
const getMax = (a, b) => a > b ? a : b
```

There are only two branches in this function:

```
FunctionDeclaration: getMax
├── Parameter: a
├── Parameter: b
└── ReturnStatement
    └── ConditionalExpression
        ├── condition: a > b
        ├── whenTrue: a
        └── whenFalse: b
```

---

# Naïve Test Coverage Pitfalls

```javascript
expect(getMax(5, 3)).to.equal(5)
expect(getMax(2, 7)).to.equal(7)
```

We can see that there are only two branches, and the tests cover both. Test coverage reports 100% coverage 🔬

We are done! 🎉

...But mutation testing reveals we are missing (_at least_):

```javascript
expect(getMax(5, 5)).to.equal(5)
```

---

# Demo Time

```
               (( _______
     _______     /\O    O\
    /O     /\   /  \      \
   /   O  /O \ / O  \O____O\ ))
((/_____O/    \\    /O     /
  \O    O\    / \  /   O  /
   \O    O\ O/   \/_____O/
    \O____O\/ ))          ))
  ((
```
