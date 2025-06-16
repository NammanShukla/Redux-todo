# Redux-todo
## A Redux Based To-do Application

This is the 3rd Iteration of the To-do Application. Using Redux we make the app predictable, easily debuggable, scalable while maintaining clean code to share the logic.


After completing the logic side of the project; this is what i picture in my head

```
[Component] <=> dispatch(action) 
         |
      Redux
         |
[todoSlice.js: reducer does state update]
         |
[store.js: keeps everything in sync]
         |
[Component: useSelector() gets latest state]
```
