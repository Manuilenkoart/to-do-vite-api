# Demo
- [Api](https://to-do-vite-api.vercel.app/)
- [App](https://github.com/Manuilenkoart/to-do-vite)

---

# Router

### Health
| Method | Path    | Description         |
| ------ | ------- | ------------------- |
| get    | /health | check the app is ok |

### Todo
| Method  | Path          | Description    |
| ------- | ------------- | -------------- |
| get     | /api/todo/:id | get todo by id |
| get     | /api/todo     | get all todos  |
| post    | /api/todo     | create todo    |
| put     | /api/todo     | update todo    |
| delete  | /api/todo/:id | delete todo    |

---

# Types

```
type Todo = {
id: string;
title: string;
text: string;
}
```