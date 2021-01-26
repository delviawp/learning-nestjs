# learning-nestjs

Task Management with NestJs

- Create Task
- Edit Task
- Fetch Tasks
- Fetch Task By Id
- Delete Tasks

### POST / tasks

_Request Header_

```
no need
```

_Request Body_

```
title: <test>
description: <nestjs>
```

_Response_

```
{
    "id": "b125b500-5fe5-11eb-b488-c13c7779410c",
    "title": "test",
    "description": "dulu",
    "status": "OPEN"
}
```

### PATCH / tasks /:id

_Request Header_

```
no need
```

_Request Body_

```
status: <IN_PROGRESS>
```

_Response_

```
{
    "id": "b125b500-5fe5-11eb-b488-c13c7779410c",
    "title": "test",
    "description": "dulu",
    "status": "IN_PROGRESS"
}
```

### GET / tasks

_Request Header_

```
no need
```

_Request Body_

```
no need
```

_Response_

```
[
    {
        "id": "b09d2410-5fe5-11eb-b488-c13c7779410c",
        "title": "test",
        "description": "dulu",
        "status": "OPEN"
    },
    {
        "id": "b125b500-5fe5-11eb-b488-c13c7779410c",
        "title": "test",
        "description": "dulu",
        "status": "OPEN"
    }
]
```

### GET / tasks /:id

_Request Header_

```
no need
```

_Request Body_

```
no need
```

_Response_

```
[
    {
        "id": "b09d2410-5fe5-11eb-b488-c13c7779410c",
        "title": "test",
        "description": "dulu",
        "status": "OPEN"
    }
]
```

### DELETE / tasks /:id

_Request Header_

```
no need
```

_Request Body_

```
no need
```

_Response_

```
[]
```
