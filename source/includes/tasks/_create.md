## Create a Task

```
Definition
```

```http
POST /v3/apps/:guid/tasks HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/apps/[guid]/tasks"
  -X POST
  -H "Authorization: bearer [token]"
  -H "Host: [host.com]"
  -H "Content-Type: application/x-www-form-urlencoded"
  -H "Cookie: "
  -d '{
    "name": "my-task",
    "command": "echo 'hello world'",
  }'
```

```
Example Response
```

```http
HTTP/1.1 202 Accepted
Content-Type: application/json;charset=utf-8

{
   "guid": "029f82e8-9f16-4b7e-a1c3-1c80fb1174d3",
   "name": "my-task",
   "command": "echo 'hello world'",
   "state": "RUNNING",
   "result": {
      "message": null
   },
   "links": {
      "self": {
         "href": "/v3/tasks/029f82e8-9f16-4b7e-a1c3-1c80fb1174d3"
      },
      "app": {
         "href": "/v3/apps/ae32849e-6f2d-4db9-8771-ac1883a70b9b"
      },
      "droplet": {
         "href": "/v3/droplets/35deb1cc-8c5a-4791-8ef5-01b214030b48"
      }
   }
}

```

This endpoint creates a new task.

### Body Parameters

<ul class="method-list-group">
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      name

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">User-facing name of the task</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      command

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">Command that will be executed</p>
  </li>
</ul>
